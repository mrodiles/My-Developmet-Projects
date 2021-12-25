import React from "react";
import { Link } from "react-router-dom";
import Icon1 from "../../images/undraw_gaming_re_cma2.svg";
import Icon2 from "../../images/undraw_happy_music_g6wc (2).svg";
import Icon3 from "../../images/undraw_cooking_lyxy.svg";
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
          <ServicesH2
            href="https://mrodiles.github.io/oop-toucan/index.html"
            target="_blank"
            aria-label="You Can Toucan"
            rel="noopener noreferrer"
          >
            You Can Toucan
          </ServicesH2>
          <ServicesP>
            Canvas based 2D game created with HTML, CSS, and JS. "Dont get
            addicted."
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2
            href="https://song-bird-discover-music.herokuapp.com/"
            target="_blank"
            aria-label="Song Bird"
            rel="noopener noreferrer"
          >
            Song Bird
          </ServicesH2>
          <ServicesP>
            Music sharing social platform created with Handle Bars JS, HTML &
            CSS.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2
            href="https://ironhack-recipez.netlify.app/"
            target="_blank"
            aria-label="Recipez"
            rel="noopener noreferrer"
          >
            Recipez
          </ServicesH2>
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
