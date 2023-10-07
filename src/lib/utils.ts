const getDaysText = (days: number) => {
  if (!days) return "";
  return `${days} ${days === 1 ? "day" : "days"}`;
};

const getHoursText = (hours: number) => {
  if (!hours) return "";
  return `${hours} ${hours === 1 ? "hour" : "hours"}`;
};

const getMinutesText = (minutes: number) => {
  if (!minutes) return "";
  return `${minutes} ${minutes <= 1 ? "minute" : "minutes"}`;
};

/**
 * Utility function to return formatted text showing when the todo is gonna disappear
 *
 * @param disappearingIn number of minutes
 */
export const getDisappearingInText = (disappearingIn: number) => {
  const days = Math.floor(disappearingIn / (60 * 24));
  const hours = Math.floor((disappearingIn - days * 24 * 60) / 60);
  const minutes = disappearingIn - days * 24 * 60 - hours * 60;

  if (days > 0) {
    return `${getDaysText(days)} ${getHoursText(hours)}`;
  }
  if (hours > 0) {
    return `${getHoursText(hours)} ${getMinutesText(minutes)}`;
  }

  return minutes < 1 ? "in a few seconds" : minutes === 1 ? "in a minute" : `${minutes} minutes`;
};
