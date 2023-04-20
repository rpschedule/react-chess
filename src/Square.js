import Piece from './Piece'
import './Square.css'

import highlightedImage from './images/highlight.png'
import highlightedCaptureImage from './images/highlighted_capture.png'

export default function Square({ square, index, clickHandler }) {
    return (
        <div className={`Square ${square.squareColor}`} onClick={() => clickHandler(index)}>
            <Piece square="square" />
            <div className='highlight'>
                {(square.highlighted === 1) ?
                    <img src={highlightedImage} alt='Highlighted' className='highlighted'/> :
                    (square.highlighted === 2) ?
                        <img src={highlightedCaptureImage} alt='Highlighted Capture' className='highlightedCapture'/> :
                        ''
                }
            </div>
        </div>
    )
}