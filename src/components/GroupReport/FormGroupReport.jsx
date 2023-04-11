import React, { useEffect, useState } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import moment from "moment";
import { BsCalendarDate} from "react-icons/bs";
import { insertNewReport } from '../../services/groupReport/reportService';

// Css
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

const FormGroupReport = ({isUpdateData, setIsUpdateData, groupReports}) => {

  // const [dateReport, setDateReport] = useState((new Date()).setDate((new Date()).getDate() + 1));
  const [dateReport, setDateReport] = useState(new Date());
  const [isDisabled, setIsDisabled] = useState(false);
  const userId = localStorage.getItem("userId") || null;
  const token = useSelector((state) => state.authentication.token) || localStorage.getItem("token");
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
    disabledIfDateExistData(date)

  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    let result = insertNewReport({ ...formReportSubmit, userId: userId, date: moment(dateReport).format("YYYY-MM-DD") }, token);
    // Toast
    toast.promise(
      result,
      {
        loading: 'Loading',
        success: (data) => {
          setIsUpdateData(!isUpdateData);
          return `Hoàn thành báo cáo hôm nay`;
        },
        error: (err) => `${err.msg}`,
      },
      {
        style: {
          minWidth: '250px',
        },
        position: 'top-center',
      }
    );
    clearInput();
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

  const disabledIfDateExistData = (date) => {
    console.log(date);
    if (groupReports.length) {
      let result = groupReports.filter((el) => el.date === moment(date).format("YYYY-MM-DD"));
      if (result.length) {
        console.log("co r");
        setIsDisabled(true)
      } else {
        setIsDisabled(false)
      }
    }
  };

  useEffect(() => {
    console.log(groupReports);
    disabledIfDateExistData(dateReport);
  }, [dateReport, groupReports]);

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
                                value={formReportSubmit.dt.toString()}
                                required
                                disabled={
                                  isDisabled ? "disabled" : ""
                                }
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
                                value={formReportSubmit.hh.toString()}
                                required
                                disabled={
                                  isDisabled ? "disabled" : ""
                                }
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
                                value={formReportSubmit.bt.toString()}
                                required
                                disabled={
                                  isDisabled ? "disabled" : ""
                                }
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
                                value={formReportSubmit["1L"].toString()}
                                required
                                disabled={
                                  isDisabled ? "disabled" : ""
                                }
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
                                value={formReportSubmit["4L"].toString()}
                                required
                                disabled={
                                  isDisabled ? "disabled" : ""
                                }
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
                                value={formReportSubmit.menChi.toString()}
                                required
                                disabled={
                                  isDisabled ? "disabled" : ""
                                }
                              />
                            </div>
                          </div>
                        </div>

                        <div className="card-footer">
                          <button
                            type="submit"
                            className="btn btn-danger"
                            disabled={
                              isDisabled ? "disabled" : ""
                            }
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