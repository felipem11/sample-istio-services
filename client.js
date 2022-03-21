function consultarRestaurantes() {
    $.ajax({
        url: "http://www.felipe.com:80/caller/ping",
        type: "get",

        success: function(response) {
            $("#conteudo").text(JSON.stringify(response));
        }
    });
}

function fecharRestaurante() {
    $.ajax({
        url: "http://localhost/caller/ping",
        type: "put",

        success: function(response) {
            $("#conteudo2").text(JSON.stringify(response));
            alert("Restaurante foi fechado!");
        }
    });
}

$("#botao").click(consultarRestaurantes);
$("#botao2").click(fecharRestaurante);