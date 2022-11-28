var timeSince = function (date) {
  if (typeof date !== "object") {
    date = new Date(date);
  }

  var seconds = Math.floor((new Date() - date) / 1000);
  var intervalType;

   var interval = Math.floor(seconds / 604800);
    if (interval >= 1) {
      intervalType = "w";
    } else {
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        intervalType = "d";
      } else {
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          intervalType = "h";
        } else {
          interval = Math.floor(seconds / 60);
          if (interval >= 1) {
            intervalType = "m";
          } else {
            interval = seconds;
            intervalType = "now";
          }
        }
      }
  }

  if (interval > 1 || interval === 0) {
    //intervalType += 's';
  }

  if (intervalType === "now") return intervalType;
  return interval + intervalType;
};

export default timeSince
