import Square from './Square.js'
import './Row.css';

export default function Row ({columns, startsWhite}) {
    let list = [];

    // create empty list to map on
    for ( let i = 0; i < columns; i++ ) {
        list.push(i);
    }

    const row = list.map( (num) => {
        // alternate square colors
        if ( (num % 2 === 0) === startsWhite) {
            return <Square key={num.toString()} color="white"/>
        }
        return <Square key={num.toString()} color="black"/>
    })

    return ( <div className="Row">
        {row}
    </div> ) 
}