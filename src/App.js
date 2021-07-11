import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "Hello";
function App() {
  return (
    <div style={{
      fontSize: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
  }}>
    <WordCard value={word}/>
    </div> 
  );
}

export default App;
