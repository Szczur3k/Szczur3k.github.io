const loadCatFact = {
    init: async function() {
        console.log("start App")
        
        const data = await this.getApiData();
        console.log(data);
        this.getCatContent(data);
        this.addKeyListener();
    },

    getApiData: async function() {
        const apiUrl = "https://some-random-api.ml/animal/cat";
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    },

    preloadCat: function(data) {

    },

    getCatContent: function(data) {
        const catImage = data.image;
        const catFact = data.fact;
        this.updateDOM(catImage, catFact);
    },

    updateDOM: function(catImage, catFact) {
        document.getElementById("text").innerHTML = catFact;
        const image = document.getElementById("cat-img");
        image.src = catImage;
    },

    addKeyListener: function() {
        document.getElementById("next-cat").addEventListener("click", async () => {
            const data = await this.getApiData();
            this.getCatContent(data);
        })
    }
}

loadCatFact.init();

const clock =  (function() {

    clockInfo = () => {
        const date = new Date();
        console.log(date.toLocaleTimeString());
    };

    startClock = () => {
        setInterval(() => {
            clockInfo();
        }, 1000);
    };

    return {
        start: startClock
    }

})();

clock.start();

// function parseData(jsonText, onComplete, onError) {
//     try{
//         let result = JSON.parse(jsonText);
//         onComplete(result);
//     } catch (e) {
//         console.log(e);
//         onError();
//     }
// };

// function done(result) {
//     console.log(`result are: ${result.data}`); 
//     console.log("ok");
// };

// function failed() {
//     console.log("fail");
// };

// goodJsonText = '{"data":25}';
// wrongJsonText = `{"data:25"'}`;

// parseData(goodJsonText, done, failed);
// parseData(wrongJsonText, done, failed);

// let click = function (event) {
//     console.log("click");
// }

// document.addEventListener("click", click);