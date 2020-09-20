/**
 *
 * @namespace faker.occupation
 */
var Occupation = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * occupation
     *
     * @method faker.occupation.occupation
     */
    self.occupation = function () {
      return fake('{{occupation.tech}} {{occupation.nontech}}');
    };
  
    self.occupation.schema = {
      "description": "Generates a random occupation.",
      "sampleResults": ["Teacher", "Farmer", "Artist", "Programmer"]
    };
  
    /**
     *tech
     *
     * @method faker.occupation.tech
     */
    self.tech = function () {
      return faker.random.arrayElement(faker.definitions.occupation.tech);
    };
  
    self.tech.schema = {
      "description": "Generates a tech name.",
      "sampleResults": ["Engineer", "Scientist", "Developer"]
    };
  
  
    /**
     * nontech
     *
     * @method faker.occupation.nontech
     */
    self.nontech = function () {
      return faker.random.arrayElement(faker.definitions.occupation.nontech);
    };
  
    self.nontech.schema = {
      "description": "Generates a occupation nontech.",
      "sampleResults": ["Farmer", "Salesman", "Trader"]
    };
  
   

    module["exports"] = Occupation}