import React, { createContext, useState, useContext } from "react";

const Context = createContext();

const getReportFromStorage = () => {
  let report = localStorage.getItem("report");
  if (report === "" || report === null) return [];
  return JSON.parse(report);
};

const ReportProvider = ({ children }) => {
  const [report, setReportState] = useState(getReportFromStorage());

  const setReport = (e) => {
    setReportState(e);
    localStorage.setItem("report", JSON.stringify(e));
  };

  return (
    <Context.Provider
      value={{
        report,
        setReport,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useReportContext = () => {
  const context = useContext(Context);
  const { report, setReport } = context;
  return { report, setReport };
};

export default ReportProvider;
