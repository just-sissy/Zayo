import React from 'react'

export const Input = () => {
    return (
        <div style={{ display: 'grid', placeItems: 'center', width: '249px', height: '62px', background: "url(/src/field1.svg)", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            <input style={{ fontSize: '1.5em', maxWidth: '80%', minWidth: 0, background:'none', border: 'none', textOverflow: '".." ".."'}}></input>
        </div>
    )
}
// '&:focus': {outline: 'none', border: 'none'}

// overflow: scroll; 
// white-space: nowrap; 
// text-overflow: “..” “..”