import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3
    lg:pt-6
    lg:pb-6
    `}
`;

const Title = styled.h2`
  ${tw`
    text-xl
    lg:text-5xl
    text-black
    font-extrabold
    `}
`;

const StepsContainer = styled.div`
  ${tw`
  flex
  justify-evenly
  flex-wrap  
  mt-7
  lg:mt-16
    `}
`;

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:w-96
    items-center
    m-3
    `}
`;

const StepIcon = styled.span`
  ${tw`
     text-gray-600
    text-3xl
    `}
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  &:hover ${StepIcon} {
    color: red;
  }
  ${tw`
    flex
    rounded-lg
    items-center
    justify-center
    p-6
    cursor-pointer
    transition-colors
    `}
`;

const StepTitle = styled.h4`
  ${tw`
    text-gray-600
    text-lg
    font-semibold
    mt-4
    `}
`;

const StepDescription = styled.p`
  ${tw`
    text-lg
    md:text-sm
    text-center
    w-10/12
    text-gray-600
    `}
`;

const BookingSteps = () => {
  return (
    <Container>
      <Title>Our Working Steps</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest YourCar point and book your car.
          </StepDescription>
        </StepContainer>

        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <StepDescription>
            Pickup the Best Date to rent a car for you.
          </StepDescription>
        </StepContainer>

        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Car</StepTitle>
          <StepDescription>
            Book your car with one single click.
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
};

export default BookingSteps;
