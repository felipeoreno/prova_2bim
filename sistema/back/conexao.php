<?php
    $host = 'localhost';
    $dbname = 'prova_2bim';
    $username = 'root';
    $password = 'sucesso';

    try {
        $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $error) {
        echo("Erro na conexão: ".$error->getMessage());
        die();
    }
?>