import React, { useEffect, useState } from "react";
import axios from "axios";
import { MenuItem, Select } from "@material-ui/core";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  dark,
  okaidia,
  solarizedlight,
  tomorrow,
  twilight,
  prism,
  darcula,
  hopscotch,
  vs,
  xonokai
} from "react-syntax-highlighter/dist/esm/styles/prism";
import "../styles/codedata.scss";

function CodeData(props) {
  const [jsxData, setJsxData] = useState();
  const [sassData, setSassData] = useState();
  const [jsxStyle, setJsxStyle] = useState(atomDark);
  const [sassStyle, setSassStyle] = useState(atomDark);

  useEffect(() => {
    axios
      .get(props.url)
      .then(res => {
        setJsxData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  if (props.styles) {
    axios
      .get(props.styles)
      .then(res => {
        setSassData(res.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="codedata-container">
      <div className="box">
        <h1>JSX:</h1>
        <Select
          variant="outlined"
          value={jsxStyle}
          onChange={e => setJsxStyle(e.target.value)}
        >
          <MenuItem value={atomDark}>AtomDark</MenuItem>
          <MenuItem value={okaidia}>Okaidia</MenuItem>
          <MenuItem value={solarizedlight}>Solarizedlight</MenuItem>
          <MenuItem value={tomorrow}>Tomorrow</MenuItem>
          <MenuItem value={twilight}>Twilight</MenuItem>
          <MenuItem value={prism}>Prism</MenuItem>
          <MenuItem value={dark}>Dark</MenuItem>
          <MenuItem value={darcula}>Darcula</MenuItem>
          <MenuItem value={hopscotch}>Hopscotch</MenuItem>
          <MenuItem value={vs}>VS</MenuItem>
          <MenuItem value={xonokai}>Xonokai</MenuItem>
        </Select>
        {jsxData && (
          <SyntaxHighlighter
            className="code-box"
            language="jsx"
            style={jsxStyle}
          >
            {jsxData}
          </SyntaxHighlighter>
        )}
      </div>
      {props.styles && (
        <div className="box">
          <h1>SASS:</h1>
          <Select
            variant="outlined"
            value={sassStyle}
            onChange={e => setSassStyle(e.target.value)}
          >
            <MenuItem value={atomDark}>AtomDark</MenuItem>
            <MenuItem value={okaidia}>Okaidia</MenuItem>
            <MenuItem value={solarizedlight}>Solarizedlight</MenuItem>
            <MenuItem value={tomorrow}>Tomorrow</MenuItem>
            <MenuItem value={twilight}>Twilight</MenuItem>
            <MenuItem value={prism}>Prism</MenuItem>
            <MenuItem value={dark}>Dark</MenuItem>
            <MenuItem value={darcula}>Darcula</MenuItem>
            <MenuItem value={hopscotch}>Hopscotch</MenuItem>
            <MenuItem value={vs}>VS</MenuItem>
            <MenuItem value={xonokai}>Xonokai</MenuItem>
          </Select>
          {jsxData && (
            <SyntaxHighlighter
              className="code-box"
              language="sass"
              style={sassStyle}
            >
              {sassData}
            </SyntaxHighlighter>
          )}
        </div>
      )}
    </div>
  );
}

export default CodeData;
