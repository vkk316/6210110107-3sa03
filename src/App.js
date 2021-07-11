import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const words =['cat', 'dog', 'ant', 'frog', 'snake', 'python', 'bird', 'lion', 'bee', 'tiger', 'fly', 'fish', 'hydra', 'duck', 'dolphin', 'horse', 'monkey'];
var index=Math.floor(Math.random()*words.length);
function App() {
  return (
    <div style={{
      fontSize: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
  }}>
    <WordCard value={words[index]}/>
    </div> 
  );
}

export default App;