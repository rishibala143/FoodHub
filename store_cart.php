<?php
// Database connection
$servername = "localhost";
$username = "root"; 
$password = "Rishi@2006"; 
$dbname = "foodhub_db";

// Connect to MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

// Escape & prepare values
$user_name   = $conn->real_escape_string($data['name']);
$user_email  = $conn->real_escape_string($data['email']);
$table_num   = (int)$data['table_number'];
$booking_time = $conn->real_escape_string($data['booking_time']);
$order_time   = date('Y-m-d H:i:s'); // current time

$foods        = $conn->real_escape_string(json_encode($data['items']));
$subtotal     = (float)$data['subtotal'];
$booking_fee  = (float)$data['booking_fee'];
$tax          = (float)$data['tax'];
$total_cost   = (float)$data['total_cost'];

// Insert into DB
$sql = "INSERT INTO orders 
    (user_name, user_email, table_number, booking_time, order_time, foods, subtotal, booking_fee, tax, total_cost)
    VALUES 
    ('$user_name', '$user_email', $table_num, '$booking_time', '$order_time', '$foods', $subtotal, $booking_fee, $tax, $total_cost)";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success", "message" => "Booking stored successfully!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
}

$conn->close();
?>