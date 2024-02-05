import {useState} from 'react';
import {Stage, Layer, Line, Text} from 'react-konva';
import BackgroundLines from "./BackgroundLines";

function EditorFree5() {
    const blockSize = 30;
    const height = window.innerHeight - 100;
    const width = window.innerWidth - 100;

    const [lines, setLines] = useState([]);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startPoint, setStartPoint] = useState(null);
    const [selectedLineIndex, setSelectedLineIndex] = useState(null)

    function findLineIndex(pointerPos) {
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const [x1, y1, x2, y2] = line.points;
            const distance = Math.abs(
                (y2 - y1) * pointerPos.x - (x2 - x1) * pointerPos.y + x2 * y1 - y2 * x1
            ) / Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2))
            if (distance < 10) {
                return i;
            }
        }
        return null;
    }

    function getPosition(pos) {
        const pointX = Math.round(pos.x / blockSize) * blockSize;
        const pointY = Math.round(pos.y / blockSize) * blockSize;
        return {x: pointX, y: pointY};
    };

    const handleMouseDown = (event) => {
        const pointerPos = event.target.getStage().getPointerPosition();
        const lineIndex = findLineIndex(pointerPos);
        setSelectedLineIndex(lineIndex);
        if (selectedLineIndex !== null) {
            setIsDragging(true);
            setIsDrawing(false)
            console.log("0: is Drawing " + isDrawing + "... isDragging: " + isDragging)
            console.log("id: " + selectedLineIndex)
        }
        if (selectedLineIndex === null) {
            setIsDragging(false)
            setIsDrawing(true)
            const startPos = getPosition(event.target.getStage().getPointerPosition());
            setStartPoint({x: startPos.x, y: startPos.y});
            console.log("1: is Drawing " + isDrawing + "... isDragging: " + isDragging)
        }
    }

    const handleMouseMove = (event) => {
        if (selectedLineIndex !== null) {
            setIsDragging(true);
            setIsDrawing(false)
            console.log("2: is Drawing " + isDrawing + "... isDragging: " + isDragging)
        }
        if (selectedLineIndex === null) {
            setIsDragging(false)
            setIsDrawing(true)
            const pointerPos = getPosition(event.target.getStage().getPointerPosition());
            setLines((prevLines) => {
                const updatedLines = [...prevLines];
                updatedLines.pop();
                return [...updatedLines, {points: [startPoint.x, startPoint.y, pointerPos.x, pointerPos.y]}];
            })
        }
    };

    const handleMouseUp = (event) => {
        if (isDragging) {
            setIsDrawing(false);
        } else {
            const pointerPos = getPosition(event.target.getStage().getPointerPosition());
            const newLine = {points: [startPoint.x, startPoint.y, pointerPos.x, pointerPos.y]};
            setLines((prevLines) => [...prevLines, newLine]);
            setStartPoint(null);
            setIsDrawing(false);
        }
    }

    return (
        <Stage
            height={height}
            width={width}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <Layer>
                <BackgroundLines height={height} width={width} blockSize={blockSize}/>
                {lines?.map((line, index) => (
                    <Line
                        key={index}
                        points={line.points}
                        stroke={index === selectedLineIndex ? "red" : "black"}
                        strokeWidth={5}
                        tension={0.5}
                        lineCap="square"
                        lineJoin="bevel"
                        draggable={true}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={() => setIsDragging(false)}
                        hitStrokeWidth={7}
                    />
                ))}
            </Layer>
        </Stage>
    );
}


export default EditorFree5;
