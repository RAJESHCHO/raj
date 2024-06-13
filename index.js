{
    "basics": {
        "name": "rajesh raj",
        "email": "rajeshraj@gmail.com",
        "phone": "91-8870002619",
        "location": {
            "address": "no.20 mulkki street",
            "postalCode": "601101",
            "city": "chennai",         
            "countryCode": "+91",
            "region": "tamilnadu",
        }
        "profiles": [
            {
                "network": "linkedin",
                "username": "rajeshraj",
                "url": "https://www.linkedin.com/in/rajesh-raj-7b1161147/" 

              }
        ]    
    }
}
"work": [
    {
        "company": "hcltech",
        "position": "data analyast",
        "website": "https://www.hclteah.com/",
        "startDate": "2019-05-01",
        
    }
]
"education": [
    {
        "institution": "madras university",
        "area": "computer science",
        "studyType": "bachelor of technology",
        "startDate": "2019-05-01",
        "endDate": "2022-05-01",
    }
]
"skills": [
    {
        "name": "programming languages",
        "level": "intermediate",
        "keywords": ["html,javascript,css"]
    }
]
"interests": ["interests category"]
"keywords": ["cricket, football"]



//for loop
var arr = [
    { "id": "10", "class":"child-of-9" },
    { "id": "11", "class": "child-of10"}
];

for (var i = 0; i < arr.length; i++) {
    
    var obj = arr[i];
    for (var key in obj) {
        console.log(key + ": " + obj[key]);
    }
}

//for in loop

var arr = [
    var myarray = myObject.skills;
    for (var value of myarray) {
        console.log(value);
    }
]

//for each loop
myarray.forEach(function(value) {
    console.log(value);
});
