import React from 'react'

const List = (props) => {
    return(
        <>
            {
                props.favorites.map(fav => <li key={fav}>{fav}</li>)
            }
        </>
    )
}

export default List