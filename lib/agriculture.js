/**
 *
 * @namespace faker.agriculture
 */
var agriculture = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * agriculture
     *
     * @method faker.agriculture.agriculture
     */
    self.agriculture = function () {
      return fake('{{agriculture.grains}} {{agriculture.vegetables}}');
    };
  
    self.agriculture.schema = {
      "description": "Generates a random agriculture.",
      "sampleResults": ["grains", " dry fruits", "vegetables"]
    };
  
    /**
     * grains
     *
     * @method faker.agriculture.grains
     */
    self.grains = function () {
      return faker.random.arrayElement(faker.definitions.agriculture.grains);
    };
  
    self.grains.schema = {
      "description": "Generates a grains name.",
      "sampleResults": ["rice", "wheat", "bajra"]
    };
  
  
    /**
     * vegetables
     *
     * @method faker.agriculture.vegetables
     */
    self.vegetables = function () {
      return faker.random.arrayElement(faker.definitions.agriculture.vegetables);
    };
  
    self.vegetables.schema = {
      "description": "Generates a agriculture vegetables.",
      "sampleResults": ["tomatoes", "okra", "potatoes"]
    };
  
    /**
     * dryfruits
     *
     * @method faker.agriculture.dryfruits
     */
    self.dryfruits = function () {
      return faker.random.arrayElement(faker.definitions.agriculture.dryfruits);
    };
  
    self.dryfruits.schema = {
      "description": "Generates agriculture dryfruits.",
      "sampleResults": ["almonds", "dates", "cashews"]
    };
  
}; 
  
  module["exports"] = agriculture;