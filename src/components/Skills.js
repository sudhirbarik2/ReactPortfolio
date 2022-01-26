import React from 'react';


var icons = [
  {
    "name": "JavaScript",
    "class": "devicon-javascript-plain colored",
    "level": "70"
  },
  {
    "name": "React",
    "class": "devicon-react-original colored",
    "level": "60"
  },
  {
    "name": "Node",
    "class": "devicon-nodejs-plain colored",
    "level": "60"
  },
  {
    "name": "Express",
    "class": "devicon-express-original ",
    "level": "60"
  },
  {
    "name": "Mongo DB",
    "class": "devicon-mongodb-plain colored",
    "level": "60"
  },
  {
    "name": "HTML 5",
    "class": "devicon-html5-plain colored",
    "level": "95"
  },
  {
    "name": "CSS 3",
    "class": "devicon-css3-plain colored",
    "level": "95"
  },
  {
    "name": "Angular",
    "class": "devicon-angularjs-plain colored",
    "level": "80"
  },
  {
    "name": "TypeScript",
    "class": "devicon-typescript-plain colored",
    "level": "90"
  },

  {
    "name": "Sass",
    "class": "devicon-sass-original colored",
    "level": "75"
  },
  {
    "name": "Bootstrap",
    "class": "devicon-bootstrap-plain ",
    "level": "85"
  },

  {
    "name": "mysql",
    "class": "devicon-mysql-plain colored",
    "level": "85"
  },
  {
    "name": "Java",
    "class": "devicon-java-plain-wordmark colored",
    "level": "85"
  },
  {
    "name": "git",
    "class": "devicon-git-plain-wordmark colored",
    "level": "85"
  },
  {
    "name": "Python",
    "class": "devicon-python-plain colored",
    "level": "85"
  },
  {
    "name": "Android Studio",
    "class": "devicon-android-plain colored",
    "level": "85"
  }

]
function Skills() {
  if (icons) {
    var skills = icons.map(function (skills, i) {
      return (
        <i className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center skills-tile">
              <i className={skills.class} style={{ fontSize: "220%" }}>
                <p
                  className="text-center"
                  style={{ fontSize: "30%", marginTop: "4px" }}
                >
                  {skills.name}
                </p>
              </i>
            </div>
          </span>
        </i>
      );
    });
  }
  return (
    <div>
      <section id="skills">

        <div className="overlay"></div>
        <div className="gradient-overlay"></div>

        <div className="row wide">
          <div className="col-md-6 col-sm-12 col-xs-12 offset-md-1">

            <div className="section-intro">
              <h3 className="animate-this">Skillset</h3>
              <h1 className="animate-this">I've Got Some Skills.</h1>

              <p className="animate-this"></p>
            </div>

            <div className="col-md-12">

              <div className="col-md-12 text-center">
                <ul id='skillSet' className="skill-icon">{skills}</ul>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Skills;
