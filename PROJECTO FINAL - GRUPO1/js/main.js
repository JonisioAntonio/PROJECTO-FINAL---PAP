let saldo = document.getElementById('saldo') 
const confirmRecarga = document.getElementById('confirm-recarga')

if (confirmRecarga) {
    confirmRecarga.addEventListener('click', () => {
    let valorInput = document.getElementById('valor_input').value
    let valor = Number(valorInput)
    let saldoActual = Number(localStorage.getItem('saldoDisponivel')) || 0
    let novoSaldo = saldoActual + valor
    localStorage.setItem('saldoDisponivel', novoSaldo)
    alert(`Adicionou ${valor} a sua carteira`)
})
}
if (saldo) {
    saldo.textContent = localStorage.getItem('saldoDisponivel') || 0    
}


valor = ''