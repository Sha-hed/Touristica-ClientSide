import { useState } from "react";

const MultipleSkill = () => {
    const skills = ['Yoga', 'Gym', 'Running', 'WeighLifting', 'HardLabour', 'f', 'g'];
    const [checkedState, setCheckedState] = useState(
        new Array(skills.length).fill(false)
    );
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        console.log(checkedState);
    }
    console.log(checkedState);
    return (
        <div>
            <h1>I am here for getting multiple Skills</h1>
            <div className="flex gap-5">
                {
                    skills.map((skill, idx) =>
                        <div className="flex justify-center items-center" key={idx}>
                            <label>{skill}</label>
                            <input
                                type="checkbox"
                                name={skill}
                                id={`Custom-checkbox-${idx}`}
                                value={skill}
                                checked={checkedState[idx]}
                                onChange={() => handleOnChange(idx)}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MultipleSkill;