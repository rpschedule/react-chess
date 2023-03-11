import "./Square.css"
import { ReactComponent as BlackPawn } from './pieces/black_pawn.svg'

export default function Square ({color, row, showRowName, column, showColumnName, piece}) {
    const classes = `Square ${color}`;
    const content1 = showRowName ? row : '';
    const content2 = showColumnName ? column : '';

    return (
        <div className={classes}>
            <div className="rowName">{content1}</div>
            <div className="columnName">{content2}</div>
            <div className="piece">{<BlackPawn/>}</div>
        </div>
    );
}