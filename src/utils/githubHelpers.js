var axios = require('axios');
var githubConfig = require('../config/secrets').github;

var param = '?client_id=' + githubConfig.clientId
  + "&client_secret=" + githubConfig.clientSecret;

function getUserInfo(username) {
  // axios returns a promise
  return axios.get('https://api.github.com/users/' + username + param);
}

// get repos for a user.
// github api has a limit of retrieving 100 items.
function getRepos(username){
  return axios.get(
    'https://api.github.com/users/' + username + '/repos' + param + '&per_page=100'
  );
}

// get the sum of stars on all repos
function getTotalStars(repos) {
  return repos.data.reduce(function(prev, current){
    return prev + current.stargazers_count;
  }, 0);
}

// return an object that has followers and totalStars
function getPlayersData(player) {
  // player.login is the username
  return getRepos(player.login)
     // pass the repos from getRepos into getTotalStars
    .then(getTotalStars)
    .then(function(totalStars){
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

// return an array of scores.
// players is an array of two objects. each object has follwers and totalStars
function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

var helpers = {
  getPlayersInfo: function(players) {
    // call getUserInfo for each player.
    // give axios.all an array of promises. when each promises is resolved,
    // then axios.all().then() is going to run
    return axios.all(
      [getUserInfo(players[0]), getUserInfo(players[1])]
    )
    .then(function(results){
      return [results[0].data, results[1].data]
    })
    // if there are any errors, log the errors
    .catch(function(err){
      console.warn('error in getPlayersInfo', err)
    })
  },

  battle: function(players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err) { console.warn('Error in battle:', err)})
  }
};

module.exports = helpers;
