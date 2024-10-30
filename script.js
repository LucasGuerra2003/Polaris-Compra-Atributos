
function calcular() {
  let pontosSobra = document.getElementById('pontosTotal').value;

  //-força

  var valorForca = document.getElementById('forcaValor')
  var racaForca = document.getElementById('forcaRaca')
  var bonusForca = document.getElementById('forcaBonus')

  var valorInicFor = Number(valorForca.value)
  var valorRacaFor = Number(racaForca.value)
  var valorBonusFor = Number(bonusForca.value)

  var totalForca = ''
  if
    (valorInicFor > '3') {
    valorInicFor = 4
    document.querySelector('input[id="forcaValor"]').value = '4'
    console.log("oi")

  } else {
    console.log("11111")
  }

  if (valorInicFor < '-1') {
    valorInicFor = -1
    document.querySelector('input[id="forcaValor"]').value = '-1'

  } else {
    console.log("rrrrrr")
  }

  totalForca = (valorInicFor + valorRacaFor + valorBonusFor)
  document.querySelector('input[id="forcaTotal"]').value = ` ${totalForca}`




  /////////////////////////////dest//////////////////////////////////////////////    
  var valorDest = document.getElementById('destValor')
  var racaDest = document.getElementById('destRaca')
  var bonusDest = document.getElementById('destBonus')

  var valorInicDest = Number(valorDest.value)
  var valorRacaDest = Number(racaDest.value)
  var valorBonusDest = Number(bonusDest.value)

  var totalDest = ''
  if
    (valorInicDest > '3') {
    valorInicDest = 4
    document.querySelector('input[id="destValor"]').value = '4'
    console.log("oi")

  } else {
    console.log("11111")
  }

  if (valorInicDest < '-1') {
    valorInicDest = -1
    document.querySelector('input[id="destValor"]').value = '-1'
    console.log("oi6")
  } else {
    console.log("rrrrrr")
  }


  totalDest = (valorInicDest + valorRacaDest + valorBonusDest)
  document.querySelector('input[id="destTotal"]').value = ` ${totalDest}`

  //////////////////////////const/////////////////////////////////////////////////    
  var valorConst = document.getElementById('constValor')
  var racaConst = document.getElementById('constRaca')
  var bonusConst = document.getElementById('constBonus')

  var valorInicConst = Number(valorConst.value)
  var valorRacaConst = Number(racaConst.value)
  var valorBonusConst = Number(bonusConst.value)

  var totalConst = ''
  if
    (valorInicConst > '3') {
    valorInicConst = 4
    document.querySelector('input[id="constValor"]').value = '4'
    console.log("oi")

  } else {
    console.log("11111")
  }

  if (valorInicConst < '-1') {
    valorInicConst = -1
    document.querySelector('input[id="constValor"]').value = '-1'
    console.log("oi6")
  } else {
    console.log("rrrrrr")
  }


  totalConst = (valorInicConst + valorRacaConst + valorBonusConst)
  document.querySelector('input[id="constTotal"]').value = ` ${totalConst}`

  ///////////////////////////inte////////////////////////////////////////////////    
  var valorInt = document.getElementById('intValor')
  var racaInt = document.getElementById('intRaca')
  var bonusInt = document.getElementById('intBonus')

  var valorInicInt = Number(valorInt.value)
  var valorRacaInt = Number(racaInt.value)
  var valorBonusInt = Number(bonusInt.value)

  var totalInt = ''
  if
    (valorInicInt > '3') {
    valorInicInt = 4
    document.querySelector('input[id="intValor"]').value = '4'
    console.log("oi")

  } else {
    console.log("11111")
  }

  if (valorInicInt < '-1') {
    valorInicInt = -1
    document.querySelector('input[id="intValor"]').value = '-1'
    console.log("oi6")
  } else {
    console.log("rrrrrr")
  }


  totalInt = (valorInicInt + valorRacaInt + valorBonusInt)
  document.querySelector('input[id="intTotal"]').value = ` ${totalInt}`

  ////////////////////////////sabed///////////////////////////////////////////////    
  var valorSab = document.getElementById('sabValor')
  var racaSab = document.getElementById('sabRaca')
  var bonusSab = document.getElementById('sabBonus')

  var valorInicSab = Number(valorSab.value)
  var valorRacaSab = Number(racaSab.value)
  var valorBonusSab = Number(bonusSab.value)

  var totalSab = ''
  if
    (valorInicSab > '3') {
    valorInicSab = 4
    document.querySelector('input[id="sabValor"]').value = '4'
    console.log("oi")

  } else {
    console.log("11111")
  }

  if (valorInicSab < '-1') {
    valorInicSab = -1
    document.querySelector('input[id="sabValor"]').value = '-1'
    console.log("oi6")
  } else {
    console.log("rrrrrr")
  }


  totalSab = (valorInicSab + valorRacaSab + valorBonusSab)
  document.querySelector('input[id="sabTotal"]').value = ` ${totalSab}`

  ////////////////////////////caris///////////////////////////////////////////////

  var valorCar = document.getElementById('carValor')
  var racaCar = document.getElementById('carRaca')
  var bonusCar = document.getElementById('carBonus')

  var valorInicCar = Number(valorCar.value)
  var valorRacaCar = Number(racaCar.value)
  var valorBonusCar = Number(bonusCar.value)

  var totalCar = ''
  if
    (valorInicCar > '3') {
    valorInicCar = 4
    document.querySelector('input[id="carValor"]').value = '4'
    console.log("oi")

  } else {
    console.log("11111")
  }

  if (valorInicCar < '-1') {
    valorInicCar = -1
    document.querySelector('input[id="carValor"]').value = '-1'
    console.log("oi6")
  } else {
    console.log("rrrrrr")
  }


  totalCar = (valorInicCar + valorRacaCar + valorBonusCar)
  document.querySelector('input[id="carTotal"]').value = ` ${totalCar}`

  ////conversor de valor em pontos Força///
  let forca = 0;
  const valorFlutFor = parseFloat(document.getElementById('forcaValor').value);

  switch (valorFlutFor) {
    case -1:
      forca = -1;
      break;
    case 0:
      forca = 0;
      break;
    case 1:
      forca = 1;
      break;
    case 2:
      forca = 2;
      break;
    case 3:
      forca = 4;
      break;
    case 4:
      forca = 7;
      break;

  }
  console.log(`aqui é ${forca}`);

  let custoForca = document.getElementById("forcaCusto").value
  custoForca = (forca)
  document.querySelector('input[id="forcaCusto"]').value = `${custoForca}`

  ////////////////Destreza
  let destreza = 0;
  const valorFlutDest = parseFloat(document.getElementById('destValor').value);

  switch (valorFlutDest) {
    case -1:
      destreza = -1;
      break;
    case 0:
      destreza = 0;
      break;
    case 1:
      destreza = 1;
      break;
    case 2:
      destreza = 2;
      break;
    case 3:
      destreza = 4;
      break;
    case 4:
      destreza = 7;
      break;

  }
  console.log(`aqui é ${destreza}`);

  let custoDestreza = document.getElementById("destCusto").value
  custoDestreza = (destreza)
  document.querySelector('input[id="destCusto"]').value = `${custoDestreza}`

  ////////////////Constituição 
  let constituicao = 0;
  const valorFlutConst = parseFloat(document.getElementById('constValor').value);

  switch (valorFlutConst) {
    case -1:
      constituicao = -1;
      break;
    case 0:
      constituicao = 0;
      break;
    case 1:
      constituicao = 1;
      break;
    case 2:
      constituicao = 2;
      break;
    case 3:
      constituicao = 4;
      break;
    case 4:
      constituicao = 7;
      break;

  }
  console.log(`aqui é ${constituicao}`);

  let custoConstituicao = document.getElementById("constCusto").value
  custoConstituicao = (constituicao)
  document.querySelector('input[id="constCusto"]').value = `${custoConstituicao}`

  ////////////////Inteligência 
  let inteligencia = 0;
  const valorFlutInt = parseFloat(document.getElementById('intValor').value);

  switch (valorFlutInt) {
    case -1:
      inteligencia = -1;
      break;
    case 0:
      inteligencia = 0;
      break;
    case 1:
      inteligencia = 1;
      break;
    case 2:
      inteligencia = 2;
      break;
    case 3:
      inteligencia = 4;
      break;
    case 4:
      inteligencia = 7;
      break;

  }
  console.log(`aqui é ${inteligencia}`);

  let custoInteligencia = document.getElementById("intCusto").value
  custoInteligencia = (inteligencia)
  document.querySelector('input[id="intCusto"]').value = `${custoInteligencia}`

  ////////////////Sabedoria 
  let sabedoria = 0;
  const valorFlutSab = parseFloat(document.getElementById('sabValor').value);

  switch (valorFlutSab) {
    case -1:
      sabedoria = -1;
      break;
    case 0:
      sabedoria = 0;
      break;
    case 1:
      sabedoria = 1;
      break;
    case 2:
      sabedoria = 2;
      break;
    case 3:
      sabedoria = 4;
      break;
    case 4:
      sabedoria = 7;
      break;

  }
  console.log(`aqui é ${sabedoria}`);

  let custoSabedoria = document.getElementById("sabCusto").value
  custoSabedoria = (sabedoria)
  document.querySelector('input[id="sabCusto"]').value = `${custoSabedoria}`

  ////////////////Carisma 
  let carisma = 0;
  const valorFlutCar = parseFloat(document.getElementById('carValor').value);

  switch (valorFlutCar) {
    case -1:
      carisma = -1;
      break;
    case 0:
      carisma = 0;
      break;
    case 1:
      carisma = 1;
      break;
    case 2:
      carisma = 2;
      break;
    case 3:
      carisma = 4;
      break;
    case 4:
      carisma = 7;
      break;

  }
  console.log(`aqui é ${carisma}`);

  let custoCarisma = document.getElementById("carCusto").value
  custoCarisma = (carisma)
  document.querySelector('input[id="carCusto"]').value = `${custoCarisma}`


  ///////cálculo para subtração dos pontos///////

  let sobraPontos = 10

  sobraPontos -= custoForca + custoDestreza + custoConstituicao + custoInteligencia + custoSabedoria + custoCarisma

  document.querySelector('input[id="pontosTotal"]').value = `${sobraPontos}`

  if (sobraPontos < 0) {
    document.getElementById("pontosTotal").style.color = "red"
  } else {
    document.getElementById("pontosTotal").style.color = "#1a480aff"
  }

}

//var resposta = document.getElementById('forcaTotal')//
