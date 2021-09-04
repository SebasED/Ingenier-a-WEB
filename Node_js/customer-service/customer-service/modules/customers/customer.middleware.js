(function () {
    module.exports = {
        addCustomer: addCustomer
    }

    var customerService = require('./customer.module')().CustomerService;

    function addCustomer(req, res, next) {
        customerService.createCustomer(req.body);
    }
})();