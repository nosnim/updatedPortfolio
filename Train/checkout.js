// Render the PayPal button

paypal.Button.render({

    // Set your environment

    env: 'sandbox', // sandbox || production

    // Specify the style of the button

    style: {
        label: 'pay',
        //fundingicons: true, // optional
        branding: true, // optional
        size: 'small', // small | medium | large | responsive
        shape: 'pill',   // pill | rect
        color: 'gold'   // gold | blue | silve | black
    },

    // PayPal Client IDs - replace with your own
    // Create a PayPal app: https://developer.paypal.com/developer/applications/create

    client: {
        sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
        production: 'AYuEqzJuazUc7_0OXpJ9PG6gvndsAfQ57kmuoAe3bu7hPAwlooT6gr56G28p1iImkgg_gKDl4J3EXnwA'
    },

    // Wait for the PayPal button to be clicked

    payment: function (data, actions) {
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: { total: '9.99', currency: 'USD' }
                    }
                ]
            }
        });
    },

    commit: true, // Optional: show a 'Pay Now' button in the checkout flow

    // Wait for the payment to be authorized by the customer

    onAuthorize: function (data, actions) {
        //console.log(data);
        //console.log(action);
        console.log(data.orderID);
        alert('Thank you for your payment of $9.99.  Your confirmation number is: ' + data.orderID);
        // Get the payment details

        return actions.payment.get().then(function (paymentDetails) {

            //console.log(paymentDetails);
            //console.log(paymentDetails.id);

            // Show a confirmation using the details from paymentDetails
            // Then listen for a click on your confirm button

            document.querySelector('#confirm-button')
                .addEventListener('click', function () {

                    // Execute the payment

                    return actions.payment.execute().then(function () {
                        alert('Thank you for your payment of $9.99.  Your confirmation number is: ' + paymentDetails.orderID);
                    });
                });
        });

    },

    onCancel: function (data, actions) {
        // Show a cancel page or return to cart
        //console.log(data);
        //console.log(actions);
    },

    onError: function (err) {
        // Show an error page here, when an error occurs
    }


}, '#paypal-button1');

// Render the PayPal button

paypal.Button.render({

    // Set your environment

    env: 'sandbox', // sandbox || production

    // Specify the style of the button

    style: {
        label: 'pay',
        //fundingicons: true, // optional
        branding: true, // optional
        size: 'small', // small | medium | large | responsive
        shape: 'pill',   // pill | rect
        color: 'gold'   // gold | blue | silve | black
    },

    // PayPal Client IDs - replace with your own
    // Create a PayPal app: https://developer.paypal.com/developer/applications/create

    client: {
        sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
        production: 'AYuEqzJuazUc7_0OXpJ9PG6gvndsAfQ57kmuoAe3bu7hPAwlooT6gr56G28p1iImkgg_gKDl4J3EXnwA'
    },

    // Wait for the PayPal button to be clicked

    payment: function (data, actions) {
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: { total: '24.99', currency: 'USD' }
                    }
                ]
            }
        });
    },

    commit: true, // Optional: show a 'Pay Now' button in the checkout flow

    // Wait for the payment to be authorized by the customer

    onAuthorize: function (data, actions) {
        //console.log(data);
        //console.log(action);
        console.log(data.orderID);
        alert('Thank you for your payment of $24.99.  Your confirmation number is: ' + data.orderID);
        // Get the payment details

        return actions.payment.get().then(function (paymentDetails) {

            //console.log(paymentDetails);
            //console.log(paymentDetails.id);

            // Show a confirmation using the details from paymentDetails
            // Then listen for a click on your confirm button

            document.querySelector('#confirm-button')
                .addEventListener('click', function () {

                    // Execute the payment

                    return actions.payment.execute().then(function () {
                        alert('Thank you for your payment of $24.99.  Your confirmation number is: ' + paymentDetails.orderID);
                    });
                });
        });

    },

    onCancel: function (data, actions) {
        // Show a cancel page or return to cart
        //console.log(data);
        //console.log(actions);
    },

    onError: function (err) {
        // Show an error page here, when an error occurs
    }


}, '#paypal-button2');

// Render the PayPal button

paypal.Button.render({

    // Set your environment

    env: 'sandbox', // sandbox || production

    // Specify the style of the button

    style: {
        label: 'pay',
        //fundingicons: true, // optional
        branding: true, // optional
        size: 'small', // small | medium | large | responsive
        shape: 'pill',   // pill | rect
        color: 'gold'   // gold | blue | silve | black
    },

    // PayPal Client IDs - replace with your own
    // Create a PayPal app: https://developer.paypal.com/developer/applications/create

    client: {
        sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
        production: 'AYuEqzJuazUc7_0OXpJ9PG6gvndsAfQ57kmuoAe3bu7hPAwlooT6gr56G28p1iImkgg_gKDl4J3EXnwA'
    },

    // Wait for the PayPal button to be clicked

    payment: function (data, actions) {
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: { total: '44.99', currency: 'USD' }
                    }
                ]
            }
        });
    },

    commit: true, // Optional: show a 'Pay Now' button in the checkout flow

    // Wait for the payment to be authorized by the customer

    onAuthorize: function (data, actions) {
        //console.log(data);
        //console.log(action);
        console.log(data.orderID);
        alert('Thank you for your payment of $44.99.  Your confirmation number is: ' + data.orderID);
        // Get the payment details

        return actions.payment.get().then(function (paymentDetails) {

            //console.log(paymentDetails);
            //console.log(paymentDetails.id);

            // Show a confirmation using the details from paymentDetails
            // Then listen for a click on your confirm button

            document.querySelector('#confirm-button')
                .addEventListener('click', function () {

                    // Execute the payment

                    return actions.payment.execute().then(function () {
                        alert('Thank you for your payment of $44.99.  Your confirmation number is: ' + paymentDetails.orderID);
                    });
                });
        });

    },

    onCancel: function (data, actions) {
        // Show a cancel page or return to cart
        //console.log(data);
        //console.log(actions);
    },

    onError: function (err) {
        // Show an error page here, when an error occurs
    }


}, '#paypal-button3');