import styled from "styled-components";
import {
   bigDesktop,
   bigDesktopL,
   mobile,
   mobileS,
   tablet,
   tabletMax,
   tabletMaxS,
   tabletMaxM
} from "./screen-sizes";

export const TextH5 = styled.h5`
  text-align: center;
  font-size: 18px;
  line-height: 2;
  padding-bottom: 40px;
  padding-top: 50px;
  color: #2c3f98;
`;
export const FlexContainerN = styled.div`
      display: flex;
      flex-direction: row;
      font-size: 30px;
      text-align: center;
      flex-wrap: wrap;
      position: relative;
`;
export const FlexItems = styled.div`
      position: relative;
      min-height: 1px;
      text-align: center;
`;
export const ItemsBox = styled.div`
      box-shadow: 0 20px 50px 5px #e9eef7;
      text-align: center;
      padding: 30px 15px 15px;
      transition: .5s;
      border-radius: 7px;
      cursor: pointer;
   &&:hover {
      box-shadow: 0 10px 30px 3px rgb(99 119 238 / 40%);
   }
   &&:hover.anim-icon {
      animation-play-state: running;
   }
`;
export const BoxContect = styled.div`
      text-align: center;
      padding: 45px 10px 40px;
      transition: .5s;
      border-radius: 7px;
   &&:hover .icon-color {
      color: white;
   }
`;
export const BoxContectIcon = styled.div`
      position: relative;
      display: inline-block;
      font-size: 60px;
      width: 130px;
      height: 130px;
      line-height: 120px;
      text-align: center;
      border-radius: 50%;
      z-index: 1;
      transition: all 500ms ease;
      box-shadow: 0 20px 50px 5px #e9eef7;
      color: #2a4098;
   &&:before {
      position: absolute;
      content: '';
      background: rgba(12,90,219,0.10);
      width: 100%;
      height: 100%;
      left: -8px;
      top: -5px;
      z-index: -1;
      border-radius: 50%;
      box-shadow: -10px 10px 20px 0 rgb(0 0 0 / 20%);
      transition: .5s;
   }
   .box-content:hover &&:before {
      background-color:#2A4098;
   }
`;
export const BoxContectTitle = styled.div`
  h4 {
     font-size: 24px;
     padding-top: 1.5rem;
  }
   p {
      padding-top: 15px;
      text-align: center;
      font-size: 14px;
      line-height: 1.5;
      min-height: 78px;
      height: auto;
   }
`;
export const Header = styled.div`
      display: block;
      z-index: 20;
      position: relative;
      background: #fff;
`;
export const SectionTitleText = styled.div`
      margin-bottom: 1rem!important;
      text-align: center;
   h6 {
      letter-spacing: 5px;
      color: #3f57bf;
      font-size: 16px;
   }
   h1 {
      text-align: center;
      font-weight: 800;
       margin: 0;
      font-size: 42px;
   }
   @media screen and ${mobile} {
      h6 {
         letter-spacing: 1px;
      }
      h1 {
         font-size: 30px;
      }
   };
`;
export const UnitLeft = styled.div`
      margin-bottom: 10px;
      margin-left: 20px;
      flex: 0 0 auto;
      max-width: 100%;
`;
export const UnitBody = styled.div`
     flex: 0 1 auto;
   p {
      font-size: 14px;
      letter-spacing: .05em;
      color: #151515;
   }
@media screen and ${tabletMax} {
     margin-top: 10px;
    p {color: #fff}
 }
`;
export const UnitBodyPhone = styled.ul`
      display: block;
      direction: ltr;
      font-size: 14px;
      a:hover {color: #2A4098}
      line-height: 1.75;
      margin: 0 0 0 20px;
   @media screen and ${tabletMax} {
      line-height: 2.75;
      margin: 0;
      font-size: 16px;
   }
`;
export const HeaderWrap = styled.div`
      transition: 0.35s all cubic-bezier(0.65, 0.05, 0.36, 1);
`;
export const HeaderLogo =styled.div`
      padding: 10px 15px;
`;
export const HeaderLogoAside = styled.div`
     position: relative;
     display: flex;
     justify-content: space-between;
     margin-left: auto;
     margin-right: auto;
     max-width: 1170px;
     align-items: center;
  
`;
export const HeaderLogoCollapse = styled.div`
     flex: 0 0 40%;
     max-width: 40%;
   @media screen and ${tabletMax} {
      display: none;
   }
`
export const HeaderLogoContacts = styled.div`
         display: flex;
         float: left;
         padding-top: 10px;
`;
export const HeaderLogoContactsUnit = styled.div`
        display: flex;
        flex: 0 1 100%;
        margin-bottom: -10px;
        margin-left: -10px;
`;
export const HeaderLogoPanel = styled.div`
        flex: 0 0 20%;
        max-width: 20%;
        transition: 0.35s all cubic-bezier(0.65, 0.05, 0.36, 1);
   @media screen and ${tabletMax} {
       flex: 1 0 100%;
       max-width: 100%;
       align-content: center;
       justify-content: center;
   }
`;
export const HeaderLogoPanelBrand = styled.div`
        display: flex;
        align-items: flex-end;
        justify-content: center;
        height: 112px;
        cursor: pointer;
   @media screen and ${tabletMaxM} {
         max-width: 110px;
         height: auto;
         display: block;
         margin: auto;
   }
`;
export const HeaderLogoPanelBrandLink = styled.a`
       display: block;
`;
export const HeaderLogoAsideButton = styled.div`
      display: block;
      text-align: right;
      flex: 0 0 40%;
      max-width: 40%;
   @media ${tabletMax} {
      display: none;
   }
`;
export const HeaderMobileTelNav = styled.div`
      display: none;
   @media screen and ${tabletMax} {
      display: flex;
      flex: 0 100%;
   };
`
export const HeaderMobileNavBox = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      background-color: #2c3f99;
      padding-top: 10px;
      color:#fff;
`;

export const Nav = styled.nav`
      border-top: 1px solid #e1e1e1;
      padding-left: 15px;
      padding-right: 15px;
      background-color: #F8F9FC;
      height: 62px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      position: ${({scrollNav}) => (scrollNav ? 'fixed' : 'relative')};
      top: ${({scrollNav}) => (scrollNav ? '-10px' : '0')};
      z-index: 10;
      width: 100%;
      box-shadow: ${({scrollNav}) => (scrollNav ? '0 10px 30px 3px rgba(99, 119, 238, 0.40)' : 'none')};
      transition: 0.5s ease-in-out;
   @media screen and ${tabletMax} {
      height: auto;
      .nav-menu {
         display: flex;
         flex-direction: column;
         width: 109%;
         height: 99vh;
         position: fixed;
         top: 0;
         left: -110%;
         opacity: 1;
         -webkit-transition: all 0.5s ease;
         transition: all 0.5s ease;
         text-align: center;
         padding-top: 30px;
      }
      .nav-menu.click {
         background: #fafafa;
         left: 0;
         opacity: 1;
         transition: all 0.5s ease;
         z-index: 1;
         justify-content: center;
      }
   }
`;
export const NavMain = styled.ul`
     position: relative;
     display: flex;
     max-width: 1320px;
      width: 100%;
     justify-content: space-between;   
      margin: 0 auto;
`;
export const StyledLink = styled.span`
     padding: 1rem 2rem;
     cursor: pointer;
  &&.navlink {
       padding: 20px 0;
       color: #000;
       background: transparent;
       letter-spacing: .05em;
       margin: 0 20px;
       position: relative;
       display: inline-block;
       font-weight: 600; 
  }
  &&.navlink:hover {
    color: #2c3f99;
  }
  &&.navlink::before {
       position: absolute;
       content: '';
       top: 0;
       left: 50%;
       height: 8px;
       width: 140%;
       background: transparent;
       transform: translate3d(-50%, -50%, 0);
       transition: all .25s ease;
  }
   &&.navlink:hover:before {
       width: 100%;
       background: #2c3f99;
  }
   &&.navlink.click {
      opacity: 1;
      visibility: visible;
      transform: translate3d(0, 0, 0);
      transition: .33s all ease-out;
  }
`;

export const ContainerFluid = styled.div`
      width: 100%;
      padding-right: 0;
      padding-left: 0;
      margin-right: auto;
      margin-left: auto;
`;
export const Col12 =styled.div`
      flex: 0 0 100%;
      max-width: 100%;
      position: relative;
`;
export const Row = styled.div`
   display: flex;
   margin-right: -15px;
   margin-left: -15px;
   width: 100%;
   @media screen and ${tabletMaxS} {
      width: 100%;
      margin-right: 0;
      margin-left: 0;
      display: inline-block;
   }
`;
export const RowTem = styled.div`
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
      width: 100%;
`;
export const Col6 = styled.div`
      position: relative;
   @media screen and ${tablet} {
      flex: 0 0 50%;
      max-width: 50%;
   }
`;

export const WrapContent = styled.div`
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      color: rgb(255, 255, 255);
      position: relative;
      height: auto;
    @media screen and ${tabletMax} {
      padding-left: 15px;
      padding-right: 15px;
   }
`;
export const Container = styled.div`
       display: flex;
       justify-content: center;
       align-items: center;
       max-width: 1400px;
       margin-right: auto;
       margin-left: auto;
       width: 100%;
   @media screen and ${mobileS} {
      max-width: 540px;
   };
   @media screen and ${mobile} {
      max-width: 720px;
   };
   @media screen and ${tablet} {
      max-width: 960px;
   };
   @media screen and ${bigDesktop} {
      max-width: 1140px;
   };
    @media screen and ${bigDesktopL} {
      max-width: 1320px;
   };
   &&.footer {
         flex-wrap: wrap;
   };
`;
export const FlexContainer = styled.div`
       display: flex;
       flex-flow: row wrap;
       padding: 0;
       margin: 0;
       list-style: none;
       justify-content: space-between;
       width: 100%;
   @media screen and ${tabletMax} {
      justify-content: space-around !important;
   }
`;
export const FlexItem = styled.div`
      padding:5px;
      width: 200px;
      margin: 30px 0;
      line-height: 150px;
      color: #000000;
      font-weight: bold;
      font-size: 3em;
      text-align: center;
      background-color: #F2F3F8;
      cursor: pointer;
      position: relative;
      z-index: 0;
      border-radius: 20px;
      box-shadow: 0 10px 30px 3px rgb(99 119 238 / 40%);
      transition: .5s;
   &&:hover {
      color: white;
      box-shadow: none;
      transform: translateY(-10px);
     }
   &&:hover p {
      color: white;}
   &&:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 11px;
      right: 11px;
      height: 3px;
      transition: .3s ease-in-out;
      background-color: #2a4098;
      z-index: -1;
      border-radius: 20px;
   }
   &&:hover:after {
      height: 100%;
      left: 0;
      right: 0;
   }
   @media screen and ${mobile} {
      margin: 30px auto;
   }
`;
export const FlexItemIcon = styled.div`
      background-color: #2A4098;
      color: white;
      width: 100px;
      height: 100px;
      font-size: 40px;
      line-height: 100px;
      text-align: center;
      margin: 20px auto;
      text-decoration: none;
      border-radius: 70px;
      transition: all 0.25s linear;
      box-sizing: border-box;
      box-shadow: 1px 3px 0 #dd1e28;
`;
export const FlexItemTitle = styled.p`
      margin-top: 15px;
      font-size: 1.05rem;
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 0.75rem;
      text-align: center;
`;

export const BoxInfo = styled.div`
      display: block;
      position: relative;
      padding: 15px 20px;
      width: 100%;
      text-align: right;
`;

export const TextH1 = styled.div`
      font-weight: 800;
      font-size: 40px;
      letter-spacing: -1px;
      color: #232323;
   @media screen and ${mobile} {
      font-size: 30px;
   }
`;

export const TextH6 = styled.h6`
      margin-top: 15px;
      letter-spacing: 5px;
      color: #0c5adb;
      font-size: 16px;
   @media ${mobile} {
      letter-spacing: 2px;
   }
`;
export const TextP = styled.div`
      font-size: 16px;
      color: #232323;
      line-height: 1.5;
      padding-top: 1.5rem !important;
   ul li {
      margin-bottom: 1rem !important;
   }
`;
export const EmBar = styled.div`
      height: 2px;
      width: 62px;
      margin: 0;
`;
export const EmBarBg = styled.div`
      height: 5px;
      width: 90px;
      background: rgba(42, 64, 152,0.62);
      position: relative;
      border-radius: 30px;
      margin: 20px auto;
   &&:before {
      content: '';
      position: absolute;
      left: 0;
      top: -2.7px;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background: #d81f30;
      animation-duration: 3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-name: move-bg;
   }
   @-webkit-keyframes move-bg {
      from {
         -webkit-transform: translateX(0);
         transform: translateX(0);
      }
      to {
         -webkit-transform: translateX(88px);
         transform: translateX(88px);
      }
   }
   @keyframes move-bg {
      from {
         -webkit-transform: translateX(0);
         transform: translateX(0);
      }
      to {
         -webkit-transform: translateX(88px);
         transform: translateX(88px);
      }
   }
`;
export const Button = styled.button`
      position: relative;
      overflow: hidden;
      display: inline-block;
      padding: 4px 25px;
      max-width: 200px;
      width: 100%;
      font-size: 16px;
      line-height: 2;
      border: 2px solid #2c3f98;
      background-color: #2c3f98;
      color: #fff;
      border-radius: 25px;
      font-weight: 600;
      text-transform: uppercase;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      cursor: pointer;
      vertical-align: middle;
      user-select: none;
      transition: all 350ms ease-in-out;
   &&::after {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      width: 110%;
      padding-bottom: 110%;
      border-radius: 50%;
      transform: translate3d(-50%, -50%, 0) scale(1);
      transition: inherit;
      pointer-events: none;
      z-index: -1;
      background: #ffffff;
   }
   &&:hover {
      color: #ffffff;
      background-color:#D81F30;
      border-color: #D81F30;
   }
   &&:hover::after {
      transform: translate3d(-50%, -50%, 0) scale(0);
      z-index: 1;
   }
`;
export const CarouselBox = styled.div`
      position: relative;
      padding-left: 15px;
      padding-right: 15px;
      width: 100%;
`;
export const CarouselBoxContect = styled.div`
      box-shadow: 0 18px 17px rgba(0, 0, 0, 0.1);
      padding: 25px 20px 20px;
      position: relative;
      background: #fff;
      margin-bottom: 1.5rem!important;
   min-height: 226px;
   height: auto;
   &::before {
      content: '';
      bottom: -15px;
      top: auto;
      border-color: transparent #fff transparent transparent;
      display: block;
      position: absolute;
      right: 0;
      margin-right: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 15px;
   }
   p {
      font-weight: 400;
      font-style: normal;
      margin-top: 0;
      margin-bottom: 1rem;
      color:#222;
      line-height: 1.75;
   }
`;

export const AboutTeamItem = styled.div`
      border: none;
      overflow: inherit;
      margin-bottom: 30px;
      position: relative;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
      text-align: center;
   @media screen and ${tabletMaxS} {
      flex: 0 0 100%;
      max-width: 100%;
   }
`;
export const AboutTeamItemView = styled.div`
      padding: 40px 25px 32px;
      border: none;
      transition: .5s;
      box-shadow: 0 10px 30px 3px rgba(99, 119, 238, 0.40);
      display: block;
      position: relative;
      border-radius: 10px;
`;
export const AboutTeamItemViewPosition = styled.div`
      position: relative;
   img {
      margin-bottom: 22px;
      animation: single_seivice_ani 10s linear infinite alternate forwards;
   }
   @keyframes single_seivice_ani{
      0%,
      to {
         border-radius: 65% 86% 80% 69%/59% 55% 95% 89%;
      }
      14% {
         border-radius: 40% 60% 54% 46%/49% 60% 40% 51%;
      }
      28% {
         border-radius: 54% 46% 38% 62%/49% 70% 30% 51%;
      }
      42% {
         border-radius: 61% 39% 55% 45%/61% 38% 62% 39%;
      }
      56% {
         border-radius: 61% 39% 67% 33%/70% 50% 50% 30%;
      }
      70% {
         border-radius: 50% 50% 34% 66%/56% 68% 32% 44%;
      }
      84% {
         border-radius: 46% 54% 50% 50%/35% 61% 39% 65%;
      }
   }
`;
export const AboutTeamItemInfo = styled.div`
      position: relative;
      text-align: center;
   h5 {
      line-height: 28px;
      margin-bottom: 0;
   }
   span {
      display: inline-block;
      line-height: 28px;
      color: #6a6a6a;
   }
`;
export const InfoContainer = styled.div`
      color: #fff;
      background: ${({lightBg}) => (lightBg ? "#fff" : "#DDE0EE")};
      position: relative;
      z-index: 0;
`;

export const InfoRow = styled.div`
      display: grid;
      grid-auto-columns: minmax(auto, 1fr);
      align-items: center;
      grid-template-areas: ${({imgStart}) => (imgStart ? `"col2 col1"` : `"col1 col2"`)};
   @media screen and ${tabletMax} {
      width: 100%;
      grid-template-areas: ${({imgStart}) => (imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`)};
   }
`;

export const Column1 = styled.div`
      margin-bottom: 60px;
      padding: 0 15px;
      grid-area: col1;
`;
export const Column2 = styled.div`
      margin-bottom: 15px;
      grid-area: col2;
`;
export const WitrShapeItemInner = styled.div`
      position: absolute;
      left: ${({left}) => (left ? '0' : '-65px')};
      right: ${({right}) => (right ? '-30px' : '0px')};
      top: ${({top}) => (top ? '28px' : '-65px')};
      z-index: -1;
      content: "";
      -webkit-transition: .5s;
      -moz-transition: .5s;
      transition: .5s;
`;
export const SingleImgAni = styled.div`
      animation: witr_movelr_boxani 5s linear 1s infinite alternate running;
   img {
      width: 100%;
   }
   @keyframes witr_movelr_boxani {
      0%{
         transform: translateX(0px);
      }
      100%{
         transform: translateX(45px);
      }
   }
   @media screen and ${mobile} and ${tabletMax} {
      img {
         width: 89%;
      }
   }
   @media screen and ${tabletMaxM} {
       img {
            width: 76%;
         }
   }
`;
export const SingleImage = styled.div`
   position: relative;
   &&:before {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.5;
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
   }
`;
export const ImgWrap = styled.div`
       height: 100%;
       position: relative;
`;

