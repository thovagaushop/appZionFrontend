import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import moment from "moment";
import { BsFillPersonFill, BsCalendarDate, BsTable } from "react-icons/bs";

// Css
import "react-datepicker/dist/react-datepicker.css";
import SummaryResult from "./SummaryResult";
import FormGroupReport from "./FormGroupReport";

const TableData = (props) => {
  console.log(props);
  const reports = props.data;
  return (
    <>
      {reports.map((report, index) => {
        return <tr key={index}>
          <td>{report.date}</td>
          <td>{report.dt}</td>
          <td>{report.hh}</td>
          <td>{report.bt}</td>
          <td>{report["1L"]}</td>
          <td>{report["4L"]}</td>
          <td>{report.menChi}</td>
        </tr>
      })}
    </>
  )
}

const GroupReport = () => {
  const [groupReports, setGroupReports] = useState([]);
  const [groupReport, setGroupReport] = useState({});

  const getListGroupReport = async () => {
    // let response = await axios.get("http://localhost:8000/pastoralWork/groupReport");
    // console.log(response.data.data);
    // if (response.data.status === 'success') {
    //   setGroupReports(response.data.data);
    // } 
    // else console.log(response.msg);
  }

  useEffect(() => {
    getListGroupReport();
  }, []);
  return (
    <>
      <section className="content">
          <div className="container-fluid">
            <SummaryResult />
            <FormGroupReport />
            &nbsp;            
            <div className="row">
              {/* Table */}
              <section className="col">
                <div className="card">
                  {/* Card Header */}
                  <div className="card-header bg-custom">
                    <h3 className="card-title">
                      <BsTable style={{marginBottom: "7px", marginRight: "5px"}}/>
                      Bảng Thống Kê
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    <div className="col">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">
                            Bản thống kê báo cáo hàng ngày
                          </h3>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body p-0">
                          <table className="table">
                            <thead>
                              <tr>
                                <th style={{ width: '150px' }}>Ngày</th>
                                <th>Đơn thuần</th>
                                <th>Hữu hiệu</th>
                                <th>Bắp têm</th>
                                <th>Tp 1 lần</th>
                                <th>Tp 4 lần</th>
                                <th>Mên chi</th>
                              </tr>
                            </thead>
                            <tbody>
                              <TableData data = {groupReports}/>
                            </tbody>
                          </table>
                        </div>
                        {/* /.card-body */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* /. Table */}
            </div>
          </div>
        </section>
    </>
  )
}

export default GroupReport