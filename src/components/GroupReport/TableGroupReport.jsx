import React, { useEffect, useState } from "react";
import { BsTable } from "react-icons/bs";

const TableData = (props) => {
  const reports = props.data;
  if (reports.length) {
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
  } else {
    return null;
  }
}

const TableGroupReport = ({groupReports}) => {
  return (
    <>
      <div className="row">
        {/* Table */}
        <section className="col">
          <div className="card">
            {/* Card Header */}
            <div className="card-header bg-custom">
              <h3 className="card-title">
                <BsTable style={{ marginBottom: "7px", marginRight: "5px" }} />
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
                          <th style={{ width: "150px" }}>Ngày</th>
                          <th>Đơn thuần</th>
                          <th>Hữu hiệu</th>
                          <th>Bắp têm</th>
                          <th>Tp 1 lần</th>
                          <th>Tp 4 lần</th>
                          <th>Mên chi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <TableData data={groupReports} />
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
    </>
  );
};

export default TableGroupReport;
