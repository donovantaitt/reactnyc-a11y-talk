import { Helmet } from 'react-helmet'
import React from 'react'

const About = (props) => {
    return(
        <>
            <h1>About</h1>
            <Helmet>
                <title>{props.title}</title>
            </Helmet>
        </>
    )
}

export default About