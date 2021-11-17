import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import Player from './components/Player';

function App() {
  function url(path) {
    return process.env.NODE_ENV === 'development' ? `http://localhost:9000/${path}` : path
  }
  const [players, setPlayers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000/api/players')
      .then((response) => setPlayers(response.data))
      .catch(err => console.log(err.message))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {players.map(player => {
          return <Player player={player} key={player.player_id} />
        })}
      </header>
    </div>
  );
}

export default App;
