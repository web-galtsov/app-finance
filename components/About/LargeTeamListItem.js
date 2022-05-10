import Image from "next/image";
import {
  AboutTeamItem,
  AboutTeamItemView,
  AboutTeamItemViewPosition,
  AboutTeamItemInfo,
} from "@/layout/Styles";
import React from "react";

export const LargeTeamListItem = ({ people }) => {
  const { img, alt, position, dataAos, title } = people;
  return (
    <AboutTeamItem className="witr_team" data-aos={dataAos}>
      <AboutTeamItemView className="background-white">
        <AboutTeamItemViewPosition>
                <Image
                    src={img}
                    alt={alt}
                    width={214}
                    height={232}
                    placeholder="blur"
                    blurDataURL={img}
                    priority
                />
        </AboutTeamItemViewPosition>
        <AboutTeamItemInfo>
          <span>{title}</span>
          <p>{position}</p>
        </AboutTeamItemInfo>
        <div className="team_line team_line_top" />
        <div className="team_line team_line_bottom" />
        <div className="team_line team_line_left" />
        <div className="team_line team_line_right" />
      </AboutTeamItemView>
    </AboutTeamItem>
  );
};
