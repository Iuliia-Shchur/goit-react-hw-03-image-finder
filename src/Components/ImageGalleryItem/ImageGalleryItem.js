import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ images }) {
  return (
    <>
      {images.map((image) => (
        <li className={s.ImageGalleryItem} key={image.id}>
          <img
            src={image.webformatURL}
            alt={image.id}
            className={s.ImageGalleryItemImage}
          />
        </li>
      ))}
    </>
  );
}

export default ImageGalleryItem;
