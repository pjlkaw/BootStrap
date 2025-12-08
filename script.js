let id = 0
let numberRow = 1

function showAlert(message, time = 3000) { 
    const alert = document.getElementById('footer')
    alert.innerHTML = message
    alert.style.display = ''

    setTimeout(() => {
        alert.style.display = 'none'
    }, time)
}

function btn() {
    const alert = document.getElementById('footer')
    const input = document.getElementById('name')    
    id++ 
    const randomNumber = Math.floor(Math.random()*9999999999)

    if(input.value === '') {
        showAlert('Preencha o campo nome', 2000)
        return
    }
    
    const tr = document.createElement('tr')
    tr.innerHTML = `
        <td class="border">${id}</td>
        <td class="border">${input.value}</td>
        <td class="border">${randomNumber}</td>
        <td><button type="button" class="btn btn-danger btn-sm">Remover</button></td>
    `
    numberRow++
    const tbody = document.querySelector('tbody')
    tbody.appendChild(tr)
    input.value = ''
    showAlert('', 3000)
    const btn = tr.querySelector('button')
    btn.addEventListener('click', function() {
        tr.remove()
        numberRow--
        if (numberRow <= 6) {
            document.getElementById('mainTable').style.display = 'none'
        }
    })

    if (numberRow >= 6) { // sim, daria pra arrumar com uma function
        document.getElementById('mainTable').style.display = ''
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        btn()
    }
})
