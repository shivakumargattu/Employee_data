import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from './theme';

const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Name = styled.h3`
  color: ${theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Detail = styled.p`
  color: ${theme.colors.black};
  margin: 0.5rem 0;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
`;

const EditButton = styled(Button)`
  background: ${theme.colors.accent};
  color: ${theme.colors.white};

  &:hover {
    background: ${theme.colors.secondary};
  }
`;

const DeleteButton = styled(Button)`
  background: ${theme.colors.danger};
  color: ${theme.colors.white};

  &:hover {
    background: #d0006f;
  }
`;

export default function EmployeeCard({ employee }) {
  return (
    <Card>
      <Name>{employee.name}</Name>
      <Detail><strong>Email:</strong> {employee.email}</Detail>
      <Detail><strong>Role:</strong> {employee.role}</Detail>
      <Actions>
        <EditButton to={`/edit-employee/${employee._id}`}>Edit</EditButton>
        <DeleteButton to={`/delete-employee/${employee._id}`}>Delete</DeleteButton>
      </Actions>
    </Card>
  );
}