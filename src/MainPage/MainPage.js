import React from "react";
import "./MainPage.css";

export default function MainPage(props) {
  return (
    <div>
      <div className="about" id="about">
        <h1>From Brushstrokes to Code:</h1>
        <br />
        <h1>Full-Stack Software Engineer with a Creative Edge</h1>
        <br />

        <p className="aboutP">
          With 15 years as an artist and entrepreneur, I developed a sharp eye
          for detail, problem-solving, and innovation. Now, I channel that
          expertise into building scalable, intuitive, and high-performance
          applications—blending creativity with cutting-edge technology to craft
          seamless digital experiences.
        </p>
      </div>
      <div className="love">
        <h2>With 4+ years in production, specializing in: </h2>
        <div className="love-text">
          <br />
          <p>
            React,
            <br />
            AWS,
            <br />
            Cloud Architecture,
            <br />
            and transforming challenges into solutions.
            <br />
          </p>

          <br />
          <br />
          <div className="sql">
            <p>
              I thrive on tackling complex challenges, collaborating with agile
              teams, and delivering seamless user experiences. Whether painting
              a mural or engineering a cutting-edge POS system, I believe in
              elegant solutions with full test coverage, attention to detail,
              and the perfect balance of creativity and logic.
            </p>
          </div>
          <br />
          <br />
          <div className="life">
            <p>
              When I’m not coding, you’ll find me teaching yoga, training in
              aerial silks, or painting—always exploring new ways to innovate,
              both on and off the screen. Let’s build something amazing
              together!
            </p>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}
