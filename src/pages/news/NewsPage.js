import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import NavigationStrap from '../../components/nav/NavigationStrap';

export default function NewsPage() {
  const { id } = useParams();
  const [query] = useSearchParams();

  useEffect(() => {
    console.log("id: ", id);
    console.log("query: ", query.get('name'));
  }, [])
  return (
    <div>
      <NavigationStrap />
      
      <h3>NewsPage: {query.get('name')}</h3>
    </div>
  )
}
