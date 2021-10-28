const planos = {
  internet: {
    duzentos_Megas: 100,
    trezentos_Megas: 300,
    quatrocentos_megas: 500
  },
  tv: {
    cinquenta_canais: 110,
    cem_canais: 150,
    duzentos_canais: 300
  },
  telefone: {
    ilimitado: 90
  }
}

function calcularPlanos(internet, tv, telefone){
  return `O preço do plano de internet fica ${internet} reais,
  o plano de tv fica ${tv} reais
  è o plano de tv acompanha o telefone fixo que custa ${telefone} reais
  o combo total fica ${internet+tv+telefone} reais`
}

console.log(calcularPlanos(planos.internet.trezentos_Megas, planos.tv.cem_canais, planos.telefone.ilimitado))