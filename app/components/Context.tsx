'useclient'

import { useContext } from "react";

const { createContext } = require("react");
export interface Data {
id:string,
name:string,
amount:number;
completed:boolean,
}

export const DataContext = createContext<Array<Data> | null>(null);

export function useData(){
    return useContext(DataContext)
}