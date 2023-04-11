/**
 * Removes highlights from the board
 * @param {array} board 
 * @returns {array} The board with all squares' highlighted property set to false
 */
export default function removeHighlights (board) {
    return board.map(square => Object.assign(square, {
        highlighted: false
    }))
}