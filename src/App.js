import React from "react";
import axios from "axios";
import FileDownload from "js-file-download";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const download = (e) => {
    e.preventDefault();
    axios({
      url: "http://localhost:4000",
      method: "Get",
      responseType: "blob",
    })
      .then((res) => {
        console.log(res);
        FileDownload(res.data, "downloaded.png");
        toast.success("Your file has been downloaded successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.error("There was an error downloading the file!", error);
        toast.error("There was an error downloading the file.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div>
      <ToastContainer />
      <button onClick={download}>Download</button>
    </div>
  );
};

export default App;
