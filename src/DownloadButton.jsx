import React from "react";

const DownloadButton = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <a href="/Resume.pdf" download="/Resume.pdf">
        <button className="btn btn-primary btn-lg">
          Download CV
        </button>
      </a>
    </div>
  );
};

export default DownloadButton;
