import React from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import "react-reflex/styles.css";
import { EditorLayout } from '../styles/EditorLayout'
import ConsoleLayout from './ConsoleLayout';
import QuestionLayout from './QuestionLayout';
import SolutionLayout from './SolutionLayout';
import { gql, useMutation } from '@apollo/client';
import { propTypes } from 'react-bootstrap/esm/Image';

const SUBMIT_CODE = gql`
  mutation ($input: SubmissionInput!) {
    submit(input: $input) {
      _id
    stdOut
		stdErr
    compileOutput
  	statusId
    statusDescription
    time
    memory
    compareResult
    lastTestCase 
    expectedOutput
    totalCorrect
    createdAt
   	languageId
    userId
    questionId
   	codeSubmitted
    }
  }
`;

const EditorMain = (props) => {
  const [solution, setSolution] = React.useState("");
  const [submitCode, { data, error, loading }] = useMutation(SUBMIT_CODE);

    const onResize = (e) => {

        if (e.domElement) {
    
          e.domElement.classList.add('resizing')
        }
      }
    
      const onStopResize = (e) => {
    
        if (e.domElement) {
    
          e.domElement.classList.remove('resizing')
        }
      }
      const resizeProps = {
          onResize,
          onStopResize
      }

  return (
      <EditorLayout>
    <ReflexContainer orientation="horizontal">
      <ReflexElement>
        <ReflexContainer orientation="vertical">
          <ReflexElement flex={0.5} {...resizeProps}>
            <QuestionLayout id={props.id}/>
          </ReflexElement>
          <ReflexSplitter className="splitter-vertical" {...resizeProps} />
          <ReflexElement {...resizeProps}>
            <ReflexContainer orientation="horizontal">
              <ReflexElement {...resizeProps}>
                  <ReflexContainer orientation="vertical">
                    <ReflexElement renderOnResize propagateDimensionsRate={200} propagateDimensions {...resizeProps}>
                      <SolutionLayout submitCode={submitCode} solution={solution} onChange={setSolution}/>
                    </ReflexElement>
                  </ReflexContainer>
              </ReflexElement>
              <ReflexSplitter className="splitter-horizontal" {...resizeProps} />
              <ReflexElement {...resizeProps}>
                <ConsoleLayout solution={solution} submitCode={submitCode} data={data} error={error} loading={loading}/>
              </ReflexElement>
            </ReflexContainer>
          </ReflexElement>
        </ReflexContainer>
      </ReflexElement>
    </ReflexContainer>
    </EditorLayout>
  );
};

export default EditorMain;