import type { User } from "@/lib/api";
import type { ColumnDef } from "@tanstack/react-table";
import { UsersTableActions } from "./users-table-actions";

export const usersColumns: ColumnDef<User>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

      return <UsersTableActions user={user} />;
    },
  },
];
