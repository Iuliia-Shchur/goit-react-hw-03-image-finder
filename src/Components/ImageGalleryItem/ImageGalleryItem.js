import s from "./ImageGalleryItem.module.css";
import Modal from "../Modal/Modal";

function ImageGalleryItem({
  id,
  previewImg,
  tags,
  onToggleModal,
  showModal,
  modalImg,
  onClick,
}) {
  return (
    <>
      <li className={s.ImageGalleryItem} key={id}>
        <img
          src={previewImg}
          alt={tags}
          className={s.ImageGalleryItemImage}
          onClick={onClick}
        />
      </li>

      {showModal && (
        <Modal modalImg={modalImg} onToggleModal={onToggleModal} tags={tags} />
      )}
    </>
  );
}

export default ImageGalleryItem;
