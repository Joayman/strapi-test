import React from 'react';
import { useParams } from "react-router";
import { useQuery, gql } from "@apollo/client";
import ReactMarkdown from "react-markdown";

const REVIEW = gql`
query GetReview($id: ID!) {
  review(id: $id) {
    data {
      id,
      attributes {
        Title,
        Rating,
        Body
      }
    }
  }
}
`

function ReviewDetails() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(REVIEW, {
        variables: { id:id }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!!!</p>

    const review = data.review.data.attributes;
    console.log(review)

    return (

        <div className="review-card">
            <div className="rating">{review.Rating}</div>
            <h2>{review.Title}</h2>

            <small>console list</small>

            <ReactMarkdown>{review.Body}</ReactMarkdown>
        </div>
    );
}

export default ReviewDetails;