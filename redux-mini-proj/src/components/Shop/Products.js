import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: '1', price: 6, name: 'Book', description: 'Readable book.' },
  { id: '2', price: 10, name: 'Pizza', description: 'Edible pizza.' },
  { id: '3', price: 2, name: 'Pen', description: 'With ink to write stuff.' },
  { id: '4', price: 100, name: 'Bike', description: 'Without wheels.' },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}

      </ul>
    </section>
  );
};

export default Products;
