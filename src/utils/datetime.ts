import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export const formatDateTime = (date: string, format: string = 'DD/MM/YYYY') => {
  return dayjs(date).format(format);
};

export const isAfterDay = (date: string, diffDay = 30) => {
  if (date) {
    return dayjs().diff(date, 'd') <= diffDay;
  }
  return false;
};

export const parseFormat = (date?: string, format: string = 'DD/MM/YYYY') => {
  if (!date) {
    return '';
  }
  return dayjs(date, format);
};

export const notificationFormatTime = (createAt?: string | null, format: string = 'DD/MM/YYYY') => {
  if (!createAt) {
    return createAt;
  }
  return dayjs(createAt).format(format);
};
