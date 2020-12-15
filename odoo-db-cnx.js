var Odoo = require('odoo-xmlrpc');

var odoo = new Odoo({
    url: 'localhost',
    port: 8069,
    db: 'ecommerce12-2',
    username: 'admin',
    password: 'admin'
});

module.exports = odoo;

