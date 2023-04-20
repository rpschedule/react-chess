import { useDrag, DragPreviewImage } from 'react-dnd'

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

export default function Piece ({ square }) {
    const image = (square.piece === 'b' && square.pieceColor === 'black') ? blackb 
        : (square.piece === 'k' && square.pieceColor === 'black') ? blackk
        : (square.piece === 'n' && square.pieceColor === 'black') ? blackn
        : (square.piece === 'p' && square.pieceColor === 'black') ? blackp
        : (square.piece === 'q' && square.pieceColor === 'black') ? blackq
        : (square.piece === 'r' && square.pieceColor === 'black') ? blackr
        : (square.piece === 'b' && square.pieceColor === 'white') ? whiteb
        : (square.piece === 'k' && square.pieceColor === 'white') ? whitek
        : (square.piece === 'n' && square.pieceColor === 'white') ? whiten
        : (square.piece === 'p' && square.pieceColor === 'white') ? whitep
        : (square.piece === 'q' && square.pieceColor === 'white') ? whiteq
        : (square.piece === 'r' && square.pieceColor === 'white') ? whiter
        : undefined;

    const [{isDragging}, drag, preview] = useDrag(() => ({
        type: 'piece',
        e: square.piece,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        
        (image !== undefined) ? 
        <>
            <DragPreviewImage connect={preview} src={image} />
            <img ref={drag} src={image} alt={square.piece} className="Piece" />
        </> : ''
    );
}