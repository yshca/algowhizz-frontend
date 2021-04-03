import styled from "styled-components";

export const NavStyles = styled.div`
  color: #fff !important;
  img {
    height: 5vh;
  }
  .nav-element {
    height: 50px !important;
    width: 100% !important;
    background-color: #1A1829;
    border-radius: 0px !important;
  }
`
export const EditorLayout = styled.div`
  height: 100%;
  .splitter-vertical {
    width: 10px !important;
    background-color: #363459 !important;
    border: none !important;
  }
  .splitter-horizontal {
    height: 10px !important;
    background-color: #363459 !important;
    border: none !important;
  }
  .reflex-container > .reflex-splitter:hover {
    background-color: #947eb0 !important;
    transition: all 0.1s ease;
  }
  .reflex-element {
    overflow: hidden;
    background-color: #262533 !important;
  }
`;
export const QuestionMain = styled.div`
  color: #fff;
  user-select: none;
  .MuiTab-root {
    font-weight: bold;
  }
  .MuiTab-root:hover {
    background-color: #947eb0 !important;
  }
  .difficulty {
    width: 17px !important;
    height: 17px !important;
    border-radius: 4px;
    display: inline-block;
    background-color: #008529;
  }
  .Mui-selected:hover {
  }
  .question {
    font-weight: 10px;
  }
  .easy {
  }
`;

export const SolutionMain = styled.div`
  color: #fff;
  .MuiTab-root {
    font-weight: bold;
  }
  .box {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .MuiTab-root:hover {
    background-color: #947eb0 !important;
  }
  .difficulty {
    width: 17px !important;
    height: 17px !important;
    border-radius: 4px;
    display: inline-block;
    background-color: #008529;
  }
  .code-run {
    font-size: 14px !important;
    color: #fff;
    background-color: #0046c7;
    position: absolute;
    right: 0;
    height: 100%;
    border-radius: 0;
  }
  .code-run:hover {
    background-color: #0046c7;
  }
`;

export const ConsoleMain = styled.div`
  color: #fff;
  .MuiTab-root {
    font-weight: bold;
  }
  overflow: auto;
  .MuiTab-root:hover {
    background-color: #947eb0 !important;
  }
  .difficulty {
    width: 17px !important;
    height: 17px !important;
    border-radius: 4px;
    display: inline-block;
    background-color: #008529;
  }
  .code-submit {
    font-size: 14px !important;
    color: #fff;
    background-color: #05942b;
    position: absolute;
    right: 0;
    height: 100%;
    border-radius: 0;
  }
  .code-submit:hover {
    background-color: #05942b;
  }
  .testcase {
    background-color: #262533;
    border: none;
    color: #fff !important;
    width: 100%;
    height: 100%;
    border: #fff !important;
  }
`;

export const EditorStyles = styled.div`
  color: #fff;
  font-size: ${props => props.fontSize};
  .CodeMirror-gutters {
    background-color: #262533 !important;
  }
  .CodeMirror-cursors {
    color: #fff;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(90, 90, 90);
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }
  .CodeMirror {
    background-color: #262533 !important;
    color: #fff !important;
    height: ${props => props.height};
    caret-color: #fff !important;
  }
  .CodeMirror-gutter {
    background-color: #262533 !important;
    color: #fff !important;
  }
  placeholder {
    color: #fff !important;
  }
}
`;
