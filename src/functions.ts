import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import moment from "moment";
import { db } from "./firebase";

interface DateData {
  date: string;
  startTime: number;
  endTime: number;
  id: string;
}

// create date
export const createDate = async () => {
  const newDate = {
    date: moment(new Date()).format("DD MMMM YYYY"),
    startTime: 0,
    endTime: 0,
  } as DateData;

  await addDoc(collection(db, "time-tracker"), newDate);
};

// update previous date
export const previousDate = async (date: string, id: string) => {
  const previousDate = moment(date).subtract(1, "day").toDate();
  const changeFormat = moment(previousDate).format("DD MMMM YYYY");
  await updateDoc(doc(db, "time-tracker", id), {
    date: changeFormat,
  });
};

// update next date
export const nextDate = async (date: string, id: string) => {
  const nextDate = moment(date).add(1, "day").toDate();
  const changeFormat = moment(nextDate).format("DD MMMM YYYY");
  await updateDoc(doc(db, "time-tracker", id), {
    date: changeFormat,
  });
};

// update date
export const handleDateChange = async (date: Date | any, id: string) => {
  const updatedDate = moment(date).format("DD MMMM YYYY");
  await updateDoc(doc(db, "time-tracker", id), {
    date: updatedDate,
  });
};

// update start time
export const handleStartTime = async (
  e: React.ChangeEvent<HTMLSelectElement>,
  id: string
) => {
  await updateDoc(doc(db, "time-tracker", id), {
    startTime: parseInt(e.target.value),
  });
};
// update end time
export const handleEndTime = async (
  e: React.ChangeEvent<HTMLSelectElement>,
  id: string
) => {
  await updateDoc(doc(db, "time-tracker", id), {
    endTime: parseInt(e.target.value),
  });
};
