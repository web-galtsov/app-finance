import styled from "styled-components";
import { tabletMaxS } from "@/layout/screen-sizes";

const Item = styled.div`
  box-shadow: 0 10px 30px 3px rgb(99 119 238 / 40%);
  flex: 0 0 31%;
  max-width: 31%;
  margin: 0 15px 30px 15px;
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  color:#222222;
  transition: .3s ease-out background-color;
  :before {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    position: absolute;
    background-color: inherit;
    transition: .3s ease-out all;
    border-radius: 20px;
  }
  :hover:before {
    top: -10px;
    bottom: -10px;
    left: -5px;
    right: -5px;
    background: #2C3F99;
    border-radius: 20px;
  }
  :hover ul li {
    color: white;
  }
  :hover h2 {
    color: white;
  }
  :hover h2:before {
    background: white;
  }
  :hover div {
    color: white;
  }
  :hover div:after {
    transform: scale(1);
    box-shadow: 0 1px 0 #D81F30;
  }
  @media screen and ${tabletMaxS} {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
const ItemBox = styled.div`
  display: block;
  position: relative;
  padding: 20px 25px;
  ul li {
    line-height: 2;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    position: relative;
    text-align: center;
    margin-top: 30px;
  }
 `;

export const RegularList = ({ items, resourceName,  itemComponent: ItemComponent }) => {
    return (
        <>
          {items.map((item, i) => (
            <Item key = {i} data-aos="zoom-in">
                <ItemBox >
                   <ItemComponent key = {i}
                        {...{[resourceName]: item}}
                    />
                </ItemBox>
            </Item>
          ))}
        </>
    )
}
