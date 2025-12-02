import os
from fastapi import FastAPI, Depends, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from database import Base, engine, SessionLocal
import models
import datetime

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
@app.post("/api/uploadTrade")
async def upload_image(
        image: UploadFile = File(...),
        pair: str = Form(...),
        note: str = Form(...),
        score: int = Form(...),
        db: Session = Depends(get_db)
    ):

    dateStr = datetime.datetime.strftime(datetime.datetime.now(), "_%Y_%m_%dT%H_%M_%S.png")
    filename = pair.replace("/","") + dateStr
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    with open(file_path, "wb") as f:
        f.write(await image.read())

    new_trade = models.TradeSetup(score = score, pair = pair, note = note, status = 0, image_before = filename)
    db.add(new_trade)
    db.commit()
    return {"message": "Trade uploaded"}

@app.get("/api/getTrades")
async def get_trades(db: Session = Depends(get_db)):
    active_trades = db.query(models.TradeSetup).filter(models.TradeSetup.status == 0).all()
    latest_trades = db.query(models.TradeSetup).filter(models.TradeSetup.status != 0).limit(20).all()
    return {"active_trades": active_trades, "latest_trades": latest_trades}