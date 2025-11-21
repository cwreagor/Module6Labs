import { useState } from "react";

function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState(null);

    const calculate = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (isNaN(a) || isNaN(b)) {
            setResult("Please enter valid numbers");
            return;
        }

        let value;

        switch (operator) {
            case "+":
                value = a + b;
                break;
            case "-":
                value = a - b;
                break;
            case "*":
                value = a * b;
                break;
            case "/":
                value = b !== 0 ? a / b : "Cannot divide by zero";
                break;
                default:
                    value = "Choose an operator";
        }

        setResult(value);
    };

    return (
        <div>
            <h2>Calculator</h2>

            <input
            type="number"
            placeholder="First number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            />

            <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            >
                <option value="">Select operator</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>

            <input
            type="number"
            placeholder="Second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            />

            <button onClick={calculate}>Calculate</button>

            {result !== null && (
                <h3>Result: {result}</h3>
            )}
        </div>
    );
}

export default Calculator;