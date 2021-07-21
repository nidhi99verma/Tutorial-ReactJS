import React, { Component } from 'react'
import ListRenderingCard from './ListRenderingCard';

class ListRenderingCls extends Component {

    render() {
        const persons = [
            {
                id: 1,
                name: 'Nidhi',
                age: 25,
                skill: 'Python'
            },
            {
                id: 2,
                name: 'Ajai',
                age: 30,
                skill: 'PHP'
            },
            {
                id: 3,
                name: 'Khana',
                age: 5,
                skill: 'JavaScript'
            }]
    
            //const personList = persons.map( person => <h6>I am {person.name}, my age {person.age} and my skill {person.skill}.</h6>);
            //or
            const personList = persons.map( person => <ListRenderingCard key={person.id} personInfo={person} />);
    
            return (
                <div>
                    <h5>List Rendering using map method in Class component</h5>
                    {personList}
                </div>
            )
    }
}

export default ListRenderingCls


//https://codepen.io/gopinav/pen/gQpepq

// Where use index as Key?
// -The items in your list do not have a unique id.
// -The list is a static list and will not change.
// -The list will never be reordered or filtered.

