import styled from "styled-components";

const Icons = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;
const StyleIcon = styled.div`
    font-size: 55px;
    color: #2C3F99;
    transition: .5s;
    cursor: pointer;
`;

export const DeniersPersonListItem = ({ person }) => {
    const { name, icon, description } = person;
    return (
        <>
            <Icons>
                <StyleIcon>{icon}</StyleIcon>
            </Icons>
            <h3>{name}</h3>
            <ul>
                {description.map(description =>
                    <li key={description}>{description}</li>
                )}
            </ul>
        </>

    );
};
