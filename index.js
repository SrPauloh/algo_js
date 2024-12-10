const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function cadastroEvento() {
  rl.question("Informe a data do evento (formato YYYY-MM-DD): ", (dataEvento) => {
    const hoje = new Date();
    const dataEventoFormatada = new Date(dataEvento);

    
    if (isNaN(dataEventoFormatada) || dataEventoFormatada <= hoje) {
      console.log("Data inválida! O evento deve ser em uma data futura.");
      rl.close();
      return;
    }

    rl.question(
      "Informe o número total de participantes (máx 100): ",
      (numParticipantes) => {
        if (numParticipantes > 100) {
          console.log("Cadastro negado! O limite máximo é de 100 participantes.");
          rl.close();
          return;
        }

        rl.question(
          "Informe a idade do participante (mín 18 anos): ",
          (idade) => {
            if (idade < 18) {
              console.log("Cadastro negado! Idade mínima é de 18 anos.");
            } else {
              console.log(
                "Evento cadastrado com sucesso! Aqui estão os detalhes:"
              );
              console.log(`- Data do evento: ${dataEvento}`);
              console.log(`- Número de participantes: ${numParticipantes}`);
            }
            rl.close();
          }
        );
      }
    );
  });
}

cadastroEvento();
