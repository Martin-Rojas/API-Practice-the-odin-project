const img = document.querySelector("img");
const btnNewImage = document.getElementById(`change-img`);
const searchBoxValue = document.getElementById(`search-image`);
const formEl = document.getElementById(`form`);

function getImage(searchTerm = `cats`) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=kNGRrtwl8BL1ekkGbhTRnDXkBP3y48M0&s=${searchTerm}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
}

// Initial image
getImage();

btnNewImage.addEventListener(`click`, getImage);

formEl.addEventListener(`submit`, (event) => {
  event.preventDefault();
  getImage(searchBoxValue.value);
});
