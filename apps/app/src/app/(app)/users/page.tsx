import { Users } from "@/components/users";
import { getUsers } from "@/lib/api";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <>
      <Users users={users} />
    </>
  );
}
