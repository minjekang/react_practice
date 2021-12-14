import React, { useState } from 'react';
import './TicTacToe.css'
const TicTacToe = () => {
    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(''));

    const handleClick = (num) => {
        let squares = [...cells];

        if (turn === 'X'){
            squares[num] = 'X';
            setTurn('O');
        }
        else {
            squares[num] = 'O';
            setTurn('X');
        }

        setCells(squares);
    }

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
        </div>
    );
}

export default TicTacToe;
