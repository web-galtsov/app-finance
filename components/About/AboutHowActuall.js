import { TiPencil } from "react-icons/ti";
import { GiPayMoney } from "react-icons/gi";
import { RiFileCopyLine } from "react-icons/ri";
import { MdOutlineManageSearch } from "react-icons/md";
import {
  WrapContent,
  Container,
  FlexContainerN,
  SectionTitleText,
  EmBarBg,
} from "@/layout/Styles";
import React from "react";
import { RegulaIcon } from "./RegulaIcon";
import { LargeIconListItem } from "./LargeIconListItem";

const help = [
  {
    name: "ביורוקרטיה",
    icon: <RiFileCopyLine style={{ marginRight: "11px", marginTop: "25px" }} />,
    description:
      "לורם איפסום הוא טקסט חסר הקשר וחסר משמעות בכוונה - וזאת כדי שעין הקורא לא יתצודי בזמן הרפרוף עליו, מילה",
  },
  {
    name: "מכרז לבנקים",
    icon: <GiPayMoney style={{ marginRight: "11px", marginTop: "25px" }} />,
    description:
      "לורם איפסום הוא טקסט חסר הקשר וחסר משמעות בכוונה - וזאת כדי שעין הקורא לא",
  },
  {
    name: "חתימה",
    icon: <TiPencil style={{ marginRight: "11px", marginTop: "25px" }} />,
    description:
      "אם בשלב הסקיצה העיצובית עדיין לא קיים הטקסט הרלוונטי, לא מומלץ למקם טקסט",
  },
  {
    name: "מחקר",
    icon: (
      <MdOutlineManageSearch
        style={{ marginRight: "11px", marginTop: "25px" }}
      />
    ),
    description:
      "אם בשלב הסקיצה העיצובית עדיין לא קיים הטקסט הרלוונטי, לא מומלץ למקם טקסט אמיתי אחר",
  },
];

function AboutHowActuall() {
  return (
    <WrapContent className="pt pb background-white" id="quite">
      <SectionTitleText>
        <h6>תעודת הוקרה</h6>
        <h1>מה אומר</h1>
        <h1>איך בעצם אני יכול לעזור לכם?</h1>
      </SectionTitleText>
      <EmBarBg />
      <Container className="mt70">
        <FlexContainerN>
          <RegulaIcon
            items={help}
            resourceName="person"
            itemComponent={LargeIconListItem}
          />
        </FlexContainerN>
      </Container>
    </WrapContent>
  );
}
export default AboutHowActuall;
