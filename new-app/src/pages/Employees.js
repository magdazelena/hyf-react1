import { useEffect, useState } from "react";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const url =
        "https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw";
      const data = await fetch(url);
      const dataJson = await data.json();
      setEmployees(dataJson);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };
  return (
    <div>
      <h1>List of employees</h1>
      {error && <p>{error}</p>}

      {loading && <p>Loading...</p>}

      {employees.map((employee, index) => (
        <p key={index}>{employee.name}</p>
      ))}
    </div>
  );
}
