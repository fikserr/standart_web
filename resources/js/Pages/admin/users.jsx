  import { Button } from '@/components/ui/button';
  import { useState } from 'react';
  import { router } from '@inertiajs/react'; // inertia router kerak
import { useToast } from '@/hooks/use-toast';

  const AddProductForm = ({ users }) => {
    const [loadingId, setLoadingId] = useState(null);
    const { toast } = useToast()

    const toggleAdmin = async (user) => {
      setLoadingId(user.id);

      try {
        await router.put(
          `/admin/users/${user.id}`,
          { is_admin: !user.is_admin },
          {
            preserveScroll: true,
            onSuccess: () => {
              toast({
                title: "Muvaffaqiyatli",
                description: !user.is_admin
                  ? `${user.name} adminga tayyorlandi`
                  : `${user.name} dan adminlik olib tashlandi`,
              });
            },
            onFinish: () => setLoadingId(null),
          }
        );
      } catch (err) {
        console.error(err);
        setLoadingId(null);
        toast({
          title: "Xatolik yuz berdi",
          description: "Iltimos, keyinroq urinib ko‘ring",
        });
      }
    };


    return (
      <div className="p-6 mx-5 min-h-screen w-[1200px]">
        <h1 className="text-3xl font-bold mb-6">User List</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-2 font-medium">Id</th>
                <th className="px-4 py-2 font-medium">Name</th>
                <th className="px-4 py-2 font-medium">Email</th>
                <th className="px-4 py-2 font-medium">Created</th>
                <th className="px-4 py-2 font-medium">Role</th>
                <th className="px-4 py-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-200">
                  <td className="px-4 py-3">{user.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">
                    {new Date(user.created_at).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    })}
                  </td>
                  <td className="px-4 py-3">{user.is_admin ? "Admin" : "User"}</td>
                  <td className="px-4 py-3">
                    <Button
                      variant={user.is_admin ? "destructive" : "default"}
                      onClick={() => toggleAdmin(user)}
                      disabled={loadingId === user.id}
                    >
                      {loadingId === user.id ? "..." : user.is_admin ? "Remove Admin" : "Make Admin"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default AddProductForm;
