idade = prompt("Qual sua idade?");
if (idade < 18) {
  alert("voce nao pode jogar");
}

//alert("voce pode jogar!")

if (idade >= 18) {
  escolhaJogador = prompt(" Digite 1-Pedra, 2-Papel ou 3-Tesoura ?");

  escolhaComputador = Math.floor(Math.random() * 3) + 1;

  //Jogador Pedra, Computador Pedra --> empate!!!!!
  // Jogador Tesoura, Computador Tesoura --> empate!!
  // Jogador Papel, Computador Papel --> empate!!!

  if (escolhaJogador == escolhaComputador) alert("empate!");

  if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      // Jogador Pedra, Computador Papel --> Computador vence
      alert("Computador venceu, escolheu papel");
    }
    if (escolhaComputador == 3) {
      // Jogador Pedra, Computador Tesoura --> jogador vence
      alert("Jogador vence, Computador tesoura")
    }
  }
  
  if(escolhaJogador == 2) {
    if(escolhaComputador == 1) {
//Jogador Papel, Computador Pedra --> Jogador vence
      alert("Jogador venceu, Computador pedra!!")    
 }
    if(escolhaComputador == 3) {
       //Jogador Papel, Computador Tesoura --> computador vence   
      alert("Computador venceu, escolheu tesoura")
    }
}
  
  if(escolhaJogador == 3) {
  if(escolhaComputador == 1){
   // Jogador Tesoura, Computador Pedra --> Computador vence
    alert("Computador venceu, escolheu pedra")
  }
    if(escolhaComputador == 2){
      //Jogador Tesoura, Computador Papel --> Jogador vence
    }
 }
 
 
  alert("escolhaComputador:" + escolhaComputador);
}
