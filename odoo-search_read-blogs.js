odoo = require('./odoo-db-cnx.js');

odoo.connect(function (err) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    var inParams = [];
    inParams.push([]);
    inParams.push(['name', 'description', 'image', 'content']); //fields
    inParams.push(0); //offset
    inParams.push(5); //limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('ecom_blog.ecom_blog', 'search_read', params, function (err, value) {
        if (err) { return console.log(err); }
        // console.log('Result: ', value);
        console.log('###########################################"');

        value.map((x, i) => (x.extId = i, x));
        blogs = value;
        // console.log(blogs)
    });
});