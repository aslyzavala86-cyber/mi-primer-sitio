<?php

include "conexion.php";

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$direccion = $_POST['direccion'];
$telefono = $_POST['telefono'];
$celular = $_POST['celular'];
$correo = $_POST['correo'];

$sql = "INSERT INTO agenda_personal
(nombre, apellido, direccion, telefono, celular, correo)

VALUES

('$nombre', '$apellido', '$direccion', '$telefono', '$celular', '$correo')";

if ($conn->query($sql) == TRUE) {

    echo "agenda personal guardado correctamente";

} else {

    echo "Error: " . $conn->error;

}

$conn->close();

?>