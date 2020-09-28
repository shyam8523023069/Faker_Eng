/**
 *
 * @namespace faker.engineer
 */
function Engineer (faker) {


     /**
     * ComputerScience
     *
     * @method ComputerScience
     * @memberof faker.engineer
     */
    this.ComputerScience = function () {
      return  faker.engineer.ElectronicsAndCommunication() + " " +
        faker.engineer.Instrumentation() + " " +
        faker.engineer.Civil();
    };
      /**
   * title
   *
   * @method title
   * @memberof faker.engineer
   */
  this.title = function() {
    var descriptor  = faker.random.arrayElement(faker.definitions.engineer.title.descriptor),
        level       = faker.random.arrayElement(faker.definitions.engineer.title.level),
        job         = faker.random.arrayElement(faker.definitions.engineer.title.job);

    return descriptor + " " + level + " " + job;
};  
      /**
     * ElectronicsAndCommunication
     *
     * @method ElectronicsAndCommunication
     * @memberof faker.engineer
     */
    this.ElectronicsAndCommunication = function () {
      return faker.random.arrayElement(faker.definitions.engineer.title.descriptor);
    };
      /**
     * Instrumentation
     *
     * @method Instrumentation
     * @memberof faker.engineer
     */
    this.Instrumentation = function () {
      return faker.random.arrayElement(faker.definitions.engineer.title.level);
    };
    /**
     * Civil
     *
     * @method Civil
     * @memberof faker.engineer
     */
    this.Civil = function () { 
      return faker.random.arrayElement(faker.definitions.engineer.title.job);
    };
    }
    module['exports'] = Engineer;
  