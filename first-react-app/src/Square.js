import "./Square.css"

export default function Square ({color, row, displayName}) {
    const classes = `Square ${color}`;
    // console.log( row, displayName )
    const content = displayName ? row : '';
    // console.log( content )

    return (
        <div className={classes}>
            {content}
        </div>
    )
}