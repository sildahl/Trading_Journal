import React, { useEffect, useState } from 'react'
import './SaveTradeModal.css'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import PairDropdown from '../components/PairDropdown'
import ImageDropzone from '../components/ImageDropzone'
import { API_URL } from '../config'


function SaveTradeModal({show, setShow, score, timeframe_scores}) {
  const [selectedPair, setSelectedPair] = useState("EURUSD")
  const [entryNote, setEntryNote] = useState("")
  const [image, setImage] = useState("")
  const [bullish, setBullish] = useState(false)

  useEffect(() => {setEntryNote(" ")},[])

  const handleClose = () => setShow(false);

  const handleSaveTrade = () => {
    const formData = new FormData();

    formData.append("image", image);
    formData.append("pair", selectedPair);
    formData.append("note", entryNote);
    formData.append("score", score);
    formData.append("bullish", bullish)
    formData.append("flags", JSON.stringify(timeframe_scores));

    fetch(API_URL + "/api/uploadTrade", {
      method: "POST",
      body: formData
    })
    .then((res) => res.json())
    .then((data) => {
      handleClose();
    })
    .catch((err) => {
      console.error("Upload error:", err);
    });
  }

  

  return (
     <>
      <Modal show={show} onHide={handleClose} backdrop="static" centered dialogClassName='main-modal' size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Save trade idea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='item-line'>
            <span className='span-line' style={{"justifyContent":"left"}}>
                <h5>
                    Pair: 
                </h5>
                <PairDropdown selected={selectedPair} setSelected={setSelectedPair} variant={"outline-light"}/>
                <span style={{"position": "absolute", "right": "20px"}}>
                  <h4 style={ score < 60 ? {"color": "salmon"} : score < 85 ? {"color": "yellow"} : {"color" : "green"}}>
                    Confident Score: {score}% test
                  </h4>
                </span>
            </span>

            <span style={{"justifyContent":"left"}}>
                <h5>
                    Direction: 
                </h5>
                <div style={{"position":"relative", "marginBottom": "20px", "marginTop": "10px"}}>
                  <Button variant={bullish ? 'success' : 'secondary'} onClick={() => setBullish(true)} style={{"borderRadius":"0.2em 0 0 0.2em"}}>Long</Button>
                  <Button variant={!bullish ? 'danger' : 'secondary'} onClick={() => setBullish(false)} style={{"borderRadius":"0 0.2em 0.2em 0"}}>Short</Button>
                </div>
            </span>

            <span style={{"justifyContent":"left"}}>
                <h5>
                    Entry notes: 
                </h5>
                <textarea onChange={(e) => setEntryNote(e.target.value)} rows={5} style={{"width": "100%", "marginTop": "10px", "marginBottom": "20px"}}/>
            </span>

            <span style={{"justifyContent":"left"}}>
                <h5>
                    Image: 
                </h5>
                <ImageDropzone onFileSelect={(file) => setImage(file)} />
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveTrade}>
            Save Trade
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SaveTradeModal
