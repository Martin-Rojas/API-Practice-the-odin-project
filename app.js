const img = document.querySelector("img");
const btnNewImage = document.getElementById(`change-img`);
const searchBoxValue = document.getElementById(`search-image`);
const formEl = document.getElementById(`form`);

function getImage(searchTerm = `cats`) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=kNGRrtwl8BL1ekkGbhTRnDXkBP3y48M0&s=${searchTerm}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Check if data is coming through
      if (
        data.data &&
        data.data.images &&
        data.data.images.original &&
        data.data.images.original.url
      ) {
        img.src = data.data.images.original.url;
      } else {
        img.src = `errorImg.avif`;
      }
    })
    .catch((error) => {
      console.error("Error fetching GIF:", error.message);
    });
}

// Initial image
getImage();

// Btn to get new image
btnNewImage.addEventListener(`click`, getImage);

// Get a term and get an image
formEl.addEventListener(`submit`, (event) => {
  event.preventDefault();
  getImage(searchBoxValue.value);
});
