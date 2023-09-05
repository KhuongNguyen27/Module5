import { Collapse } from 'bootstrap';
import React from 'react';

const students = [
    {
        ID: 1,
        Name: 'Nguyen Van A',
        Age: 30,
        Address: 'Hà Nội',
    },
    {
        ID: 2,
        Name: 'Nguyen Van B',
        Age: 33,
        Address: 'Sài Gòn',
    }
];

function StudenList(props) {
    return (
        <table className='table' border={1}>
            <tr className='bg-light'>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
            {students.map(student => (
                <tr>
                    <td>{student.ID}</td>
                    <td>{student.Name}</td>
                    <td>{student.Age}</td>
                    <td>{student.Address}</td>
                </tr>
            ))}
        </table>
    );
}

export default StudenList;