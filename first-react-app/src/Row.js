import Square from './Square.js'
import './Row.css';

function numToLetter (num) {
    return String.fromCharCode(97 + num)
}

export default function Row ({columns, startsWhite, rowName, isFinalRow}) {
    let list = [];

    // create empty list to map on
    for ( let i = 0; i < columns; i++ ) {
        list.push(i);
    }

    const row = list.map( (num) => {
        
        let showRowName = (num === 7);
        // console.log(rowName)

        if ( (num % 2 === 0) === startsWhite) {
            return <Square key={num.toString()} color="white" row={rowName} column={numToLetter(num)} showRowName={showRowName} showColumnName={isFinalRow}/>
        }

        return <Square key={num.toString()} color="black" row={rowName} column={numToLetter(num)} showRowName={showRowName} showColumnName={isFinalRow}/>
    })

    return ( <div className="Row">
        {row}
    </div> ) 
}