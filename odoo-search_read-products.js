odoo = require('./odoo-db-cnx.js');

console.log(odoo)

odoo.connect(function (err) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo search_read server.');
    var inParams = [];
    inParams.push([['list_price', '>', 0],['type', '=', 'consu']]);
    inParams.push(['name', 'description', 'list_price', 'image_medium']); //fields
    inParams.push(0); //offset
    inParams.push(); //limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('product.template', 'search_read', params, function (err, value) {

        if (err) { return console.log(err); }
        console.error('Result: ', value);
        console.log('###########################################"');

        value.map((x, i) => (x.extId = i, x));
        //console.error('Result: ', value);
        valueJson = JSON.stringify(value);

        valuee = value;


    });
});


// odoo.connect(function (err) {
//     if (err) { return console.log(err); }
//     console.log('Connected to Odoo server.');
//     var inParams = [];
//     inParams.push('read');
//     inParams.push(false); //raise_exception
//     var params = [];
//     params.push(inParams);
//     odoo.execute_kw('res.partner', 'check_access_rights', params, function (err, value) {
//         if (err) { return console.log(err); }
//         console.log('Result: ', value);
//     });
// });
