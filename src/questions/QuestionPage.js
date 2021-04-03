import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CContainer,
  CFormGroup,
  CInputCheckbox,
  CLabel,
  CButton
} from "@coreui/react";
import { CChartPie } from '@coreui/react-chartjs';
import { Company, Difficulty, List, Random } from "./filters";
import questionData, { size } from "./UsersData";
import CIcon from '@coreui/icons-react'
import '../index.css'

const difficultyMap = ['EASY', 'MEDIUM', 'HARD']
const topicTags = ["Warmup", "Implementation", "Strings", "Sorting", "Search", "Graph Theory", "Greedy", "Dynamic Programming", "Constructive Algorithms", "Bit Manipulation", "Recursion"]
const getBadge = (status) => {
  switch (status) {
    case 0:
      return "success";
    case 1:
      return "warning";
    case 2:
      return "danger";
    default:
      return "primary";
  }
};

const convert = (t) => {
  let obj = new Map()
  t.map(tp => obj.set(tp ,false))
  return obj;
}

const QuestionPage = () => {
  const history = useHistory();
  
  const [page, setPage] = useState(1);
  const [difficulty, setDifficulty] = React.useState(-1)
  const [questions, setQuestions] = React.useState(questionData)
  const [tags, setTags] = React.useState(convert(topicTags))
  
  const pageChange = (newPage) => {
    page !== newPage && setPage(newPage);
  };

  const handleDifficulty = (event) => {
    const dif = parseInt(event.target.attributes.value.nodeValue)
    if( dif === difficulty) {
      setDifficulty(-1)
    } else {
      setDifficulty(dif)
    }
  }

  const hangleTags = (event) => {
    const name = event.target.name;
    const prevTags = tags
    prevTags.set(name, event.target.checked)
    console.log(prevTags)
    setTags(prevTags)
  }
  useEffect(() => {
    if(difficulty !== -1)
    {
      const filteredQuestions = questionData.filter((q) => q.difficulty === difficulty)
      setQuestions(filteredQuestions)
    }else {
      setQuestions(questionData)
    }

  }, [difficulty]);

  return (
    <CContainer>
      <CRow style={{marginTop: '5vh'}}>
        <CCol md={9} >
          <CRow style={{ textAlign: 'center', margin: 'auto'}}>
          <CCol md={2}></CCol>
            <CCol md={4}>
              <div className="foundation-text">
              Want to work on your basics?<br/>Check out our foundation course<br/> and strengthen your basics now
              </div>
            </CCol>
            <CCol md={2}>
              <CButton className="foundation-course">
                C++
              </CButton>
            </CCol>
            <CCol md={2}>
            <CButton className="foundation-course">
                Python
              </CButton>
            </CCol>
            <CCol md={2}></CCol>
            </CRow>
            <hr/>
          <CCard>
            <CCardBody>
            <CRow>
              <CCol><Random /></CCol> 
              <div className="d-flex flex-row-reverse">
              <CIcon content={"cilStar"} size="2xl"/>
              <div className="p-1"><Company /></div>
              <div className="p-1"><List /></div>
              <div className="p-1"><Difficulty val={difficulty} onChange={handleDifficulty} /></div>
              </div>
            </CRow>
              <CDataTable
                items={questions}
                fields={[
                  { key: "name", _classes: "font-weight-bold",_style: { width: '80%'} },
                  "difficulty",
                ]}
                hover
                striped
                itemsPerPage={20}
                activePage={page}
                clickableRows
                sorter
                onRowClick={(item) => history.push(`/question/${item.slug}`)}
                scopedSlots={{
                  difficulty: (item) => (
                    <td>
                      <CBadge color={getBadge(item.difficulty)}>
                        {difficultyMap[item.difficulty]}
                      </CBadge>
                    </td>
                  ),
                  // isSolved: (item) => (
                  //   <td>
                  //       {item.isSolved === 'true' ? "Done" : "False"}
                  //   </td>
                  // ),
                }}
              />
              <CPagination
                activePage={page}
                onActivePageChange={pageChange}
                pages={size / 20 + 1}
                doubleArrows={false}
                align="center"
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={3} style={{ backgroundColor: "" }}>
          <div className="sticky-top">
          <div>
          <CChartPie
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                ],
                data: [80, 20]
              }
            ]}
            labels={['Solved', 'Todo']}
            options={{
              tooltips: {
                enabled: true
              },
              
            }}
          />
          </div>
            <CCard>
              <CCardHeader>
                Topics
              </CCardHeader>
              <CCardBody>
              <CFormGroup>
                { topicTags.map((topic) => (
                <div style={{ margin: '10px 0'}}>
                      <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox 
                        id={"checkbox-" + topic}
                        name={topic} 
                        value={topic} 
                        checked={tags[`${topic}`]}
                        onChange={hangleTags}
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1">{topic}</CLabel>
                    </CFormGroup>
                    </div>))}     
                    </CFormGroup>
              </CCardBody>
            </CCard>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default QuestionPage;

{/* <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox 
                        custom 
                        id="inline-checkbox1" 
                        name="inline-checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">One</CLabel>
                    </CFormGroup> */}
                    
                //     <CFormGroup row>
                    
                //     <CFormGroup variant="checkbox" className="checkbox">
                //       <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                //       <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Option 2</CLabel>
                //     </CFormGroup>
                //     <CFormGroup variant="checkbox" className="checkbox">
                //       <CInputCheckbox id="checkbox3" name="checkbox3" value="option3" />
                //       <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox3">Option 3</CLabel>
                //     </CFormGroup>
                // </CFormGroup>