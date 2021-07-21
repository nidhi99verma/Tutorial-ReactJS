import React from 'react';
import ListRenderingCard from './ListRenderingCard';

function ListRenderingFun() {

    // const names = ['Ram', 'Nidhi', 'Ajai'];

    // return (
    //     <div>
    //         <h5>List Rendering in Function</h5>
            
    //         {/* <h6>◼◾{names[0]}</h6>
    //         <h6>◼◾{names[1]}</h6>
    //         <h6>◼◾{names[2]}</h6> */}

    //         {/* right way */}

    //         {
    //             names.map( name => <h6>◼◾{name}</h6>)
    //         }
    //     </div>
    // )

//OR

    // const names = ['Ram', 'Nidhi', 'Ajai'];
    // const nameList =  names.map( name => <h6>◼◾{name}</h6>)

    // return <div>{nameList}</div>

//OR

//     const persons = [
//         {
//             id: 1,
//             name: 'Nidhi',
//             age: 25,
//             skill: 'Python'
//         },
//         {
//             id: 2,
//             name: 'Ajai',
//             age: 30,
//             skill: 'PHP'
//         },
//         {
//             id: 3,
//             name: 'Khana',
//             age: 5,
//             skill: 'JavaScript'
//         }]

//         //const personList = persons.map( person => <h6>I am {person.name}, my age {person.age} and my skill {person.skill}.</h6>);
//         //or
//         const personList = persons.map( person => <ListRenderingCard key={person.id} personInfo = {person}/>);

//         return (
//             <div>
//                 <h5>List Rendering using map method in Functional component</h5>
//                 {personList}
//             </div>
//         )
// }

// export default ListRenderingFun


//https://codepen.io/gopinav/pen/gQpepq

// Where use index as Key?
// -The items in your list do not have a unique id.
// -The list is a static list and will not change.
// -The list will never be reordered or filtered.

//case : index as key

    const names = ['Ram', 'Nidhi', 'Ajai'];
    const namesList = names.map((name, index) => <h6 key={index}>{index} {name}</h6>);

    return <div>{namesList}</div>

}

export default ListRenderingFun