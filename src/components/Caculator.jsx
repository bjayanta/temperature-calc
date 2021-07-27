import { Component } from 'react';
import { convert, toCelsius, toFahrenheit } from '../libs/Converter';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

class Calculator extends Component {
    state = {
        temperature: '',
        scale: 'c',
    };

    changeHandler = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onChangeHandler={this.changeHandler}
                />

                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onChangeHandler={this.changeHandler}
                />

                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}

export default Calculator;
