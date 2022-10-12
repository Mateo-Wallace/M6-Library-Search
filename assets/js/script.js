const APIRequest = "https://www.loc.gov/search/&fo=json";
var input = "";
var clickMe = document.getElementById("click-me");
var userInput = document.getElementById("userInput");



function getResultsFromLibrary(input) {

    fetch(APIRequest)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log("result = ", data)

    })
    .catch( function (error){
        console.log(error);
    })
}

function buttonClick() {
console.log("click")
    if (userInput){
        var searchItem = userInput.textContent
        getResultsFromLibrary(searchItem);
    }


}








console.log(getResultsFromLibrary())
clickMe.addEventListener('click', buttonClick)


