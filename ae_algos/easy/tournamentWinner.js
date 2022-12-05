// There is an algorithms touranment taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for reach competition, one team is designated the home team, while the other team is the away team. In each competition there is always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receivess the most amount of points.

// Given an array of pairs respresenting the team that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named "competition" and "results", respectively. The "competitions" array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The "results" array contains information about the winner of each corresponding competition in the the "competitions" array. Specifically, "results[i]" donotes the winner of "competitions[i]", where 1 in the "results" array means that the home team in the corresponding competition won and a 0 means that the away team won.

// It's guarenteed that exactly one team will win the tournament that each team will compete against all other teams exactly once. It's also guarentees that the tournament will always have at least two teams.

function tournamentWinner(competitions, results) {
    const scoreMap = {};
    let winner = {score : 0, name: ""};
    for (let i = 0; i < competitions.length; i++) {
        let homeTeam = competitions[i][0];
        let awayTeam = competitions[i][1];

        if (results[i] === 0) {
            scoreMap[awayTeam] = (scoreMap[awayTeam] || 0) + 3;
            console.log(scoreMap);
        } else {
            scoreMap[homeTeam] = (scoreMap[homeTeam] || 0) + 3;
            console.log(scoreMap);
        }

        if (scoreMap[awayTeam] > winner.score) {
            winner = {score: scoreMap[awayTeam], name: awayTeam};
        } else if (scoreMap[homeTeam] >= winner.score) {
            winner = {score: scoreMap[homeTeam], name: homeTeam};
        }
    }
    return winner.name;
}

console.log(tournamentWinner([["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [0, 0, 1]));
console.log(tournamentWinner([["Bulls", "Eagles"]], [1]));

// O(n) - length of competitions list or number of results.
// O(k) - number of teams competing in tournament. Comes from scores data structure. At most will store k + 1 teams.

//test branch 2 