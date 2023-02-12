import React from 'react';
import {Link , useSearchParams} from 'react-router-dom'
import styled from 'styled-components';

const Materials = ({materials}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const openModal = () =>{
        searchParams.set('modal' , 'newMaterial');
        setSearchParams(searchParams)
    }

    const closeModal = () => {
        searchParams.delete('modal');
        setSearchParams(searchParams)
    }

    return (
        <Block>
            <button onClick={openModal}> + Add New Material</button>
            <ul>
            {materials.map((item,index) =>{
                return(
                    <Link to={`${item.id}/details/submitted`} key={index}>
                    <li>
                        <h2>{item.title}</h2>
                        <button>Details</button>
                    </li>
                    </Link>
                )
            })}
            </ul>

            {searchParams.has("modal") ? (
                <div>
                    <h2>Adding New Material</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita sequi nihil quisquam consequatur ipsa ratione eveniet, nemo, est, aliquam corporis id minus earum tempora reiciendis pariatur. Id molestias, ad laboriosam doloribus ratione itaque distinctio blanditiis harum magnam assumenda eius ipsam dignissimos impedit perferendis dicta earum debitis nulla soluta nostrum.</p>
                    <button onClick={closeModal}>CLOSE</button>
                </div>) : null}
        </Block>
    );
};

export default Materials;

const Block = styled.div`
    background-color: white;
    padding: 2rem;
    margin: 2rem;
`