export const LargePersonListItem = ({ person }) => {
    const { name, icon, description } = person;
    return (
        <>
                  <h2>{name}</h2>
                  <p>{icon}</p>
            <ul>
                {description.map(description =>
                    <li key={description}>{description}</li>
                )}
            </ul>
        </>
    );
}
