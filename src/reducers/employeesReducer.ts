export interface EmployeesState {
  allEmployees?: any;
  currentEmployeeDetails?: any;
}
export interface EmployeesReducerAction {
  type: EmployeesReducerActionTypes;
  payload?: any;
}
export enum EmployeesReducerActionTypes {
  ALL_EMPLOYEES = "ALL_EMPLOYEES",
  EMPLOYEE_CLICKED = "EMPLOYEE_CLICKED",
}

export const employeesReducer = (
  state: EmployeesState | null,
  action: EmployeesReducerAction
) => {
  const getAllEmployeesFn = (data: any) => {
    let employees: any = [];
    data?.AuthorWorklog?.rows?.forEach((row: any) => employees.push(row.name));
    return { ...state, allEmployees: employees, currentEmployeeDetails: [] };
  };
  const employeeClickedFn = (employeeData: any) => {
    return {
      ...state,
      currentEmployeeDetails: {
        activeDays: employeeData.activeDays.days,
        isBurnOut: employeeData.activeDays.isBurnOut,
        totalActivity: employeeData.totalActivity,
        dayWiseActivity: employeeData.dayWiseActivity
      },
    };
  };
  switch (action.type) {
    case EmployeesReducerActionTypes.ALL_EMPLOYEES:
      return getAllEmployeesFn(action.payload);
    case EmployeesReducerActionTypes.EMPLOYEE_CLICKED:
      return employeeClickedFn(action.payload);
    default:
      return state;
  }
};
