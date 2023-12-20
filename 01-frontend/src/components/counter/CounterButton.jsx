import {PropTypes} from 'prop-types';

export default function CounterButton ({by, incrementedMethod, decrementedMethod}) {

    return (
        <div className="Counter">
            <div>
                <button className="counterButton"
                        onClick={() => incrementedMethod(by)}>+{by}</button>
                <button className="counterButton"
                        onClick={() => decrementedMethod(by)}>-{by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}