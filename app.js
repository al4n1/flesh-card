function  criaCartao(categoria, pergunta, resposta) {
  let container = document.getElementById('container')
  let cartao = document.createElement('article')
  cartao.className = ('cartao')

  cartao.innerHTML = 
      <div class="cartao__conteudo">
        <h3>$(categoria)</h3>
        <div class="cartao__conteudo__pergunta">
        <p> %(pergunta)</p>
        </div>
       <div class="cartao__conteudo__pergunta">
       <p> $(resposta)</p>
        </div>
       </div>

  let respostaEstavisível = false 

  function viracartao(){
      respostaEstavisível = IrespostaEstavisível
      cartao.classList.toggle('active', respostaEstavisível)
  }
  cartao.addEventListener('click', viraCartao)

       container.appendChild(cartao)

  }

