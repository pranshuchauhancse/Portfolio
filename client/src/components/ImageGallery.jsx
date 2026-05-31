import React from "react";

function ImageGallery({ images }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="image-gallery" aria-label="Project screenshots and highlights">
      {images.map((image, index) => (
        <div key={`${image.title}-${index}`} className="gallery-item">
          <div className="gallery-image-placeholder" aria-hidden="true">
            <span>{image.title}</span>
          </div>
          <div className="gallery-item-copy">
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ImageGallery;
