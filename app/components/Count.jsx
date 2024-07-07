"use client";

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarAlt, faBuilding, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

function Count() {
  const [members, setMembers] = useState(0);
  const [eventBookings, setEventBookings] = useState(0);
  const [clubs, setClubs] = useState(0);
  const [payments, setPayments] = useState(0);

  const targetValues = {
    members: 828867,
    eventBookings: 46328,
    clubs: 1926436,
    payments: 2245341,
  };

  const duration = 3000; // 3 seconds

  useEffect(() => {
    let intervalId;
    let startTime = performance.now();

    intervalId = setInterval(() => {
      const currentTime = performance.now();
      const progress = (currentTime - startTime) / duration;

      Object.keys(targetValues).forEach((key) => {
        const currentValue = Math.floor(progress * targetValues[key]);

        if (currentValue <= targetValues[key]) {
          switch (key) {
            case 'members':
              setMembers(currentValue);
              break;
            case 'eventBookings':
              setEventBookings(currentValue);
              break;
            case 'clubs':
              setClubs(currentValue);
              break;
            case 'payments':
              setPayments(currentValue);
              break;
            default:
              break;
          }
        } else {
          switch (key) {
            case 'members':
              setMembers(targetValues[key]);
              break;
            case 'eventBookings':
              setEventBookings(targetValues[key]);
              break;
            case 'clubs':
              setClubs(targetValues[key]);
              break;
            case 'payments':
              setPayments(targetValues[key]);
              break;
            default:
              break;
          }
          clearInterval(intervalId);
        }
      });
    }, 16); // Update every 16 milliseconds for smoother animation

    return () => {
      clearInterval(intervalId);
    };
  }, [targetValues, duration]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Helping a local business reinvent itself</h2>
      <div className="flex flex-wrap justify-center mb-8 space-x-8">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faUsers} className="text-4xl text-gray-600 dark:text-gray-400 mb-2" />
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{members.toLocaleString()}</p>
          <p className="text-lg text-gray-600 dark:text-gray-400">Members</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-4xl text-gray-600 dark:text-gray-400 mb-2" />
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{eventBookings.toLocaleString()}</p>
          <p className="text-lg text-gray-600 dark:text-gray-400">Event Bookings</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faBuilding} className="text-4xl text-gray-600 dark:text-gray-400 mb-2" />
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{clubs.toLocaleString()}</p>
          <p className="text-lg text-gray-600 dark:text-gray-400">Clubs</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-4xl text-gray-600 dark:text-gray-400 mb-2" />
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{payments.toLocaleString()}</p>
          <p className="text-lg text-gray-600 dark:text-gray-400">Payments</p>
        </div>
      </div>
    </div>
  );
}

export default Count;
