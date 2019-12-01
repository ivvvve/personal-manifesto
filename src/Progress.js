import React from 'react';

function Progress({pos, total}) {
    const style = {
        width: `${(pos + 1) / (total + 1) * 100}%`
    }
    return (
        <div className="progress">
            <div className="progress-bar" style={style} />
            <div className="progress-label">
                Question {pos + 1} of {total}
            </div>
        </div>
    );
}

export default Progress;
