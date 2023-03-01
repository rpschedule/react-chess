import Row from "./Row";

function Board ({rows, columns}) {
    let rows_empty = [];

    for ( let i = 0; i < rows; i++ ) {
        rows_empty.push(i);
    }

    const rows_final = rows_empty.map((num) =>
        <Row columns={columns} key={num} />
    )

    return (
        <>
            {rows_final}
        </>
    );
}

export default Board;