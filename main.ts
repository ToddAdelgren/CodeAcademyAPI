document.getElementById('search-btn').addEventListener('click', function(e){
    e.preventDefault();
    console.log("search-btn click");
});

// let xhr = new XMLHttpRequest();


// search.php?s=long_island
// filter.php?i=Vodka

// xhr.open(
//     "GET",
//     "https://www.thecocktaildb.com/api/json/v1/1/" +
//     searchType +
//     searchString,
//     true
// );

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//     //let jsonObj = JSON.parse(xhr.responseText);
//     } else {
//         if (xhr.status >= 400) {
//             document.getElementById("message-area").innerText =
//             "Unexpected HTTP Error Code: " + xhr.status;
//         }
//     }
// };

// xhr.send();
