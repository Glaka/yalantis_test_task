import * as React from 'react';
import styled from 'styled-components';
import { logout, login } from '../../reducers/users/actions';
import { useDispatch } from 'react-redux';

const HeaderSC = styled.div`
    background-color: #7793ff;
    border: none;
    color: white;
    padding: 5px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 0;
    display: flex;
    width: 100%;
    position: fixed;
    // justify-content: center;
    // text-transform: uppercase;
    // box-sizing: border-box;
`;

export const Header: React.FC = (params) => {
    const dispatch = useDispatch();
    return (
        <HeaderSC>
            <p>username: username</p>
            <button
                type="button"
                onClick={() => {
                    dispatch(login());
                }}
            >
                login
            </button>
            <button
                type="button"
                onClick={() => {
                    dispatch(logout());
                }}
            >
                logout
            </button>
        </HeaderSC>
    );
};
