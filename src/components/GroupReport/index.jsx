import React, { useEffect, useState } from "react";
import axios from "axios";

// Css
import "react-datepicker/dist/react-datepicker.css";
import SummaryResult from "./SummaryResult";
import FormGroupReport from "./FormGroupReport";
import TableGroupReport from "./TableGroupReport";
import { useSelector } from "react-redux";



const GroupReport = () => {
  const [isUpdateData, setIsUpdateData] = useState(false);
  const [isDateHasData, setIsDateHasData] = useState(false);

  const [groupReports, setGroupReports] = useState([]);
  const token = useSelector((state) => state.authentication.token) || localStorage.getItem("token");

  const getListReportByUserId = async() => {
    let result = await axios.get(`${process.env.REACT_APP_BASE_AXIOS_URL}/api/pastoralWork/groupReport`, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    });
    setGroupReports(result.data.data);
  }

  useEffect(() => {
    getListReportByUserId()
  }, [isUpdateData]);
  return (
    <>
      <section className="content">
          <div className="container-fluid">
            <SummaryResult />
            <FormGroupReport isUpdateData={isUpdateData} setIsUpdateData={setIsUpdateData} groupReports={groupReports}/>
            &nbsp;            

            <TableGroupReport groupReports={groupReports}/>
          </div>
        </section>
    </>
  )
}

export default GroupReport