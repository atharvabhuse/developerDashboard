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

export interface ChildrenInterface {
  count: string;
  fillColor: string;
  label: string;
}
export interface DayWiseActivityInterface {
  date: string;
  items: ChildrenInterface[];
}
export interface TotalActivityInterface {
  name: string;
  value: string;
}
export interface EmployeeDataInterface {
  activeDays: {
    days: number;
    insight: string[];
    isBurnOut: boolean;
  };
  dayWiseActivity: DayWiseActivityInterface[];
  name: string;
  totalActivity: TotalActivityInterface[];
}

export interface AllEmployeeInterface {
  AuthorWorklog: {
    activityMeta: {
      label: string;
      fillColor: string;
    }[];
    rows: EmployeeDataInterface[];
  };
}

export const employeesReducer = (
  state: EmployeesState | null,
  action: EmployeesReducerAction
) => {
  const getAllEmployeesFn = (data: AllEmployeeInterface) => {
    let employees: string[] = [];
    data?.AuthorWorklog?.rows?.forEach((row: EmployeeDataInterface) =>
      employees.push(row.name)
    );
    return { ...state, allEmployees: employees, currentEmployeeDetails: [] };
  };
  const employeeClickedFn = (employeeData: EmployeeDataInterface) => {
    return {
      ...state,
      currentEmployeeDetails: {
        activeDays: employeeData.activeDays.days,
        isBurnOut: employeeData.activeDays.isBurnOut,
        totalActivity: employeeData.totalActivity,
        dayWiseActivity: employeeData.dayWiseActivity,
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
