const memeBtn = document.querySelector("#generate-meme");
const memeTitle = document.querySelector(".meme-title");
const memeImage = document.querySelector(".meme-image");
const authorOutput = document.querySelector(".author span");

function getMeme() {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      const { author, title, url } = data;

      authorOutput.innerText = `Meme By: ${author}`;
      memeTitle.innerText = title;
      memeImage.src = url;
    });
}

getMeme();

memeBtn.addEventListener("click", () => {
  getMeme();
});
