import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
const Students = ({students}) => {
    return (
        <Block>
            <ul>
            {students.map((item,index) => {
                return (
                    <Link to={`${item.id}/details`} key={index}>
                        <li> <h2>{item.studentName}</h2></li>
                        <button>Details</button>

                    </Link>
                )
            })}
            </ul>
        </Block>
    );
};

export default Students;

const Block = styled.div`
    background-color: white;
    padding: 2rem;
    margin:  2rem;
`