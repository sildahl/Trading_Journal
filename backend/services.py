import os
from fastapi import FastAPI, Depends, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
import models
import datetime
import json

UPLOAD_FOLDER = "uploads"

async def upload_image(image: UploadFile, pair: str, note: str, score: int, bullish: bool, flags: str, db: Session):
    dateStr = datetime.datetime.strftime(datetime.datetime.now(), "_%Y_%m_%dT%H_%M_%S.png")
    filename = pair.replace("/","") + dateStr
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    flags = json.loads(flags)
    
    with open(file_path, "wb") as f:
        f.write(await image.read())

    new_trade = models.TradeSetup(score = score, pair = pair, note = note, status = 0, bullish = bullish, image_before = filename, 
                                  weeklyFlag = flags["weekly"],
                                  dailyFlag = flags["daily"],
                                  fourHourFlag = flags["fourHour"],
                                  minorFlag = flags["minor"],
                                  entryFlag = flags["entry"])
    db.add(new_trade)
    db.commit()
    return {"message": "Trade uploaded"}

async def get_trades(db: Session):
    active_trades = db.query(models.TradeSetup).filter(models.TradeSetup.status == 0).all()
    latest_trades = db.query(models.TradeSetup).filter(models.TradeSetup.status != 0).limit(20).all()
    return {"active_trades": active_trades, "latest_trades": latest_trades}


async def delete_trade(trade_id: int, db: Session):
    trade = db.query(models.TradeSetup).filter(models.TradeSetup.id == trade_id).first()
    
    if not trade:
        raise HTTPException(status_code=404, detail="Trade ikke fundet")
    
    imagepath = UPLOAD_FOLDER + "/" + trade.image_before
    if os.path.exists(imagepath):
        os.remove(imagepath)

    db.delete(trade)
    db.commit()
    
    return {"message": "Trade slettet"}