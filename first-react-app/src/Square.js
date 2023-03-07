import './Square.css'
import { ReactComponent as BlackBishop } from './pieces/black_bishop.svg'
import { ReactComponent as BlackKing } from './pieces/black_king.svg'
import { ReactComponent as BlackKnight } from './pieces/black_knight.svg'
import { ReactComponent as BlackPawn } from './pieces/black_pawn.svg'
import { ReactComponent as BlackQueen } from './pieces/black_queen.svg'
import { ReactComponent as BlackRook } from './pieces/black_rook.svg'
import { ReactComponent as WhiteBishop } from './pieces/white_bishop.svg'
import { ReactComponent as WhiteKing } from './pieces/white_king.svg'
import { ReactComponent as WhiteKnight } from './pieces/white_knight.svg'
import { ReactComponent as WhitePawn } from './pieces/white_pawn.svg'
import { ReactComponent as WhiteQueen } from './pieces/white_queen.svg'
import { ReactComponent as WhiteRook } from './pieces/white_rook.svg'

export default function Square ({color, piece}) {
    let svg;

    switch ( piece ) {
        case 'b': 
            svg = <BlackBishop className="Piece" />;
            break;
        case 'k': 
            svg = <BlackKing className="Piece" />;
            break;
        case 'n': 
            svg = <BlackKnight className="Piece" />;
            break;
        case 'p': 
            svg = <BlackPawn className="Piece" />;
            break;
        case 'q': 
            svg = <BlackQueen className="Piece" />;
            break;
        case 'r': 
            svg = <BlackRook className="Piece" />;
            break;
        case 'B': 
            svg = <WhiteBishop className="Piece" />;
            break;
        case 'K': 
            svg = <WhiteKing className="Piece" />;
            break;
        case 'N': 
            svg = <WhiteKnight className="Piece" />;
            break;
        case 'P': 
            svg = <WhitePawn className="Piece" />;
            break;
        case 'Q': 
            svg = <WhiteQueen className="Piece" />;
            break;
        case 'R': 
            svg = <WhiteRook className="Piece" />;
            break;
    }
    
    return (
        <div className={`Square ${color}`}>
            {svg}
        </div>
    )
}