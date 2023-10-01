const botao =  document.getElementById('chopper')

const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice, array)=>{
    botao.addEventListener("click", () =>{

        dessecelecionarBotao();
desselecionarPersonagem();


        botao.classList.add("selecionado");

        

        personagens[indice].classList.add("selecionado");

        console.log(personagens[indice]);

        console.log(personagens); 

        console.log(indice);

        console.log(array);

    })
})
    


botoes.addEventListener("click", () =>{
    console.log("clicou no botão") ;
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");

    personagemSelecionado.classList.remove("selecionado");
}

function dessecelecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

