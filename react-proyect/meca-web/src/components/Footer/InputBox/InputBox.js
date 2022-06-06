import React from 'react'

const InputBox = ({ caption, type }) => {
  return (
    <>
      {
        (type === "file") ?
          (
            <>
              <label htmlFor="cargarArchivo">
                <i className='material-icons'>file_upload</i>
                Seleccionar archivo para subir
              </label>
              <input id="cargarArchivo" type={type} placeholder={caption} style={{ display: "none" }} />
            </>
          )
          :
          (
            <input type={type} placeholder={caption} />
          )
      }
    </>
  )
}

export default InputBox