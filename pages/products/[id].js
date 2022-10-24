import useSWR from 'swr';

export async function getStaticProps({ params }) {
  const product = await fetch(
    `http://localhost:3002/products/${params.id}`
  ).then(resp => resp.json());
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const products = await fetch('http://localhost:3002/products/').then(resp =>
    resp.json()
  );

  const paths = products.map(product => ({
    params: {
      id: String(product.id),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

const ProductDetail = ({ product }) => {
  const { data, error } = useSWR('products', () =>
    fetch(`http://localhost:3002/products/${product.id}`).then(
      resp => resp.json(),
      {
        fallbackData: product,
      }
    )
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error... Try again.</div>;
  }

  return (
    <div>
      <p>{product?.title}</p>
      <p>{data?.price}</p>
    </div>
  );
};

export default ProductDetail;
