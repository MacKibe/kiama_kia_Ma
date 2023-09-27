<?php
// 
// Get data from the form on the client side.
// Name of User.
$sender_name = $_POST["user"];
// Message sent.
$feedback_message = $_POST["feedback"];
// 
// Server name.
$server_name = 'localhost';
// Username.
$user_name = 'root';
// Password.
$password = '';
// Database name.
$database_name = 'mutall_users';
// 
// 1. Create a connection to the database for saving my feedbacks 
$connection = new mysqli($server_name, $user_name, $password, $database_name);
//
// Check the connection
if ($connection -> connect_error) {
    die("Connection failed: " . $connection->connect_error);
}
// 
// Saving senders name to the database
// Create a query to add the feedback to the table and specify the column name.
$sender_name_sql = "INSERT INTO user (name) VALUES (?)";
// 
$sender_name_statement = $connection->prepare($sender_name_sql);
// 
$sender_name_statement->bind_param("s", $sender_name);
// 
// Now send the feedback to the database.
// Create a query to add the feedback to the table and specify the column name.
$feedback_message_sql = "INSERT INTO msg (text) VALUES (?)";
// 
$feedback_message_statement = $connection->prepare($feedback_message_sql);
// 
$feedback_message_statement->bind_param("s", $feedback_message);
// 
// Excecute the Sender Name and Feedback.
$sender_name_insert_success = $sender_name_statement->execute();
$feedback_insert_success = $feedback_message_statement->execute();
// 
// If excution wasnt successful throw an error message.
if ($sender_name_insert_success && $feedback_insert_success) {
    $success_message = "Thanks for the feedback"." ". $sender_name.".";
} else {
    $error_message = "Error: " . $connection->error;
}

// Close the statements and database connection
$sender_name_statement->close();
$feedback_message_statement->close();
$connection->close();

if (!empty($success_message)) {
    echo "<div style='color: green;'>$success_message</div>";
}

if (!empty($error_message)) {
    echo "<div style='color: red;'>$error_message</div>";
}