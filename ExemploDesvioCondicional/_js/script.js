let ipMedia = document.querySelector('#ipMedia')
let btVerificar = document.querySelector('#btVerificar')

function verificarMedia(){
    let media = Number(ipMedia.value);
   if(media >= 6){
    alert(`Aluno Aprovado!`)
   }else{
    alert(`Aluno Reprovado!`)
   }
}
btVerificar.onclick = function() { verificarMedia()}