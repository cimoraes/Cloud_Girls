$(".botao-placar") .click(mostraPlacar);

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Douglas"
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);//clica no botão remover///

    corpoTabela.append(linha);

    $(".placar").slideDown(500);
    scrollPlacar();
}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;

    $("html, body").animate(
    {
        scrollTop: posicaoPlacar="px"
    }, 1000);
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();//event faz com que pare o que acontece por padrão no JS, ou seja, vai parar de voltar o a href"#", par ao topo da página//
    var linha = $(this).parent().parent();// com o dólar estou dando o poder ao this, mas eu quero que remova o pai do meu pai (parent). Assim remove a linha inteira

    linha.fadeOut(1000);//fadeIn, fadeOut e Faedtoogle faz desaparecer gradativamente. Colocamos um tempo para que ele não remova de imediato. 
    setTimeout(function() {//removemos a linha após 1s
        linha.remove();
    }, 1000);
}

$("#botao-placar").click(mostraPlacar);

function mostraPlacar() {
  
        $(".placar").stop() .slideToggle(600);
        //.toggle adiciona ou esconde um elemento: - .slideDown e .SlideUp executam a transição de forma suave; .show - mostra e .hide oculta. Já o .stop só vai executar uma atividade após a execução da outra. 

    };

