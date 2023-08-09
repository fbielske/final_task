import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { API } from '../../shared/api';

const Product = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: [`products-${id}`],
    queryFn: () => API.getProduct(id as string),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <main>
      <section>
        <div>
          <p>{data.name}</p>
          <p>{data.surname}</p>
          <p>{data.email}</p>
        </div>
      </section>
    </main>
  );
};

export default Product;
