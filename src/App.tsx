import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import Employees from "./components/Employees/Employees";
import {
  ChildrenInterface,
  DayWiseActivityInterface,
  EmployeeDataInterface,
  EmployeesReducerActionTypes,
  EmployeesState,
  TotalActivityInterface,
  employeesReducer,
} from "./reducers/employeesReducer";
import { useGetEmployeesData } from "./services/queries/hooks/useGetEmployeesData";
import ActiveDays from "./components/ActiveDays/ActiveDays";
import TotalActivity from "./components/TotalActivity/TotalActivity";
import DayWiseActivity from "./components/DayWiseActivity/DayWiseActivity";
import LineChart from "./components/LineChart/LineChart";
import Piechart from "./components/Piechart/Piechart";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SelectEmployeeBanner from "./components/SelectEmployeeBanner/SelectEmployeeBanner";
import { useTheme } from "./services/queries/hooks/useTheme";

function App() {
  const { data } = useGetEmployeesData();
  const initialState: EmployeesState | null = null;
  const [state, dispatch] = useReducer(employeesReducer, initialState);

  useEffect(() => {
    if (data) {
      dispatch({
        type: EmployeesReducerActionTypes.ALL_EMPLOYEES,
        payload: data?.data,
      });
    }
  }, [data]);

  const employeeClickedFn = (employee: string) => {
    const employeeData = data?.data.AuthorWorklog.rows.find(
      (data: EmployeeDataInterface) => data.name === employee
    );
    dispatch({
      type: EmployeesReducerActionTypes.EMPLOYEE_CLICKED,
      payload: employeeData,
    });
  };
  const allEmployees = state?.allEmployees;
  const activeDays = state?.currentEmployeeDetails.activeDays;
  const burnout = state?.currentEmployeeDetails.isBurnOut;
  const totalActivity = state?.currentEmployeeDetails.totalActivity;
  const dayWiseActivity = state?.currentEmployeeDetails.dayWiseActivity;

  const lineChartData: number[] =
    state?.currentEmployeeDetails?.dayWiseActivity?.map(
      (data: DayWiseActivityInterface | any) =>
        data?.items?.children?.reduce(
          (a: number, c: ChildrenInterface) => a + parseInt(c?.count),
          0
        )
    );

  const lineChartLabels: any =
    state?.currentEmployeeDetails?.dayWiseActivity?.map(
      (data: DayWiseActivityInterface) => data?.date
    );

  const pieChartData = state?.currentEmployeeDetails?.totalActivity?.map(
    (data: TotalActivityInterface) => data.value
  );
  const pieChartLabels = state?.currentEmployeeDetails?.totalActivity?.map(
    (data: TotalActivityInterface) => data.name
  );
  const [isSelectedEmployee, setIsSelectedEmployee] = useState<boolean>(false);
  useEffect(() => {
    if (
      state?.currentEmployeeDetails &&
      Object.keys(state.currentEmployeeDetails).length > 0
    ) {
      setIsSelectedEmployee(true);
    }
  }, [state?.currentEmployeeDetails]);
  const theme = useTheme();

  return (
    <div className="App">
      <Header />
      <div className="App_content" style={theme.appContent}>
        <div className="App_left">
          <Employees list={allEmployees} employeeClicked={employeeClickedFn} />
        </div>

        {isSelectedEmployee && (
          <div className="App_middle">
            <ActiveDays activeDays={activeDays} burnout={burnout} />
            <Piechart data={pieChartData} labels={pieChartLabels} />
            <TotalActivity totalActivity={totalActivity} />
          </div>
        )}

        {isSelectedEmployee && (
          <div className="App_right">
            <LineChart labels={lineChartLabels} data={lineChartData} />
            <div className="daywise_activity" style={theme.style}>
              {dayWiseActivity?.map((data: any) => (
                <DayWiseActivity dayWiseActivity={data} />
              ))}
            </div>
          </div>
        )}
        {!isSelectedEmployee && <SelectEmployeeBanner />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
