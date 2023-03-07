import './Square.css'

export default function Square ({color, piece}) {
    return (
        <div className={`Square ${color}`}>
            {piece}
        </div>
    )
}