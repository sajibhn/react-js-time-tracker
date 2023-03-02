import { collection, onSnapshot, query } from "firebase/firestore";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "./firebase.js";
import { ReactComponent as LeftIcon } from "./assets/left-icon.svg";
import { ReactComponent as RightIcon } from "./assets/right-icon.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import GlobalStyles from "./styles/Global.js";
import {
  AppName,
  Button,
  Days,
  Heading,
  HomeContainer,
  HomeLogo,
  HourDropDown,
  Single,
  SingleDayDate,
  SingleDayDateDayName,
  SingleDayDateHeading,
  SingleDayDateIcon,
  TimeTracker,
  Total,
  TotalData,
  TotalNumberOfHours,
} from "./styles/App.styled.js";
import {
  createDate,
  handleDateChange,
  handleEndTime,
  handleStartTime,
  nextDate,
  previousDate,
} from "./functions.js";

interface DateData {
  date: string;
  startTime: number;
  endTime: number;
  id: string;
}
const App = () => {
  const [dates, setDates] = useState<DateData[]>([]);
  const [dateNumber, setDateNumber] = useState<number>();
  const [totalHours, setTotalHours] = useState<number>();

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

  useEffect(() => {
    const q = query(collection(db, "time-tracker"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let datesArr: DateData[] = [];
      querySnapshot.forEach((doc) => {
        datesArr.push({ ...doc.data(), id: doc.id } as DateData);
      });
      setDates(datesArr);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < dates.length; i++) {
      const diff = dates[i].endTime - dates[i].startTime;
      sum += diff;
    }
    setTotalHours(sum);
    setDateNumber(dates.length);
  }, [dates]);
  return (
    <>
      <GlobalStyles />
      <div>
        <HomeLogo>
          <Logo />
          <h1>INMOGR</h1>
        </HomeLogo>

        <HomeContainer>
          <AppName>Time Tracker</AppName>
          <TimeTracker>
            <Days>
              <Button className="button" type="button" onClick={createDate}>
                Add New Date
              </Button>

              {dates.map((single, i) => {
                const { date, startTime, endTime, id } = single;
                return (
                  <Single key={i}>
                    <div>
                      <Heading>Day</Heading>
                      <SingleDayDate>
                        <SingleDayDateIcon
                          onClick={() => previousDate(date, id)}
                        >
                          <LeftIcon />
                        </SingleDayDateIcon>
                        <DatePicker
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
                      <HourDropDown
                        value={endTime}
                        onChange={(e) => handleEndTime(e, id)}
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
                      <Heading>Total Number of hours</Heading>
                      <TotalNumberOfHours>
                        {Math.abs(startTime - endTime)} hours
                      </TotalNumberOfHours>
                    </div>
                  </Single>
                );
              })}
            </Days>
            <Total>
              <TotalData>
                <h3> Total Day</h3>
                <h3>{dateNumber} days</h3>
              </TotalData>
              <TotalData>
                <h3>Total Hours</h3>
                <h3>{totalHours} hours</h3>
              </TotalData>
            </Total>
          </TimeTracker>
        </HomeContainer>
      </div>
    </>
  );
};

export default App;
