//get request for the data,
//accepting props to dynamically set the correct URL
//set the data in state, render the data in the return

import React, { useEffect, useState } from "react";
import axios from "axios";

function CodeData(props) {
  const [data, setData] = useState();
  console.log(props.url);

  useEffect(() => {
    axios
      .get(props.url)
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>CODE DATA</h1>
      {data && (
        <pre
          style={{
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
            display: "block",
            fontFamily: "monospace"
          }}
        >
          {data}
        </pre>
      )}
    </>
  );
}

export default CodeData;
