import React from "react";
import Jun from "../images/Jun.jpg";
import Resume from "../document/Resume.pdf";
import Netflix from "../images/Netflix.png";
import Airbnb from "../images/Airbnb.png";
import Covid from "../images/Covid.png";
import Todo from "../images/Todo.png";
//import "./BlueHome.css";
//import "./GreenHome.css";
//import "./PurpleHome.css";
import "./Home.css";
//import { useHistory } from "react-router-dom";

function Home() {
  //const history = useHistory();
  return (
    <div>
      <section className="s1">
        <div className="main-container">
          <div className="greeting-wrapper">
            <h1>Welcome to my Portfolio</h1>
          </div>

          <div className="intro-wrapper">
            <div className="nav-wrapper">
              <div className="dots-wrapper">
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              </div>
            </div>
            <div className="left-column">
              <img id="profile_pic" src={Jun} />
              <p id="setting-note">Junfeng Ou</p>
            </div>

            <div className="right-column">
              <div id="preview-shadow">
                <div id="preview">
                  <div id="corner-tl" className="corner"></div>
                  <div id="corner-tr" className="corner"></div>
                  <h3>What I do</h3>
                  <p>
                    I am a student at University of Omaha Nebraska Studying
                    Management Information System while learning web development
                    in my free time
                  </p>
                  <div id="corner-br" className="corner"></div>
                  <div id="corner-bl" className="corner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s2">
        <div className="main-container">
          <div className="about-wrappper">
            <div className="about-me">
              <h4>More about me</h4>
              <p>
                Currently focusing on learning more about frontend development
                with React JS and REST API
              </p>

              <p>
                My goal is to become fullstack developer in the next two years
              </p>

              <hr />

              <h4>Top Expertise</h4>
              <p>
                Frontend developer primarily focusing on React JS <br />
                <a target="_blank" href={Resume}>
                  Download Resume
                </a>
              </p>

              <div id="skills">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React JavaScript</li>
                  <li>REST</li>
                  <li>Java</li>
                </ul>

                <ul>
                  <li>SQL Database</li>
                  <li>Google Firebase</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>WordPress</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s1">
        <div className="main-container">
          <h3 className="post-title">My projects</h3>

          <div className="post-wrapper">
            <div>
              <div className="post">
                <img className="thumbnail" src={Netflix} />
                <div className="post-preview">
                  <h6 className="post-title">Netflix clone</h6>
                  <p className="post-intro">
                    This is the Netflix clone built with React JS...
                  </p>
                  {/**<a onClick={() => history.push("/netflix")} href="#"> */}
                  <div className="post-links">
                    <a
                      target="_blank"
                      href="https://netflix-clone-ff957.web.app"
                    >
                      Visit site
                    </a>
                    <br />
                    <a
                      target="_blank"
                      href="https://github.com/Junfengou/Netflix-clone-react"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="post">
                <img className="thumbnail" src={Airbnb} />
                <div className="post-preview">
                  <h6 className="post-title">Airbnb clone</h6>
                  <p className="post-intro">
                    This is the Airbnb clone built with React JS...
                  </p>
                  <div className="post-links">
                    <a
                      target="_blank"
                      href="https://airbnb-clone-b071d.web.app/"
                    >
                      Visit site
                    </a>
                    <br />
                    <a
                      target="_blank"
                      href="https://github.com/Junfengou/Airbnb-clone"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="post">
                <img className="thumbnail" src={Covid} />
                <div className="post-preview">
                  <h6 className="post-title">COVID tracker</h6>
                  <p className="post-intro">
                    This is a COVID tracker app built with React JS...
                  </p>
                  <div className="post-links">
                    <a
                      target="_blank"
                      href="https://covid-tracker-da6fe.web.app"
                    >
                      Visit site
                    </a>
                    <br />
                    <a
                      target="_blank"
                      href="https://github.com/Junfengou/Covid-tracker-react"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="post">
              <img className="thumbnail" src={Todo} />
              <div className="post-preview">
                <h6 className="post-title">Todo app</h6>
                <p className="post-intro">
                  This is a simple todo app I built when I first start....
                </p>
                <div className="post-links">
                  <a target="_blank" href="https://todo-list-51f64.web.app/">
                    Visit site
                  </a>
                  <br />
                  <a
                    target="_blank"
                    href="https://github.com/Junfengou/TodoList-react"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s2">
        <div className="main-container">
          <h3 className="post-title">Contact me</h3>
          <form id="contact-form">
            <label>Name</label>
            <input className="input-field" type="text" name="name" />

            <label>Subject</label>
            <input className="input-field" type="text" name="subject" />

            <label>Email</label>
            <input className="input-field" type="text" name="email" />

            <label>Message</label>
            <textarea className="input-field" type="text" name="message" />
            <input id="submit-btn" type="submit" value="Send" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
