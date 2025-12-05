let id = 0
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
        <td >${id}</td>
        <td>${input.value}</td>
        <td colspan="2">${randomNumber}</td>
        <td><button type="button" class="btn btn-danger btn-sm ">Remover</button></td>
    `
    const tbody = document.querySelector('tbody')
    tbody.appendChild(tr)
    input.value = ''
    document.getElementById('footer').style.display = ''
    setTimeout(() => {
            document.getElementById('footer').style.display = 'none'
        }, 2000)

    const btn = tr.querySelector('button')
    btn.addEventListener('click', function() {
        tr.remove()
    })
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        btn()
    }
})
