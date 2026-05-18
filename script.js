
    function Qselector(q) {
        return document.querySelector(q);
    }

// Questão 01
    let botaoErro = Qselector('#botaoErro');

    botaoErro.addEventListener('click', () => {
        mensagemErro('#mensagemErro','Por favor, preencha o campo');});

    function mensagemErro(id,mensagem) {
            let Erro = Qselector(id);
            Erro.innerHTML = mensagem;
            Erro.classList.remove('oculto');

            setTimeout(() => {Erro.classList.add('oculto');},3000);
        }

// Questão 02
    let botaoExibir = Qselector('#botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);

    function exibirConteudo() {
        let conteudo = Qselector('#caixaDeTexto').value;
        let semEspaco = conteudo.trim();

        if (semEspaco === ''){
            mensagemErro('#conteudo','por favor, preencha o campo');
            return;
        }

        document.querySelector('#conteudo').innerHTML = semEspaco;
    }

// Questão 03
    let botaoCalcular = Qselector('#calcular');
    botaoCalcular.addEventListener('click', executarCalculo); 

    function executarCalculo(){
        let interacao = Qselector('#interacao').value;
        let visualizacao = Qselector('#visualizacao').value;

        if(interacao === ''|| visualizacao === '') {
            mensagemErro('#resultadoEngaja', 'Os campos estão vazios, por favor preencha');
            return;
        } if(isNaN(interacao) || isNaN(visualizacao)) {
            mensagemErro('#resultadoEngaja','Digite apenas números');
            return; 
        } else {
            let taxaEngajamento = (interacao / visualizacao) * 100;
            document.querySelector('#resultadoEngaja').innerHTML = taxaEngajamento.toFixed(2);
        }    

    }

// Questão 04
    let uploadImagem = Qselector('#uploadImagem');
    let botaoCarregarImg = Qselector('#carregarImg');
    botaoCarregarImg.addEventListener('click', carregar);
    
    function carregar(){
        let arquivoSelecionado = uploadImagem.files[0];

        if(!arquivoSelecionado) {
            mensagemErro('#resultadoUpload','adicione uma imagem');
            return;
        }

        let img = document.createElement('img');
        img.src = URL.createObjectURL(arquivoSelecionado);

        let resultado = Qselector('#resultadoUpload');
        resultado.appendChild(img);

    }

// Questão 05
    let selectCor = Qselector('#arirang');
    let resultadoLogos = Qselector('#resultadoAri');

    selectCor.addEventListener('change', corEscolhida);

    function corEscolhida() {
        resultadoLogos.src = selectCor.value;
    }

// Questão 06
    let enviarRedes = Qselector('#enviarBtn');
    let resultadoRedes = Qselector('#redesSelecionadas');

    enviarRedes.addEventListener('click', redesSelecionadas);

    function redesSelecionadas() {
        let redes = document.getElementsByName('redesSociais');
        let selecionadas = [];

        for(let r= 0; r < redes.length; r++) {
            if (redes[r].checked) {
                selecionadas.push(redes[r].value);
            }
        }

        if(selecionadas.length == 0) {
            mensagemErro('#redesSelecionadas','Nenhuma rede social foi marcada');
            return;
        }

        resultadoRedes.innerHTML =  'As redes sociais selecionadas foram: '+ selecionadas.join(', ');
    }

// Questão 07
    let enviarHash = Qselector('#enviarHash');
    let lista = Qselector('#lista');
    
    enviarHash.addEventListener('click', salvarHashtag);
    
    function salvarHashtag() {
        let tag = document.createElement('option');
        let hashtag = Qselector('#hashtag').value;

        
        // Questão 08 -> alteração na questão 07
        if (hashtag === '') {
            mensagemErro('#resultadoHash','Você não pode enviar hashtag vazia! Por favor digite algo');
            return;
        }
        
        if (hashtag.length < 2) {
            mensagemErro('#resultadoHash','Você não pode enviar hashtag menor que 2 caracteres');
            return;
        }
        
        if (lista.children.length >= 5) {
            mensagemErro('#resultadoHash','Você não pode enviar mais que 5 hashtags;');
            return;
        }
        
        for(let h of lista.children) {
            if(h.textContent === hashtag){
                mensagemErro('#resultadoHash','Essa hashtag já existe!');
                return;
            }
            
        }
        
        tag.textContent = hashtag;
        lista.appendChild(tag);
        
    }

// Questão 09 -> alteração na questão 07
    let outputBox = Qselector('#hashSelecionada');
    let excluirHash = Qselector('#excluirHash');
    excluirHash.addEventListener('click',excluirHashtag);

    function excluirHashtag() {
        let colecao = [...lista.selectedOptions];

        for(let selecionada of colecao){
            lista.removeChild(selecionada);

        }

    }

// Questão 10
    let paraDireita = Qselector('#moverParaDireita');
    let paraEsquerda = Qselector('#moverParaEsquerda');
    let atvDisponiveis = Qselector('#ativosDisponiveis');
    let cartInvest = Qselector('#carteiraInvestimentos');
    
    atualizarBotoes();
    // Questão 11 -> letra b)
    function atualizarBotoes() {
        paraEsquerda.disabled = atvDisponiveis.options.length === 0;
        paraDireita.disabled = cartInvest.options.length === 0;
    }

    paraEsquerda.addEventListener('click',Esquerda);
    paraDireita.addEventListener('click',Direita);

    function Esquerda() {
        let atvSelecionados = [...atvDisponiveis.selectedOptions];
        // Questão 11 -> letra a)
        if(atvSelecionados.length === 0) {
            mensagemErro('#erroMoverEsquerda','Nenhum ativo foi selecionado')
            return;
        }

        for (let atvDis of atvSelecionados) {
            cartInvest.appendChild(atvDis);
        }

        atualizarBotoes();
    }

    function Direita() {
        let cartSelecionados = [...cartInvest.selectedOptions];
        // Questão 11 -> letra a)
        if(cartSelecionados.length === 0) {
            mensagemErro('#erroMoverDireita','Nenhum investimento foi selecionado')
            return;
        }

        for (let cartDis of cartSelecionados) {
            atvDisponiveis.appendChild(cartDis);
        }

        atualizarBotoes();
    }



      

    





