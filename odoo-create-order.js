odoo = require('./odoo-db-cnx.js');

let costumer_id;

exports.order = function (order) {
        odoo.connect(function (err) {
        if (err) { return console.log(err); }
        console.log('Connected to Odoo server.');

        var createCustomerData = {};
        createCustomerData['name'] = order["full_name"];
        createCustomerData['street'] = order["address_line_1"];
        createCustomerData['street2'] = order["address_line_2"];
        createCustomerData['city'] = order["city"];  
        createCustomerData['zip'] = order["zip"];
        createCustomerData['phone'] = order["phone_number"];

        ///////////-1-/////////
        var inParams1 = [];
        inParams1.push(createCustomerData)
        var params1 = [];
        params1.push(inParams1);
        odoo.execute_kw('res.partner', 'create', params1, function (err, value) {
                if (err) { return console.log(err); }
                // console.log('create res.partner: ', value);
                console.log('///////////-1-/////////');

                
                ///////////-2-/////////
                var inParams2 = [];
                inParams2.push([['name', '=', order["full_name"]]]);
                var params2 = [];
                params2.push(inParams2);
                odoo.execute_kw('res.partner', 'search', params2, function (err, value) {
                        if (err) { return console.log(err); }
                        // console.log('search res.partner: ', value);
                        costumer_id = value[0]
                        console.log('///////////-2-/////////');



// -----------------------------------------------------------------------------------------------------------------------------------------------

                        ///////////-3-/////////
                        orderCart = order.cart[0];
                        console.log('orderCart: ', orderCart);

                        var inParams3 = [];
                        inParams3.push([['name', '=', orderCart['name']]]);                          
                        // [{
                        //         'category_id': [(4, my_tag_id)],
                        // }]
                        
                        
                        var params3 = [];
                        params3.push(inParams3);
                        odoo.execute_kw('product.product', 'search', params3, function (err, value) {
                            if (err) { return console.log(err); }
                        //     console.log('search product.product: ', value);
                            console.log('///////////-3-/////////');
                            product_id = value[0];

// -----------------------------------------------------------------------------------------------------------------------------------------------

                                ///////////-4-/////////
                                qty = orderCart['quantity'];
                                console.log('qty:',qty)


                                createOrderData = {'partner_id': costumer_id, 'order_line': [[0, 0, {'product_id': product_id, 'name': 'islem', 'product_uom_qty': qty }]]}
                                var inParams4 = [];
                                inParams4.push(createOrderData)  
                                console.log('inParams4:', inParams4)

                                var params4 = [];
                                params4.push(inParams4);
                                odoo.execute_kw('sale.order', 'create', params4, function (err, value) {
                                        if (err) { return console.log(err); }
                                        console.log('create sale.order: ', value);
                                        console.log('///////////-4-/////////');
                        
                                });
                        });
            
                });

            });

    });
};