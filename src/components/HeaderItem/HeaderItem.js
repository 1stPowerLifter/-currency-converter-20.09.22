import { Text } from "./HeaderItem.styled"


export const HeaderItem = ({ title, value }) => {
    return (
        <>
            <Text>{title}</Text>
            <Text>{value} </Text>
        </>
    )
}