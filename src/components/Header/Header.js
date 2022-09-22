import { useState } from "react"
import { Box } from "utils/Box"
import { HeaderLocation } from "components/HeaderLocation/HeaderLocation";
import { HeaderCorrency } from "components/HeaderCorrency/HeaderCorrency";

export const Header = ({ currency, list }) => {
    const [location, setLocation] = useState("UAH")

    return (
        <Box display="flex"
            justifyContent="space-around"
            bg="#d6d6d6" py="16px"
            alignItems="center"
        >
            <HeaderLocation locationChanger={setLocation} currency={currency} location={location} />
            <HeaderCorrency list={list} currency={currency} location={location} />
            
        </Box>
    )
}