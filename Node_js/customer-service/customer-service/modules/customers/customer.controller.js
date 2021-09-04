(function () {
    var express = require('express');
    var router = express.Router();

    var customerMiddlewar = require('./customer.module')().CustomerMiddleware;

    router.post('/', 
        customerMiddlewar.addCustomer,
        function (req, res) {
            res.status(201).json(req.response);
    });

    module.exports = router;
})();