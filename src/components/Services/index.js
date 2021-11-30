import React from "react";
import Icon1 from "../../images/YouCanToucan.png";
import Icon2 from "../../images/SongBird.png";
import Icon3 from "../../images/svg-5.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="portfolio">
      <ServicesH1>Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>You Can Toucan</ServicesH2>
          <ServicesP>
            Canvas based 2D game created with HTML, CSS, and JS. "Dont get
            addicted."
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Song Bird</ServicesH2>
          <ServicesP>
            Music sharing social platform created with Handle Bars JS, HTML &
            CSS.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Recipez</ServicesH2>
          <ServicesP>
            Recipez is a Full Stack MERN application intended for users to
            create cook books and store recipes.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
