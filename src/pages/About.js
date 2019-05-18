import React from 'react'
import useTitle from '../useTitle';

const About = (props) => {
    useTitle(props.title)
    return <h1>About</h1>
}

export default About