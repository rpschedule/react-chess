import "./Square.css"

export default function Square ({color, row, displayName}) {
    const classes = `Square ${color}`;
    const content = displayName ? row : '';

    return (
        <div className={classes}>
            {content}
        </div>
    )
}