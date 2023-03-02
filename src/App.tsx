import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "./firebase.js";
import { ReactComponent as Logo } from "./assets/logo.svg";
import GlobalStyles from "./styles/Global.js";
import {
  AppName,
  Button,
  Days,
  HomeContainer,
  HomeLogo,
  TimeTracker,
  Total,
  TotalData,
} from "./styles/App.styled.js";
import { createDate } from "./functions.js";
import SingleDate from "./components/SingleDate.js";

interface DateData {
  date: string;
  startTime: number;
  endTime: number;
  id: string;
}
const App: React.FC = () => {
  const [dates, setDates] = useState<DateData[]>([]);
  const [dateNumber, setDateNumber] = useState<number>();
  const [totalHours, setTotalHours] = useState<number>();

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
                return <SingleDate single={single} key={i} />;
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
