import React from 'react';
const students = [
    {
      ID : 1,  
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany'
    },
    {
      ID : 2,  
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico'
    },
    {
      ID : 3,  
      company: 'Ernst Handel',
      contact: 'Roland Mendel',
      country: 'Austria'
    },
    {
      ID : 4,  
      company: 'Island Trading',
      contact: 'Helen Bennett',
      country: 'UK'
    },
    {
      ID : 5,  
      company: 'Laughing Bacchus Winecellars',
      contact: 'Yoshi Tannamuri',
      country: 'Canada'
    },
    {
      ID : 6,  
      company: 'Magazzini Alimentari Riuniti',
      contact: 'Giovanni Rovelli',
      country: 'Italy'
    }
  ];
function Students(props) {
    return (
        <table  >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr>
                        <td>{student.ID}</td>
                        <td>{student.company}</td>
                        <td>{student.contact}</td>
                        <td>{student.country}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Students;