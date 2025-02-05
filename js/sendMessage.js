
document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('messageForm');
    // Add a submit event listener to the form
form.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Your Email.js code here
        (function () {
            emailjs.init("62-5ufukdgYo-WQSo");
        })();

        var serviceID = "service_ponksln";
        var templateID = "template_xwsnmrd";
        var send = document.querySelector("#sendMessage");

        var name = document.querySelector('#name').value;
            var email = "foryou@gmail.com";
            var subject = "none";
            var message = document.querySelector('#message').value;

            if (!name || !email || !subject || !message) {
                    alert('Please fill out all required fields.');
                    return; // Stop execution if validation fails
                }

            var params = {
                sendername: name,
                senderemail: email,
                subject: subject,
                message: message
            };

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                send.textContent = "Message has been sent ✅"
                //alert('Thank you, ' + params['sendername'] + '! Your message has been sent');

                setTimeout(() => {
                    send.textContent = ''
                }, 5000)

                form.reset()
            })
            .catch(error => {
                send.textContent = 'Message not sent.\n\n' + error;
                console.error('Error sending email: ', error);
            });
    });
});
