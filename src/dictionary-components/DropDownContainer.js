import { useState } from "react";

const options = ["shortdef", "fulldef", "drp", "synonyms"];

function DropDownContainer() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggling = () => setIsOpen(!isOpen);

    function onOptionClicked(value) {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    }

    return (
        <div>
                <div onClick={toggling}>
                    {selectedOption || "Search in..."} 
                </div>
                <div>
                    <div>
                        {options.map((option, index) => (
                            <li
                                onClick={onOptionClicked(option)}
                                key={index}
                            >
                                {option}
                            </li>
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default DropDownContainer;
