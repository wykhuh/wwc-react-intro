var axios = require('axios');
var githubConfig = require('../config/secrets').github;

var param = '?client_id=' + githubConfig.clientId
  + "&client_secret=" + githubConfig.clientSecret;

function getUserInfo(username) {
  // axios returns a promise
  return axios.get('https://api.github.com/users/' + username + param);
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
  }
};

module.exports = helpers;
