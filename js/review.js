fetch("http://localhost:8080/api/reviews").then((data)=>{
    //console.log(data); json format
    return data.json(); //converted to object
}).then((objectData)=>{
    console.log(objectData);
    let stars="";
    let message="";
    objectData.map((values)=>{
        stars+=`<div class="sidebar-item">${values.amountOfStars}</div>`;
        message+=`<div class="sidebar-item">${values.reviewMessage}</div>`;
    });
    document.getElementById("stars").innerHTML = stars;
    document.getElementById("message").innerHTML = message;
}).catch((err) => {
    console.log(err);
})


/**'use strict'

class ReviewRenderer {
    endpointUrl = 'https//localhost:8080/api/reviews';

    constructor(data) {
        this.data = data;
        this.fetchData();
    }

    async fetchData() {
        try {
            let response = await fetch(this.endpointUrl);
            this.data = await response.json();

            this.updateUI();

        } catch (error) {
            // Could not connect, try using the last data, we saved last time we were connected to remote endpoint.
            console.log(`Failed getting data from remote endpoint ${this.endpointUrl}`);
        }
    };

    updateUI() {

    }
}
var reviewRenderer = new ReviewRenderer();**/