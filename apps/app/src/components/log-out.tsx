"use client";

import { logoutAction } from "@/actions/logout-action";
import { DropdownMenuItem } from "@emerald/ui/components/dropdown-menu";
import { LogOutIcon } from "lucide-react";
import { useState } from "react";

export function LogOut() {
  const [isLoading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);
    logoutAction();
  };

  return (
    <DropdownMenuItem onClick={handleLogOut}>
      <LogOutIcon />
      {isLoading ? "Loading..." : "Log out"}
    </DropdownMenuItem>
  );
}
