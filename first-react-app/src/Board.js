import Row from "./Row";

function Board ({rows, columns}) {
    let rows_empty = [];

    for ( let i = 0; i < rows; i++ ) {
        rows_empty.push(i);
    }

    const rows_final = rows_empty.map((num) => {
        // alertnate rows starting with white
        const startsWhite = num % 2 === 1
        return <Row columns={columns} key={num} startsWhite={startsWhite}/>
    })

    return (
        <div className="Board">
            {rows_final}
        </div>
    );
}

export default Board;