import React from "react";
import styled from "styled-components";
const Menu = ({ products, onAdd }) => {
  return (
    <MenuContainer>
      <Container>
       <MenuItems>
            {products.map((item) => {
              const { title, price, image } = item;
              return (
                <SingleItem onClick={() => onAdd(item)}>
                  <ImgWrap>
                    <Img src={image} alt={title}></Img>
                  </ImgWrap>
                  <Info>
                    <Title>{title}</Title>
                    <Price>{price} KGZ</Price>
                  </Info>
                </SingleItem>
              );
            })}
          </MenuItems>
        
      </Container>
    </MenuContainer>
  );
};

export default Menu;
const MenuContainer = styled.div`
  background: white;
  min-height: 100vh;
  padding: 1rem 0;
  width: 100%;
  text-align: center;
`;
const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;


const SingleItem = styled.div`
  background: white;
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 10px 15px rgb(0, 0, 0);
  }
  cursor: pointer;
  border-radius: 10px;
  padding: 1rem 2rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MenuItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const ImgWrap = styled.div`
  width: 80px;
  height: 80px;
`;
const Info = styled.div``;
const Title = styled.div`
  font-size: 1.5rem;
  color: black;
`;
const Price = styled.div`
  color:black;
  font-size: 1.3rem;
  text-align: center;
`;
