'use client';
import { useEffect, useMemo, useState } from 'react';
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const useCountdown = (deadline: string) => {
   const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
   const [time, setTime] = useState(parsedDeadline - Date.now());

   useEffect(() => {
      const interval = setInterval(
         () => setTime(parsedDeadline - Date.now()),
         1000,
      );

      return () => clearInterval(interval);
   }, [time, parsedDeadline]);

   return getReturnValues(time);
};

const getReturnValues = (time: number) => {
   // calculate time left
   const days = Math.floor(time / DAY);
   const hours = Math.floor((time / HOUR) % 24);
   const minutes = Math.floor((time / MINUTE) % 60);
   const seconds = Math.floor((time / SECOND) % 60);

   return [days, hours, minutes, seconds];
};

export default useCountdown;
