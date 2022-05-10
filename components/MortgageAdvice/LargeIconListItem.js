import styled from "styled-components";

const Card = styled.div`
  box-shadow: 1px 9px 14px 3px rgb(99 119 238 / 20%);;
  padding: 35px 30px 30px;
  margin-bottom: 30px;
  border-radius: 0 40px;
  position: relative;
  z-index: 1;
  color: #222222;
 transition: .5s;
 line-height: 27px;
 font-size: 15px;
  ul li {
    margin-bottom: 10px;
  }
  h2 {
    color: #2A4098;
    transition: .5s;
    font-size: 18px;
    padding-bottom: 1.5rem!important;
  }
  :before {
    position: absolute;
    left: 0;
    content: "";
    height: 0;
    width: 100%;
    background: #2A4098;
    bottom: 0;
    z-index: -1;
    border-radius: 0 40px;
    transition: .5s;
    cursor: pointer;
  }
  :hover::before {
    height: 100%;
    border-radius: 0 40px;
  }
  &&:hover div {
    cursor: pointer;
    background-color: white;
    transform: rotate( 360deg );
    border-radius: 50%;
  }
  &&:hover ul li {
    cursor: pointer;
    color: white;
  }
  &&:hover h2 {
    color: white;
  }
`;

const Icons = styled.div`
  float: left;
  margin-right: 15px;
  color: #2A4098;
`;
const StyleIcon = styled.div`
    background: rgba(12,90,219,0.10);
    height: 58px;
    width: 58px;
    line-height: 58px;
    font-size: 28px;
    text-align: center;
    border-radius: 50%;
    transition: .5s;
    cursor: pointer;
`;

export const LargeIconListItem = ({ person }) => {
            const { name, icon, description } = person;
  return (
      <Card data-aos="zoom-in">
        <Icons>
          <StyleIcon>
            {icon}
          </StyleIcon>
        </Icons>
        <h2>{name}</h2>
          <ul>
              {description.map(description =>
                  <li key={description}>{description}</li>
              )}
          </ul>
      </Card>
  );
};
