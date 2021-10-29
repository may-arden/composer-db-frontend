import React from 'react'
import ComposerImage from './ComposerImage'


const SpecificComposer = ({specComposer}) => {
    // debugger
    
    return (
        <div 
        className='spec_composer'>
            <h1>{specComposer.name}</h1> 
            <ComposerImage image={specComposer.image_src} name={specComposer.name}/> 
            <h3>{specComposer.description}</h3>
        </div>
    )
}




export default SpecificComposer; 