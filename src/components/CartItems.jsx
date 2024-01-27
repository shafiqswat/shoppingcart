/** @format */
import React, { useState } from "react";
import styled from "styled-components";
function CartItems({ description, title, img, price }) {
  const [quantity, setQuantity] = useState(1);
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };
  return (
    <>
      <ItemsInfoContainer>
        <div className='itemsInfo'>
          <div className='productImage'>
            <img
              src={img}
              alt='product'
            />
          </div>
          <div className='title'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className='addMinusQuantity'>
            <i
              class='fas fa-minus minus'
              onClick={handleMinus}></i>
            <input
              type='text'
              placeholder={quantity}
            />
            <i
              class='fas fa-plus add'
              onClick={handlePlus}></i>
          </div>
          <div className='price'>
            <h3>{price}</h3>
          </div>
          <div className='removeItem'>
            <i class='fas fa-trash-alt remove'></i>
          </div>
        </div>
      </ItemsInfoContainer>
      <hr />
    </>
  );
}

export default CartItems;
const ItemsInfoContainer = styled.div`
.itemsInfo {
    width: 100%;
    height: 11rem;
    /* background-color: lavender; */
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    .productImage img {
        width: 16rem;
        height: 11rem;
        filter: drop-shadow(0rem 0.4rem 1rem #f1f7ff);
        border-radius: 1rem;
      }
      .title {
        display: flex;
        justify-content: center;
        flex-direction: column;
        h2 {
            font-style: normal;
            font-weight: bold;
            font-size: 2.2rem;
            display: flex;
            align-items: center;
            text-transform: capitalize;
            color: var(--main-color);
          }
          p {
            font-style: normal;
            font-weight: normal;
            font-size: 1.8rem;
            display: flex;
            align-items: center;
            text-transform: capitalize;
            text-align: left;
            color: var(--primary-color);
          }
      }
      .addMinusQuantity {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        button {
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
          }
          input {
            width: 6rem;
            height: 3rem;
            border: 0.141rem solid var(--primary-color);
            box-sizing: border-box;
            font-style: normal;
            font-weight: normal;
            font-size: 1.6rem;
            text-align: center;
            text-transform: capitalize;
            color: var(--primary-color);
            margin: 0 1rem;
            border-radius: 0.5rem;
            outline: none;
            background-color: transparent;
          }
          input:focus {
            outline: none;
          }
      } 
      .price {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        h3 {
            font-style: normal;
            font-weight: bold;
            font-size: 2rem;
            text-transform: capitalize;
            color: var(--main-color);
          }
      } 
      .removeItem {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 5rem;
        button {
            border: none;
            background-color: transparent;
          }
      }  
     
`;
