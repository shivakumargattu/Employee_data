import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import EmployeeCard from '../components/EmployeeCard';
import { theme } from '../components/theme';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
`;

const EmployeeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:8080/employees');
        setEmployees(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <Title>Employee Directory</Title>
      <EmployeeGrid>
        {employees.map(employee => (
          <EmployeeCard key={employee._id} employee={employee} />
        ))}
      </EmployeeGrid>
    </Container>
  );
}