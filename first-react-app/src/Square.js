import './Square.css'
const images = importAll(require.context('./pieces/', true, /\.(png|jpe?g|svg)$/));

function importAll(r) {
    return r.keys().map(r);
}

export default function Square({ color, piece }) {
    let pieceIndex;

    switch (piece) {
        case 'b':
            pieceIndex = 0;
            break;
        case 'k':
            pieceIndex = 1;
            break;
        case 'n':
            pieceIndex = 2;
            break;
        case 'p':
            pieceIndex = 3;
            break;
        case 'q':
            pieceIndex = 4;
            break;
        case 'r':
            pieceIndex = 5;
            break;
        case 'B':
            pieceIndex = 6;
            break;
        case 'K':
            pieceIndex = 7;
            break;
        case 'N':
            pieceIndex = 8;
            break;
        case 'P':
            pieceIndex = 9;
            break;
        case 'Q':
            pieceIndex = 10;
            break;
        case 'R':
            pieceIndex = 11;
            break;
        default:
            break;
    }

    const content = (piece !== '') ? <img src={images[pieceIndex]} alt={piece} className="Piece" /> : '';

    return (
        <div className={`Square ${color}`}>
            {content}
        </div>
    )
}