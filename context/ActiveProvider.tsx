"use client"
import { links } from "@/lib/data";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

export type ActiveType = typeof links[number]["name"];

type ActiveProviderPropsType = {
  children: ReactNode
}

type ActiveContextType = {
  active: ActiveType,
  setActive: Dispatch<SetStateAction<ActiveType>>
  timeOfLastClick: number,
  setTimeOfLastClick: Dispatch<SetStateAction<number>>
}

export const ActiveContext = createContext<ActiveContextType | null>(null);

const ActiveProvider = (props: ActiveProviderPropsType) => {
  const [active, setActive] = useState<ActiveType>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // this to disable the observer when we click on nav links

  return (
    <ActiveContext.Provider value={{
      active,
      setActive,
      timeOfLastClick,
      setTimeOfLastClick
    }}>
      {props.children}
    </ActiveContext.Provider>
  )
}

export default ActiveProvider