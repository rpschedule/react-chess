import './Square.css'
import highlightedImage from './images/highlight.png'
const images = importAll(require.context('./images/pieces/', true, /\.(png|jpe?g|svg)$/));

function importAll(r) {
    return r.keys().map(r);
}

export default function Square({ square, index, clickHandler }) {
    let pieceIndex;

    if (square.piece === 'b' && square.pieceColor === 'black') {
        pieceIndex = 0;
    } else if (square.piece === 'k' && square.pieceColor === 'black') {
        pieceIndex = 1;
    } else if (square.piece === 'n' && square.pieceColor === 'black') {
        pieceIndex = 2;
    } else if (square.piece === 'p' && square.pieceColor === 'black') {
        pieceIndex = 3;
    } else if (square.piece === 'q' && square.pieceColor === 'black') {
        pieceIndex = 4;
    } else if (square.piece === 'r' && square.pieceColor === 'black') {
        pieceIndex = 5;
    } else if (square.piece === 'b' && square.pieceColor === 'white') {
        pieceIndex = 6;
    } else if (square.piece === 'k' && square.pieceColor === 'white') {
        pieceIndex = 7;
    } else if (square.piece === 'n' && square.pieceColor === 'white') {
        pieceIndex = 8;
    } else if (square.piece === 'p' && square.pieceColor === 'white') {
        pieceIndex = 9;
    } else if (square.piece === 'q' && square.pieceColor === 'white') {
        pieceIndex = 10;
    } else if (square.piece === 'r' && square.pieceColor === 'white') {
        pieceIndex = 11;
    }

    const content = (square.piece !== '') && <img src={images[pieceIndex]} alt={square.piece} className="piece" />;

    return (
        <div className={`Square ${square.squareColor}`} onClick={() => clickHandler(index)}>
            {content} 
            {(square.highlighted) ? <img src={highlightedImage} alt='Highlighted' className='highlighted'/> : ''}
        </div>
    )
}