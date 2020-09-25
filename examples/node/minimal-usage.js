#!/usr/bin/env node

var faker = require('../../index');
faker.locale = "en";

//console.log(faker.lorem.sentences())

//console.log(faker.name.findName())
console.log(faker.agriculture.grains())
console.log(faker.agriculture.vegetables())
console.log(faker.agriculture.dryfruits())
return;
//console.log(faker.address)
//console.log(faker.internet.email())
//console.log(faker.date.recent())
//console.log(faker.helpers.contextualCard());

//faker.locale = "uk";

console.log(faker.helpers.contextualCard());