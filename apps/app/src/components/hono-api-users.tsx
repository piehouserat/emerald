import { DataTable } from "@emerald/ui/components/data-table";
import { usersColumns } from "./tables/users";

import { cookies as getCookies } from "next/headers";
import { Button } from "@emerald/ui/components/button";

export async function HonoAPIUsers() {
  const apiUrl = `${process.env.API_URL}/users`;
  const cookies = await getCookies();
  const accessToken = cookies.get("access_token");

  const data = await fetch(apiUrl, {
    headers: {
      authorization: `Bearer ${accessToken?.value}`,
    },
  });

  const users = await data.json();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Button>Add User</Button>
      </div>
      <DataTable columns={usersColumns} data={users} />
    </div>
  );
}
