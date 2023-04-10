import React, { useEffect, useState } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import moment from "moment";
import { BsCalendarDate} from "react-icons/bs";

// Css
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';

const FormGroupReport = () => {
  const [dateReport, setDateReport] = useState(new Date());
  const user = useSelector((state) => state.authentication.user);
  const [formReportSubmit, setFormReportSubmit] = useState({
    "userId": 0,
    "date": "",
    "dt": "",
    "hh": "",
    "bt": "",
    "1L": "",
    "4L": "",
    "menChi": "",
  });

  const handeChangDate = (date) => {
    setDateReport(date);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (
      formReportSubmit.dt === "" ||
      formReportSubmit.hh === "" ||
      formReportSubmit.bt === "" ||
      formReportSubmit["1L"] === "" ||
      formReportSubmit["4L"] === "" ||
      formReportSubmit.menChi === ""
    ) {
      console.log("Fill All");
    } else {
      try {
        let res = await axios.post(
          `${process.env.REACT_APP_BASE_AXIOS_URL}/api/pastoralWork/groupReport`,
          { ...formReportSubmit, date: moment(dateReport).format("YYYY-MM-DD"), userId: user.userId }
        );
        console.log(res);
        clearInput();
        // await getReportByDate();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const clearInput = () => {
    setFormReportSubmit({
      "userId": "",
      "date": "",
      "dt": "",
      "hh": "",
      "bt": "",
      "1L": "",
      "4L": "",
      "menChi": "",
    })
  }

  useEffect(() => {
  }, [dateReport]);

  return (
    <>
      <div className="row">
              {/* Calendar */}
              <section className="col-lg-3">
                <div className="card">
                  {/* Card Header */}
                  <div className="card-header bg-danger-light text-white">
                    <h3 className="card-title">
                      <BsCalendarDate style={{marginBottom: "7px", marginRight: "7px"}}/>
                      Calendar
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    <div className="tab-content p-0">
                      <div
                        id="dateRangePicker"
                        style={{
                          background: "#fff",
                          cursor: "pointer",
                          padding: "5px 10px",
                          border: "1px solid #ccc",
                          width: "100%",
                        }}
                      >
                        <BsCalendarDate style={{marginBottom: "3px"}}/>
                        &nbsp;
                        <span /> <i className="fa fa-caret-down" />
                        &nbsp;
                        <DatePicker
                          maxDate={new Date()}
                          wrapperClassName="datePicker"
                          selected={dateReport}
                          onChange={handeChangDate}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* /. Calendar */}
              <section className="col-lg-9">
                <div className="card">
                  <div className="card-header bg-danger-light text-white">
                    <h3 className="card-title">Báo cáo hôm nay</h3>
                  </div>

                  <div className="card-body">
                    <form onSubmit={handleSubmitForm}>
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">Nhập số liệu</h3>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-2 group-report-input">
                              <label htmlFor="">Đơn thuần</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="0"
                                onChange={(e) => {
                                  setFormReportSubmit((pre) => {
                                    return {
                                      ...pre,
                                      dt: parseInt(e.target.value),
                                    };
                                  });
                                }}
                                value={formReportSubmit.dt}
                                required
                                // disabled={
                                //   groupReport.dt !== "" ? "disabled" : ""
                                // }
                              />
                            </div>
                            <div className="col-2 group-report-input">
                              <label htmlFor="">Hữu hiệu</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="0"
                                onChange={(e) => {
                                  setFormReportSubmit((pre) => {
                                    return {
                                      ...pre,
                                      hh: parseInt(e.target.value),
                                    };
                                  });
                                }}
                                value={formReportSubmit.hh}
                                required
                                // disabled={
                                //   groupReport.dt !== "" ? "disabled" : ""
                                // }
                              />
                            </div>
                            <div className="col-2 group-report-input">
                              <label htmlFor="">Bắp têm</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="0"
                                onChange={(e) => {
                                  setFormReportSubmit((pre) => {
                                    return {
                                      ...pre,
                                      bt: parseInt(e.target.value),
                                    };
                                  });
                                }}
                                value={formReportSubmit.bt}
                                required
                                // disabled={
                                //   groupReport.dt !== "" ? "disabled" : ""
                                // }
                              />
                            </div>
                            <div className="col-2 group-report-input">
                              <label htmlFor="">TP 1L</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="0"
                                onChange={(e) => {
                                  setFormReportSubmit((pre) => {
                                    return {
                                      ...pre,
                                      "1L": parseInt(e.target.value),
                                    };
                                  });
                                }}
                                value={formReportSubmit["1L"]}
                                required
                                // disabled={
                                //   groupReport.dt !== "" ? "disabled" : ""
                                // }
                              />
                            </div>
                            <div className="col-2 group-report-input">
                              <label htmlFor="">TP 4L</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="0"
                                onChange={(e) => {
                                  setFormReportSubmit((pre) => {
                                    return {
                                      ...pre,
                                      "4L": parseInt(e.target.value),
                                    };
                                  });
                                }}
                                value={formReportSubmit["4L"]}
                                required
                                // disabled={
                                //   groupReport.dt !== "" ? "disabled" : ""
                                // }
                              />
                            </div>
                            <div className="col-2 group-report-input">
                              <label htmlFor="">Mên chi</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="0"
                                onChange={(e) => {
                                  setFormReportSubmit((pre) => {
                                    return {
                                      ...pre,
                                      menChi: parseInt(e.target.value),
                                    };
                                  });
                                }}
                                value={formReportSubmit.menChi}
                                required
                                // disabled={
                                //   groupReport.dt !== "" ? "disabled" : ""
                                // }
                              />
                            </div>
                          </div>
                        </div>

                        <div className="card-footer">
                          <button
                            type="submit"
                            className="btn btn-danger"
                            // disabled={groupReport.dt !== "" ? "disabled" : ""}
                          >
                            Báo cáo
                          </button>
                        </div>
                        {/* /.card-body */}
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
    </>
  )
}

export default FormGroupReport