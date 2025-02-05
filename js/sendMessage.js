document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('messageForm');
    const choiceButtons = document.querySelectorAll('.choice-btn');
    const selectedChoice = document.getElementById('selectedChoice');

    // Handle button clicks to store the selected choice
    choiceButtons.forEach(button => {
        button.addEventListener('click', function () {
            selectedChoice.value = this.value;
            choiceButtons.forEach(btn => btn.classList.remove('btn-success')); // Reset button styles
            this.classList.add('btn-success'); // Highlight selected button
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        (function () {
            emailjs.init("62-5ufukdgYo-WQSo");
        })();

        var serviceID = "service_ponksln";
        var templateID = "template_xwsnmrd";
        var send = document.querySelector("#sendMessage");

        var name = "Mayee";
        var email = "foryou@gmail.com";
        var subject = "Preferred date for Valentine's Day";
        var message = selectedChoice.value; // Get the selected button value

        if (!message) {
            alert('Please select a date option.');
            return;
        }

        var params = {
            sendername: name,
            senderemail: email,
            subject: subject,
            message: message
        };

        emailjs.send(serviceID, templateID, params)
            .then(res => {
                send.textContent = "Message has been sent ✅";
                setTimeout(() => {
                    send.textContent = '';
                }, 2000);
                form.reset();
            })
            .catch(error => {
                send.textContent = 'Message not sent.\n\n' + error;
                console.error('Error sending email: ', error);
            });
    });
});
