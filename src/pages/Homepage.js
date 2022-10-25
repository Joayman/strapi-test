import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/reviews')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    console.log(data.data[0].attributes)

    return (
        <div>
            {data.data.map((reviews) => (
                <div key={reviews.id} className="review-card">
                    <div className="rating"><p>{reviews.attributes.Rating}</p></div>
                    <h2>{reviews.attributes.Title}</h2>
                    <small>console list</small>
                    <Link to={`/details/${reviews.id}`}>Read more</Link>
                </div>
            ))}
        </div>
    )
}