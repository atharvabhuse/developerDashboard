import { useQuery } from "react-query";
import { apiUrls } from "../../api-endpoints";

const employeeDataFn = async () => {
  const response = await fetch(`${apiUrls.employeeData}`, { method: "GET" });
  return response.json();
};

const QUERY_KEY = ["EMPLOYEES_DATA"];

export const useGetEmployeesData = () => {
  return useQuery({ queryKey: QUERY_KEY, queryFn: () => employeeDataFn() });
};
