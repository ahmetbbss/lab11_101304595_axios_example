import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetails from './UserDetails';

const PersonList = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                setPersons(res.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <h2>User List</h2>
            <div className="person-list">
                {persons.map(person => 
                    <UserDetails key={person.login.uuid} user={person} />
                )}
            </div>
        </>
    );
}

export default PersonList;
