export default function loadFen (fen) {
    let i = 0;
    let out = [];

    fen = fen.replaceAll('/', '');
    const piecesOnly = fen.split(' ')[0];

    while ( i < 64 ) {
        const char = piecesOnly.split('')[i];
        console.log(char, i);

        if ( char.match(/[1-9]/) ) {
            i += parseInt(char);
        } else {
            out.push(char);
            i++;
        }
    }
}