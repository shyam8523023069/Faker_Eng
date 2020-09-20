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
      return fake('{{occupation.tech}} {{occupation.non-tech}}');
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
     * non-tech
     *
     * @method faker.occupation.non-tech
     */
    self.non-tech = function () {
      return faker.random.arrayElement(faker.definitions.occupation.non-tech);
    };
  
    self.non-tech.schema = {
      "description": "Generates a occupation non-tech.",
      "sampleResults": ["Farmer", "Salesman", "Trader"]
    };
  
   

    /**
     * art
     *
     * @method faker.occupation.art
     */
    self.art = function () {
      return faker.random.arrayElement(faker.definitions.occupation.art);
    };
  
    self.art.schema = {
      "description": "Generates a art type.",
      "sampleResults": ["Visual", "Graphic", "Plastic"]
    };
  
    