import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const statusStyles = {
    pending: "bg-yellow-100 text-yellow-700",
    confirmed: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
};

export default function OrderList({ orders }) {
    const [statuses, setStatuses] = useState(
        orders.reduce((acc, order) => {
            acc[order.id] = order.status;
            return acc;
        }, {})
    );
    const { toast } = useToast();
    const handleStatusChange = (orderId, newStatus) => {
        axios
            .patch(`/admin/orders/${orderId}/status`, { status: newStatus })
            .then(() => {
                setStatuses((prev) => ({ ...prev, [orderId]: newStatus }));
                toast({
                    title: "✅ Holat muvaffaqiyatli o‘zgartirildi",
                    description: `Buyurtma #${orderId} endi "${newStatus}" holatida.`,
                });
            })
            .catch(() => {
                toast({
                    variant: "destructive",
                    title: "❌ Xatolik yuz berdi",
                    description:
                        "Buyurtma holatini o‘zgartirishda muammo yuz berdi.",
                });
            });
    };

    return (
        <div className="p-6 mx-5 min-h-screen w-[1200px]">
            <h1 className="text-3xl font-bold mb-6">Order Lists</h1>

            <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter By
                    </Button>
                    <Button variant="outline">Date</Button>
                    <Button variant="outline">Order Type</Button>
                    <Button variant="outline">Order Status</Button>
                </div>
                <Button variant="ghost" className="text-red-500">
                    Reset Filter
                </Button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="px-4 py-2 font-medium">ID</th>
                            <th className="px-4 py-2 font-medium">NAME</th>
                            <th className="px-4 py-2 font-medium">ADDRESS</th>
                            <th className="px-4 py-2 font-medium">DATE</th>
                            <th className="px-4 py-2 font-medium">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr
                                key={order.id}
                                className="border-b border-gray-200"
                            >
                                <td className="px-4 py-3">{order.id}</td>
                                <td className="px-4 py-3 font-medium text-gray-900">
                                    {order.user?.name}
                                </td>
                                <td className="px-4 py-3">
                                    {order.address
                                        ? `${order.address.city}, ${order.address.street}, ${order.address.house_number}`
                                        : "—"}
                                </td>
                                <td className="px-4 py-3">
                                    {new Date(
                                        order.created_at
                                    ).toLocaleDateString("uz-UZ", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </td>
                                <td className="px-4 py-3">
                                    <select
                                        value={statuses[order.id]}
                                        onChange={(e) =>
                                            handleStatusChange(
                                                order.id,
                                                e.target.value
                                            )
                                        }
                                        className={`text-xs font-semibold px-2.5 py-0.5 rounded ${
                                            statusStyles[statuses[order.id]]
                                        }`}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="confirmed">
                                            Confirmed
                                        </option>
                                        <option value="success">Success</option>
                                        <option value="cancelled">
                                            Cancelled
                                        </option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
