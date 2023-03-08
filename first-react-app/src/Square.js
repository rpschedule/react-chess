import './Square.css'

export default function Square ({color, piece}) {
    let svg;

    switch ( piece ) {
        
    }
    
    return (
        <div className={`Square ${color}`}>
            {svg}
        </div>
    )
}