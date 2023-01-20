


function iniciar(){
        
    var jogador1 = parseFloat(prompt ("Jogador 1 digite um numero: ") )
    var jogador2 = parseFloat(prompt ("jogador 2 digite um numero: ") )
    
    if(jogador1 === jogador2){
        alert('empate')
    } else{
        var sorteio = parseInt(Math.random()*2)
        alert('SORTEANDO....')

        switch(sorteio){
            case 0:
            alert('numero sorteado foi 0 então o menor numero vence.')
            break;

            case 1: 
            alert('numero sorteado foi 1 então o jogador com maior numero vence.')
            break;
        }
        }

        if( (sorteio === 0 && jogador1<jogador2) || (sorteio === 1 && jogador1>jogador2) ){
            alert('jogador 1 ganhou!')
        }else{
                alert('jogador 2 ganhou!!')
             }
    }