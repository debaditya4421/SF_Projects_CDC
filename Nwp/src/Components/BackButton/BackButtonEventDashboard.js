import React from "react";
import "./BackButton.css";
import { useNavigate } from "react-router-dom";
function BackButtonEventDashboard(props) {
    const navigate = useNavigate();
  const handleEventDashBackEvent = () => {
    navigate(-1);
    props.toggleBackClickPgeTurn();
  };
  return (
    <div>
      <div>
        <button
          className="BackButton"
          onClick={() => {
            handleEventDashBackEvent();
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default BackButtonEventDashboard;
