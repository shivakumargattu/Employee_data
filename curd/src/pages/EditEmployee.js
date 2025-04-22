import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import EmployeeForm from '../components/EmployeeForm';

export default function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/employees/${id}`);
        setEmployee(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedEmployee = {
      name: formData.get('name'),
      email: formData.get('email'),
      role: formData.get('role')
    };

    try {
      await axios.put(`http://localhost:8080/employees/${id}`, updatedEmployee);
      navigate('/employees');
    } catch (err) {
      console.error(err);
    }
  };

  if (!employee) return <div>Loading...</div>;

  return <EmployeeForm employee={employee} onSubmit={handleSubmit} />;
}