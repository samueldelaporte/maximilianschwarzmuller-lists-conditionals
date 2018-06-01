import React from 'react';

const charComponent = (props) => {
    const style = {
        display: 'inline-block',
        verticalAlign: 'middle',
        padding: '10px 20px',
        textAlign: 'center',
        margin: '5px',
        border: '1px solid black',
        cursor: 'pointer',
    }

    return (
        <div style={style} onClick={props.click}>
            {props.letter}
        </div>
    )
}

export default charComponent;