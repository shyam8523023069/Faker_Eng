function fakedata(faker, randomName, randomEmail, randomCard, occupation) {
    var faker = require('faker');
    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties
    var randomoccupation = faker.occupation.technontech(); // tech nontech
    console.log(randomName);
    console.log(randomEmail);
    console.log(randomCard);
    console.log(randomoccupation);
    }
    fakedata();