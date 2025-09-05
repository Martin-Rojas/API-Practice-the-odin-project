// kNGRrtwl8BL1ekkGbhTRnDXkBP3y48M0

const img = document.querySelector("img");
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=kNGRrtwl8BL1ekkGbhTRnDXkBP3y48M0&s=realmadrid"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });