import {Line} from "react-konva";
import React from "react";

function BackgroundLines( {height, width, blockSize}) {
    return (
        <>
            {Array(height).fill(1).map((backgroundLine, i) => (
                <Line
                    key={i}
                    points={[
                        Math.round(i * blockSize), 0,
                        Math.round(i * blockSize), height
                    ]}
                    stroke='#ddd'
                    strokeWidth={1}
                />
            ))}

            {Array(width).fill(1).map((backgroundLine, i) => (
                <Line
                    key={i}
                    points={[
                        0, Math.round(i * blockSize),
                        width, Math.round(i * blockSize),
                    ]}
                    stroke='#ddd'
                    strokeWidth={1}
                />
            ))}
        </>
    )
}

export default BackgroundLines;