import Select from "react-select"
import { StyledTool, InputForTool } from "./ConverterTool.styled"


export const ConverterTool = ({ selectTool, inputValue, disabled, inputChanger, options, selectChanger }) => {
    
    const selectUpdateChanger = (e) => {
        console.log(e)
        selectChanger(e)
        selectTool(true)
    }

    return (
        <StyledTool onChange={() => selectTool(true)}>
                <InputForTool type="number" min="0"
                    value={inputValue}
                    disabled={disabled}
                    onChange={(e) => inputChanger(e.target.value)}
                    
                />
                <Select options={options} onChange={(e) => selectUpdateChanger(e.value)} />
        </StyledTool>
    )
}