import "./style/style.css";
const Portfolio = () => {
  return (
    <>
      <section className="projects" id="projects">
        <h2>HTML&CSS Projects</h2>
        <div className="project-1">
          <a href="./mockups/Jaewon-Hwang-final-project/index.html">
            BR Architects
          </a>
        </div>
        <div className="project-2">
          <a href="./mockups/Jawon-Hwang-assingment-2/index.html">
            Cat parcel out
          </a>
        </div>
        <div className="project-3">
          <a href="./mockups/practice project/index.html">Cryptco</a>
        </div>
        <div className="project-4">
          <a href="./mockups/project-files/index.html">Cloudev</a>
        </div>
      </section>
      <section className="projects" id="projects">
        <h2>JavaScript Projects</h2>
        <div className="project-9">
          <a href="https://glittery-toffee-3a2b70.netlify.app/">
            Budget Calculator
          </a>
        </div>
        <div className="project-10">
          <a href="https://merry-halva-c275d6.netlify.app/">Match game</a>
        </div>

        <div className="project-12">
          <a href="https://eclectic-basbousa-287e4a.netlify.app/">
            Winnipeg Weather
          </a>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>React Project</h2>
        <div className="project-13">
          <a href="https://mittflex.netlify.app/">MittFlix</a>
        </div>
        <div className="project-14">
          <a href="https://eloquent-sunflower-424d9d.netlify.app">MouseCart</a>
        </div>
        <div className="project-15">
          <a href="https://flourishing-pixie-499eec.netlify.app">Map Search</a>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>.Net Projects(Demo of Q&A web)</h2>
        <div className="project-5">
          <a href="http://jaewon-001-site1.htempurl.com">Q&A</a>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
