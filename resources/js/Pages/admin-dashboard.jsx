import React from 'react';
import { AppSidebar } from '@/components/shared/app-sidebar';
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";
import Group from '@images/groupIcon.svg';
import Order from '@images/orderIcon.svg';
import Sales from '@images/salesIcon.svg';
import Pending from '@images/pendingIcon.svg';
import PriceWithDiff from '@ui/priseWithDiff';

const cards = [
  {
    title: "Total Users",
    value: 40689,
    diff: 0.085,
    icon: Group,
    iconStyle: "bg-[rgb(228,228,255)]",
    info: "Up from yesterday",
    isCurrency: false,
  },
  {
    title: "Total Order",
    value: 10293,
    diff: 0.013,
    icon: Order,
    iconStyle: "bg-[rgb(254,242,214)]",
    info: "Up from last week",
    isCurrency: false,
  },
  {
    title: "Total Sales",
    value: 89000,
    diff: -0.043,
    icon: Sales,
    iconStyle: "bg-[rgb(217,247,231)]",
    info: "Down from yesterday",
    isCurrency: true,
  },
  {
    title: "Total Pending",
    value: 2040,
    diff: 0.018,
    icon: Pending,
    iconStyle: "bg-[rgb(255,222,210)]",
    info: "Up from yesterday",
    isCurrency: false,
  },
];

const AdminDashboard = () => {
  return (
    <div className="px-10">
      <AppSidebar />
      <h1 className="text-3xl font-bold mb-4 p-5">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-5 border rounded-lg space-y-5 hover:shadow-md transition"
          >
            <div className="space-y-5">
              <div className="flex justify-between">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold">{card.title}</h2>
                  <PriceWithDiff
                    value={card.value}
                    diff={card.diff}
                    currency={card.isCurrency}
                  />
                </div>
                <div
                  className={`flex justify-center items-center p-5 rounded-[40%] ${card.iconStyle}`}
                >
                  <img src={card.icon} alt={card.title} />
                </div>
              </div>
              <div className="text-sm text-gray-500">{card.info}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
