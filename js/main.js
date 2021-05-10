$("#staticform").submit(function (event) {
  event.preventDefault();
  $.ajax({
    url: "https://api.staticforms.xyz/submit",
    type: "POST",
    dataType: "json",
    data: $("#staticform").serialize(),
    success: function (result) {
      $("#staticform").each(function () {
        this.reset();
      });
      $("#staticform p").html("Mensagem enviada com sucesso!");
      setTimeout(function () {
        $("#staticform p").html("");
      }, 3000);
    },
    error: function (xhr, resp, text) {
      $("#staticform p").html("Erro ao enviar mensagem!");
      setTimeout(function () {
        $("#staticform p").html("");
      }, 3000);
      console.log(xhr, resp, text);
    },
  });
});

$(".title-form div").click(function () {
  $("body").toggleClass("dark-mode");
});
