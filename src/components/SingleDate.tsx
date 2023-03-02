import moment from "moment";
import React from "react";
import ReactDatePicker from "react-datepicker";
import {
  handleDateChange,
  handleEndTime,
  handleStartTime,
  nextDate,
  previousDate,
} from "../functions";
import {
  Heading,
  HourDropDown,
  Single,
  SingleDayDate,
  SingleDayDateDayName,
  SingleDayDateHeading,
  SingleDayDateIcon,
  TotalNumberOfHours,
} from "../styles/App.styled";
import { ReactComponent as LeftIcon } from "../assets/left-icon.svg";
import { ReactComponent as RightIcon } from "../assets/right-icon.svg";

interface DateData {
  date: string;
  startTime: number;
  endTime: number;
  id: string;
}

interface Props {
  single: DateData;
}

const SingleDate: React.FC<Props> = ({ single }) => {
  const { date, startTime, endTime, id } = single;

  // single day date day
  const SingleDayDateDay = ({
    value,
    onClick,
  }: {
    value?: Date;
    onClick?: () => void;
  }) => {
    return (
      <SingleDayDateHeading onClick={onClick}>
        {moment(value).format("DD MMMM YYYY")}
      </SingleDayDateHeading>
    );
  };
  return (
    <Single>
      <div>
        <Heading>Day</Heading>
        <SingleDayDate>
          <SingleDayDateIcon onClick={() => previousDate(date, id)}>
            <LeftIcon />
          </SingleDayDateIcon>
          <ReactDatePicker
            selected={new Date(date)}
            onChange={(date) => handleDateChange(date, id)}
            customInput={<SingleDayDateDay />}
          />
          <SingleDayDate onClick={() => nextDate(date, id)}>
            <RightIcon />
          </SingleDayDate>
        </SingleDayDate>
        <SingleDayDateDayName>
          {moment(date).format("dddd")}
        </SingleDayDateDayName>
      </div>
      <div>
        <Heading>Start Time</Heading>
        <HourDropDown
          value={startTime}
          onChange={(e) => handleStartTime(e, id)}
        >
          <option value="00">12:00 AM</option>
          <option value="1">1:00 AM</option>
          <option value="2">2:00 AM</option>
          <option value="3">3:00 AM</option>
          <option value="4">4:00 AM</option>
          <option value="5">5:00 AM</option>
          <option value="6">6:00 AM</option>
          <option value="7">7:00 AM</option>
          <option value="8">8:00 AM</option>
          <option value="9">9:00 AM</option>
          <option value="10">10:00 AM</option>
          <option value="11">11:00 AM</option>
          <option value="12">12:00 PM</option>
          <option value="13">1:00 PM</option>
          <option value="14">2:00 PM</option>
          <option value="15">3:00 PM</option>
          <option value="16">4:00 PM</option>
          <option value="17">5:00 PM</option>
          <option value="18">6:00 PM</option>
          <option value="19">7:00 PM</option>
          <option value="20">8:00 PM</option>
          <option value="21">9:00 PM</option>
          <option value="22">10:00 PM</option>
          <option value="23">11:00 PM</option>
        </HourDropDown>
      </div>

      <div>
        <Heading>End Time</Heading>
        <HourDropDown value={endTime} onChange={(e) => handleEndTime(e, id)}>
          <option value="00">12:00 AM</option>
          <option value="1">1:00 AM</option>
          <option value="2">2:00 AM</option>
          <option value="3">3:00 AM</option>
          <option value="4">4:00 AM</option>
          <option value="5">5:00 AM</option>
          <option value="6">6:00 AM</option>
          <option value="7">7:00 AM</option>
          <option value="8">8:00 AM</option>
          <option value="9">9:00 AM</option>
          <option value="10">10:00 AM</option>
          <option value="11">11:00 AM</option>
          <option value="12">12:00 PM</option>
          <option value="13">1:00 PM</option>
          <option value="14">2:00 PM</option>
          <option value="15">3:00 PM</option>
          <option value="16">4:00 PM</option>
          <option value="17">5:00 PM</option>
          <option value="18">6:00 PM</option>
          <option value="19">7:00 PM</option>
          <option value="20">8:00 PM</option>
          <option value="21">9:00 PM</option>
          <option value="22">10:00 PM</option>
          <option value="23">11:00 PM</option>
        </HourDropDown>
      </div>

      <div>
        <Heading>Total Number of hours</Heading>
        <TotalNumberOfHours>
          {Math.abs(startTime - endTime)} hours
        </TotalNumberOfHours>
      </div>
    </Single>
  );
};

export default SingleDate;
