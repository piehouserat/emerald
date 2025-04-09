"use client";

import { DataTable } from "@emerald/ui/components/data-table";
import { usersColumns } from "./tables/users";
import type { User } from "@/lib/api";
import { UserDialog } from "./dialogs/user-dialog";
import type { CreateUserFormValues } from "@/actions/schema";
import { useAction } from "next-safe-action/hooks";
import React from "react";
import { createUserAction } from "@/actions/create-user-action";
import { toast } from "sonner";

interface UsersProps {
  users: User[];
}

export function Users({ users = [] }: UsersProps) {
  const [open, setOpen] = React.useState(false);

  const createUser = useAction(createUserAction, {
    onSuccess: () => {
      toast.success("User has been created.");
      setOpen(false);
    },
    onError: () => {
      toast.error("Something went wrong please try again.");
      setOpen(false);
    },
  });

  const handleAddUser = (values: CreateUserFormValues) => {
    createUser.execute(values);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        {/* <Button>Add User</Button> */}
        <UserDialog
          onFormSubmit={(values) => handleAddUser(values)}
          loading={createUser.isExecuting}
          open={open}
          setOpen={setOpen}
        />
      </div>
      <DataTable columns={usersColumns} data={users} />
    </div>
  );
}
