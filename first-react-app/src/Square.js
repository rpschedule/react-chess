import "./Square.css"

export default function Square ({color, row, showRowName, column, showColumnName}) {
    const classes = `Square ${color}`;
    const content1 = showRowName ? row : '';
    const content2 = showColumnName ? column : '';

    return (
        <div className={classes}>
            <div className="rowName">{content1}</div>
            <div className="columnName">{content2}</div>
        </div>
    );
}