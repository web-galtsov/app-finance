import styled from "styled-components";

const StyleIcon = styled.div`
  width: 90px;
  height: 90px;
  line-height: 90px;
  background: #4D78EB;
  text-align: center;
  border-radius: 70% 30% 30% 70%/60% 40% 60% 40%;
  margin-bottom: 25px;
  transition: all .5s ease-in-out;
  float: left;
  margin-right: 35px;
  cursor: pointer;
  box-shadow: 1px 2px 0 0 #d81f30;
  span {
    font-size: 45px;
    color: #fff;
  }
`;

export const LargePersonListItem = ({ person }) => {
    const { title,icon, description } = person;
    return (
        <>
            <StyleIcon>
                <span>{icon}</span>
            </StyleIcon>
            <h3>{title}</h3>
            <ul>
                {description.map(description =>
                    <li key={description}>{description}</li>
                )}
            </ul>
        </>
    );
}
