import styled from "styled-components";

const StyleIcon = styled.div`
  transition: .3s ease-out color;
  position: relative;
  z-index: 1;
  font-size: 40px;
  line-height: 2;
  text-align: center;
  color: #2c3f98;
  height: 70px;
  width: 70px;
  background: #f3f3f3;
  margin: auto;
  border-radius: 50%;
  justify-content: center;
  box-shadow: 0 1px 0 #eee;
  :after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background-color: #2c3f99;
    z-index: -1;
    transform: scale(0);
    border-radius: 50%;
    transition: .5s;
  }  
 `;

export const LargePersonListItem = ({ person }) => {
    const { name, icon, description } = person;
    return (
        <>
                 <StyleIcon>{icon}</StyleIcon>
                  <h4>{name}</h4>

            <ul>
                {description.map(description =>
                    <li key={description}>{description}</li>
                )}
            </ul>
        </>
    );
}
