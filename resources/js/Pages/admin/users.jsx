import { Button } from '@/components/ui/button';

const AddProductForm = ({ users }) => {
  console.log(users);
  return (
    <div className="p-6 mx-5 min-h-screen w-[1200px]">
      <h1 className="text-3xl font-bold mb-6">Order Lists</h1>
      <div className=" mb-4 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex gap-2">
          <Button variant="outline">Filter By</Button>
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
              <th className="px-4 py-2 font-medium">Id</th>
              <th className="px-4 py-2 font-medium">Name</th>
              <th className="px-4 py-2 font-medium">Email</th>
              <th className="px-4 py-2 font-medium">Created</th>
              <th className="px-4 py-2 font-medium">Order</th>
              <th className="px-4 py-2 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((order) => (
              <tr key={order.id} className="border-b border-gray-200">
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{order.name}</td>
                <td className="px-4 py-3">{order.email}</td>
                <td className="px-4 py-3" >{new Date(order.created_at).toLocaleDateString("en-GB", {year: "numeric",month: "long",day: "2-digit",})}</td>
                <td className="px-4 py-3">{order.is_admin ? "Admin" : "User"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        {/* <div className="flex gap-2">
                <Button variant="outline" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button>
            </div> */}
      </div>
    </div>
  );
};

export default AddProductForm;
