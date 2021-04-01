import React from "react";
import "./HomePage.scss";
import ip_image from "../images/img1.png";
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.svg";
import amazonLogo from "../images/amazon_logo.png";
import priyamLogo from "../images/priyam2.png";
import { CContainer, CRow, CCol, CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,} from "@coreui/react";

function HomePage() {
  return (
    <>
      {/* section - 1----------------------------------------------------------------------------- */}
      <CContainer fluid="true" className="mainC">
        <CContainer fluid="true" className="backC" />
        <CContainer fluid="true" className="frontC">
          <CRow className="frontC-row1 u-padding-left u-padding-right">
            <CCol sm="3" md="3" lg="3" className="frontC-row1-col1">
              <div className="frontC-row1-col1-obj">
                <p className="heading-primary--main">
                  <span>&#123;</span> AZ <span>&#125;</span>
                </p>
              </div>
            </CCol>
            <CCol sm="6" md="6" lg="6" className="frontC-row1-col2">
              <div className="frontC-row1-col2-obj">
                <a href="#" className="btn2 btn2--white">
                  Problems
                </a>
                <a href="#" className="btn2 btn2--white">
                  Explore
                </a>
                <a href="#" className="btn2 btn2--white">
                  Resources
                </a>
                <a href="#" className="btn2 btn2--white">
                  Blog
                </a>
              </div>
            </CCol>
            <CCol sm="3" md="3" lg="3" className="frontC-row1-col3">
              <div className="frontC-row1-col3-obj">
                <a href="#" className="btn3 btn3--orange">
                  Login
                </a>
              </div>
            </CCol>
          </CRow>

          <CRow className="frontC-row2 u-padding-left u-padding-right">
            <CCol md="12" lg="6" className="frontC-row2-col1">
              <div className="frontC-row2-col1-obj">
                <p className="heading-primary--main u-margin-bottom-small">
                  Learn The Expert Way
                </p>
                <p className="heading-secondry--main u-margin-bottom-medium">
                  AlgoWhizz is the most suited platform to enhance <br />
                  your technical skills required to ace coding interviews.
                </p>
                <a href="#" className="btn btn--orange">
                  Create my Account
                </a>
              </div>
            </CCol>

            <CCol md="12" lg="6" className="frontC-row2-col2">
              <img src={ip_image} className="frontC-row2-col2-obj" />
            </CCol>
          </CRow>
        </CContainer>
      </CContainer>
      {/* section - 1 - ends -------------------------------------------------------------------------- */}

      {/* section - 2 --------------------------------------------------------------------------------- */}
      <CContainer
        fluid="true"
        className="section2"
      >
        <div className="section2-head">
          <p className="heading-primary--sub">Why AlgoWhizz ?</p>
        </div>
        <div className="section2-body">
          <CRow className="section2-body-row">
            <CCol lg="4" md="12">
              <div className="myCard">
                <div className="myCard-head">
                  <img src={icon2} className="myCard-head-icon" />
                </div>
                <div className="myCard-body">
                  <p className="heading-secondry--sub">
                    200 carefully crafted Questions
                  </p>
                  <p className="myContent--sub">
                    Because this is something, we truly pay attention to. We
                    have 200 carefully crafted questions verified and
                    recommended by the industry experts.
                  </p>
                  <p className="myCard-btn myContent--main">Learn More</p>
                </div>
              </div>
            </CCol>
            <CCol lg="4" md="12">
              <div className="myCard">
                <div className="myCard-head">
                  <img src={icon1} className="myCard-head-icon" />
                </div>
                <div className="myCard-body">
                  <p className="heading-secondry--sub">
                    Track your progress with Analytics
                  </p>
                  <p className="myContent--sub">
                    Because we know the importance of improving yourself each
                    day, With AlgoProdigy, you can check your performance and
                    assess your position among peers.
                  </p>
                  <p className="myCard-btn myContent--main ">Learn More</p>
                </div>
              </div>
            </CCol>
            <CCol lg="4" md="12">
              <div className="myCard">
                <div className="myCard-head">
                  <img src={icon3} className="myCard-head-icon" />
                </div>
                <div className="myCard-body">
                  <p className="heading-secondry--sub">
                    Video solutions tailored for you
                  </p>
                  <p className="myContent--sub">
                    Because we know that it’s not just about code but the
                    thought process behind it, With AlgoProdigy you have access
                    to most generalized video solutions at your fingertips.
                  </p>
                  <p className="myCard-btn myContent--main">Learn More</p>
                </div>
              </div>
            </CCol>
          </CRow>
        </div>
      </CContainer>
      {/* section - 2 - ends -------------------------------------------------------------------------- */}

      {/* section - 3 --------------------------------------------------------------------------------- */}
      <CContainer
        fluid="true"
        className="section3 u-padding-left u-padding-right"
      ></CContainer>
      {/* section - 3 - ends -------------------------------------------------------------------------- */}

      {/* section - 4 --------------------------------------------------------------------------------- */}
      <CContainer fluid="true" className="section4">
        <div className="section4-head">
          <p className="heading-primary--sub">
            What our other users have said about us
          </p>
        </div>
        <CCarousel animate>
              <CCarouselInner>
                <CCarouselItem>
                  <div className="section4-body">
          <div className="section4-body-img">
            <img src={priyamLogo} className="section4Img" />
          </div>
          <div className="section4-body-content">
            <div className="myCard2">
              <div className="myCard2-head">
                Mr. Priyam Bajpai
                <br /> IIT Indore
                <br /> Amazon SDE Intern Summer ‘21
              </div>
              <div className="myCard2-body">
                The well planned and well executed curriculum, along with the
                excellent live classes were exactly what I needed. The inspiring
                peer group and my mentor have finally put me on a focussed
                track, and Scaler is the only thing that helps me code
                regularly.
              </div>
              <div>
                <img src={amazonLogo} className="myCard2-logo" />
              </div>
            </div>
          </div>
        </div>
                </CCarouselItem>
                <CCarouselItem>
                 <div className="section4-body">
          <div className="section4-body-img">
            <img src={priyamLogo} className="section4Img" />
          </div>
          <div className="section4-body-content">
            <div className="myCard2">
              <div className="myCard2-head">
                Mr. Bajpai
                <br /> IIT Indore
                <br /> Amazon SDE Intern Summer ‘21
              </div>
              <div className="myCard2-body">
                The well planned and well executed curriculum, along with the
                excellent live classes were exactly what I needed. The inspiring
                peer group and my mentor have finally put me on a focussed
                track, and Scaler is the only thing that helps me code
                regularly.
              </div>
              <div>
                <img src={amazonLogo} className="myCard2-logo" />
              </div>
            </div>
          </div>
        </div>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
        
      </CContainer>
      {/* section - 4 - ends -------------------------------------------------------------------------- */}

      {/* section - 5 --------------------------------------------------------------------------------- */}
      <CContainer fluid="true" className="section5"></CContainer>
      {/* section - 5 - ends -------------------------------------------------------------------------- */}

      {/* footer      --------------------------------------------------------------------------------- */}
      <CContainer fluid="true" className="myFooter">
        <a href="#" className="btn btn--orange myFooter-btn">
          Kick off AlgoWhizz Now!
        </a>
        <CRow>
          <CCol xs="3" sm="12" md="3" lg="3">
            <p className="heading-primary--main">
              <span>&#123;</span> AlgoWhizz <span>&#125;</span>
            </p>
            <div className="myFooter-heading">Stay Connected</div>
            <div className="myFooter-body">
              Join our community to get bi-weekly tips on coding interviews.
            </div>

            {/* <form className="form">
              <input
                type="email"
                className="form__field"
                placeholder="Your E-Mail Address"
              />
              <button type="button" className="myFooter-btn2 myFooter-btn2--primary">
                Send
              </button>
            </form> */}
          </CCol>

          <CCol xs="3" sm="12" md="3" lg="3">
            <div className="myFooter-heading">About Us</div>
            <div className="myFooter-body">
              A bunch of geeks coming together to help you grab your dream job
              because we believe that with the right preparation no goal is
              unattainable.
            </div>
          </CCol>

          <CCol xs="3" sm="12" md="3" lg="3">
            <div className="myFooter-heading">Useful Links</div>
            <div className="myFooter-body">
              Contact us
              <br /> Help Centre
              <br /> University Connect
              <br /> Terms & Conditions
              <br />
              Privacy policy
            </div>
          </CCol>

          <CCol xs="3" sm="12" md="3" lg="3">
            <div className="myFooter-heading">Navigate</div>
            <div className="myFooter-body">
              Coding Interview
              <br /> Problems
              <br /> Data structure
              <br /> Crash course
              <br /> Tutorials for beginners
              <br /> Coding Interview Assesment
              <br /> Coding Interview tips
            </div>
          </CCol>
        </CRow>
        <div className="myFooter-body">
              Engineered with <span className="heart">&#9829;</span>.&nbsp; Copyright @ InterviewPrep .
        </div>
          
      </CContainer>
    </>
  );
}

export default HomePage;
