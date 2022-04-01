import styled from 'styled-components';

export const FooterLinksWrapper = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
`;
export const FooterLinkItems = styled.a`
  margin: 16px;
  text-align: right;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
  }
`;
export const FooterLinkTitle = styled.span`
  margin-bottom: 16px;
  font-size: 14px;
  color: #fff;
  font-weight: normal;
  cursor: pointer;
  transition: .5s;
 &:hover {
  color: #D8202E;
 }
 `;
export const WebsiteRights = styled.small`
  color: rgba(255, 255, 255, 0.92);
  font-weight: 200;
   margin: 20px 0;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  overflow: hidden;
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 30px;
  width: 3.25rem;
  border: 1px #dbdbdb solid;
  background-color:#020b2e;
  height: 3.25rem;
  border-radius: 5px;
  text-align: center;
  line-height: 1.95;
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin: 0 10px;
  &&:after {
    display: inline-block;
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: #d81f30;
    transform-origin: 0 0;
    transform: rotate(
            45deg) translate3d(-50%, 50%, 0);
    transition: all 0.35s cubic-bezier(0.05, 0.29, 0.11, 1.54);
    pointer-events: none;
    z-index: -1;
  };
    &&:hover::after {
    transform: rotate( 45deg) translate3d(-50%, -50%, 0);
  }
`;
