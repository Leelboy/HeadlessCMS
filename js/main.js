
//XHR functionality 
const xhr = new XHLHttpRequest();

xhr.open('GET', "../data/conten.json");

xhr.send();

xhr.addEventListener('load', function () {
    try {
        console.log(this.responseText);
    } catch (errror) {
        console.log('Error: ', errorr);
    }
})


//fetch fuctionality
fetch("../data/content.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(errorr => console.log('error: ', errorr))


//async functionality
async function realfunction() {
    try {
        const activate = await fetch("../data/content.json")
        const data = await activate.json();
        console.log('data: ', data);
    } catch (errorr) {
        console.log('error: ', errorr);
    }
}

realfunction();
