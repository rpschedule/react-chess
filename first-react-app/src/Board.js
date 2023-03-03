import Row from './Row.js';
import './Board.css'

function Board () {
    let rows_empty = [];

    for ( let i = 0; i < 8; i++ ) {
        rows_empty.push(i);
    }

    const rows_final = rows_empty.map((num) => {
        // alertnate rows starting with white
        const startsWhite = num % 2 === 0;
        return <Row columns={8} key={num} startsWhite={startsWhite} rowName={8 - num} isFinalRow={num === 8}/>
    })

    return (
        <div className="Board">
            {rows_final}
        </div>
    );
}

export default Board;