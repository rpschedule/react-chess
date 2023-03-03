import Square from './Square.js'
import './Row.css';

export default function Row ({columns, startsWhite, rowName}) {
    let list = [];

    // create empty list to map on
    for ( let i = 0; i < columns; i++ ) {
        list.push(i);
    }

    const row = list.map( (num) => {
        
        let nameSquare = (num === 0);

        if ( (num % 2 === 0) === startsWhite) {
            return <Square key={num.toString()} color="white" row={rowName} displayName={nameSquare}/>
        }

        return <Square key={num.toString()} color="black" row={rowName} displayName={nameSquare}/>
    })

    return ( <div className="Row">
        {row}
    </div> ) 
}