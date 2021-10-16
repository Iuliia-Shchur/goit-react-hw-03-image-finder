import { Component } from "react";
import imagesAPI from "../Api/images-api";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";
import Loader from "../Loader/Loader";

class ImageGallery extends Component {
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

  render() {
    return <div></div>;

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

export default ImageGallery;
