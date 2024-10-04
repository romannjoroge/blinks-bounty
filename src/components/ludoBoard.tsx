import React from "react";
import LudoCircle from "./ludoCircle";

export default function LudoBox() {
    return <div className="w-fit bg-board_background_color border-black border-2">
        <div className="border-gray-600 m-6 border-2 relative">
            <div className="grid grid-cols-2 grid-rows-2 gap-16">
                <LudoCircle color="bg-ludo_blue" number_coins={3} />
                <LudoCircle color="bg-ludo_red" number_coins={2} />
                <LudoCircle color="bg-ludo_yellow" number_coins={0} />
                <LudoCircle color="bg-ludo_green" number_coins={4} />
            </div>
            <div className="bg-white h-full w-24 absolute top-0 left-44 z-0"></div>
            <div className="bg-white h-24 w-full absolute left-0 bottom-44 z-10"></div>
        </div>
    </div>
}