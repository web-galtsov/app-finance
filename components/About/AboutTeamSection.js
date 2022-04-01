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
    title: "JON MANAGER",
    img: "/team-img01.jpg",
    alt: "team",
    position: "Financial Officer",
    dataAos: "fade-left",
  },
  {
    title: "JON COHEN",
    img: "/team-img01.jpg",
    alt: "team",
    position: "Financial Officer",
    dataAos: "zoom-in",
  },
  {
    title: "JON MANAGER",
    img: "/team-img01.jpg",
    alt: "team",
    position: "Financial Officer",
    dataAos: "fade-right",
  },
];

function AboutTeamSection() {
  return (
    <>
      <WrapContent className="pt pb background-grey" id="team">
        <SectionTitleText>
          <h6>תעודת הוקרה</h6>
          <h1>מה אומר</h1>
          <h1>לקוחות ממליצים</h1>
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
