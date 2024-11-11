<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $firstname = htmlspecialchars(trim($_POST['firstname']));
    $lastname = htmlspecialchars(trim($_POST['lastname']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (!empty($firstname) && !empty($lastname) && !empty($email) && !empty($message)) {
        
        $to = "info@estemica.ca";  
        $subject = "New message from contact form";
        $headers = "From: $email" . "\r\n" .
                   "Reply-To: $email" . "\r\n" .
                   "Content-Type: text/html; charset=UTF-8";
                   
        $email_message = "
            <html>
            <head>
            <title>New message</title>
            </head>
            <body>
            <h2>Contact Form Submission</h2>
            <p><strong>First Name:</strong> {$firstname}</p>
            <p><strong>Last Name:</strong> {$lastname}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$phone}</p>
            <p><strong>Message:</strong><br>{$message}</p>
            </body>
            </html>
        ";

        if (mail($to, $subject, $email_message, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "There was an issue sending the email.";
        }
    } else {
        echo "Please fill in all required fields.";
    }
} else {
    echo "Invalid request method.";
}
?>
