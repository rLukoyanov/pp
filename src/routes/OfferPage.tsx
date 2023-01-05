import { useLoaderData } from 'react-router-dom';

export function OfferPage({}) {
  const offerId = useLoaderData();
  
  return <div>{offerId as string}</div>;
}
