import React from 'react'
import SinglePerson from './SinglePerson'


const List = ({people}) => {
    return (
        <>
        {people.map((person)=> {
        return (
        <SinglePerson person={person}/>
        );
        })}
        
        </>
    );

};

export default List
