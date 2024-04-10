
//XHR functionality 
const xhr = new XHLHttpRequest();

xhr.open('GET', "../data/conten.json");

xhr.send();

xhr.addEventListener('load', function () {
    try {
        console.log(this.responseText);
    } catch (error) {
        console.log('Error: ', error);
    }
})


//fetch fuctionality
fetch("../data/content.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('error: ', error))


//async functionality
async function realfunction() {
    try {
        const temp = await fetch("../data/content.json")
        const data = await temp.json();
        console.log('data: ', data);
    } catch (error) {
        console.log('error: ', error);
    }
}

realfunction();
