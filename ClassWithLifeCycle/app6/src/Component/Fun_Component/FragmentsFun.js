import React from 'react'
import Colummns from './Colummns';

function FragmentsFun() {
    const items = [
        {
            id: 1,
            title: 'Nidhi'
        }
    ]
    return (
        // <div>
        //     <h5>Without Fragment (extra div tag)</h5>
        // </div>

        //or
        // <React.Fragment>
        //     <h5>With React.Fragment (no extra div tag)</h5>
        // </React.Fragment>

        //or
        // <>
        //     <h5>With Fragment using &lt; &gt; (no extra div tag)</h5>
        // </>

        //scenario 1 : where fragment is require
        // <table>
        //     <tbody>
        //         <tr>
        //            <Colummns/> 
        //         </tr>
        //     </tbody>
        // </table>

        //use key atteribute inside fragment but use only with <React.Fragment> can not use with <> 
        <React.Fragment>
            <h5>Fragment in use only key attribute can pass</h5>
            {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <h6>Title</h6>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    )
}

export default FragmentsFun
