import React from 'react'

function App() {
  return (
    <div className="grid-container">

      <header className="row">
        <div className="">
          <a className="brand" href="index.html">ShopMe</a>
        </div>
        <div className="">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign-in</a>
        </div>
      </header>

      <main>

        <div className="row center">

          {
            data.products.map(product => (

            ));
          }

          </div>

        </main>

      <footer className="row center">Made with Love ❤️</footer>

    </div>
  );
}

export default App;
