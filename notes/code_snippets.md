# Code Snippets

### Step 5

link for bootstrap

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
```


### Step 6

Prompt component

```js
<div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
  <h1>Header</h1>
  <div className="col-sm-12">
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Github Username"/>
      </div>
      <div className="form-group col-sm-3 col-sm-offset-4">
        <button
          className="btn btn-block btn-success"
          type="submit">
          Continue
        </button>
      </div>
    </form>
  </div>
</div>
```

### Step 8

css

```js
var styles = {
  transparentBg: {
    background: 'transparent'
  },
  space: {
    marginTop: '25px',
  }
}

module.exports = styles;
```

### Step 24

displayObj()

```js
function displayObj(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}
```

### Step 27

ConfirmBattle component

```js

<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
  <h1>Confirm Players</h1>
  <div className='col-sm-8 col-sm-offset-2'>
    <div className="col-sm-6">
      <p className="lead">Player 1</p>
      Player 1 Info
    </div>
    <div className="col-sm-6">
      <p className="lead">Player 2</p>
      Player 2 Info
    </div>
  </div>
  <div className='col-sm-8 col-sm-offset-2'>
    <div className='col-sm-12' style={styles.space}>
      Intitiate Battle
      </div>
    <div className='col-sm-12' style={styles.space}>
      Reselect Players
    </div>
  </div>
</div>
```

### Step 29

UserDetails component

```js

function UserDetails (user) {
  return (
    <div>
      {/* check if property exists before adding li */}
      {!!user.score && <li className="list-group-item"><h3>Score: {user.score}</h3></li>}
      <li className="list-group-item"> <img src={user.info.avatar_url} alt={user.info.name + ' avatar'} className="img-rounded img-responsive"/></li>
      {user.info.name && <li className="list-group-item">Name: {user.info.name}</li>}
      <li className="list-group-item">Username: {user.info.login}</li>
      {user.info.location && <li className="list-group-item">Location: {user.info.location}</li>}
      {user.info.company && <li className="list-group-item">Company: {user.info.company}</li>}
      <li className="list-group-item">Followers: {user.info.followers}</li>
      <li className="list-group-item">Following: {user.info.following}</li>
      <li className="list-group-item">Public Repos: {user.info.public_repos}</li>
      {user.info.blog && <li className="list-group-item">Blog: <a href={user.info.blog}> {user.info.blog}</a></li>}
    </div>
  )
}

UserDetails.propTypes = {
  score: PropTypes.number,
  // shape lets us nest PropTypes definition
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
  })
}

```

### Step 34

githubHelpers.battle

```js

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
  // code .....
  battle: function(players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err) { console.warn('Error in battle:', err)})
  }
};
```

### Step 38

"start over" button

```js

<div className="col-sm-12" style={styles.space}>
  <Link to='/playerOne'>
    <button type='button' className='btn btn-lg btn-danger'>
      Start over
    </button>
  </Link>
</div>
```

### Step 39

tie UI

```js
<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
  <h1>Its a tie</h1>
  <div className="col-sm-12" style={styles.space}>
    <Link to='/playerOne'>
      <button type='button' className='btn btn-lg btn-danger'>
        Start over
      </button>
    </Link>
  </div>
</div>
```
