import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey THere, I'm <span className="purple">C </span>Christopher Mwenda
            <br />
            As a budding software developer, I'm a full stack web developer who
            has worked with platforms like NodeJs, React and Firebase. On the
            server side of things, I'm in love with serverless backends like
            Firebase and the general cloud environments where they thrives.
            Lately, my passion for buildiong solutions and problem solving has
            driven me to explore opportunities as a Product Manager/Owner. In
            this new role, I put together all of my skills as a marketer and
            software developer to build products users love. In my free time, I
            enjoy working on a couple of personal projects and writing about
            stuff I learn.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            “It is not the critic who counts: not the man who points out how the
            strong man stumbles or where the doer of deeds could have done
            better. The credit belongs to the man who is actually in the arena,
            whose face is marred by dust and sweat and blood, who strives
            valiantly, who errs and comes up short again and again, because
            there is no effort without error or shortcoming, but who knows the
            great enthusiasms, the great devotions, who spends himself in a
            worthy cause; who, at the best, knows, in the end, the triumph of
            high achievement, and who, at the worst, if he fails, at least he
            fails while daring greatly, so that his place shall never be with
            those cold and timid souls who knew neither victory nor defeat.”
          </p>
          <footer className="blockquote-footer">
            —Theodore Roosevelt Speech at the Sorbonne, Paris, April 23, 1910
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
