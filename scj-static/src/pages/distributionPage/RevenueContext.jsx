import React, { createContext, useContext, useState } from "react";

const RevenueContext = createContext();

export const useRevenue = () => useContext(RevenueContext);

export const RevenueProvider = ({ children }) => {
  const [avodRevenue, setAvodRevenue] = useState(0);
  const [tvodRevenue, setTvodRevenue] = useState(0);

  const updateAvod = (value) => setAvodRevenue(value);
  const updateTvod = (value) => setTvodRevenue(value);

  return (
    <RevenueContext.Provider
      value={{ avodRevenue, tvodRevenue, updateAvod, updateTvod }}
    >
      {children}
    </RevenueContext.Provider>
  );
};
