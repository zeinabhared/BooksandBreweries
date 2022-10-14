const fs = require('fs')
console.log('test!')
fetch(`https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=AIzaSyC1H0tMJF0rY1i56Pq9L_9SVYccaU_mJOE`, {
  // The browser fetches the resource from the remote server without first looking in the cache.
  // The browser will then update the cache with the downloaded resource.

  cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


// // var requestUrl = `https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=${api}

// // `;
// var requestUrl = `https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=AIzaSyC1H0tMJF0rY1i56Pq9L_9SVYccaU_mJOE
// `;

// // var responseText = document.getElementById('response-text');

// function getApi(requestUrl) {
//   fetch(requestUrl)
//     .then(function (response) {
//       console.log(response);
//       if (response.status === 200) {
//         responseText.textContent = response.status;
//       }
//       return response.json();
//   });
// }

// getApi(requestUrl);