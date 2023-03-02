import styled from "styled-components";

export const HomeLogo = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.5rem 0;
  text-align: center;
  min-height: 15vh;
  display: flex;
  gap: 0.5rem;
  justify-content: center;

  h1 {
    font-size: 36px;
    font-weight: 700px;
    color: ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;
  }
`;

export const HomeContainer = styled.div`
  width: 991px;
  max-width: 100%;
  margin: 0 auto;
`;

export const AppName = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-weight: 500;
  margin: 2rem 0;
`;

export const TimeTracker = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box; /* add this */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  height: 70vh;
`;

export const Days = styled.div`
  flex-grow: 1;
  height: 60vh;
  overflow-y: auto;
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 0;
  height: 5vh;
  border-top: 1px solid rgba(45, 167, 113, 0.5);
`;

export const Button = styled.button`
  font-size: 12px;
  font-weight: 400;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.green};
  border: 0;
  border-radius: 4px;
  cursor: pointer;
`;

export const Single = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid rgba(45, 167, 113, 0.5);
`;

export const Heading = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const SingleDayDate = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SingleDayDateHeading = styled.h3`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const SingleDayDateIcon = styled.span`
  font-size: 16px;
  color: #b1b1b0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const SingleDayDateDayName = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 0.5rem;
`;

export const TotalNumberOfHours = styled.h3`
  font-size: 12px;
  font-weight: 500;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.green};
  border: 0;
  border-radius: 4px;
  text-align: center;
`;

export const HourDropDown = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 12px;

  &:focus {
    outline: none;
  }
`;

export const TotalData = styled.div`
  display: flex;
  gap: 1rem;

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.green};
  }
`;
