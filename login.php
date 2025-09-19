<?php
session_start();
ob_start();
$host = "localhost";
$user = "root"; 
$pass = ""; 
$dbname = "parfume_website";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if (empty($username) || empty($password)) {
    echo "Please enter both username and password.";
    exit();
}
$sql = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
if ($result->num_rows > 0) {
    $userData = $result->fetch_assoc();
    if (password_verify($password, $userData['password'])) {
        $_SESSION['username'] = $username;        
        header("Location: index.html");
        exit();
    } else {
        echo "Incorrect password.";
    }
} else {
    echo "User not found.";
}

$stmt->close();
$conn->close();
ob_end_flush();
?>
