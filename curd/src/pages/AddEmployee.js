import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EmployeeForm from '../components/EmployeeForm';

export default function AddEmployee() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const employee = {
      name: formData.get('name'),
      email: formData.get('email'),
      role: formData.get('role')
    };

    try {
      await axios.post('http://localhost:8080/empolyee', employee);
      navigate('/employees');
    } catch (err) {
      console.error(err);
    }
  };

  return <EmployeeForm onSubmit={handleSubmit} />;
}