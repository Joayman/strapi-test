import React from 'react'
import { Link } from 'react-router-dom'
import {useQuery, gql} from "@apollo/client";

const REVIEWS = gql`
query GetReviews {
  reviews {
    data {
      id
      attributes {
        Title
        Rating
        Body
      }
    }
  }
}
`

export default function Homepage() {
    const { loading, error, data } = useQuery(REVIEWS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    console.log(data.reviews.data[0])

    return (
        <div>
            {data.reviews.data.map((reviews) => (
                <div key={reviews.id} className="review-card">
                    <div className="rating">{reviews.attributes.Rating}</div>
                    <h2>{reviews.attributes.Title}</h2>
                    <small>console list</small>
                    <p>{reviews.attributes.Body.substring(0, 200)}...</p>
                    <Link to={`/details/${reviews.id}`}>Read more</Link>
                </div>
            ))}
        </div>
    )
}