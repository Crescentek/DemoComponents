export default function adjustForTimezone(timestamp) {
  var date = new Date(timestamp)
  var timeOffsetInMS = date.getTimezoneOffset() * 60000;
  date.setTime(date.getTime() - timeOffsetInMS);
  return date;
}
