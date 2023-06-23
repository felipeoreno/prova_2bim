<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    // GET recebe/pega informações
    // POST envia informações
    // PUT edita informações: "update"
    // DELETE deleta informações
    // OPTIONS é a relação de métodos disponíveis para uso
    header('Access-Control-Allow-Headers: Content-Type');

    if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
        exit;
    } else{

    }

    include 'conexao.php';

    // rota para obter os pedidos
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        $stmt = $conn->prepare("SELECT * FROM pedidos");
        $stmt->execute();

        $pedidos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo(json_encode($pedidos));
    }

    // rota para criar pedidos
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $prato_feito = $_POST['prato_feito'];
        $sanduiche = $_POST['sanduiche'];
        $pudim = $_POST['pudim'];
        $refrigerante = $_POST['refrigerante'];
        $valor = $_POST['valor'];
        $agua = $_POST['agua'];
        $cliente = $_POST['cliente'];

        $stmt = $conn->prepare("INSERT INTO pedidos (prato_feito, sanduiche, pudim, refrigerante, agua, valor, cliente) VALUES (:prato_feito, :sanduiche, :pudim, :refrigerante, :agua, :valor, :cliente,);");
        $stmt->bindParam(':prato_feito', $prato_feito);
        $stmt->bindParam(':sanduiche', $sanduiche);
        $stmt->bindParam(':pudim', $pudim);
        $stmt->bindParam(':refrigerante', $refrigerante);
        $stmt->bindParam(':agua', $agua);
        $stmt->bindParam(':valor', $valor);
        $stmt->bindParam(':cliente', $cliente);
    }

    // rota para excluir um pedido
    if($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($_GET['numero_quarto'])){
        $numero_quarto = $_GET['numero_quarto'];
        $stmt = $conn->prepare("DELETE FROM pedidos WHERE numero_quarto = :id;");
        $stmt->bindParam(':numero_quarto', $numero_quarto);

        if($stmt->execute()){
            echo("Pedido excluído com sucesso");
        } else{
            echo("Erro ao excluir pedido.");
        }
    }
?>