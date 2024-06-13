
import { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
    { value: 'Saturday', label: 'Saturday' },
    { value: 'Sunday', label: 'Sunday' },
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' }
];

const ReactSelect = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelect = (selected) => {
        setSelectedOptions(selected);
        console.log('Selected options:', selected);
    };

    return (
        <div>
            <h1>React Select e ashi gesi amra! Wow</h1>
            <div className='flex'>
                <Select
                    onChange={handleSelect}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={options}
                    value={selectedOptions}
                />
            </div>
            {selectedOptions && selectedOptions.map(opt => (
                <p key={opt.value}>Selected: {opt.label}</p>
            ))}
        </div>
    );
};

export default ReactSelect;
