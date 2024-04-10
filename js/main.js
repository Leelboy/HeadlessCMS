
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
        const spanHolder = document.getElementsBy("card-title gray-text mb-2")

        const activate = await fetch("../data/content.json")
        const data = await activate.json();

        data.box.forEach(menuItem => {
            let listItem = document.createElement('div');
            listItem.innerHTML = `<a href="${menuItem.url}"> ${menuItem.text} </a>`
            spanHolder.appenChild(listItem);
        })

    } catch (errorr) {
        console.log('error: ', errorr);
    }
}

realfunction();
