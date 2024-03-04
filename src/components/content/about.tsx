import hoaLogo from "@/assets/img/about/hoa.jpg";
import myCV from "@/assets/Resume_2.pdf";
import { TypeAnimation } from "react-type-animation";
import { useRef, useEffect } from "react";
import Parallax from "parallax-js";

const About = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true,
      });

      parallaxInstance.enable();
      return () => parallaxInstance.disable();
    }
  }, []);
  return (
    <div
      className="arlo_tm_section relative"
      id="about"
      style={{ paddingTop: 100 }}
    >
      <div className="arlo_tm_about_wrapper_all">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>About Me</h3>
            <span>Main informations about me</span>
          </div>
          <div className="arlo_tm_about_wrap">
            <div className="author_wrap">
              <div className="leftbox">
                <div
                  className="about_image_wrap parallax"
                  data-relative-input="true"
                  ref={sceneEl}
                >
                  <div className="image layer" data-depth="0.2">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div
                      className="inner"
                      data-img-url={hoaLogo}
                      style={{ backgroundImage: `url(${hoaLogo})` }}
                    ></div>
                  </div>
                  <div className="border layer" data-depth="0.6">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner"></div>
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>
                    I'm Phạm Nguyễn Gia Hòa and a&nbsp;
                    <TypeAnimation
                      sequence={[
                        "Freelancer",
                        2000,
                        "Web Developer",
                        2000,

                        () => {
                          console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                        },
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      // style={{ fontSize: '2em', display: 'inline-block' }}
                    />
                  </h4>
                </div>
                <div className="definition">
                  <p>
                    Hi! My name is <strong>Phạm Nguyễn Gia Hòa</strong>. I am
                    seeking an job in backend web development where I can apply
                    to gain hands-on experience, learn from experts in the
                    field. My long-term goal is to become a proficient backend
                    web developer, who can design and implement scalable,
                    secure, and efficient web services and APIs, while
                    constantly learning new technologies and best practices in
                    this fast-paced field. I believe that my passion, skills,
                    knowledge, and experience will add value to your products
                    and contribute to the success of your company
                  </p>
                </div>
                <div className="about_short_contact_wrap">
                  <ul>
                    <li>
                      <span>
                        <label>Birthday:</label> 21.12.2001
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Gender:</label> Male
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Study:</label> HUST
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Speciality:</label> Information Technology
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Github:</label>{" "}
                        <a href="#">https://github.com/hoapng</a>
                      </span>
                    </li>

                    <li>
                      <span>
                        <label>Mail:</label>{" "}
                        <a href="mailto:giahoa01giathieu@gmail.com">
                          giahoa01giathieu&#64;gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Facebook:</label>{" "}
                        <a href="#">
                          https://www.facebook.com/profile.php?id=100008674306175
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="buttons_wrap">
                  <ul>
                    <li>
                      <a href={myCV} download>
                        <span>Download CV</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
