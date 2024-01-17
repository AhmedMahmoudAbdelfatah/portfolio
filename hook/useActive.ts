import { useContext } from "react";
import { ActiveContext } from "@/context/ActiveProvider";

export function useActive() {
  const context = useContext(ActiveContext);
  if (context === null) throw new Error("useActive must be used within an ActiveProvider");
  return context;
}