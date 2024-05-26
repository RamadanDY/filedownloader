import React from "react";
import axios from "axios";
import FileDownload from "js-file-download";

const App = () => {
  const download = (e) => {
    e.preventDefault();
    axios({
      url: "http://localhost:4000",
      method: "Get",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, "downloaded.png");
    });
  };

  return (
    <div>
      <button onClick={download}>Download</button>
    </div>
  );
};

export default App;
