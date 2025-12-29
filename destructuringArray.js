const athletes = [
  'Usain Bolt',
  'Andre De Grasse ',
  'Christophe Lemaitre ',
  'Adam Gemili',
  'Churandy Martina',
  'LaShawn Merritt',
  'Alonso Edward',
  'Ramil Guliyev',
];

// const logWinners = ([gold,silver,bronze]) => {
//     console.log("winners are : ", gold, silver, bronze);
// }

const logWinners = (athletes) => {
    const [, , , ...runnerUp] = athletes;
    console.log("RunnerUps are : ", runnerUp );
}

logWinners(athletes);