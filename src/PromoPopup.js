import './PromoPopup.css'

import blackq from './images/pieces/black/q.png'
import blackn from './images/pieces/black/n.png'
import blackr from './images/pieces/black/r.png'
import blackb from './images/pieces/black/b.png'
import whiteq from './images/pieces/white/Q.png'
import whiten from './images/pieces/white/N.png'
import whiter from './images/pieces/white/R.png'
import whiteb from './images/pieces/white/B.png'

/**
 * Piece selection popup for when a pawn promotes
 * @param {array} board - The board
 * @param {integer} origin - The index of the promoting pawn's origin
 * @param {integer} destination - The index of the promoting pawn's destination
 * @param {function} onclick - What function to run - ran as so: foo(pieceSelected, origin, destination, pieceColor)
 */
export default function PromoPopup ({board, origin, destination, onclick}) {
    return (
        <div className='PromoPopup'>
            <img src={board[origin].pieceColor === 'black' ? blackq : whiteq } alt='Queen' className='Piece' onClick={() => { onclick('q', origin, destination) }}/>
            <img src={board[origin].pieceColor === 'black' ? blackn : whiten } alt='Knight' className='Piece' onClick={() => { onclick('n', origin, destination) }}/>
            <img src={board[origin].pieceColor === 'black' ? blackr : whiter } alt='Rook' className='Piece' onClick={() => { onclick('r', origin, destination) }}/>
            <img src={board[origin].pieceColor === 'black' ? blackb : whiteb } alt='Bishop' className='Piece' onClick={() => { onclick('b', origin, destination) }}/>
        </div>
    )
}