function excluirLivro(numero_pedido){
    if(confirm('Deseja excluir esse livro?')){
        fetch(`${URL}?numero_pedido=${numero_pedido}`, {
            method: 'DELETE'
        })
            .then(response => {
                if(response.ok) {
                    carregarPedidos();
                } else{
                    console.error('Erro ao excluir pedido');
                    alert('Erro ao excluir pedido');
                }
            })
    }
}