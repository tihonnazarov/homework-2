
import React, { useState } from 'react';

const Square = ({ color, onClick }) => {
    return (
        <div
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: color,
                margin: '10px',
                display: 'inline-block',
                cursor: 'pointer',
            }}
            onClick={onClick}
        />
    );
};

const App = () => {
    const [square1Color, setSquare1Color] = useState('red');
    const [square2Color, setSquare2Color] = useState('blue');

    const handleSquare1Click = () => {
        setSquare1Color(square2Color);
    };

    const handleSquare2Click = () => {
        setSquare2Color(square1Color);
    };

    return (
        <div>
            <Square color={square1Color} onClick={handleSquare1Click} />
            <Square color={square2Color} onClick={handleSquare2Click} />
        </div>
    );
};

export default App;