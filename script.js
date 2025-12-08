let id = 0
let numberRow = 1


function btn() {
    const input = document.getElementById('name')    
    id++ 
    const randomNumber = Math.floor(Math.random()*9999999999)

    if(input.value === '') {
        setTimeout(() => {
            document.getElementById('footer').style.display = 'none'
        }, 2000)
        document.getElementById('footer').innerHTML = 'Preencha o campo nome'
        document.getElementById('footer').style.display = ''
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
    document.getElementById('footer').style.display = ''
    setTimeout(() => {
            document.getElementById('footer').style.display = 'none'
        }, 3000)

    const btn = tr.querySelector('button')
    btn.addEventListener('click', function() {
        tr.remove()
        numberRow--
        if (numberRow <= 6) {
            document.getElementById('mainTable').style.display = 'none'
        }
    })

    if (numberRow >= 6) {
        document.getElementById('mainTable').style.display = ''
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        btn()
    }
})
