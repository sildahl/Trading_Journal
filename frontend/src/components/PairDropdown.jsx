import React from 'react'
import { useState, useRef, useEffect } from "react";
import { Button, FormControl } from "react-bootstrap";

function PairDropdown({selected, setSelected, variant}) {
  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    "EUR/USD","USD/JPY","GBP/USD","USD/CHF","AUD/USD","USD/CAD","NZD/USD",
    "EUR/GBP","EUR/JPY","EUR/CHF","EUR/AUD","EUR/CAD","EUR/NZD",
    "GBP/JPY","GBP/CHF","GBP/AUD","GBP/CAD","GBP/NZD",
    "AUD/JPY","AUD/NZD","AUD/CHF","AUD/CAD",
    "CAD/JPY","CAD/CHF","NZD/JPY","NZD/CHF",
    "USD/SGD","USD/HKD","USD/TRY","USD/ZAR","USD/SEK","USD/NOK","USD/DKK",
    "EUR/TRY","EUR/SGD","EUR/ZAR","EUR/HKD",
    "GBP/SGD","GBP/TRY","GBP/ZAR",
    "AUD/SGD","AUD/TRY","AUD/ZAR",
    "NZD/SGD","NZD/TRY","NZD/ZAR",
    "CHF/SGD","CHF/TRY","CHF/ZAR",
    "CAD/SGD","CAD/TRY","CAD/ZAR",
    "XAU/USD","XAG/USD","XPD/USD","XPT/USD",
    "EUR/PLN","EUR/HUF","EUR/CZK","EUR/RUB",
    "GBP/PLN","GBP/HUF","GBP/CZK","GBP/RUB",
    "AUD/PLN","AUD/HUF","AUD/CZK","AUD/RUB",
    "NZD/PLN","NZD/HUF","NZD/CZK","NZD/RUB",
    "USD/PLN","USD/HUF","USD/CZK","USD/RUB",
    "TRY/JPY","ZAR/JPY","SGD/JPY","HKD/JPY",
    "TRY/CHF","ZAR/CHF","SGD/CHF","HKD/CHF"
  ];

  const filteredOptions = options.filter((opt) => {
    const normalizedOpt = opt.replace("/", "").toLowerCase();
    const normalizedFilter = filter.replace("/", "").toLowerCase();
    return normalizedOpt.includes(normalizedFilter);
  });

  // Luk dropdown hvis klik udenfor
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: "relative", width: "220px" }}>
      <Button
        variant={variant}
        onClick={() => setShow(!show)}
        style={{ width: "100%" }}
      >
        {selected}
      </Button>

      {show && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            maxHeight: "250px",
            overflowY: "auto",
            border: "1px solid #ccc",
            backgroundColor: "white",
            zIndex: 1000,
            padding: "5px"
          }}
        >
          <FormControl
            autoFocus
            placeholder="Søg..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ marginBottom: "5px" }}
          />
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelected(opt);
                  setFilter("");
                  setShow(false);
                }}
                style={{
                  padding: "5px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                  color: "#000" // <-- tvinger sort tekst
                }}
              >
                {opt}
              </div>
            ))
          ) : (
            <div style={{ padding: "5px", color: "#888" }}>Ingen resultater</div>
          )}
        </div>
      )}
    </div>
  );
}

export default PairDropdown
