import getLegalMoves from "./getLegalMoves";

/**
 * @param {array} board
 * @param {integer} origin - The index of the origin
 * @returns {board} - all legal squares are given the property highlighted: true
 */
export default function highlightLegalMoves (board, origin) {
    const legalMoves = getLegalMoves(board, origin).moves;

    return board.map((square, index) => Object.assign(square, {
        highlighted: legalMoves.includes(index)
    }));
}