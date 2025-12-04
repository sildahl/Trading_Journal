import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { API_URL } from '../config'

function DeleteTradeModal({trade, show, setShow}) {

    const handleClose = () => {setShow(false)}

    const handleDelete = async () => {
        const response = await fetch(API_URL + '/api/trades/'+trade.id, {
        method: "DELETE"
        });

        if (!response.ok) {
        throw new Error("Fejl ved sletning");
        }
        setShow(false)  
        return response.json();
    }

  return (
    <>
      <Modal show={show} onHide={handleClose} centered dialogClassName='main-modal'>
        <Modal.Header closeButton>
          <Modal.Title>{"Delete " + trade.pair}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteTradeModal
