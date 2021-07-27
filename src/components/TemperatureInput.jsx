const scales = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

function TemperatureInput({ temperature, scale, onChangeHandler }) {
    return (
        <div>
            <fieldset>
                <legend>Enter temperature in {scales[scale]}: </legend>
                <input
                    type="text"
                    value={temperature}
                    onChange={(e) => onChangeHandler(e, scale)}
                />
            </fieldset>
        </div>
    );
}

export default TemperatureInput;
