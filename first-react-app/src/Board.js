import Row from './Row.js';
import './Board.css'

function numToLetter (num) {
    String.fromCharCode(97 + num)
}

function Board () {
    let rows_empty = [];

    for ( let i = 0; i < 8; i++ ) {
        rows_empty.push(i);
    }

    const rows_final = rows_empty.map((num) => {
        // alertnate rows starting with white
        const startsWhite = num % 2 === 0;
        return <Row columns={8} key={num} startsWhite={startsWhite} rowName={numToLetter(num)}/>
    })

    return (
        <div className="Board">
            {rows_final}
        </div>
    );
}

export default Board;