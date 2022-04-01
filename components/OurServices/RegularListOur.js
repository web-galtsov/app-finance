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
  }
  :hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px 3px rgb(99 119 238 / 10%);
  }
  :after {
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    width: 0;
    height: 6px;
    -webkit-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
  }
  :hover:after {
    width: 100%;
    background: #4d78eb;
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
    flex: 0 0 46%;
    max-width: 46%;
  }
  @media screen and ${bigDesktop} {
    flex: 0 0 47%;
    max-width: 47%;
  }
 `;

const ItemBox = styled.div`
  display: block;
  position: relative;
  padding: 20px 25px;
  h3 {
    font-size: 22px;
    padding-bottom: 30px;
    font-weight: 700;
    color: #2A4098;
    position: relative;
  }
  h3:before {
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
  &&:hover div {
    border-radius: 50%;
  }
 `;

export const RegularListOur = ({ items, resourceName, itemComponent: ItemComponent,}) => {
    return (
        <>
            {items.map((item, i) => (
                <Item key = {i}>
                    <ItemBox>
                      <ItemComponent key = {i}
                     {...{[resourceName]: item}}/>
                    </ItemBox>
                </Item>
            ))}
        </>
    )
}
