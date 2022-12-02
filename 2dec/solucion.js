console.clear();

const year = 2023;
const holidays = ['01/06', '04/01', '12/25'];


const countHours = (year, holidays) => {
  const weeksDays = [1, 2, 3, 4, 5];
  const date = new Date();
  let hours = 0;

  for (let holiday of holidays) {
    date.setTime(Date.parse(holiday + '/' + year));
    weeksDays.includes(date.getDay()) && (hours += 2);
  }
  return hours;
};
console.log(countHours(year, holidays));
