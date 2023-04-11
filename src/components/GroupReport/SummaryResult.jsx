import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";

const SummaryResult = ({groupReports}) => {
  const [sumary, setSumary] = useState({
    "dt": 0,
    "hh": 0,
    "bt": 0,
    "1L": 0,
    "4L": 0,
    "menChi": 0
  });

  const getDataToSumary = () => {
    if (groupReports.length) {
      let result = groupReports.reduce((acc, curr) => {
        acc.dt += curr.dt;
        acc.hh += curr.hh;
        acc.bt += curr.bt;
        acc["1L"] += curr["1L"];
        acc["4L"] += curr["4L"];
        acc.menChi += curr.menChi;
        return acc;
      }, {
        "dt": 0,
        "hh": 0,
        "bt": 0,
        "1L": 0,
        "4L": 0,
        "menChi": 0
      });
      setSumary(result);
    }
  }

  useEffect(() => {
    getDataToSumary();
  }, [groupReports])
  return (
    <>
      <div className="row">
        <div className="col-lg-2 col-6">
          {/* small box */}
          <div className="small-box bg-secondary-light">
            <div className="inner">
              <h3>{sumary.dt} người</h3>
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
                {sumary.hh} người
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
              <h3>{sumary.bt} người</h3>
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
              <h3>{sumary["1L"]} người</h3>
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
              <h3>{sumary["4L"]} người</h3>
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
              <h3>{sumary.menChi} người</h3>
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
