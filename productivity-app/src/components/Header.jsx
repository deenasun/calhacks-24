'use client'

import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
export default function Header() {
    const [searchText, setSearchText] = useState('')

    return (
        <div className="flex flex-row flex-1 w-full items-center justify-start py-2 gap-4 font-semibold">
            <div className=''>
            Productivity App
            </div>
            <TextField
                id="outlined-size-small"
                defaultValue="Search projects"
                size="small"
                value={searchText}
                onChange={(event) => {
                    setSearchText(event.target.value);}}
                className="font-[family-name:var(--font-geist-mono)]"
            />
        </div>
    );
}
