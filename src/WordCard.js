import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        setState({ ...state, guess })
        if (guess.length === state.word.length) {
            if (guess === state.word) {
                console.log('yeah!')
                setState({ ...state, guess: '', completed: true })
            } else {
                console.log('reset')
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
            }
        }
    }

    const resetGame = () => {
        console.log('Reset game')
        setState(prepareStateFromWord(props.value))
    }

    if (!state.completed) {
        return (
            <div>
                <div> {`Total Attemps: ${state.attempt}`} </div>
                {state.chars.map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} />)}
            </div>
        );
    } else {
        return (
            <div className='centered'>
                <div style={{
                    fontSize: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 5,
                }}>CONGRATS</div>
                You WIN with {state.attempt} attempts.
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 10,
                }}>
                    <button className='button' onClick={resetGame}>REPLAY</button>
                </div>
            </div>
        );
    }

}