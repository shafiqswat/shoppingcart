/** @format */

import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <HeaderContainer>
        <div className='continueShopping'>
          <img
            src='/images/arrow.png'
            alt='arrow'
            className='arrowIcon'
          />
          <h3>continue shopping</h3>
        </div>
        <div className='cartIcon'>
          <img
            src='./images/cart.png'
            alt='cart'
          />
          <p>7</p>
        </div>
      </HeaderContainer>
    </>
  );
}

export default Header;
const HeaderContainer = styled("header")`
  width: 100%;
  line-height: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 0.1rem solid #9a9191;
  transform: rotate(-0.05deg);
  margin-bottom: 7rem;
  .continueShopping {
    display: flex;
    height: inherit;
    align-items: center;
  }
  .continueShopping .arrowIcon {
    width: 2.2rem;
    height: 2.2rem;
  }
  .continueShopping h3 {
    font-size: 2rem;
    text-transform: capitalize;
    color: var(--main-color);
    margin-left: 1.5rem;
    font-weight: 400;
  }
  .cartIcon {
    display: flex;
    text-align: end;
    margin-right: 2rem;
    align-items: center;
    position: relative;
    justify-content: flex-end;
  }
  .cartIcon img {
    width: 5rem;
    height: 5rem;
    color: #2f80ed;
  }
  .cartIcon p {
    position: absolute;
    width: 4rem;
    height: 4rem;
    right: -1.2rem;
    top: 0.9rem;
    border-radius: 50%;
    background: #99cbf7;
    color:#fff;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    .continueShopping h3 {
      margin-left: 0;
      font-size: 1.85rem;

    }
`;
