const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", searchRecommendation);

function searchRecommendation() {
    fetch("./travel_recommendation_api.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}

