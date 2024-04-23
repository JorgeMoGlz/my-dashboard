'use client';
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
    const inCart = useAppSelector(state => state.counter.count);
    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget
                title={`${inCart}`} 
                subTitle="Productos agregados" 
                label="contador" 
                href="./counter" 
                icon={<IoCartOutline size={60} className="text-blue-600"/>} />
        </div>
    )
}
