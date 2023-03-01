import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "./firebase.js";
import "./App.css";
import { ReactComponent as LeftIcon } from "./assets/left-icon.svg";
import { ReactComponent as RightIcon } from "./assets/right-icon.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";

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

  // create date
  const createDate = async () => {
    const newDate = {
      date: moment(new Date()).format("DD MMMM YYYY"),
      startTime: 0,
      endTime: 0,
    } as DateData;

    await addDoc(collection(db, "time-tracker"), newDate);
  };

  // update previous date
  const previousDate = async (date: string, id: string) => {
    const previousDate = moment(date).subtract(1, "day").toDate();
    const changeFormat = moment(previousDate).format("DD MMMM YYYY");
    await updateDoc(doc(db, "time-tracker", id), {
      date: changeFormat,
    });
  };

  // update next date
  const nextDate = async (date: string, id: string) => {
    const nextDate = moment(date).add(1, "day").toDate();
    const changeFormat = moment(nextDate).format("DD MMMM YYYY");
    await updateDoc(doc(db, "time-tracker", id), {
      date: changeFormat,
    });
  };

  const ExampleCustomInput = ({
    value,
    onClick,
  }: {
    value?: Date;
    onClick?: () => void;
  }) => {
    return (
      <h1 className="singleday__date-date" onClick={onClick}>
        {moment(value).format("DD MMMM YYYY")}
      </h1>
    );
  };

  // update date
  const handleDateChange = async (date: Date | any, id: string) => {
    const updatedDate = moment(date).format("DD MMMM YYYY");
    await updateDoc(doc(db, "time-tracker", id), {
      date: updatedDate,
    });
  };

  // update start time
  const handleStartTime = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    await updateDoc(doc(db, "time-tracker", id), {
      startTime: parseInt(e.target.value),
    });
  };
  // update end time
  const handleEndTime = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    await updateDoc(doc(db, "time-tracker", id), {
      endTime: parseInt(e.target.value),
    });
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
    <div className="home">
      <div className="home__logo">
        <Logo />
        <h1>INMOGR</h1>
      </div>
      <div className="home__container">
        <h3 className="app__name">Time Tracker</h3>
        <div className="time__tracker">
          <div className="days">
            <button className="button" type="button" onClick={createDate}>
              Add New Date
            </button>

            {dates.map((single, i) => {
              const { date, startTime, endTime, id } = single;
              return (
                <div className="singleDate" key={i}>
                  <div>
                    <h3 className="singleday__heading">Day</h3>
                    <div className="singleday_date">
                      <span
                        className="singleday__date-icon"
                        onClick={() => previousDate(date, id)}
                      >
                        <LeftIcon />
                      </span>
                      <DatePicker
                        selected={new Date(date)}
                        onChange={(date) => handleDateChange(date, id)}
                        customInput={<ExampleCustomInput />}
                      />
                      <span
                        className="singleday__date-icon"
                        onClick={() => nextDate(date, id)}
                      >
                        <RightIcon />
                      </span>
                    </div>
                    <h3 className="singleday__dayname">
                      {moment(date).format("dddd")}
                    </h3>
                  </div>
                  <div>
                    <h3 className="singleday__heading">Start Time</h3>
                    <select
                      className="hour__dropdown"
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
                    </select>
                  </div>

                  <div>
                    <h3 className="singleday__heading">End Time</h3>
                    <select
                      className="hour__dropdown"
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
                    </select>
                  </div>

                  <div>
                    <h3 className="singleday__heading">
                      Total Number of hours
                    </h3>
                    <h1 className="total__number__of__hours">
                      {Math.abs(startTime - endTime)} hours
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="total">
            <div className="total__data">
              <h3> Total Day</h3>
              <h3>{dateNumber} days</h3>
            </div>
            <div className="total__data">
              <h3>Total Hours</h3>
              <h3>{totalHours} hours</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
