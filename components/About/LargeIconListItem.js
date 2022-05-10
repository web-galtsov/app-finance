import {
  FlexItems,
  ItemsBox,
  BoxContect,
  BoxContectIcon,
  BoxContectTitle,
} from "@/layout/Styles";

export const LargeIconListItem = ({ person }) => {
  const { name, icon, description } = person;
  return (
    <FlexItems
      aria-rowindex="1"
      className="col12 col6  col3"
      data-aos="zoom-in"
    >
      <ItemsBox>
        <BoxContect className="box-content">
          <BoxContectIcon className="icon-color">
            {icon}
            <div className="anim-icon">
              <span className="icon icon-1" />
              <span className="icon icon-2" />
              <span className="icon icon-3" />
            </div>
          </BoxContectIcon>
          <BoxContectTitle>
            <h2>{name}</h2>
            <p>{description}</p>
          </BoxContectTitle>
        </BoxContect>
      </ItemsBox>
    </FlexItems>
  );
};
