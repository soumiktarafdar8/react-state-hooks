import React from 'react';
import styles from '../Person/person.module.css';

const Person = (props) => {
    return(
        <div className={`${styles.personCard}`}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Person;