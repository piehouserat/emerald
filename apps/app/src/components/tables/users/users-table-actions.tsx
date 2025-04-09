import { MoreHorizontalIcon } from "lucide-react";
import { Button } from "@emerald/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@emerald/ui/components/dropdown-menu";
import type { User } from "@/lib/api";
import { useAction } from "next-safe-action/hooks";
import { deleteUserAction } from "@/actions/delete-user-action";
import { toast } from "sonner";

interface UsersTableActionsProps {
  user: User;
}

export const UsersTableActions = ({ user }: UsersTableActionsProps) => {
  const deleteUser = useAction(deleteUserAction, {
    onSuccess: () => {
      toast.success("User has been deleted.");
    },
    onError: () => {
      toast.error("Something went wrong please try again.");
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(user.id)}
        >
          Copy user ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => deleteUser.execute({ id: user.id })}>
          Delete user
        </DropdownMenuItem>
        <DropdownMenuItem>View user details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
