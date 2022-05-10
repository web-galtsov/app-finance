import {
  WrapContent,
  Container,
  RowTem,
  SectionTitleText,
  EmBarBg,
} from "@/layout/Styles";
import React from "react";
import { RegulaTeam } from "./RegulaTeam";
import { LargeTeamListItem } from "./LargeTeamListItem";

const people = [
  {
    title: "צילה טל", // eslint-disable-next-line
    img: "/mother-tem.webp",
    alt: "team",
    position: "מנהלת שיווק ומכירות",
    dataAos: "fade-left",
  },
  {
    title: "יוסף גוריאלי", // eslint-disable-next-line
    img: "/son-team.webp",
    alt: "team",
    position: "  יועץ משכנתאות",
    dataAos: "zoom-in",
  },
  {
    title: "מאיה רובינשטיין",
    img: "/team-img01.webp",
    alt: "team",
    position: "ניהול קשרי לקוחות",
    dataAos: "fade-right",
  },
];

function AboutTeamSection() {
  return (
    <>
      <WrapContent className="pt pb background-grey" id="team">
        <SectionTitleText>
         {/* <span>תעודת הוקרה</span>
          <h1>מה אומר</h1>*/}
          <h1>צוות סוסופייננס</h1>
        </SectionTitleText>
        <EmBarBg />
        <Container className="mt70">
          <RowTem>
            <RegulaTeam
              items={people}
              resourceName="people"
              itemComponent={LargeTeamListItem}
            />
          </RowTem>
        </Container>
      </WrapContent>
    </>
  );
}
export default AboutTeamSection;
