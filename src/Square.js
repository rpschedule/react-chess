import { useDrop } from 'react-dnd'

import Piece from './Piece'
import './Square.css'

import highlightedImage from './images/highlight.png'
import highlightedCaptureImage from './images/highlighted_capture.png'

export default function Square({ square, clickHandler, draggingHandler, dropHandler }) {
    const [{isOver, item}, drop] = useDrop(() => ({
        accept: 'piece',
        drop: () => dropHandler(square.index, item),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            item: monitor.getItem()
        })
    }))

    return (
        <div ref={drop} className={`Square ${square.squareColor}`} onClick={() => clickHandler(square.index)}>
            <Piece square={square} draggingHandler={draggingHandler}/>
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