(function () {
    module.exports = {
        createCustomer: createCustomer
    }

    var CustomerModel = require('./customer.module')().CustomerModel;

    function createCustomer(customer) {
        CustomerModel.create(customer);
    }
})();