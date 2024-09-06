"use client"
// dependencies
import { useEffect, useState } from "react"

const useDeviceWidth = () => {  
    // a hook that checks device width
    const [width, setWidth] = useState("");
    
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }       
        window.addEventListener("resize", handleResize);
        // check width when device initially loads and width === 0
        if (!width) {
            setWidth(window.innerWidth)
        }
        return () => window.removeEventListener("resize", handleResize);
    }, [width])
    return width;
}
export default useDeviceWidth