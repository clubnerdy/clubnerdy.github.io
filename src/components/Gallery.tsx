import React, { useState } from "react";
import "../styles/gallery.css";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/src/assets/img/gallery-1.jpg",
      alt: "웨딩 커플 쇼파 사진",
    },
    {
      id: 2,
      src: "/src/assets/img/gallery-2.jpg",
      alt: "웨딩 커플 마스크 사진",
    },
    {
      id: 3,
      src: "/src/assets/img/gallery-3.jpg",
      alt: "웨딩 커플 화이트 쇼파 사진",
    },
    {
      id: 4,
      src: "/src/assets/img/gallery-4.jpg",
      alt: "웨딩 커플 창가 사진",
    },
    {
      id: 5,
      src: "/src/assets/img/gallery-5.jpg",
      alt: "웨딩 커플 미니멀 룸 사진",
    },
    {
      id: 6,
      src: "/src/assets/img/gallery-6.jpg",
      alt: "웨딩 커플 창가 홀딩 사진",
    },
    {
      id: 7,
      src: "/src/assets/img/gallery-7.jpg",
      alt: "웨딩 커플 추가 사진",
    },
  ];

  const openGallery = (index: number) => {
    setSelectedImage(index);
  };

  const closeGallery = () => {
    setSelectedImage(null);
  };

  return (
    <div className="main-frame">
      <div className="gallery-container">
        <div className="heading">
          <p className="heading-description">Gallery</p>
          <h1 className="heading-title">웨딩 갤러리</h1>
        </div>

        <div className="gallery-content">
          {/* 첫 번째 이미지 - 1열에 꽉 차게 */}
          <div className="main-image-container">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              onClick={() => openGallery(0)}
              className="main-image"
            />
          </div>

          {/* 썸네일 그리드 - 2열과 3열에 각각 3장씩 */}
          <div className="thumbnail-grid">
            {galleryImages.slice(1, 4).map((image, index) => (
              <div key={image.id} className="thumbnail-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openGallery(index + 1)}
                  className="thumbnail-image"
                />
              </div>
            ))}
          </div>

          <div className="thumbnail-grid">
            {galleryImages.slice(4, 7).map((image, index) => (
              <div key={image.id} className="thumbnail-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openGallery(index + 4)}
                  className="thumbnail-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 갤러리 모달 */}
      {selectedImage !== null && (
        <div className="gallery-modal" onClick={closeGallery}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-container">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="modal-image"
                onClick={closeGallery}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
