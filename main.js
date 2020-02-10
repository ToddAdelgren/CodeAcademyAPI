var ingredient = [];
document.getElementById('search-btn').addEventListener('click', function (e) {
    e.preventDefault();
    // Remove any previous no-search-results.
    document.getElementById("no-search-results").classList.add('d-none');
    // Remove any previous drinks.
    var drinkDivs = document.querySelectorAll(".drink-div");
    for (var i = 0; i < drinkDivs.length; i++) {
        drinkDivs[i].remove();
    }
    var searchString = document.getElementById('search-string').value.trim();
    if (fieldIsValid(searchString, 'search-string')) {
        var searchType = document.getElementById('search-type').value;
        var xhr_1 = new XMLHttpRequest();
        xhr_1.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/" +
            searchType +
            searchString, true);
        xhr_1.onreadystatechange = function () {
            if (xhr_1.readyState === 4 && xhr_1.status === 200) {
                var jsonObj = JSON.parse(xhr_1.responseText);
                if (jsonObj.drinks == null) {
                    // No drinks found.
                    document.getElementById('no-search-results').classList.remove('d-none');
                }
                else {
                    // Drinks found.
                    processResults(jsonObj);
                }
            }
            else {
                if (xhr_1.status >= 400) {
                    console.log('UNEXPECTED HTTP RETURN CODE');
                }
            }
        };
        xhr_1.send();
    }
});
function processResults(jsonObj) {
    var searchResultsDiv = document.getElementById('search-results');
    searchResultsDiv.classList.remove('d-none');
    for (var i = 0; i < jsonObj.drinks.length; i++) {
        // Add drink div to the search results div.
        var drinkDiv = document.createElement('div');
        drinkDiv.classList.add('drink-div');
        searchResultsDiv.append(drinkDiv);
        // Add the name div to the drink div.
        var nameDiv = document.createElement('div');
        nameDiv.style.borderBottom = '1px solid black';
        nameDiv.classList.add('mb-3');
        nameDiv.innerText = 'Drink: ' + jsonObj.drinks[i].strDrink;
        drinkDiv.append(nameDiv);
        // Add the ingredients to the drink div.
        if (jsonObj.drinks[i].strIngredient1 != null) {
            if (jsonObj.drinks[i].strMeasure1 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure1 + jsonObj.drinks[i].strIngredient1);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient1);
            }
        }
        if (jsonObj.drinks[i].strIngredient2 != null) {
            if (jsonObj.drinks[i].strMeasure2 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure2 + jsonObj.drinks[i].strIngredient2);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient2);
            }
        }
        if (jsonObj.drinks[i].strIngredient3 != null) {
            if (jsonObj.drinks[i].strMeasure3 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure3 + jsonObj.drinks[i].strIngredient3);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient3);
            }
        }
        if (jsonObj.drinks[i].strIngredient4 != null) {
            if (jsonObj.drinks[i].strMeasure4 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure4 + jsonObj.drinks[i].strIngredient4);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient4);
            }
        }
        if (jsonObj.drinks[i].strIngredient5 != null) {
            if (jsonObj.drinks[i].strMeasure5 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure5 + jsonObj.drinks[i].strIngredient5);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient5);
            }
        }
        if (jsonObj.drinks[i].strIngredient6 != null) {
            if (jsonObj.drinks[i].strMeasure6 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure6 + jsonObj.drinks[i].strIngredient6);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient6);
            }
        }
        if (jsonObj.drinks[i].strIngredient7 != null) {
            if (jsonObj.drinks[i].strMeasure7 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure7 + jsonObj.drinks[i].strIngredient7);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient7);
            }
        }
        if (jsonObj.drinks[i].strIngredient8 != null) {
            if (jsonObj.drinks[i].strMeasure8 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure8 + jsonObj.drinks[i].strIngredient8);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient8);
            }
        }
        if (jsonObj.drinks[i].strIngredient9 != null) {
            if (jsonObj.drinks[i].strMeasure9 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure9 + jsonObj.drinks[i].strIngredient9);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient9);
            }
        }
        if (jsonObj.drinks[i].strIngredient10 != null) {
            if (jsonObj.drinks[i].strMeasure10 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure10 + jsonObj.drinks[i].strIngredient10);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient10);
            }
        }
        if (jsonObj.drinks[i].strIngredient11 != null) {
            if (jsonObj.drinks[i].strMeasure11 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure11 + jsonObj.drinks[i].strIngredient11);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient11);
            }
        }
        if (jsonObj.drinks[i].strIngredient12 != null) {
            if (jsonObj.drinks[i].strMeasure12 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure12 + jsonObj.drinks[i].strIngredient12);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient12);
            }
        }
        if (jsonObj.drinks[i].strIngredient13 != null) {
            if (jsonObj.drinks[i].strMeasure13 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure13 + jsonObj.drinks[i].strIngredient13);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient13);
            }
        }
        if (jsonObj.drinks[i].strIngredient14 != null) {
            if (jsonObj.drinks[i].strMeasure14 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure14 + jsonObj.drinks[i].strIngredient14);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient14);
            }
        }
        if (jsonObj.drinks[i].strIngredient15 != null) {
            if (jsonObj.drinks[i].strMeasure15 != null) {
                ingredient.push(jsonObj.drinks[i].strMeasure15 + jsonObj.drinks[i].strIngredient15);
            }
            else {
                ingredient.push(jsonObj.drinks[i].strIngredient15);
            }
        }
        if (ingredient.length != 0) {
            var ingredientDiv = document.createElement('div');
            ingredientDiv.innerHTML = 'Ingredients:<br><br>';
            for (var j = 0; j < ingredient.length; j++) {
                ingredientDiv.innerHTML = ingredientDiv.innerHTML + ingredient[j] + '<br>';
            }
            ingredientDiv.innerHTML = ingredientDiv.innerHTML + '<br>';
            drinkDiv.append(ingredientDiv);
        }
        ingredient = [];
        // Add the instructions to the drink div.
        var instructDiv = document.createElement('div');
        instructDiv.innerHTML = 'Instructions:<br><br>';
        instructDiv.innerHTML = instructDiv.innerHTML + jsonObj.drinks[i].strInstructions;
        instructDiv.innerHTML = instructDiv.innerHTML + '<br><br>';
        drinkDiv.append(instructDiv);
    }
}
function fieldIsValid(enteredValue, elementId) {
    if (enteredValue.length === 0) {
        // Data in the field is invalid.
        document.getElementById(elementId).classList.add('is-invalid');
        document.getElementById(elementId).focus();
        return false;
    }
    else {
        // Data in the field is valid.
        document.getElementById(elementId).classList.remove('is-invalid');
        return true;
    }
}
document.getElementById('search-type').focus();