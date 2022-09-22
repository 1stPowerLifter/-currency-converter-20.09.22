import { HeaderItem } from "components/HeaderItem/HeaderItem"
import { HeaderCorrencyList } from "./HeaderCorrency.styled"

export const HeaderCorrency = ({currency, list, location}) => {

    const locationConverter = (curr) => curr * currency[location]

    return (
        <HeaderCorrencyList>
            {list.map(item => (
                <li key={item}>
                    <HeaderItem title={item} value={locationConverter(currency[item]).toFixed(3)} />
                </li>
            ))}
        </HeaderCorrencyList>
    )
}