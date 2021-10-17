import { Component } from "react";
import imagesAPI from "../Api/images-api";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";

class ImageGallery extends Component {
  state = {
    showModal: false,
    currentImg: "",
    modalImg: {},
  };
  // state = {
  //   data: null,
  //   error:null,
  //   page: 1,
  //   status: "idle",
  // };

  // componentDidUpdate(prevProps, PrevState) {
  //     const prevName = prevProps.query;
  //     const nextName = this.props.query;

  //     if (prevName !== nextName) {
  //       this.setState({ status: "pending" });
  //         imagesAPI
  //         .fetchImages(nextName)
  //         .then((data) => this.setState({ data, status: "resolved" }))
  //         .catch((error) => this.setState({ error, status: "rejected" }));

  //     }

  //   }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onImgClick = (modalImg) => {
    this.setState({ modalImg });
    this.toggleModal();
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <ul className={s.ImageGallery}>
          {images.map((img) => (
            <ImageGalleryItem
              key={img.id}
              previewImg={img.webformatURL}
              tags={img.tags}
              modalImg={img.largeImageURL}
              onToggleModal={() => this.toggleModal()}
              showModal={this.state.showModal}
              onImgClick={this.onImgClick}
            />
          ))}
        </ul>
      );
    } else {
      imageListContent = null;
    }

    return <div>{imageListContent}</div>;

    //     const { data, error, status } = this.state;
    // const { query } = this.props;

    // if (status === "idle") {
    //   return (<div>Type your query</div>);
    // }

    // if (status === "pending") {
    //   return (
    //     <Loader/>
    //   );
    // }

    // // if (status === "rejected") {
    // //   return <PokemonErrorView message={error.message} />;
    // // }
    // if (status === "resolved") {
    //   return (<ul className={s.ImageGallery}>
    //         <ImageGalleryItem data={data}/>
    //       </ul>)

    //     }
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
