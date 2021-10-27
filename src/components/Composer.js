import React from 'react'
import ComposerImage from './ComposerImage'


const SpecificComposer = ({specComposer}) => {
    debugger
    
    return (
        <div 
        className='spec_composer'>
            specific composer component 
         <h1>{specComposer.name}</h1>
         <ComposerImage name={specComposer.name} image={specComposer.image_src}/> 
       <h3>{specComposer.description}</h3>
        </div>
    )
}




export default SpecificComposer; 