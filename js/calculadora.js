function adicionarAoVisor(valor) {
    document.getElementById('visor').value += valor }

function limparVisor() {
    document.getElementById('visor').value = '' }


function calcular() {
    try {
        const resultado = eval(document.getElementById('visor').value)
        document.getElementById('visor').value = resultado}
         catch (erro) {
        document.getElementById('visor').value = 'Erro'}
}