import Masonry from 'react-masonry-css';
const breakpointColumnsObj = {
    default: 4,
    3000: 4,
    2000: 3,
    1200: 2,
    1000: 1,
    500: 1,
};

export const RegulaIcon = ({ items, resourceName,  itemComponent: ItemComponent }) => {
    return (
        <>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {items.map((item, i) => (
                    <ItemComponent key={i} {...{ [resourceName]: item }} />
                ))}
            </Masonry>
        </>
    );
};
