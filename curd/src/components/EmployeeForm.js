import styled from 'styled-components';
import { theme } from './theme';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
`;

const FormTitle = styled.h2`
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${theme.colors.black};
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${theme.colors.gray};
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${theme.colors.secondary};
  }
`;

export default function EmployeeForm({ employee, onSubmit }) {
  return (
    <FormContainer>
      <FormTitle>{employee ? 'Edit Employee' : 'Add New Employee'}</FormTitle>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input 
            type="text" 
            name="name" 
            defaultValue={employee?.name || ''} 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Email</Label>
          <Input 
            type="email" 
            name="email" 
            defaultValue={employee?.email || ''} 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Role</Label>
          <Input 
            type="text" 
            name="role" 
            defaultValue={employee?.role || ''} 
            required 
          />
        </FormGroup>
        
        <SubmitButton type="submit">
          {employee ? 'Update Employee' : 'Add Employee'}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
}