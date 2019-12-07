import React from 'react';

function Progress({pos, total}) {
    const style = {
        width: `${(pos + 1) / (total + 1) * 100}%`
    }
    return (
        <div className="progress">
            <div className="progress-bar" style={style} />
            <div className="progress-bg" />
            <div className="progress-label">
                {pos + 1} OF {total}
            </div>
        </div>
    );
}

export default Progress;
