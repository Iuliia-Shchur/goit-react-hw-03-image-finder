import { ImSpinner } from "react-icons/im";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const styles = {
  spinner: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
    fontSize: 24,
  },
};

function Loader({ query }) {
  // const data = {
  //     data: query,
  //     data:{
  //         hits: {

  //           },

  //         },
  //   images: [],
  //     };

  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        Загружаем...
      </div>
      {/* <ImageGallery data={data} /> */}
      <ImageGalleryItem />
    </div>
  );
}

export default Loader;
