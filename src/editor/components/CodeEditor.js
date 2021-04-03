import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/scroll/simplescrollbars.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/material.css";
import "codemirror/theme/midnight.css"
import "codemirror/theme/night.css";
import "codemirror/theme/solarized.css";
import "codemirror/mode/clike/clike";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/continuelist";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/trailingspace";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/fold/indent-fold";
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/lint';

import { Controlled as ControlledEditor } from "react-codemirror2";
import { EditorStyles } from "../styles/EditorLayout";

const CodeEditor = (props) => {
  const { language, displayName, value, onChange } = props;
  //const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  const height = (props.height - 70).toString() + "px !important";
  const fontSize = props.fontSize.toString() + "px !important";
  const theme = props.theme
  return (
    <EditorStyles height={height} fontSize={fontSize}>
      {/* <div className="editor-title">
        {displayName}
      </div> */}
      <ControlledEditor
        className="code-editor"
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        scroll={"overlay"}
        options={{
          styleActiveLine: true,
          gutters: [
            "CodeMirror-linenumbers",
            "CodeMirror-foldgutter",
            "CodeMirror-lint-markers",
          ],
          foldGutter: true,
          autoCloseTags: true,
          autoCloseBrackets: true,
          matchBrackets: true,
          matchTags: true,
          lineWrapping: true,
          smartIndent: true,
          lineNumbers: true,
          defaultTextHeight: 200,
          theme: theme,
          mode: "text/x-c++src",
          lineNumbers: true,
        }}
      />
    </EditorStyles>
  );
};

export default CodeEditor;
