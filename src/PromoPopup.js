import './PromoPopup.css'

import blackq from './pieces/black/q.png'
import blackn from './pieces/black/n.png'
import blackr from './pieces/black/r.png'
import blackb from './pieces/black/b.png'
import whiteq from './pieces/white/Q.png'
import whiten from './pieces/white/N.png'
import whiter from './pieces/white/R.png'
import whiteb from './pieces/white/B.png'

/**
 * Piece selection popup for when a pawn promotes
 * @param {array} board - The board
 * @param {integer} origin - The index of the promoting pawn's origin
 * @param {integer} destination - The index of the promoting pawn's destination
 */
export default function PromoPopup ({board, origin, destination}) {
    return (
        <div className='PromoPopup'>
            <img src={board[origin].pieceColor === 'black' ? blackq : whiteq } alt='Queen' className='Piece' />
            <img src={board[origin].pieceColor === 'black' ? blackn : whiten } alt='Knight' className='Piece' />
            <img src={board[origin].pieceColor === 'black' ? blackr : whiter } alt='Rook' className='Piece' />
            <img src={board[origin].pieceColor === 'black' ? blackb : whiteb } alt='Bishop' className='Piece' />
        </div>
    )
}