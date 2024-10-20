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
        " https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw"
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

  const deleteEmployee = (employeeName) => {
    setEmployees((previousEmployees) =>
      previousEmployees.filter((employee) => employee.name !== employeeName)
    );
  };
  return (
    <>
      {loading ? <p>Loading</p> : <p>Not loading</p>}
      {error && <p>Error happened!</p>}
      {employees.map((employee, index) => (
        <Employee key={index} name={employee.name} onDelete={deleteEmployee} />
      ))}
    </>
  );
}

function Employee(props) {
  const { name, onDelete } = props;
  return (
    <>
      <p>{`Employee ${name}`}</p>{" "}
      <button onClick={() => onDelete(name)}>Delete me</button>
    </>
  );
}
