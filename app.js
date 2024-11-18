function   crieCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = ('cartao')

    cartao.innerHTML =
    <div class="cartao__conteudo">
    <h3>$(categoria)</h3>
      <div class="cartao__conteudo__pergunta">
       <p>%(resposta)</p>
      </div>
     <div class="cartao__conteudo__pergunta">
     <p>$(resposta)</p>
     </div>
     </div> 

   let respostaEstavisivel = false

   function viracartao(){
    respostaEstavisivel = IrespostaEstavisivel 
    cartao.classList.toggle('active'. respostaEstavisivel)
   }



container.appendChild(cartao)

}


