import { Helmet } from 'react-helmet'
import React from 'react'

const Contact = (props) => {
    return(
        <>
            <h1>Contact</h1>
            <Helmet>
                <title>{props.title}</title>
            </Helmet>
        </>
    )
}

export default Contact