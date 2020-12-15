odoo = require('./odoo-db-cnx.js');

exports.lead = function (lead) {
        odoo.connect(function (err) {
        if (err) { return console.log(err); }
        console.log('Connected to Odoo server.');
        var inParams = [];
        inParams.push(lead)
        var params = [];
        params.push(inParams);
        odoo.execute_kw('crm.lead', 'create', params, function (err, value) {
            if (err) { return console.log(err); }
            console.log('Result: ', value);
        });
    });
};
  
