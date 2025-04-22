import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from './theme';

const NavContainer = styled.nav`
  background: ${theme.colors.primary};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Brand = styled(Link)`
  color: ${theme.colors.white};
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.secondary};
  }
`;

export default function Navbar() {
  return (
    <NavContainer>
      <Brand to="/">Employee Manager</Brand>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/employees">Employees</NavLink>
        <NavLink to="/add-employee">Add Employee</NavLink>
      </NavLinks>
    </NavContainer>
  );
}