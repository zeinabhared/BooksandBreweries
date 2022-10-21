var cityinput = document.getElementById("cityInput");
var bookinput = document.getElementById("bookInput");

//Allows you to only select one checkbox for beer, wine, etc.
function selectOnlyThis(id) {
    for (var i = 1;i <= 4; i++)
  {
    document.getElementById(`checkbox${i}`).checked = false;
  }
    document.getElementById(id).checked = true;
}

//replicates the npm random names because we are way more than books and breweries.
document.getElementById("logo_name").addEventListener("click", function (event) {
  event.preventDefault();
  const getTerms = async () => {
    const count = 2;
   // const result = await fetch(`/api/random/${count}`, {
      const result = await fetch(`http://localhost:3001/api/random/${count}`, {
      method: 'GET',
    });
    const json = await result.json();
    return json;
  };
  getTerms().then((response) => document.getElementById("logo_name").textContent = `${response[0].random_word} and ${response[1].random_word}`);
});

//Put the map of locations on the DOM
if (document.getElementById("cityInputSubmit")) {
  document.getElementById("cityInputSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    let searchTerm = '';
    //checking to see what the user checked 
    if ($('#checkbox1').prop('checked')) {
      searchTerm = 'Breweries';
    }
    if ($('#checkbox2').prop('checked')) {
      searchTerm = 'Beer';
    }
    if ($('#checkbox3').prop('checked')) {
      searchTerm = 'Cider';
    }
    if ($('#checkbox4').prop('checked')) {
      searchTerm = 'Wine';
    }
    // let selectedRadius = 16093; // document.getElementById('select').value;
    let address = cityinput.value || cityinput.placeholder;

    // mapResults(address, searchTerm, selectedRadius);
    removeAllChildNodes(document.getElementById("mapmain"));

    //AP
    document.getElementById("mapmain").innerHTML +=
    `
<iframe
  width="450"
  height="250"
  frameborder="0" style="border:0"
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/search?key=AIzaSyC1H0tMJF0rY1i56Pq9L_9SVYccaU_mJOE&q=${searchTerm}+near me+${address}"
  allowfullscreen>
</iframe>
`
  });
};

//Makes the book input functional.
if (document.getElementById("bookInputSubmit")) {
  document.getElementById("bookInputSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const Booklist = document.getElementById("content");
    removeAllChildNodes(Booklist);
    bookapi();
  });
}
function bookapi() {
  let bookInfo = bookinput.value || `Ada Lovelace`;
  const api = `https://www.googleapis.com/books/v1/volumes?q=${bookInfo}`
  var bookData = fetch(api)
    .then((response) => {
      if (response.status === 200) {
      }
      return response.json();
    })
    .then(function (data) {
      handleResponse(data);
      return data;
    })
  return bookData;
};

//clears all the child nodes so fresh data can be populated.
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


function handleResponse(response) {
  for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i];
    // in production code, item.text should have the HTML entities escaped.
    document.getElementById("content").innerHTML +=
      `
    <div class="card">
    <img class="card-img-top" src="${item.volumeInfo.imageLinks.thumbnail}" alt="Card image cap">
    <div class="card-body text-center">
      <h5 class="card-title">${item.volumeInfo.title}</h5>
      <a href="${item.volumeInfo.previewLink}" target="_blank" class="btn btn-primary">BUY</a>
      <h5>Bookmark</h5>
        <span id="booksave${i}" class="material-symbols-outlined">bookmark</span>
    </div>
  </div>
  `
  document.getElementById(`booksave${i}`).addEventListener("click", function (event) {
      event.preventDefault();
      console.log('Hit');
      //console.log(item.volumeInfo.imageLinks.thumbnail);
    });
  }
}