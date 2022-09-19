import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "Claudio";

  const [name, setName] = useState("Walcir");

  const changeName = () => {
    userName = "Claudio Fiuza";

    setName("Walcir Junior");
  };

  // 2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variavel: {userName}</p>
      <p>useState: {name}</p>

      <button onClick={changeName}>Change Name</button>

      {/* 2 - useState e input */}
      <p>Digite Sua Idade</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Voce tem {age} anos!</p>
      <hr />
    </div>
  );
};

export default HookUseState;
