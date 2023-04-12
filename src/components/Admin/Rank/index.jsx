import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const Rank = () => {
  return (
    <>
      <div className="row d-flex flex-row justify-content-start">
        <div className="col-4">
          <div className="rank-box d-flex flex-column align-items-center">
            <div className="rank-box-header">
              <BsFillStarFill className="rank-icon" /> Top 1 Huu Hieu{" "}
              <BsFillStarFill className="rank-icon" />
            </div>
            <hr width="20%" align="center" />

            <div className="rank-box-body d-flex flex-column align-items-center">
              <div className="rank-image">
                <img
                  className="img-fluid rank-logo"
                  alt="rank-logo"
                  src="/rank-logo.png"
                />
              </div>

              <div className="rank-user-name">
                <div>Quynh Trang</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="rank-box d-flex flex-column align-items-center">
            <div className="rank-box-header">
              <BsFillStarFill className="rank-icon" /> Top 1 baptem{" "}
              <BsFillStarFill className="rank-icon" />
            </div>
            <hr width="20%" align="center" />

            <div className="rank-box-body d-flex flex-column align-items-center">
              <div className="rank-image">
                <img
                  className="img-fluid rank-logo"
                  alt="rank-logo"
                  src="/rank-logo.png"
                />
              </div>

              <div className="rank-user-name">
                <div>Quynh Trang</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="rank-box d-flex flex-column align-items-center">
            <div className="rank-box-header">
              <BsFillStarFill className="rank-icon" /> Top 1 baptem{" "}
              <BsFillStarFill className="rank-icon" />
            </div>
            <hr width="20%" align="center" />

            <div className="rank-box-body d-flex flex-column align-items-center">
              <div className="rank-image">
                <img
                  className="img-fluid rank-logo"
                  alt="rank-logo"
                  src="/rank-logo.png"
                />
              </div>

              <div className="rank-user-name">
                <div>Quynh Trang</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex flex-row justify-content-center">
        <img className="rank-banner img-fluid" src="/congratilation.gif" />
      </div>
    </>
  );
};

export default Rank;
