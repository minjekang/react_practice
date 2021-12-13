import React from 'react';
import './TicTacToe.css'
const TicTacToe = () => {
    const handleClick = () => {
        alert('test');
    }
    const Cell = () =>{
        return(
            <td onClick={() => handleClick()}>-</td>
        )
    }

    return (
        <div className='container'>
            <table>
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
