import React from 'react';
import Product from './components/Product';
import data from './data';

function App() {
  return (
    <div className="grid-container">

      <header className="row">
        <div className="">
          <a className="brand" href="/">ShopMe</a>
        </div>

        <div className="">
          <a href="/cart">Cart</a>
          <a href="/signin">Sign-in</a>
        </div>
      </header>

      <main>

        <div>
          <div className="row center">
            {data.products.map((product) => (
              <Product key={product._id} product={product}</Product>
            ))}
          </div>
        </div>

        </main>

      <footer className="row center">Made with Love ❤️</footer>

    </div>
  );
}

export default App;
