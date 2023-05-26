import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../Marginer";
import { Button } from "../Button";
import { faCcAmex } from "@fortawesome/free-brands-svg-icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../Responsive";
import { useState } from "react";

const CardContainer = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  min-height: 4.3em;
  ${tw`
flex
justify-center
items-center
rounded-md
bg-white
pt-1
pb-1
pr-2
pl-2
md:pt-2
md:pb-2
md:pl-9
md:pr-9
`}
`;

const ItemContainer = styled.div`
  ${tw`flex relative`}
`;

const Icon = styled.span`
  ${tw`
text-red-500
fill-current
text-sm
md:text-base
mr-1
md:mr-3
`}
`;

const Name = styled.span`
  ${tw`
text-gray-600
text-xs
md:text-sm
cursor-pointer
`}
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
bg-gray-300
mr-2
ml-2
md:mr-5
md:ml-5
`}
`;

// const DateCalendar = styled(Calendar)`
//   position: absolute;
//   top: 3.5em;
//   left: -2em;
// `;
const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: 0;
  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `};
  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

export function BookCard() {
  const [startDate, setStartDate] = useState();
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCcAmex} />
        </Icon>
        <Name
          onClick={() => {
            setIsStartCalendarOpen((prevState) => !prevState);
          }}
        >
          Pick Up Date
        </Name>
        {isStartCalendarOpen && <DateCalendar value={startDate} />}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCcAmex} />
        </Icon>
        <Name>Return Date</Name>
        <DateCalendar />
      </ItemContainer>
      <Marginer direction="horizontal" margin={"2em"} />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
}
