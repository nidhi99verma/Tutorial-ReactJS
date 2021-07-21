import React from 'react'

function ListRenderingCard({personInfo, key}) {
    return (
        <div>
            <h6>I am {personInfo.name}, my age {personInfo.age} and my skill {personInfo.skill}.</h6>
            {/* {key} */}{/* get warning  when try to use key because key prop is reserved*/}
        </div>
    )
}

export default ListRenderingCard
