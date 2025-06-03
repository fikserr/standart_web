import React from 'react';
import { AppSidebar } from '@/components/shared/app-sidebar';
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";
import Group from '@images/groupIcon.svg';
import Order from '@images/orderIcon.svg';
import Sales from '@images/salesIcon.svg';
import Pending from '@images/pendingIcon.svg';
import CountUp from '@/components/shared/CountUp';
const cards = [
  {
    title: "Total Users",
    value: 40689,
    diff: "8.5%",
    icon: Group,
    iconUp: <IoMdTrendingUp />,
    iconStyle: "bg-[rgb(228,228,255)]",
    info: "Up from yesterday",
    isCurrency: false,
    chartColor: "text-green-500",
  },
  {
    title: "Total Order",
    value: 10293,
    diff: "1.3%",
    icon: Order,
    iconUp: <IoMdTrendingUp />,
    iconStyle: "bg-[rgb(254,242,214)]",
    info: "Up from last week",
    isCurrency: false,
    chartColor: "text-green-500",
  },
  {
    title: "Total Sales",
    value: 89000,
    diff: "4.3%",
    icon: Sales,
    iconUp: <IoMdTrendingDown />,
    iconStyle: "bg-[rgb(217,247,231)]",
    info: "Down from yesterday",
    isCurrency: true,
    chartColor: "text-red-500",
  },
  {
    title: "Total Pending",
    value: 2040,
    diff: "1.8%",
    icon: Pending,
    iconUp: <IoMdTrendingUp />,
    iconStyle: "bg-[rgb(255,222,210)]",
    info: "Up from yesterday",
    isCurrency: false,
    chartColor: "text-green-500",
  },
];

const AdminDashboard = () => {
  const [value, cycleValue] = useCycle(cards.value);
  return (
    <div className="px-5">
      <AppSidebar />
      <h1 className="text-3xl font-bold mb-4 p-5">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-5 border rounded-lg space-y-5 hover:shadow-md transition w-full"
          >
            <div className="space-y-5">
              <div className="flex justify-between">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold">{card.title}</h2>

                  <CountUp
                    from={0}
                    to={card.value}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-3xl font-bold"
                  />

                </div>
                <div
                  className={`flex justify-center items-center p-5 rounded-[40%] ${card.iconStyle}`}
                >
                  <img src={card.icon} alt={card.title} />
                </div>
              </div>
              <div className='flex items-center gap-2 text-lg'>
                <span className={`${card.chartColor}`}>{card.iconUp}</span>
                <span className={`${card.chartColor}`}>{card.diff}</span>
                <div className="text-md text-gray-500">{card.info}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
