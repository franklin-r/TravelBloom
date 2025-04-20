const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", searchRecommendation);

function searchRecommendation() {
    const input = document.querySelector("#destInput").value.toLowerCase().trim();
    const resultDiv = document.querySelector("#result");
    const keywordMap = {
        beach: "beaches",
        beaches: "beaches",
        country: "countries",
        countries: "countries",
        temple: "temples",
        temples: "temples"
    };
    const keyword = keywordMap[input];
    if (!keyword) {
        console.log("return");
        return;
    }
    fetch("./travel_recommendation_api.json")
        .then(response => response.json())
        .then(data => {
            const items = data[keyword];
            console.log(items);
        })
}

