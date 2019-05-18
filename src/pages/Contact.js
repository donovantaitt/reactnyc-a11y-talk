import React from 'react'
import useTitle from '../useTitle';

const Contact = (props) => {
    useTitle(props.title)
    return <h1>Contact</h1>
}

export default Contact