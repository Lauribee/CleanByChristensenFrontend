'use strict'

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
var reviewRenderer = new ReviewRenderer();