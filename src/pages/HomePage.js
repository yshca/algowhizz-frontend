import React from "react";
import "./HomePage.css";
import { CContainer, CRow, CCol, CButton } from "@coreui/react";

function HomePage() {
  return (
    <>
      <CContainer fluid="true" className="min-vh-100 main-container">
        <CContainer fluid="true" className="min-vh-100 back-container" />
        <CContainer fluid="true" className="min-vh-100 front-container ml-md-5">
          <CRow className="row1">
            <CCol className="py-3"> column 1 </CCol>{" "}
            <CCol className="bg-warning py-3"> column 2 </CCol>{" "}
          </CRow>{" "}
          <CRow className="row2">
            <CCol xs="6" sm="6" md="6" className="py-3">
              <p className="heading"> Learn The Expert Way </p>{" "}
              <p className="sub-heading">
                InterviewPrep is the most suited platform to enhance <br /> your
                technical skills required to ace coding interviews{" "}
              </p>{" "}
              <CButton
                color="primary"
                href="https://coreui.io/"
                target="_blank"
              >
                More Info{" "}
              </CButton>{" "}
            </CCol>{" "}
            <CCol xs="6" sm="6" md="6" className="py-3">
              column 2{" "}
            </CCol>{" "}
          </CRow>{" "}
          {/* <CRow>
                                            <div className='homepage'>
                                                <div className='box-1'>
                                                    <div className='heading'>
                                                        <h1>
                                                            Learn The Expert Way
                                                  </h1>
                                                    </div>
                                                    <div className='content'>
                                                        <p>
                                                            AlgoProdigy is the best platform to enhance your technical skills required to ace coding interviews
                                                  </p>
              <div className='rectangle'>
              <CreateMyAccount />
              </div>
                                                    </div>

                                                </div>
                                                <div className='box-2'>
                                                    pic
                                              </div>
                                                <div class="custom-shape-divider-bottom-1610033275">
                                                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            </CRow> */}{" "}
        </CContainer>{" "}
      </CContainer>{" "}
    </>
  );
}

export default HomePage;
