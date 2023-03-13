export default function loadFen (fen) {
    let i = 0;
    let offset = 0;
    let out = Array(64).fill('');

    fen = fen.replaceAll('/', '');
    const piecesOnly = fen.split(' ')[0];

    while ( i < piecesOnly.length ) {
        const char = piecesOnly.split('')[i];

        if ( char.match(/[1-9]/) ) {
            // The -1 here is to account for i always incrementing no matter what.
            // Without it, each number practically has 1 added to it, offsetting
            // the entire thing and making it disfunctional.
            offset += parseInt(char) - 1;
        } else {
            out[i+offset] = char;
        }

        i++;
    }

    return out;
}