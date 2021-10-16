import { Component } from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    console.log("Component did mount");
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onToggleModal();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onToggleModal();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          {/* {this.props.children}  */}
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
