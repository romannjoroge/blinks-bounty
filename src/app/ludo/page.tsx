"use client"

import React from "react";
import LudoBox from "@/components/ludoBoard";

export default function Ludo() {
    return <div className="bg-white h-screen w-screen flex flex-col justify-center items-center">
        <div className="rounded-lg border-black border-2 w-fit h-fit p-2">
            <LudoBox />
        </div>
    </div>
}