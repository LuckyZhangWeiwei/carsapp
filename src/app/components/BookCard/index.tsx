import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../Marginer";
import { Button } from "../Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../Responsive";
import { useState } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import "./../BookCard/MiniCalendar.css";

const CardContainer = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  min-height: 7em;
  @media (min-width: ${SCREENS.md}) {
    min-height: 4.5em;
  }
  ${tw`
      flex
      flex-col
      md:flex-row
      md:justify-around
      w-11/12
      md:w-1/2
      justify-center
      items-center
      rounded-md
      bg-white
      pt-2
      pb-2
      pr-2
      pl-2
      md:pt-2
      md:pb-2
      md:pl-9
      md:pr-9
      relative
`}
`;

const ItemContainer = styled.div`
  ${tw`
    flex 
    md:relative
`}
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

const SmallIcon = styled.span`
  ${tw`
      text-gray-500
      fill-current
      text-xs
      md:text-base
      ml-1
  `};
`;

const Name = styled.span`
  ${tw`
      text-gray-600
      text-xs
      md:text-sm
      cursor-pointer
      select-none
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

const DateCalendar = styled(Calendar)<Calendar & { top?: string }>`
  position: absolute;
  max-width: none;
  user-select: none;
  top: ${(props) => {
    return props.top ? props.top : "2em";
  }};
  left: 5px;
  border-radius: 5px;
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
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);

  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name
          onClick={() => {
            setIsStartCalendarOpen((prevState) => !prevState);
            isReturnCalendarOpen && setReturnCalendarOpen(false);
          }}
        >
          Pick Up Date
        </Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>
       <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name
          onClick={() => {
            setReturnCalendarOpen((prevState) => !prevState);
            isStartCalendarOpen && setIsStartCalendarOpen(false);
          }}
        >
          Return Date
        </Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar
            value={returnDate}
            onchange={setReturnDate as any}
            top="3em"
          />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin={"2em"} />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
}
