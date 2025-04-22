import styled from 'styled-components';
import { theme } from '../components/theme';
import { People, PersonAdd, Assessment } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Styled components
const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  color: ${theme.colors.white};
  padding: 3rem 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled(Link)`
  background: ${theme.colors.white};
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: ${theme.colors.black};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  
  svg {
    font-size: inherit;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: ${theme.colors.gray};
`;

const StatsSection = styled.section`
  background: ${theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const StatsTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${theme.colors.primary};
`;

export default function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>Employee Management System</HeroTitle>
        <HeroSubtitle>
          Streamline your HR processes with our comprehensive employee management solution.
          Easily track, manage, and analyze your workforce data in one place.
        </HeroSubtitle>
      </HeroSection>

      <FeaturesGrid>
        <FeatureCard to="/employees">
          <FeatureIcon>
            <People />
          </FeatureIcon>
          <FeatureTitle>View Employees</FeatureTitle>
          <FeatureDescription>
            Browse your complete employee directory with detailed profiles and information.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard to="/add-employee">
          <FeatureIcon>
            <PersonAdd />
          </FeatureIcon>
          <FeatureTitle>Add New Employee</FeatureTitle>
          <FeatureDescription>
            Quickly onboard new team members with our simple employee creation form.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard to="/employees">
          <FeatureIcon>
            <Assessment />
          </FeatureIcon>
          <FeatureTitle>Employee Analytics</FeatureTitle>
          <FeatureDescription>
            Gain insights into your workforce with comprehensive analytics and reports.
          </FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>

      <StatsSection>
        <StatsTitle>System Overview</StatsTitle>
        <FeaturesGrid>
          <FeatureCard as="div">
            <FeatureTitle>Total Employees</FeatureTitle>
            <FeatureDescription>24</FeatureDescription>
          </FeatureCard>
          <FeatureCard as="div">
            <FeatureTitle>Active Roles</FeatureTitle>
            <FeatureDescription>5 Departments</FeatureDescription>
          </FeatureCard>
          <FeatureCard as="div">
            <FeatureTitle>Recent Activity</FeatureTitle>
            <FeatureDescription>3 New Hires This Month</FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </StatsSection>
    </HomeContainer>
  );
}