function fetchImages(query, page) {
  const key = "23195406-da0192683225ba1cc94043cce";
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`There is no ${query} images`));
  });
}

const api = {
  fetchImages,
};

export default api;
