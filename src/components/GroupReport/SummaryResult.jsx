import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

const SummaryResult = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-2 col-6">
          {/* small box */}
          <div className="small-box bg-secondary-light">
            <div className="inner">
              <h3>150 người</h3>
              <p>Đơn thuần</p>
            </div>
            <div className="icon">
              <div className="small-box-icon">
                <BsFillPersonFill />
              </div>
            </div>
            <a href="/" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-2 col-6">
          {/* small box */}
          <div className="small-box bg-info">
            <div className="inner">
              <h3>
                {/* 150<sup style={{ fontSize: 20 }}>%</sup> */}
                150 người
              </h3>
              <p>Hữu hiệu</p>
            </div>
            <div className="icon">
              <div className="small-box-icon">
                <BsFillPersonFill />
              </div>
            </div>
            <a href="/" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-6">
          {/* small box */}
          <div className="small-box bg-primary-light">
            <div className="inner">
              <h3>65</h3>
              <p>Baptem</p>
            </div>
            <div className="icon">
              <div className="small-box-icon">
                <BsFillPersonFill />
              </div>
            </div>
            <a href="/" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-2 col-6">
          {/* small box */}
          <div className="small-box bg-warning-light">
            <div className="inner">
              <h3>44</h3>
              <p>Tp 1L</p>
            </div>
            <div className="icon">
              <div className="small-box-icon">
                <BsFillPersonFill />
              </div>
            </div>
            <a href="/" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-2 col-6">
          {/* small box */}
          <div className="small-box bg-success-light">
            <div className="inner">
              <h3>65</h3>
              <p>TP 4L</p>
            </div>
            <div className="icon">
              <div className="small-box-icon">
                <BsFillPersonFill />
              </div>
            </div>
            <a href="/" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        {/* ./col */}
        <div className="col-lg-2 col-6">
          {/* small box */}
          <div className="small-box bg-pink-light">
            <div className="inner">
              <h3>65</h3>
              <p>Mên chi</p>
            </div>
            <div className="icon">
              <div className="small-box-icon">
                <BsFillPersonFill />
              </div>
            </div>
            <a href="/" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        {/* ./col */}
      </div>
    </>
  );
};

export default SummaryResult;
