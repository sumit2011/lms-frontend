import axios from 'axios';
const HOLIDAYLIST_URI = "http://localhost:8484/lms/publicholidays";


function HolidayListService() {

    const getHolidays = () => {
        return axios.get(HOLIDAYLIST_URI+`/viewholidaylist`);
    };
    const addHoliday = (holiday) => {
        return axios.post(HOLIDAYLIST_URI+`/addholidaydetails`,holiday);
    };

  return Object.freeze({
    getHolidays, 
    addHoliday
});
}

export default HolidayListService