import Row from "./Row";

function Board ({rows, columns}) {
    return (
        <>
            <Row columns="{columns}"/>
        </>
    );
}

export default Board;