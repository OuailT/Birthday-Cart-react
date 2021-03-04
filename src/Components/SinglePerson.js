import React from 'react'


const SinglePerson = ({person : {id, image, name, age}}) => {
    return (
        <article key={id} className="person" >
            <img src={image} alt={name}></img >
            <div>
                <h4>{name}</h4>
                <p>{age} Years</p>
            </div>
            
        </article>
    )
}

export default SinglePerson
