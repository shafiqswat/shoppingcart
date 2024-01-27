/** @format */

import React, { useContext } from "react";
import Header from "./Header";
import styled from "styled-components";
import CartItems from "./CartItems";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";
function CartParent() {
  const items = useContext(CartContext);
  return (
    <>
      <Header />
      <MainContainer>
        <h1 className='heading'>shopping Cart</h1>
        <p className='totalItems'>
          You have <span className='totalItemsCount'> 4 </span>
          items in the shopping Cart
        </p>
        <div className='cartItems'>
          <div className='cartItemsContainer'>
            <Scrollbars>
              {items.map((curItem) => {
                return (
                  <CartItems
                    key={curItem.id}
                    {...curItem}
                  />
                );
              })}
            </Scrollbars>
          </div>
          <div className='cartTotal'>
            <h3>
              Cart Total: <span>2200rs</span>
            </h3>
            <button>checkout</button>
          </div>
        </div>
      </MainContainer>
    </>
  );
}

export default CartParent;
const MainContainer = styled("section")`
  .heading {
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    text-transform: capitalize;
    color: rgba(41, 41, 41, 1);
    margin-bottom: 2rem;
  }
  .totalItems {
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    text-transform: capitalize;
    color: var(--main-color);
    margin-bottom: 5rem;
  }
  .totalItemsCount {
    font-weight: bold;
    color: var(--main-color);
  }
  .cartItems {
    width: 100%;
    height: 62rem;
    background: linear-gradient(
      103.49deg,
      #ffffff -28.13%,
      rgba(242, 247, 255, 0.5) 116.84%
    );
    box-shadow: rgba(0, 0, 0, 0.08) 0rem 0.4rem 1.2rem;
    border-radius: 2rem;
    margin: auto;
    margin: auto;
    display: grid;
    place-items: center;
    hr {
      margin: 2rem auto;
      // overflow-y: scroll;
    }
    .cartItemsContainer {
      width: 90%;
      height: 56rem;
      overflow-y: scroll;
    }
    .cartItemsContainer::-webkit-scrollbar {
      display: none;
    }
  }
  .cartTotal {
    width: 95%;
    margin-top: 4rem;
    text-align: right;
    h3 {
      font-style: 200;
      font-size: 2.58rem;
      line-height: 3.2rem;
      text-transform: capitalize;
      color: #606166;
    }
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 2.8rem;
      line-height: 3.2rem;
      text-transform: capitalize;
      color: #000000;
      margin-left: 1rem;
    }
    button {
      border: none;
      font-size: 1.6rem;
      padding: 1rem 3rem;
      color: #fff;
      background-color: #349bf3;
      text-transform: uppercase;
      margin-top: 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
      letter-spacing: 1px;
    }
  }
`;
