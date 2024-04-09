console.log('Web Development - Headless CMS');

var obj = '{"name": "Sachin", "age":30, "car":null}';
let parsedObj = JSON.parse(obj);
console.log('parseObj: ', parsedObj);

var test = { "name": "Sachin", "age": 30, "car": null };
let parsedTest = JSON.stringify(test);
console.log("string test: ", parsedTest);
