export const LargePersonListItem = ({ person }) => {
    const { name, icon, description } = person;
    return (
        <>
                  <h4>{name}</h4>
                  <p>{icon}</p>
            <ul>
                {description.map(description =>
                    <li key={description}>{description}</li>
                )}
            </ul>
        </>
    );
}
