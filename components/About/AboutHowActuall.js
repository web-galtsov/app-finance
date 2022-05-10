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
    name: "מחקר",
    icon: (
        <MdOutlineManageSearch
            style={{ marginRight: "11px", marginTop: "25px" }}
        />
    ),
    description:
        "אנו בחברת סוסופייננס מבצעים עבור הלקוח ניתוח מעמיק בפרופיל הפיננסי.",
  },
  {
    name: "מכרז לבנקים",
    icon: <GiPayMoney style={{ marginRight: "11px", marginTop: "25px" }} />,
    description:
        "בעזרת כלכלנים מומחים, עם וותק בתחום הבנקאות,אנו בונים תמהיל עם מסלולים המותאמים אישית ללקוח. את התמהיל אנו מגישים למכרז ריביות בין הבנקים, על מנת לקבל את ההצעה המשתלמת ביותר.",
  },
  {
    name: "ביורוקרטיה",
    icon: <RiFileCopyLine style={{ marginRight: "11px", marginTop: "25px" }} />,
    description:
      "אנו נדאג להכין עבורכם את כל מה שצריך בכדי למנוע מכם לבזבז זמן, אנרגיות ושעות עבודה.",
  },
    {
    name: "חתימה",
    icon: <TiPencil style={{ marginRight: "11px", marginTop: "25px" }} />,
    description:
      "חתימה- מה שנותר לכם הוא רק לחתום על טפסי המשכנתא, ולצאת מחויכים כל הדרך מהבנק. ",
  }
 ];

function AboutHowActuall() {
  return (
    <WrapContent className="pt pb background-white" id="quite">
      <SectionTitleText>
        {/*<span>תעודת הוקרה</span>*/}
       {/* <h1>מה אומר</h1>*/}
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
