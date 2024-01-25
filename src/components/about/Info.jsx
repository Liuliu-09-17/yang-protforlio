import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-code-alt about__icon"></i>
        <h3 className="about__title">Technical</h3>
        <span className="about__subtitle">Elite</span>
      </div>

      <div className="about__box">
        <i class="bx bx-bulb about__icon"></i>
        <h3 className="about__title">Innovative</h3>
        <span className="about__subtitle">Thinker</span>
      </div>

      <div className="about__box">
        <i class="bx bx-group about__icon"></i>
        <h3 className="about__title">Collaborative</h3>
        <span className="about__subtitle">Team Player</span>
      </div>
    </div>
  );
};

export default Info;
