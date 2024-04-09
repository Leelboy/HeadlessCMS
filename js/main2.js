const company_info = {
    "company_name": "Some Good Company",
    "owner": "Amanda Lutz",
    "address": "Toronto",
    "phone": "",
    "website": "",
    "socials": [
        {
            "name": "facebook",
            "handle": ""
        },
        { "name": "twitter", "url": "" },
        { "name": "instagram", "url": "" }
    ],
    "employees": [
        { "firstName": "Sachin", "lastName": "Devdhar", "id": "5754" },
        { "firstName": "Jiwan", "lastName": "Kim", "id": "9764" },
        { "firstName": "Mitchelle", "lastName": "Mora", "id": "3456" }
    ]
};

console.log('company info: ', company_info);

let result = company_info.employees[1].lastName;
console.log('result: ', result);

const lastName = document.getElementById('JSON')
lastName.innerHTML = result;
