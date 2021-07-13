const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function showResults(numero) {

    let number = document.createElement('p')
    number.innerHTML = numero
    document.body.appendChild(number)

}


function kata1() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 01:"
    document.body.appendChild(cabecalho)

    let numero = []
    let count = 0

    for (let i = 0; i < 25; i++){
        count = i + 1
        numero[i] = ' ' + count
    }

    showResults(numero)
}

function kata2() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 02:"
    document.body.appendChild(cabecalho)

    let numero = []
    let count = 25

    for (let i = 0; i < 25; i++){
        numero[i] = ' '  + count
        count--
    }

    showResults(numero)
}

function kata3() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 03:"
    document.body.appendChild(cabecalho)

    let numero = []
    let count = 0

    for (let i = 0; i < 25; i++){
        count = i + 1
        numero[i] = ' ' + (count * -1)
    }

    showResults(numero)

}

function kata4() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 04:"
    document.body.appendChild(cabecalho)

    let numero = []
    let count = 25

    for(let i = 0; i < 25; i++){
        numero[i] = ' ' + (count * -1)
        count--
    }

    showResults(numero)
}

function kata5() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 05:"
    document.body.appendChild(cabecalho)

    let numero = []
    let count = 25

    for(let i = 0; i <= 25; i++){
        numero[i] = ' ' + count
        count -= 2
    }

    showResults(numero)
}

function kata6() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 06:"
    document.body.appendChild(cabecalho)

    let numero = []
    let count = 0
    
    for (let i = 1; i <= 100; i++){
        if(i%3 == 0){
            numero[count] = ' ' + i
            count++
        }
    }

    showResults(numero)
}

function kata7() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 07:"
    document.body.appendChild(cabecalho)

    let numero = []
    let count = 0

    for (let i = 1; i <= 100; i++){
        if(i%7 == 0){
            numero[count] = ' ' + i
            count++
        }
    }

    showResults(numero)
}

function kata8() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 08:"
    document.body.appendChild(cabecalho)

    let numero = []
    let count = 0

    for (let i = 100; i >= 1; i--){
        if (i%3 == 0 || i%7 == 0){
            numero[count] = ' ' + i
            count++
        }
    }

    showResults(numero)
}

function kata9() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 09:"
    document.body.appendChild(cabecalho)

    let numero = []
    let count = 0

    for(let i = 1; i <= 100; i++){
        if (i%2 != 0 && i%5 ==0){
            numero[count] = ' ' + i
            count++
        }
    }

    showResults(numero)
}

function kata10() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 10:"
    document.body.appendChild(cabecalho)

    
    showResults(sampleArray)
}

function kata11() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 11:"
    document.body.appendChild(cabecalho)

    let numero = []
    let count = 0

    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i]%2 == 0){
            numero[count] = sampleArray[i]
            count++
        }
    }

    showResults(numero)
}

function kata12() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 12:"
    document.body.appendChild(cabecalho)

    let numero = []
    let count = 0

    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i]%2 != 0){
            numero[count] = sampleArray[i]
            count++
        }
    }

    showResults(numero)
}

function kata13() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 13:"
    document.body.appendChild(cabecalho)

    let numero = []
    let count = 0

    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i]%8 == 0){
            numero[count] = sampleArray[i]
            count++
        }
    }

    showResults(numero)
}

function kata14() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 14:"
    document.body.appendChild(cabecalho)

    let numero = []
    let sampleArrayNew = []
    sampleArrayNew = sampleArray

    for (let i = 0; i < sampleArrayNew.length; i++){
        
        numero[i] = ' ' + (sampleArrayNew[i] * sampleArrayNew[i])
    }

    showResults(numero)
}

function kata15() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 15:"
    document.body.appendChild(cabecalho)

    let numero = 0

    for (let i = 0; i < 20; i++){
        numero += i + 1
    }

    showResults(numero)
}

function kata16() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 16:"
    document.body.appendChild(cabecalho)

    let numero = 0

    for (let i = 0; i < sampleArray.length; i++){
        numero += sampleArray[i]
    }

    showResults(numero)
}

function kata17() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 17:"
    document.body.appendChild(cabecalho)

    let numero = []
    numero[0]= sampleArray[0]

    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] < numero){
            numero = sampleArray[i]
        }
    }

    showResults(numero)
}

function kata18() {
    let cabecalho = document.createElement('h1')
    cabecalho.innerHTML = "Katas 18:"
    document.body.appendChild(cabecalho)

    let numero = []
    numero [0] = sampleArray[0]

    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] > numero){
            numero = sampleArray[i]
        }
    }

    showResults(numero)
}


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

let body = document.getElementById('body')

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
    let counter = 1
    while (counter <= 20){
        let retangulo = document.createElement('div')
        retangulo.style.backgroundColor = 'grey'
        retangulo.style.width = '100px'
        retangulo.style.height = '20px'
        retangulo.style.margin = '5px'
        document.body.appendChild(retangulo)
        counter++
    }

}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
    let counter = 1
    while (counter <= 20){
        let widthRetangulo = Math.floor(Math.random() * (200 - 105 + 1) + 105)
        let retangulo = document.createElement('div')
        retangulo.style.backgroundColor = 'grey'
        retangulo.style.height = '20px'
        retangulo.style.width = `${widthRetangulo}px`
        retangulo.style.margin = '5px'
        document.body.appendChild(retangulo)
        counter++
    }
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
    let counter = 0
    while (counter < 20){
        let retangulo = document.createElement('div')
        retangulo.style.backgroundColor = 'grey'
        retangulo.style.height = '20px'
        retangulo.style.width = `${sampleArray[counter]}px`
        retangulo.style.margin = '5px'
        document.body.appendChild(retangulo)
        counter += 1
    }
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
    let counter = 0
    while (counter < 20){
        let retangulo = document.createElement('div')
        if (counter %2 === 0){
            retangulo.style.backgroundColor = 'red'
        }
        else{
            retangulo.style.backgroundColor = 'grey'
        }
        retangulo.style.height = '20px'
        retangulo.style.width = `${sampleArray[counter]}px`
        retangulo.style.margin = '5px'
        document.body.appendChild(retangulo)
        counter += 1
    }
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
    let counter = 0
    while (counter < 20){
        let retangulo = document.createElement('div')
        retangulo.style.height = '20px'
        retangulo.style.width = `${sampleArray[counter]}px`
        if (sampleArray[counter] % 2 === 0){
            retangulo.style.backgroundColor = 'red'
        }
        else{
            retangulo.style.backgroundColor = 'grey'
        }
        retangulo.style.margin = '5px'
        document.body.appendChild(retangulo)
        counter += 1
    }
}
