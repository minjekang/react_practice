import React from 'react';

const TicTacToe = () => {
    const Cell = () =>{
        return(
            <td>-</td>
        )
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <Cell/>
                        <Cell/>
                        <Cell/>
                    </tr>
                    <tr>
                        <Cell/>
                        <Cell/>
                        <Cell/>
                    </tr>
                    <tr>
                        <Cell/>
                        <Cell/>
                        <Cell/>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TicTacToe;
