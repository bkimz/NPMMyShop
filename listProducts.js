var faker = require('faker');

function generateFake(num){
    console.log("=====================");
    console.log("WELCOME TO MY SHOP!")
    console.log("=====================");
    for (var i = 0; i < num; i ++){
        
        console.log(faker.fake("{{commerce.productName}} - {{commerce.price}}"));
        
        
    }
}

generateFake(10);