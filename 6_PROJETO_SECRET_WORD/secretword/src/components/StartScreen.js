import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no Botao abaixo para começar a jogar</p>
      <button onClick={startGame}>Começao o Jogo</button>
    </div>
  );
};

export default StartScreen;
