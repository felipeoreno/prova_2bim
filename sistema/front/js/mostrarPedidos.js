const containerPedidos = document.querySelector('#pedidos');

const URLPedidos = 'http://localhost:8080/sistema/back/apiPedidos.php';

function carregarPedidos(){
    fetch(URLPedidos, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    })
        .then(response => response.json())
        .then(pedidos => {
            containerPedidos.innerHTML = '';

            for(let i = 0; i < pedidos.length; i++){
                const pedido = pedidos[i];
                const tr = document.createElement('tr');
                tr.innerHTML = `
                <td>1</td>
                <td>6</td>
                <td>73</td>
                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-detalhes">
                    Ver Mais Detalhes
                    </button>
                    
                    <div class="modal fade" id="modal-detalhes" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5">Detalhes do Pedido</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <table class="table">
                            <tr>
                                <td colspan="2">Número do Pedido</td>
                                <td>${pedido.numero_pedido}</td>
                            </tr>
                            <tr>
                                <td>Prato Feito</td>
                                <td>Quantidade: ${pedido.prato_feito}</td>
                                <td>Valor Unitário: </td>
                            </tr>
                            <tr>
                                <td>Sanduíche</td>
                                <td>Quantidade: ${pedido.sanduiche}</td>
                                <td>Valor Unitário: </td>
                            </tr>
                            <tr>
                                <td>Pudim</td>
                                <td>Quantidade: ${pedido.pudim}</td>
                                <td>Valor Unitário: </td>
                            </tr>
                            <tr>
                                <td>Refrigerante</td>
                                <td>Quantidade: ${pedido.refrigerante}</td>
                                <td>Valor Unitário: </td>
                            </tr>
                            <tr>
                                <td>Água</td>
                                <td>Quantidade: ${pedido.agua}</td>
                                <td>Valor Unitário: </td>
                            </tr>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary">Editar Pedido</button>
                            <button type="button" class="btn btn-danger">Excluir Pedido</button>
                            <button type="button" class="btn btn-primary" onclick="excluirPedido(${pedido.numero_pedido})" data-bs-dismiss="modal">Fechar </button>
                        </div>
                        </div>
                    </div> 
                    </div>
                </td>
                `;
                containerPedidos.appendChild(tr);
            }
        })
}

carregarPedidos();