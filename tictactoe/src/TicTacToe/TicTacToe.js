import React, { useState } from 'react';
import './TicTacToe.css'
const TicTacToe = () => {
    const [turn, setTurn] = useState('🌝');
    const [cells, setCells] = useState(Array(10).fill(''));
    const [winner, setWinner] = useState();
    
    const checkForWinner = (squares) => {
        let combos = {
            across: [
                [1,2,3],
                [4,5,6],
                [7,8,9],
            ],
            down: [
                [1,4,7],
                [2,5,8],
                [3,6,9],
            ],
            diagnol: [
                [1,5,9],
                [3,5,7],
            ],
        }
        for(let combo in combos){
            combos[combo].forEach((pattern) => {
                if(
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === '' 
                ){}
                else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]] 
                ){
                    setWinner(squares[pattern[0]]);
                }
            });
        }
    }
    const handleClick = (num) => {
        if(cells[num] !== ''){
            alert('다른거 눌러.');
            return;
        }

        let squares = [...cells];

        if (turn === '🌝'){
            squares[num] = '🌝';
            setTurn('🌚');
        }
        else {
            squares[num] = '🌚';
            setTurn('🌝');
        }

        checkForWinner(squares);
        setCells(squares);
    };

    const handleRestart = () => {
        setWinner(null);
        setCells(Array(10).fill(''))
        setTurn('🌝');
    };

    const Cell = ({num}) =>{
        return(
            <td onClick={() => handleClick(num)}>{cells[num]}</td>
        )
    }

    return (
        <div className='container'>
            <table>
                Turn: {turn}
                <tbody>
                    <tr>
                        <Cell num={1}/>
                        <Cell num={2}/>
                        <Cell num={3}/>
                    </tr>
                    <tr>
                        <Cell num={4}/>
                        <Cell num={5}/>
                        <Cell num={6}/>
                    </tr>
                    <tr>
                        <Cell num={7}/>
                        <Cell num={8}/>
                        <Cell num={9}/>
                    </tr>
                </tbody>
            </table>
            {winner && (
                <>
                    <p>{winner} win!</p>
                    <button className='re' onClick={() => handleRestart()}>Re</button>
                </>
            )}
        </div>
    );
}

export default TicTacToe;
