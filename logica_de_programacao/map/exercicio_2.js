/** @format */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let reservas = new Map();

function reservarSala() {
  rl.question("Nome do evento: ", (evento) => {
    rl.question("Sala desejada: ", (sala) => {
      rl.question("Horário da reserva: ", (horario) => {
        if (!reservas.has(horario)) {
          reservas.set(horario, [{ evento, sala }]);

          console.log(
            `Reserva para "${evento}" na sala ${sala} às ${horario} efetuada com sucesso.`
          );
          exibirMenu();
        } else {
          const reservaHorario = reservas.get(horario);

          const reservaExistente = reservaHorario.find(
            (reserva) => reserva.sala === sala
          );

          if (!reservaExistente) {
            reservaHorario.push({ evento, sala });
            console.log(
              `Reserva para "${evento}" na sala ${sala} às ${horario} efetuada com sucesso.`
            );
          } else {
            console.log(
              `Já existe uma reserva para a sala ${sala} às ${horario}.`
            );
          }
          exibirMenu();
        }
      });
    });
  });
}

function verificarDisponibilidade() {
  rl.question("Sala desejada: ", (sala) => {
    rl.question("Horário desejado: ", (horario) => {
      if (!reservas.has(horario)) {
        console.log(`A sala ${sala} está disponível às ${horario}`);
      } else {
        const reservaHorario = reservas.get(horario);

        const reservaSala = reservaHorario.find(
          (reserva) => reserva.sala === sala
        );

        if (!reservaSala) {
          console.log(`A sala ${sala} está disponível às ${horario}`);
        } else {
          console.log(`A sala ${sala} está ocupada às ${horario}`);
        }
      }
      exibirMenu();
    });
  });
}

function cancelarReserva() {
  rl.question("Nome do evento a ser cancelado: ", (evento) => {
    let removido = false;

    reservas.forEach((reservaHorario, horario) => {
      const index = reservaHorario.findIndex(
        (reserva) => reserva.evento === evento
      );

      if (index !== -1) {
        reservaHorario.splice(index, 1);
        removido = true;

        console.log(`Reserva para "${evento}" cancelada`);

        if (reservaHorario.length === 0) {
          reservas.delete(horario);
        }
      }
    });

    if (!removido) {
      console.log(`Evento "${evento}" não encontrado`);
    }

    exibirMenu();
  });
}

function exibirReservas() {
  console.log("\nLista de reservas:");

  if (reservas.size === 0) {
    console.log("Nenhuma reserva cadastrada.");
  } else {
    reservas.forEach((reservaHorario, horario) => {
      reservaHorario.forEach((reserva) => {
        console.log(
          `Evento: ${reserva.evento}, Sala: ${reserva.sala}, Horário: ${horario}`
        );
      });
    });
  }

  exibirMenu();
}

function exibirMenu() {
  console.log("\nEscolha uma opção:");
  console.log("1. Reservar Sala");
  console.log("2. Verificar Disponibilidade");
  console.log("3. Cancelar Reserva");
  console.log("4. Exibir Reservas");
  console.log("5. Sair");

  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        reservarSala();
        break;
      case "2":
        verificarDisponibilidade();
        break;
      case "3":
        cancelarReserva();
        break;
      case "4":
        exibirReservas();
        break;
      case "5":
        console.log("Encerrando o programa!");
        rl.close();
        break;
      default:
        console.log("Opção inválida. Tente novamente!");
        exibirMenu();
    }
  });
}

exibirMenu();
