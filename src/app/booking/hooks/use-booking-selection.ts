import { useState, useCallback } from "react";

export interface TimeData {
  label: string;
  timestamp: number;
}

export function useBookingSelection() {
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<TimeData | null>(null);

  const selectDay = useCallback((day: Date) => {
    setSelectedDay(day);
    setSelectedTime(null); 
  }, []);

  const selectTime = useCallback((time: TimeData) => {
    setSelectedTime(time);
  }, []);

  const resetBooking = useCallback(() => {
    setSelectedDay(null);
    setSelectedTime(null);
  }, []);

  return {
    selectedDay,
    selectedTime,
    selectDay,
    selectTime,
    resetBooking,
  };
}