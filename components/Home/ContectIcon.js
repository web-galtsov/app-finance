import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineHomeWork } from "react-icons/md";
import { VscKey } from "react-icons/vsc";
import { SiHomeadvisor } from "react-icons/si";
import { RiBankLine } from "react-icons/ri";
import {
  FlexContainer,
  FlexItem,
  Container,
  FlexItemTitle,
  FlexItemIcon,
} from "@/layout/Styles";

const products = [
  {
    dataAos: "fade-down",
    icons: <MdOutlineHomeWork />,
    title: "איחוד הלוואות",
  },
  {
    dataAos: "fade-down",
    icons: <RiBankLine />,
    title: "משכנתא חוץ בנקאית",
  },
  {
    dataAos: "fade-down",
    icons: <VscKey />,
    title: "מיחזור משכנתא",
  },
  {
    dataAos: "fade-down",
    icons: <IoHomeOutline />,
    title: "מסורבי משכנתא",
  },
  {
    dataAos: "fade-down",
    icons: <SiHomeadvisor />,
    title: "משכנתא הפוכה",
  },
];

function ContectIcon() {
  return (
    <Container>
      <FlexContainer>
        {products.map((item, pros) => (
          <FlexItem data-aos={item.dataAos} key={pros}>
            <FlexItemIcon>{item.icons}</FlexItemIcon>
            <FlexItemTitle>{item.title}</FlexItemTitle>
          </FlexItem>
        ))}
      </FlexContainer>
    </Container>
  );
}
export default ContectIcon;
