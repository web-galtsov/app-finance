import styled from "styled-components";
import { tabletMaxS } from "@/layout/screen-sizes";

const Item = styled.div`
  overflow: hidden;
  box-shadow: 0 10px 30px 3px rgb(99 119 238 / 40%);
  -webkit-transition: .5s;
  transition: .5s;
  flex: 0 0 31%;
  max-width: 31%;
  margin: 0 15px 30px 15px;
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  color:#222222;
  :before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    height: 100%;
    width: 0;
    transition: .6s;
    z-index: -1;
    background: #2C3F99;
  }
  :hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px 3px rgb(99 119 238 / 10%);
  }
  :hover:before {
    width: 100%;
    left: 0;
    border-radius: 20px;
  }
  :hover ul li {
    color: white;
  }
  :hover h4 {
    color: white;
  }
  :hover h4:before {
    background: white;
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
    font-size: 15px;
    line-height: 2;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 18px;
    padding-bottom: 25px;
    font-weight: 600;
    color: #2A4098;
    position: relative;
  }
  h4:before {
    position: absolute;
    content: "";
    left: auto;
    top: 37px;
    height: 1px;
    width: 100px;
    background: #0057B2;
    margin: auto;
    right: 0;
  }
`;

export const RegularList = ({ items, resourceName,  itemComponent: ItemComponent }) => {
    return (
        <>
          {items.map((item, i) => (
            <Item key = {i}>
                <ItemBox>
                   <ItemComponent key = {i}
                        {...{[resourceName]: item}}
                    />
                </ItemBox>
            </Item>
          ))}
        </>
    )
}
