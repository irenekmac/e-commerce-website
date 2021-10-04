import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search? Number(props.location.search.split('=')[1])
  : 1;

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? <MessageBox>
          Cart is empty. <Link to='/'>GoShopping</Link>
        </MessageBox>
      :
      (
        <ul>
          {
            cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img src={item.image} alt={item.name} className="small"></img>
                  </div>
                  <div className="min-30">
                    <Link to ={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                      dispatch(
                        addToCart(item.product),
                        Number(e.target.value)
                      )
                    }
                      ></select>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      )}
      </div>
    </div>
  );
}
