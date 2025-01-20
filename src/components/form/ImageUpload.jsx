import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, X } from 'lucide-react';

const ImageUploader = ({
  title,
  onChange,
  value, 
  acceptedTypes = "image/*",
  maxSize = 2 * 1024 * 1024,
  previewHeight = "h-48",
  containerClassName = "mb-8",
  disabled = false
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (value) {
      if (typeof value === 'string') {
        setImagePreview(value);
        setSelectedFile(null);
      } 
      // If value is a File object, create preview URL
      else if (value instanceof File) {
        const previewUrl = URL.createObjectURL(value);
        setImagePreview(previewUrl);
        setSelectedFile(value);
      }
    } else {
      setImagePreview(null);
      setSelectedFile(null);
    }
  }, [value]);

  const handleImageChange = (file) => {
    if (file) {
      if (file.size > maxSize) {
        alert(`File size exceeds ${maxSize/1024/1024}MB`);
        return;
      }

      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setSelectedFile(file);

      if (onChange) {
        onChange(file);
      }
    }
  };

  const handleImageRemove = () => {
    if (imagePreview && imagePreview.startsWith('blob:')) {
      URL.revokeObjectURL(imagePreview);
    }
    setImagePreview(null);
    setSelectedFile(null);
    
    if (onChange) {
      onChange(null);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
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
    if (disabled) return;
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleImageChange(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageChange(file);
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith('blob:')) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <div className={containerClassName}>
      {title && (
        <div className="flex items-center gap-4 text-lg font-semibold text-gray-900 mb-2">
          <ImageIcon className="h-4 w-4 text-indigo-500" />
          <h3>{title}</h3>
        </div>
      )}
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 transition-all
          ${dragActive ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-400"}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {imagePreview ? (
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className={`w-full ${previewHeight} object-cover rounded-lg`}
            />
            {!disabled && (
              <button
                type="button"
                onClick={handleImageRemove}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
        ) : (
          <div className="text-center">
            <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
            <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
              <label className={`relative ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500`}>
                <span>Upload image</span>
                <input
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                  accept={acceptedTypes}
                  disabled={disabled}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF up to {maxSize/1024/1024}MB
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;