import { Component } from "react";
import s from "./Searchbar.module.css";
import axios from "axios";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";

class Searchbar extends Component {
  state = {
    query: "",
    page: 1,
    apiUrl: "https://pixabay.com/api",
    apiKey: "23195406-da0192683225ba1cc94043cce",
    images: [],
    // /?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12'
  };

  //   componentDidUpdate(prevProps, prevState) {
  //     const { query } = this.state;
  //         if (query !== prevState.searchQuery) {
  //             this.loadMore()
  //                 .catch(error => console.log(error))
  //                 // .finally(() => this.setState({ loadingSpinner: false }));
  //         }
  //     }

  //   loadMore = () => {
  //     const { query, page } = this.state;
  //     // this.setState({ loadingSpinner: true });
  //     return (
  //       .then(images => {
  //         this.setState(prevState => ({
  //             images: [...prevState.images, ...images],
  //             page: prevState.page + 1,
  //         }));
  //     });)
  // };

  handleQueryChange = (e) => {
    // this.setState({query: event.currentTarget.value.toLowerCase()});
    const inputValue = e.target.value;

    return this.setState({ [e.target.name]: inputValue }, () => {
      if (inputValue === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?q=${this.state.query}&page=${this.state.page}&key=${this.state.apiKey}&image_type=photo&orientation=horizontal&per_page=12`
          )
          .then((res) => this.setState({ images: res.data.hits }))
          .catch((err) => console.log(err));
      }
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
          <ImageGallery
            images={this.state.images}
            query={this.state.query}
            apiUrl={this.state.apiUrl}
            apiKey={this.state.apiKey}
            page={this.state.page}
          />
        ) : null}
        <Button onLoadMore={this.loadMore} />
      </div>
    );
  }
}

export default Searchbar;
