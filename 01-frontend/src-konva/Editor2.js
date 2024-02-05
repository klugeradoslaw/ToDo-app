import React, { useState } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect, Line } from "react-konva";

export default function Editor2() {

    const [lines, setLines] = useState([]);
    const [isDrawing, setIsDrawing] = useState(false);
    const [startPoint, setStartPoint] = useState(null);

    const handleMouseDown = (event) => {
        const pointerPos = event.target.getStage().getPointerPosition();

        if (!isDrawing) {
            setStartPoint({ x: pointerPos.x, y: pointerPos.y });
            setIsDrawing(true);
        } else {
            const newLine = { points: [startPoint.x, startPoint.y, pointerPos.x, pointerPos.y] };
            setLines((prevLines) => [...prevLines, newLine]);
            setIsDrawing(false);
            setStartPoint(null);
        }
    };

    const handleMouseMove = (event) => {
        if (isDrawing) {
            const pointerPos = event.target.getStage().getPointerPosition();
            setLines((prevLines) => {
                const updatedLines = [...prevLines];
                updatedLines.pop(); // Usuwamy ostatnią linię (niedokończoną)
                return [...updatedLines, { points: [startPoint.x, startPoint.y, pointerPos.x, pointerPos.y] }];
            });
        }
    };

    return (
        <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
        >
            <Layer>
                {lines.map((line, index) => (
                    <Line
                        key={index}
                        points={line.points}
                        stroke="black"
                        strokeWidth={5}
                    />
                ))}
            </Layer>
        </Stage>
    );
};

const handleMouseDown = (event) => {
    const clickedOnLine = event.target.findAncestors('Line').length > 0;

    if (!isDrawing && !clickedOnLine) {
        const pointerPos = getPosition(event.target.getStage().getPointerPosition());
        setStartPoint({x: pointerPos.x, y: pointerPos.y});
        setIsDrawing(true);
    }
};

const handleMouseMove = (event) => {
    if (isDrawing === true) {
        const pointerPos = getPosition(event.target.getStage().getPointerPosition());
        setLines((prevLines) => {
            const updatedLines = [...prevLines];
            updatedLines.pop();
            return [...updatedLines, {points: [startPoint.x, startPoint.y, pointerPos.x, pointerPos.y]}];
        });
    }
};

const handleMouseUp = (event) => {
    if (isDrawing) {
        const pointerPos = getPosition(event.target.getStage().getPointerPosition());
        const newLine = {points: [startPoint.x, startPoint.y, pointerPos.x, pointerPos.y]};
        setLines((prevLines) => [...prevLines, newLine]);
        setStartPoint(null);
        setIsDrawing(false);
    }
};
