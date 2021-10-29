import React from 'react';

const ComposerImage = ({name, image}) => {
    debugger 
    return(
        

        <div className='composer_img'>
            <img alt={name + ' image '} src={image} />
        </div>
    )
}

export default ComposerImage; 