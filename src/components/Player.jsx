import { useRef, useState } from "react";

const Player = () => {
  const player = useRef();
  const [playerName, setPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setSubmitted(false);
  //   setPlayerName(value);
  // }

  const handleClick = () => {
    setPlayerName(player.current.value);
    player.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={player} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

export default Player;