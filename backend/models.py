from sqlalchemy import Column, Integer, String
from database import Base

class TradeSetup(Base):
    __tablename__ = "trades"

    id = Column(Integer, primary_key=True, index=True)
    score = Column(Integer, nullable=False)
    pair = Column(String, nullable=False)
    direction = Column(Integer, nullable=False)
    image_before_id = Column(Integer)
    image_after_id = Column(Integer)