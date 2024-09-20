import React from "react";

interface AlertProps {
  title: string;
  text: string;
}

export default function Alert({ title, text }: AlertProps) {
  return (
    <div id="alert" className="d-none">
      <div
        className="position-absolute d-flex justify-content-center z-1"
        style={{ left: 0, right: 0 }}
      >
        <div className="alert-wrapper w-50 w-md-25">
          <div className="alert alert-dark" role="alert">
            <h4 className="alert-heading">{title}</h4>
            <p>{text}</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
