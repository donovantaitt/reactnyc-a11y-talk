import { Helmet } from 'react-helmet'
import React from 'react'

const Home = (props) => {
    return(
        <>
            <h1>Home</h1>
            <Helmet>
                <title>{props.title}</title>
            </Helmet>
        </>
    )
}

export default Home