import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
const pageState = [
    {
        path: '/',
        text: 'Test1'
    },
    {
        path: '/h/myHub',
        text: 'myHub'
    },
    {
        path: '/test3',
        text: 'Test3'
    }
]

const Pages = props => {
    return(
        <ul>
            {pageState.map((page, index) => {
                return <li key={index}><Link to={page.path}>{page.text}</Link></li>
            })}
        </ul>
    )
}

export default Pages;