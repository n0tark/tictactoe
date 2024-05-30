import { useEffect, useState } from 'react';
import './App.css';
import Square from './components/Square';
import patterns from '../src/scripts/script';

function App() {
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
    const [player, setPlayer] = useState('O');
    const [result, setResult] = useState({ winner: 'none', state: 'none' });

    useEffect(() => {
        winner();
        tie();

        if (player == 'X') setPlayer('O');
        else setPlayer('X');
    }, [board]);

    useEffect(() => {
        if (result.state == 'won')
            alert(`Game finished! The winner is ${result.winner}`);
        if (result.state == 'tie')
            alert(`Game finished with a tie, ${result.winner} won.`);
    }, [result]);

    const chooseSquare = (square) => {
        setBoard(
            board.map((val, idx) => {
                if (idx == square && val == '') return player;
                return val;
            })
        );
    };

    const winner = () => {
        patterns.forEach((currPattern) => {
            const playerOne = board[currPattern[0]];
            if (playerOne == '') return;
            let winningPattern = true;
            currPattern.forEach((index) => {
                if (board[index] != playerOne) winningPattern = false;
            });
            if (winningPattern) {
                setResult({ winner: player, state: 'won' });
                restart();
            }
        });
    };

    const tie = () => {
        let isATie = true;
        board.forEach((square) => {
            if (square == '') isATie = false;
        });
        if (isATie) {
            setResult({ winner: 'nobody', state: 'tie' });
            restart();
        }
    };

    const restart = () => {
        setBoard(['', '', '', '', '', '', '', '', '']);
        setPlayer('O');
    };

    return (
        <div className="App">
            <div className="board">
                <div className="row">
                    <Square
                        val={board[0]}
                        chooseSquare={() => {
                            chooseSquare(0);
                        }}
                    />
                    <Square
                        val={board[1]}
                        chooseSquare={() => {
                            chooseSquare(1);
                        }}
                    />
                    <Square
                        val={board[2]}
                        chooseSquare={() => {
                            chooseSquare(2);
                        }}
                    />
                </div>
                <div className="row">
                    <Square
                        val={board[3]}
                        chooseSquare={() => {
                            chooseSquare(3);
                        }}
                    />
                    <Square
                        val={board[4]}
                        chooseSquare={() => {
                            chooseSquare(4);
                        }}
                    />
                    <Square
                        val={board[5]}
                        chooseSquare={() => {
                            chooseSquare(5);
                        }}
                    />
                </div>
                <div className="row">
                    <Square
                        val={board[6]}
                        chooseSquare={() => {
                            chooseSquare(6);
                        }}
                    />
                    <Square
                        val={board[7]}
                        chooseSquare={() => {
                            chooseSquare(7);
                        }}
                    />
                    <Square
                        val={board[8]}
                        chooseSquare={() => {
                            chooseSquare(8);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
