const drawsPerWeek = [3, 6];
const drawTime = {
    'hours': 20,
    'minutes': 0,
    'seconds': 0
};
const nextDrawDate = (days, date) => {
    date.setDate(date.getDate() + days);
    date.setHours(drawTime['hours']);
    date.setMinutes(drawTime['minutes']);
    date.setSeconds(drawTime['seconds']);
    return date;
};
const checkNextDrawDate = ({optionalDate}) => {
    let optionalResponse;
    if (optionalDate) {
        optionalResponse = _checkForDrawDate(optionalDate);
    }
    return (optionalResponse !== null) ? `${_checkForDrawDate(timeNow)} \n
                For your chosen date, ${optionalResponse}` : _checkForDrawDate(timeNow);
};
const _checkForDrawDate = (date) => {
    let dayOfTheWeek = date.getDay();
    let hourOfDay = date.getHours();
    let minOfHour = date.getMinutes();

    if (drawsPerWeek.includes(dayOfTheWeek)) {
        if ((hourOfDay <= drawTime['hour']) && (minOfHour <= drawTime['minutes'])) {
            return nextDrawDate(dayOfTheWeek);
        }
    }
    //increment through the days of the week until the end of the week based on index of dayOfTheWeek on a 0 based 7 day week to find the next draw date
    for (let i = dayOfTheWeek; i <= 6; i++) {
        if (drawsPerWeek.includes(i)) {
            let count = i - dayOfTheWeek;
            let msg = `The next draw is on:`;
            let result = nextDrawDate(count, date);
            return `${msg} ${result}`;
        }
    }
};
//Dates to test the next draw date
let timeNow = new Date();
let c = new Date();
let d = new Date();
let e = new Date();
c.setDate(21);
d.setDate(17);
d.setHours(20);
d.setMinutes(0);
e.setDate(24);
e.setMonth(11);
e.setHours(15);
e.setMinutes(0);
console.log(checkNextDrawDate({optionalDate: timeNow}));
console.log(checkNextDrawDate({optionalDate: d}));
console.log(checkNextDrawDate({optionalDate: c}));
console.log(checkNextDrawDate({optionalDate: e}));