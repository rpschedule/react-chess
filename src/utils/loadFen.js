/***
 * Converts a FEN string to an array of pieces
 * @returns {Array} board - 64 entry array of pieces
 * @param {string} fen - The FEN string to load
 */
export default function loadFen (fen) {
    let out = Array(64).fill({}).map((square, index) => {
        // if it's an odd row, offset index by 1
        const offset = Math.floor(index / 8) % 2;
        
        let color;
        if ( (index + offset) % 2 === 0 ) color = 'white';
        else color = 'black';
        
        return {
            piece: '',
            pieceColor: '',
            squareColor: color,
            hasMoved: false,
            file: String.fromCharCode(97 + index % 8),
            rank: Math.floor(index/8) + 1,
            pawnJustMovedTwice: false, // will be false if is not pawn
    }})
    
    // cleans up the fen string for processing
    fen = fen.replaceAll('/', '');
    const piecesOnly = fen.split(' ')[0];
    
    // TODO: Turn into for loop
    let i = 0;
    let offset = 0;
    while ( i < piecesOnly.length ) {
        const char = piecesOnly.split('')[i];

        if ( char.match(/[1-9]/) ) {
            // The -1 here is to account for i always incrementing no matter what.
            // Without it, each number practically has 1 added to it, offsetting
            // the entire thing and breaking it.
            offset += parseInt(char) - 1;
        } else {
            out[i+offset].piece = char.toLowerCase();
            out[i+offset].pieceColor = isUpperCase(char) ? 'white' : 'black';
        }

        i++;
    }

    return out;
}

// with more information in the board array, other files no longer need this
function isUpperCase (string) {
    // checks if string is not char
	if ( !/[a-z]/.test(string.toLowerCase()) ) return null;

    if ( string.toUpperCase() === string ) return true;
    return false;
}