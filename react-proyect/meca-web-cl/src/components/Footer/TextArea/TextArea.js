import React from 'react'

const TextArea = ({caption}) => {
  return (
    <textarea 
      id="textarea2" 
      className="materialize-textarea" 
      data-length="150"
      placeholder={caption}>
        
      </textarea>
  )
}

export default TextArea