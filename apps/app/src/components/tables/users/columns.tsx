import type { ColumnDef } from "@tanstack/react-table";

export type User = {
  id: string;
  name: string;
  email: string;
};

export const usersColumns: ColumnDef<User>[] = [
  {
    header: "Name",
    accessorKey: "name",
    //   cell: ({ row }) => {
    //     const user = row.original;

    //     return <FullNameFormatter value={user} />;
    //   },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
