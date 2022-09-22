import { useRef } from 'react';

import { Box } from 'utils/Box';
import { Exchange, LocationButton, LocationInput, Title } from './HeaderLocation.styled';

export const HeaderLocation = ({locationChanger, currency, location}) => {
    const locationInput = useRef();

    const handleLocationChanger = (e) => {
        e.preventDefault()
        const curr = locationInput.current.value.toUpperCase()
        const listOfCurrensy = Object.keys(currency)
        listOfCurrensy.includes(curr) ? locationChanger(curr) : alert("Currency not found, please try again.")
        locationInput.current.value = ""
    }

    return (
        <Box as="form" onSubmit={handleLocationChanger}
            autoComplete="off"
            display="flex"
            gridGap="16px"
            alignItems="center"
        >
            <Title>Selected currency: {location}</Title>
            <Box display="flex">
                <LocationInput id="locationInput" type="text"
                    ref={locationInput}
                    placeholder="Please enter your currency"
                    minLength="3" maxLength="3"
                />
                <LocationButton type="subbmit"><Exchange/></LocationButton>
            </Box>
                
        </Box>
    )
}