import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  background-color: lightgrey;
`;

const StyledList = styled.ul`
  /*background-color: ${({ theme }) => theme.colors.primary}*/ ;
`;

export async function getStaticProps() {
  const products = await fetch('http://localhost:3002/products').then(resp =>
    resp.json()
  );
  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}

export default function Home({ products }) {
  return (
    <Container>
      <StyledList>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </StyledList>
    </Container>
  );
}
