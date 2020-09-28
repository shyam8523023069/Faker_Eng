if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

    
    describe("jobTitle()", function () {
        it("returns a job title consisting of a descriptor, area, and type", function () {
            sinon.spy(faker.random, 'arrayElement');
            sinon.spy(faker.name, 'jobDescriptor');
            sinon.spy(faker.name, 'jobArea');
            sinon.spy(faker.name, 'jobType');
            var jobTitle = faker.name.jobTitle();

            assert.ok(typeof jobTitle === 'string');
            assert.ok(faker.random.arrayElement.calledThrice);
            assert.ok(faker.name.jobDescriptor.calledOnce);
            assert.ok(faker.name.jobArea.calledOnce);
            assert.ok(faker.name.jobType.calledOnce);

            faker.random.arrayElement.restore();
            faker.name.jobDescriptor.restore();
            faker.name.jobArea.restore();
            faker.name.jobType.restore();
        });
    });
            afterEach(function () {
                faker.locale = this.oldLocale;
                delete faker.locale['TEST'];
            })

            it("returns a prefix", function () {
                var prefix = faker.name.prefix();

                assert.equal(prefix, 'P');
            });
        });
    });
});
