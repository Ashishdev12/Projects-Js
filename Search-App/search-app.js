

// unsplash Api key
const accessKey = "8jC0qZ2iUJnn01SUUAhkhVGVGwHmJCm8YAOtXb2iflw";

// we have imported all our html file inside our javascript file now we need to work on variables.

const formElement = document.querySelector('form');
const inputElement = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');
const showMore = document.getElementById('show-more-button');

// it will store all the key words into this. 
let inputData = '';
let page = 1;

async function searchImages() {
  inputData = inputElement.value;
  // create dynamic url
  const url = `https://api.unsplash.com/search/photos/?page=${page}&query=${inputData}&client_id=${accessKey}`;

  // using fetch and response method to fetch all photos using convert function into async function 
  const response = await fetch(url);
  const data = await response.json();

  //convert json into variable 
  const results = data.results;

  //initialize our page number 
  if (page === 1) {
    searchResults.innerHTML = '';
  }
  // map the result one by one to variables. inside map function push all the data 

  results.map((result) => {

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('search-result');

    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = '_blank';
    imageLink.textContent = result.alt_description;

    // after this we need to append this elements inside our html page doing this by append child

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResults.appendChild(imageWrapper);
  });

  // increase page no

  page++
  if (page > 1) {
    showMore.style.display = 'block';
  }
}
// get out the function and create event listener, target our form element

  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
  });

  showMore.addEventListener('click', () => {
    searchImages();
  });

  


 