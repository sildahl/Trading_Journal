import React, { useState } from "react";
import './ImageDropzone.css'

function ImageDropzone({ onFileSelect }) {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
      onFileSelect(file);
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
      onFileSelect(file);
    }
  };

  return (
    <div>
      <label
        className={`dropzone ${dragActive ? "active" : ""}`}
        onDragEnter={handleDrag}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="file-input"
        />

        {preview ? (
          <img src={preview} alt="Preview" className="preview" />
        ) : (
          <p>Drag & drop image here or click to upload</p>
        )}
      </label>

      {dragActive && (
        <div
          className="drag-overlay"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </div>
  );
}

export default ImageDropzone;
