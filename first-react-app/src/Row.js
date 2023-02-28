import Square from './Square.js';

export default function Row ({columns}) {
    let list = [];

    for ( let i = 0; i < columns; i++ ) {
        list.push(i);
    }

    const row = list.map( (num) => 
        <Square key={num.toString()} />
    )

    return ( <>
        {row}
    </> ) 
}