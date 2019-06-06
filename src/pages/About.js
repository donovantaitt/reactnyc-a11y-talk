import React, { useEffect } from 'react'

const About = (props) => {
    
    useEffect(() => {
        document.title = props.title
    }, [])

    return <h1>About</h1>
    
}

export default About