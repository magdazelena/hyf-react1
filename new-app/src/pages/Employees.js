import { useEffect, useState } from "react";

export function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    let response;
    try {
      response = await fetch(
        "https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6fsdsd"
      );
    } catch (error) {
      setLoading(false);
      setError(true);
    }

    if (!response) return;

    const data = await response.json();

    if (!data) return;

    setEmployees(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? <p>Loading</p> : <p>Not loading</p>}
      {error && <p>Error happened!</p>}
      {employees.map((employee, index) => (
        <p key={index}>{employee.name}</p>
      ))}
    </>
  );
}
