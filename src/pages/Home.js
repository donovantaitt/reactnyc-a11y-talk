import React from 'react'
import useTitle from '../useTitle';

const Home = (props) => {
    useTitle(props.title)
    return <h1>Home</h1>
}

export default Home