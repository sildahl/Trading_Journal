from sqlalchemy import Column, Integer, String
from database import Base

class TradeSetup(Base):
    __tablename__ = "trades"

    id = Column(Integer, primary_key=True, index=True)
    score = Column(Integer, nullable=False)
    pair = Column(String, nullable=False)
    note = Column(String)
    status = Column(Integer)
    image_before = Column(String)
    image_after = Column(String)