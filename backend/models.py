from sqlalchemy import Column, Integer, String, Boolean
from database import Base

class TradeSetup(Base):
    __tablename__ = "trades"

    id = Column(Integer, primary_key=True, index=True)
    score = Column(Integer, nullable=False)
    weeklyFlag = Column(Integer)
    dailyFlag = Column(Integer)
    fourHourFlag = Column(Integer)
    minorFlag = Column(Integer)
    entryFlag = Column(Integer)
    pair = Column(String, nullable=False)
    note = Column(String)
    bullish = Column(Boolean)
    status = Column(Integer)
    image_before = Column(String)
    image_after = Column(String)