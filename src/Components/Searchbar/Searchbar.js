import { Component } from "react";
import s from "./Searchbar.module.css";
import axios from "axios";
import ImageGallery from "../ImageGallery/ImageGallery";

class Searchbar extends Component {
  state = {
    query: "",
    page: 1,
    apiUrl: "https://pixabay.com/api",
    apiKey: "23195406-da0192683225ba1cc94043cce",
    images: [],
    // /?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12'
  };

  handleQueryChange = (e) => {
    // this.setState({query: event.currentTarget.value.toLowerCase()});
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get(
          `${this.state.apiUrl}/?q=${this.state.query}&page=${this.state.page}&key=${this.state.apiKey}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then((res) => this.setState({ images: res.data.hits }))
        .catch((err) => console.log(err));
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.query.trim() === "") {
      return;
    }
    this.props.onSubmit(this.state.query);

    this.setState({ query: "" });
  };

  render() {
    console.log(this.state.images);

    return (
      <div>
        <header className={s.Searchbar}>
          <form className={s.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={s.SearchFormButton}>
              <span className={s.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              name="query"
              value={this.state.query}
              onChange={this.handleQueryChange}
              className={s.SearchFormInput}
              type="text"
              // autocomplete="off"
              // autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>

        {this.state.images.length > 0 ? (
          <ImageGallery images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Searchbar;
