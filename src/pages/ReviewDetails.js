import React from 'react';
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

function ReviewDetails() {
    const { id } = useParams();
    const { loading, error, data } = useFetch(`http://localhost:1337/api/reviews/${id}`)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!!!</p>

    const review = data.data.attributes;
    console.log(review)

    return (

        <div className="review-card">
            <div className="rating">{review.Rating}</div>
            <h2>{review.Title}</h2>

            <small>console list</small>

            <p>{review.Body}</p>
        </div>
    );
}

export default ReviewDetails;