import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { orders } from "@/components/shared/lists";

const statusStyles = {
    Completed: "bg-emerald-100 text-emerald-700",
    Processing: "bg-purple-100 text-purple-700",
    Rejected: "bg-red-100 text-red-700",
    "On Hold": "bg-yellow-100 text-yellow-700",
    "In Transit": "bg-indigo-100 text-indigo-700",
};

export default function OrderList() {
    return (
        <div className="p-6 mx-5 min-h-screen w-[1200px]">
            <h1 className="text-3xl font-bold mb-6">Order Lists</h1>
            <div className=" mb-4 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-2">
                    <Button variant="outline"><Filter className="mr-2 h-4 w-4" />Filter By</Button>
                    <Button variant="outline">Date</Button>
                    <Button variant="outline">Order Type</Button>
                    <Button variant="outline">Order Status</Button>
                </div>
                <Button variant="ghost" className="text-red-500">Reset Filter</Button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="px-4 py-2 font-medium">ID</th>
                            <th className="px-4 py-2 font-medium">NAME</th>
                            <th className="px-4 py-2 font-medium">ADDRESS</th>
                            <th className="px-4 py-2 font-medium">DATE</th>
                            <th className="px-4 py-2 font-medium">TYPE</th>
                            <th className="px-4 py-2 font-medium">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b border-gray-200">
                                <td className="px-4 py-3">{order.id}</td>
                                <td className="px-4 py-3 font-medium text-gray-900">{order.name}</td>
                                <td className="px-4 py-3">{order.address}</td>
                                <td className="px-4 py-3">{order.date}</td>
                                <td className="px-4 py-3">{order.type}</td>
                                <td className="px-4 py-3">
                                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${statusStyles[order.status]}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                <div className="flex gap-2">
                    <Button variant="outline" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
                    <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button>
                </div>
            </div>
        </div>
    );
}
