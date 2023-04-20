import { useDrag } from 'react-dnd'

import './Piece.css'

const images = importAll(require.context('./images/pieces/', true, /\.(png|jpe?g|svg)$/));

function importAll(r) {
    return r.keys().map(r);
}

export default function Piece (square) {
    const pieceIndex = (square.piece === 'b' && square.pieceColor === 'black') ? 0 :
        (square.piece === 'k' && square.pieceColor === 'black') ? 1 :
        (square.piece === 'n' && square.pieceColor === 'black') ? 2 :
        (square.piece === 'p' && square.pieceColor === 'black') ? 3 :
        (square.piece === 'q' && square.pieceColor === 'black') ? 4 :
        (square.piece === 'r' && square.pieceColor === 'black') ? 5 :
        (square.piece === 'b' && square.pieceColor === 'white') ? 6 :
        (square.piece === 'k' && square.pieceColor === 'white') ? 7 :
        (square.piece === 'n' && square.pieceColor === 'white') ? 8 :
        (square.piece === 'p' && square.pieceColor === 'white') ? 9 :
        (square.piece === 'q' && square.pieceColor === 'white') ? 10 :
        (square.piece === 'r' && square.pieceColor === 'white') ? 11 : undefined;

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'piece',
        e: square.piece,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        (square.piece !== '') && <img ref={drag} src={images[pieceIndex]} alt={square.piece} className="Piece" />
    );
}