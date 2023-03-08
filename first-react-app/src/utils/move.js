export default function move(board, origin, destination) {
    let out = board;
    board[destination] = board[origin];
    board[origin] = '';
    return out;
}