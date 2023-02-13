import React from 'react';
import {Link , useSearchParams} from 'react-router-dom'
import styled from 'styled-components';
import Button from '../components/UI/Button';

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
            <Button onClick={openModal} color='orange'> + Add New Material</Button>
            <StyledList>
            {materials.map((item,index) =>{
                return(
                    <Link to={`${item.id}/details`} key={index}>
                    <li>
                        <h2>{item.title}</h2>
                        <Button>Details</Button>
                    </li>
                    </Link>
                )
            })}
            </StyledList>

            {searchParams.has("modal") ? (
                <Modal>
                    <h2>Adding New Material</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita sequi nihil quisquam consequatur ipsa ratione eveniet, nemo, est, aliquam corporis id minus earum tempora reiciendis pariatur. Id molestias, ad laboriosam doloribus ratione itaque distinctio blanditiis harum magnam assumenda eius ipsam dignissimos impedit perferendis dicta earum debitis nulla soluta nostrum.</p>
                    <Button onClick={closeModal}>CLOSE</Button>
                </Modal>) : null}
        </Block>
    );
};

export default Materials;

const Block = styled.div`
    background-color: white;
    padding: 2rem;
    margin: 2rem;
`

const Modal = styled.div`
    width: 600px;
    position: fixed;
    padding: 1.5rem;
    top: 25%;
    left: 35%;
    background-color: #b64b9d;
    border-radius: 12px;
    color: white;
`


const StyledList = styled.ul`
width: 60rem;

li{
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #c8c3c3;
    margin-bottom: 1rem;
    margin-left: 2rem;
    padding: 1rem;
    border-radius: 12px;
}
    a{
        text-decoration: none;
    }
`