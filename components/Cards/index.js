// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    const articlesList = response.data.articles;
    console.log(articlesList);
    Object.keys(articlesList).forEach(topic => {
      articlesList[topic].forEach(article => {
        Card(article);
      });
    });
  })
  .catch();

function Card(article) {
  const card = document.createElement("div");
  card.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = article.headline;

  const author = document.createElement("div");
  author.classList.add("author");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.src = article.authorPhoto;

  const authorName = document.createElement("span");
  authorName.textContent = article.authorName;

  // * structuring the div
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.append(img);
  author.appendChild(authorName);

  // * appending to DOM
  document.querySelector(".cards-container").appendChild(card);
}
