import React from 'react'

function ErrorParentFun({heroName}) {
    if (heroName === 'Joker'){
        throw new Error('Not a hero!')
    }
    return (
        <div>
            <h6>{heroName}</h6>
        </div>
    )
}

export default ErrorParentFun
