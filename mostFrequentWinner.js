// create an array of each world cup object

const worldcups = [
  { team: "WI", year: 1975 },
  { team: "WI", year: 1979 },
  { team: "INDIA", year: 1983 },
  { team: "AUS", year: 1987 },
  { team: "PAK", year: 1992 },
  { team: "SRI_LANKA", year: 1996 },
  { team: "AUS", year: 1999 },
  { team: "AUS", year: 2003 },
  { team: "AUS", year: 2007 },
  { team: "INDIA", year: 2011 },
  { team: "AUS", year: 2015 },
  { team: "ENG", year: 2019 },
  { team: "AUS", year: 2023 },
];


// write a function to get team and their winning years 

function getTeamWinningYears() {
    let winningYear = {};

    for ( let wc of worldcups){
        console.log(wc);

    }
    return winningYear;
}

console.log("team and their winning years ", getTeamWinningYears());

// write function to get winning friquency of each team on given array or world cups
function getFrequency() {
    let winningNumbers = {};

    for(let wc of worldcups){
        if(!winningNumbers.hasOwnProperty(wc.team)){
            winningNumbers[wc.team] = 1;
        }else{
            winningNumbers[wc.team] += 1;
        }
    }
    return winningNumbers;
}

let teamsWinningCount = getFrequency();
console.log(teamsWinningCount);


// write function to get team with most number of wins

function getTeamWithMostWins(teamsWinningCount) {
    let teams = Object.keys(teamsWinningCount);
    let mostWins = 0;
    let winner = null;
    for (let team of teams){
        if(teamsWinningCount[team] > mostWins) {
            mostWins = teamsWinningCount[team];
            winner = team;
        }
    }
    return {
         
        winner,
        mostWins
    }
}

let winnerTeam = getTeamWithMostWins(teamsWinningCount);

console.log("team who won most of the time is : " , winnerTeam);