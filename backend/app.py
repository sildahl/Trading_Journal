import os
from fastapi import FastAPI, Depends, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from database import Base, engine, SessionLocal
import services

# ==== Setup ====
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # evt. Netlify URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

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

@app.post("/api/uploadTrade")
async def upload_image(image: UploadFile = File(...), pair: str = Form(...), note: str = Form(...), score: int = Form(...), bullish: bool = Form(...), flags: str = Form(...), db: Session = Depends(get_db)):
    return await services.upload_image(image, pair, note, score, bullish, flags, db)

@app.get("/api/getTrades")
async def get_trades(db: Session = Depends(get_db)):
    return await services.get_trades(db)

@app.delete("/api/trades/{trade_id}")
async def delete_trade(trade_id: int, db: Session = Depends(get_db)):
    return await services.delete_trade(trade_id, db)