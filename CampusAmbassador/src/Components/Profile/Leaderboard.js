/*https://hype4.academy/tools/glassmorphism-generator */

import React from "react";
import "./Leaderboard.css";
import axios from "axios";
import { useState } from "react";
import UserContext from "../../Context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import gold from "./images/gold.png";
import silver from "./images/silver.png";
import bronze from "./images/bronze2.png";
function Leaderboard() {
  const usercontext = useContext(UserContext);
  const { userToken, user } = usercontext;
  const [name, setName] = useState(null);
  const [sfId, setSfId] = useState(null);
  const [rank, setRank] = useState(null);
  const [scoreSheet, setScoreSheet] = useState([]);
  const req = {
    token: userToken,
  };
  useEffect(() => {
    // axios
    //   .post("https://mainapi.springfest.in/cap/user/alldata", req)
    //   .then((response) => {
    //     console.log(response);
    //     console.log("x");
    //     console.log(scoreSheet);
    //     setName(response.data.message.ideas[0].name);
    //     setSfId(response.data.message.profile.sf_id);
    //     setRank(response.data.message.user_score.rank);
    //     setScoreSheet(response.data.message.scoresheet);
    //     console.log(response.data.message.profile.sf_id);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    try {
      setName(user.ideas[0].name);
      setSfId(user.profile.sf_id);
      setRank(user.user_score.rank);
      setScoreSheet(user.scoresheet);
    } catch (error) {}
  }, [user]);
  return (
    // <div className="Leaderboard-page">

    //   <div className="LeaderboardContentContainer">

    //   <div className="L-headerHeader">
    //     <div className="L-headerHeaderName" >
    //       Leaderboard
    //     </div>

    //   </div>
    // </div>
    // <div className="L-header-container">
    //         <div className="L-header-image">
    //         </div>
    //         <div className="L-header-info">
    //           <div>Name: {name}</div>
    //           <div>Id: {sfId}</div>
    //           <div>Rank: {rank}</div>
    //         </div>

    //     </div>

    //     <div className="L-body-container">
    //         <div className="L-body-content">
    //           <div className="scorecard">
    //          </div>
    //               {scoreSheet.map((scoresh,index) => (
    //                 <div className="L-body-content-scoresheet" key={index}>
    //                       <div className="L-body-content-name">

    //                         <div>
    //             <div> {index}</div>
    //             <div> {scoresh.name}</div>
    //             <div> {scoresh.score} </div>
    //             </div>
    //                       </div>
    //                 </div>
    //               ))}

    //         </div>
    //     </div>
    // </div>
    <>
      <div className="outer">
        <div className="L-container">
          <div className="heading">LEADERBOARD</div>

          {/* <div className="player_info">
              <div id="name">Name: </div>
              <div id="id">Id: </div>
              <div id="rank">Rank:</div>
   </div> */}
          <br />
          {/* <hr /> */}
          <div className="ranker">
            {scoreSheet.map((scoresh, index) => (
              <>
                {scoresh.id === sfId && (
                  <div id="myself">
                    {index === 0 && (
                      <div>
                        {" "}
                        <img
                          id="trophy"
                          src={gold}
                          alt=""
                          style={{ width: "50px", height: "50px" }}
                        />{" "}
                      </div>
                    )}

                    {index === 1 && (
                      <div>
                        {" "}
                        <img
                          id="trophy"
                          src={silver}
                          alt=""
                          style={{ width: "50px", height: "50px" }}
                        />{" "}
                      </div>
                    )}

                    {index === 2 && (
                      <div>
                        {" "}
                        <img
                          id="trophy"
                          src={bronze}
                          alt=""
                          style={{ width: "50px", height: "50px" }}
                        />{" "}
                      </div>
                    )}

                    {index !== 0 && index !== 1 && index !== 2 && (
                      <div id="my_index">{index + 1} </div>
                    )}
                    <div id="my_player"> {scoresh.name}</div>

                    <div id="my_score">{scoresh.score}</div>
                  </div>
                )}
                {scoresh.id !== sfId && index < 5 && (
                  <div id="other_rankers">
                    {index === 0 && (
                      <div>
                        {" "}
                        <img
                          id="trophy"
                          src={gold}
                          alt=""
                          style={{ width: "50px", height: "50px" }}
                        />{" "}
                      </div>
                    )}
                    {index === 1 && (
                      <div>
                        {" "}
                        <img
                          id="trophy"
                          src={silver}
                          alt=""
                          style={{ width: "50px", height: "50px" }}
                        />{" "}
                      </div>
                    )}
                    {index === 2 && (
                      <div>
                        {" "}
                        <img
                          id="trophy"
                          src={bronze}
                          alt=""
                          style={{ width: "50px", height: "50px" }}
                        />{" "}
                      </div>
                    )}

                    {index !== 0 && index !== 1 && index !== 2 && (
                      <div id="index">{index + 1} </div>
                    )}

                    <div className="other_ranks">
                      <div id="player"> {scoresh.name}</div>
                    </div>
                    <div id="score">{scoresh.score}</div>
                  </div>
                )}
              </>
            ))}
          </div>

          <div className="line"></div>
        </div>
      </div>
    </>
  );
}
export default Leaderboard;
