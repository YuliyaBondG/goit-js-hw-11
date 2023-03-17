import axios from 'axios';


export const fetchImages = async (inputValue, pageNr) => {
  return fetch(
    `https://pixabay.com/api/?key=34474305-59cca09f4f729e737f986d19f&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
  )
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
};