let botao = document.querySelector("#botao");

botao.addEventListener("click",e =>{
    
    funcao.innerHTML="Foco, Força e Fé. Esta é a sequência do sucesso!";
    
    setTimeout(() => {
        funcao.innerHTML=" "
    }, 7000);
}); 