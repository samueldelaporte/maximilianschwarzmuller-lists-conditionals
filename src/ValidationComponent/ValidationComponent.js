import React from 'react';

const validationComponent = (props) => {
    return (
        <div>
            {props.text.length > 5 ?
                <span>Text long enough</span> :
                <span>Text too short</span>
            }
        </div>
    )
}

export default validationComponent;