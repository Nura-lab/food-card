import React from "react";
import styled from "styled-components";
const Basket = ({ cartItems, onAdd, onRemove, remove }) => {
  const itemPrice = cartItems.reduce((accum, current) => {
    return accum + current.price * current.quantity;
  }, 0);
  return (
    <BasketCont>
       <span>{cartItems.length === 0 ? "0" : cartItems.length}</span> 
         <Content>
        {cartItems.map((item) => {
          const { id, title, price } = item;
          return (
            <Single key={id}>
              <h3>{title}</h3>

              {item.quantity} x {price}
            </Single>
          );
        })}
         </Content>
    </BasketCont>
  );
};

export default Basket;
const BasketCont = styled.div`
  background: white;
  width: 100%;
  padding: 1rem;
  text-align: center;
`;
const Header = styled.h1`
  margin-bottom: 3rem;
`;
const Content = styled.div``;
const Single = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 10px 20px;
  position: relative;
  margin: 1rem 0;
  background: #B0E0E6;
  
`;
const BtnContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

const Total = styled.button`
  margin-top: 5rem;
  background: #ffc222;
  border: none;
  outline: none;
  border-radius: 7px;
  padding: 10px 5rem;
  margin: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 800;
`;
