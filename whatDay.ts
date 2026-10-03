function getDayOfWeek(year: number, month: number, day: number): string {
  const date = new Date(year, month - 1, day);

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekdays[date.getDay()];
}