function verificar() {
    var res = document.querySelector('#res')
    let sex = document.getElementsByName('radsex')
    let genero = ' '
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(sex[0].checked) {
        genero = 'menino'
        img.setAttribute('src', 'imagens/menino-pkmn-p.png')
    } else if (sex[1].checked) {
        genero = 'menina'
        img.setAttribute('src', 'imagens/menina-pkmn-p.png')
    } else {
        alert('Selecione uma opção!')
        return
    }

    res.innerHTML = `<p>Então você é ${genero}!<br></p>`
    res.appendChild(img)
    res.innerHTML += '<p><br>Agora me diga qual o seu nome?<br></p>'

    //Criando o input do nome
    let nome = document.createElement('input')
    nome.setAttribute('type', 'text')
    nome.setAttribute('name', 'nome')
    nome.setAttribute('id', 'nome')
    res.appendChild(nome)

    //Criando o verificador
    let but = document.createElement('input')
    but.setAttribute('type','button')
    but.setAttribute('value', 'Verificar')
    but.setAttribute('onclick' , 'nomear()')
    but.style.marginLeft = '10px'
    but.style.padding = '3px'
    res.appendChild(but)
}

function nomear() {
    let txtnome = document.querySelector('input#nome')
    let res = document.querySelector('#res')
    let sex = document.getElementsByName('radsex')

    if (txtnome.value.length == 0) {
        window.alert('[ERRO] Nome vazio! [ERRO]')
    } else {
        let nome = String(txtnome.value)
    
        if (sex[0].checked) {
            res.innerHTML += `<p><br>Olá treinador ${nome}, bem vindo a pokedex!</p>`
        } else if (sex[1].checked) {
            res.innerHTML += `<p><br>Olá treinadora ${nome}, bem vinda a pokedex!</p>`
        }
    }
    let nxt = document.createElement('a')
    nxt.setAttribute('href', 'index.html')
    nxt.textContent = 'Clique aqui'
    nxt.style.marginTop = '10px'
    nxt.style.textDecoration = 'none'
    nxt.style.color = 'red'
    res.appendChild(nxt)
}