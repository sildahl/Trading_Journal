import os
from fastapi import FastAPI, Depends, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from database import Base, engine, SessionLocal
from models import TradeSetup

# ==== Setup ====
app = FastAPI()

# CORS til frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # evt. din Netlify URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Opret database tabeller
Base.metadata.create_all(bind=engine)

# Sørg for uploads-folder findes
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Gør folderen tilgængelig som statiske filer
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Dependency for database-session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ==== ENDPOINTS ====

@app.get("/")
def root():
    return {"message": "Backend med SQLite + File upload kører!"}


# ---- Upload billede + data ----
@app.post("/api/upload")
async def upload_image(
    file: UploadFile = File(...),
):
    # Gem billede
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    with open(file_path, "wb") as f:
        f.write(await file.read())


    return {
        "message": "Billede uploadet",
    }


# ---- Hent alle billeder ----
@app.get("/api/images")
def get_images(db: Session = Depends(get_db)):
    items = db.query(TradeSetup).all()
    response = []
    for item in items:
        response.append({
            "id": item.id,
            "pair": item.pair,
            "score": item.score,
        })
    return response
