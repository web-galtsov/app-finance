import styled from "styled-components";
import {
    bigDesktop,
    mobile,
    tablet,
    tabletMaxM
} from "@/layout/screen-sizes";

const Item = styled.div`
  overflow: hidden;
  box-shadow: 0 10px 30px 3px rgb(99 119 238 / 40%);
  -webkit-transition: .5s;
  transition: .5s;
  margin: 0 15px 30px 15px;
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  ul li {
    font-size: 15px;
    line-height: 2;
    color: #222222;
    padding-bottom: 1.0rem;
    text-align: center;
  }
  :hover ul li {
    color: white;
  }
  :hover h3 {
    color: white;
  }
  :hover div {
    color: white;
  }
  :hover {
    box-shadow: 0 10px 30px 3px rgb(99 119 238 / 10%);
  }
  
  :before {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 45px;
    height: 45px;
    content: "";
    background: #adc7f1;
    transition: .3s;
    z-index: 0;
  }
  :hover:before {
    width: 100%;
    height: 100%;
    background: #2C3F99;
  }
  @media screen and ${tabletMaxM} {
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media screen and ${mobile} {
    flex: 0 0 45.5%;
    max-width: 45.5%;
  }
  @media screen and ${tablet} {
    flex: 0 0 31%;
    max-width: 31%;
  }
  @media screen and ${bigDesktop} {
    flex: 0 0 31%;
    max-width: 31%;
  }
 `;

const ItemBox = styled.div`
  display: block;
  position: relative;
  padding: 20px 25px;  
  h3 {
    transition: .5s;
    padding-top: 15px;
    font-weight: 700;
    color: #2A4098;
    position: relative;
    text-align: center;
    font-size: 20px;
  }
   &&:hover div {
    border-radius: 50%;
  }
 `;

export const RegularListDeniers = ({ items, resourceName, itemComponent: ItemComponent,}) => {
    return (
        <>
            {items.map((item, i) => (
                <Item key = {i} data-aos="fade-up">
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
