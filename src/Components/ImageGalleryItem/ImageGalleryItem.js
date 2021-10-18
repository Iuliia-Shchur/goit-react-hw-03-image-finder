import s from "./ImageGalleryItem.module.css";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

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

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  previewImg: PropTypes.string,
  tags: PropTypes.string,
  onToggleModal: PropTypes.func,
  showModal: PropTypes.bool,
  modalImg: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
