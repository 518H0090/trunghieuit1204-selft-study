<?php

$sensitiveData = "Krossing";
$salt = bin2hex(random_bytes(16));
$pepper = "ASecretBlaBlaEtc";

echo "<br />" . $salt;

$dataToHash = $sensitiveData . $salt . $pepper;
$hash = hash("sha256", $dataToHash);

echo "<br />" . $hash;

$pwdSignUp = "Krossing";

$options = [
    'cost' => 12
];

$hashedPwd = password_hash($pwdSignUp, PASSWORD_BCRYPT, $options);

$pwdLogin = "Krossing";

echo "<br />";

if (password_verify($pwdLogin, $hashedPwd)) {
    echo "They are the same!";
}
else {
    echo "They are not the same";
}



