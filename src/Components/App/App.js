import { Component } from "react";
import s from "./App.module.css";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

class App extends Component {
  state = {
    query: "",
    showModal: false,
    // page: 1,
    // results: [],
    // loading: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    const { showModal } = this.state;
    const { toggleModal, handleFormSubmit } = this;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={handleFormSubmit} />
        <Button />
        {/* <ImageGallery query={this.state.query} onToggleModal={toggleModal} images={this.props.images}/> */}
        {/* <Button onClick={toggleModal} />
        {showModal && <Modal onToggleModal={toggleModal} />} */}
      </div>
    );
  }
}

export default App;
