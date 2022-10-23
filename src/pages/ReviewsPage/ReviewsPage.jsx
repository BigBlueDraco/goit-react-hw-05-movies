import { useFetchMovie } from 'hooks/useFetchMovie';

export default function ReviewsPage() {
  const reviews = useFetchMovie('reviews');

  return (
    <ul>
      {reviews && reviews.results[0]
        ? reviews.results.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))
        : 'No reviews'}
    </ul>
  );
}
