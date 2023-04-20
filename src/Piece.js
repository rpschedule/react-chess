import { useDrag } from 'react-dnd'

import './Piece.css'

import blackq from './images/pieces/black/q.png'
import blackn from './images/pieces/black/n.png'
import blackr from './images/pieces/black/r.png'
import blackb from './images/pieces/black/b.png'
import blackp from './images/pieces/black/p.png'
import blackk from './images/pieces/black/k.png'
import whiteq from './images/pieces/white/Q.png'
import whiten from './images/pieces/white/N.png'
import whiter from './images/pieces/white/R.png'
import whiteb from './images/pieces/white/B.png'
import whitep from './images/pieces/white/P.png'
import whitek from './images/pieces/white/K.png'

export default function Piece (square) {
    const image = (square.piece === 'b' && square.pieceColor === 'black') ? blackb :
        (square.piece === 'k' && square.pieceColor === 'black') ? blackk :
        (square.piece === 'n' && square.pieceColor === 'black') ? blackn :
        (square.piece === 'p' && square.pieceColor === 'black') ? blackp :
        (square.piece === 'q' && square.pieceColor === 'black') ? blackq :
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
        (pieceIndex !== undefined) ? <img ref={drag} src={images[pieceIndex]} alt={square.piece} className="Piece" /> : ''
    );
}