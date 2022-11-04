import React from "react";

const appointmentTimeOfDay = (startsAt) => {
  // const today = new Date(); Gives a (present) date object
  // const midday = today.setHours(12, 0); Gives a UNIX timestamp (number of ms since 01/01/1970)
  // const middayDate = new Date(midday); Gives a date object
  // middayDate.toTimeString(); Gives midday as a string
  // On a date object, you can apply setHours to get a UNIX timestamp
  // You can use a UNIX timestamp to create a new Date object
  // On a date object, you can apply toTimeString to get a string

  const [h, m] = new Date(startsAt)
    .toTimeString()
    .split(":");
  return `${h}:${m}`;
}

export const Appointment = ({ customer }) => (
  <div>{customer.firstName}</div>
);

export const AppointmentsDayView = (
  { appointments }
) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map(appointment => (
        <li key={appointment.startsAt}>
          {appointmentTimeOfDay(appointment.startsAt)}
        </li>
      ))}
    </ol>
    {appointments.length === 0 ? (
      <p>There are no appointments scheduled for today.</p>
    ) : (
      <Appointment {...appointments[0]} />
    )}
  </div>
);