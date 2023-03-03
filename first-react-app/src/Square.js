import "./Square.css"

export default function Square ({color, row, showRowName, column, showColumnName}) {
    const classes = `Square ${color}`;
    const content1 = showRowName ? row : '';
    const content2 = showColumnName ? column : '';

    return (
        <div className={classes}>
            <span className="rowName">{content1}</span>
            <span className="rowColumn">{content2}</span>
        </div>
    );
}