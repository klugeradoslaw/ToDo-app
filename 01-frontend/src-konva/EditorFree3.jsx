import {useState} from 'react';
import {Stage, Layer, Line, Text} from 'react-konva';
import BackgroundLines from "./BackgroundLines";

function EditorFree3() {
    const blockSize = 30;
    const height = window.innerHeight - 100;
    const width = window.innerWidth - 100;

    const [lines, setLines] = useState([]);

    const [isDrawing, setIsDrawing] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startPoint, setStartPoint] = useState(null);

    function getPosition(pos) {
        const pointX = Math.round(pos.x / blockSize) * blockSize;
        const pointY = Math.round(pos.y / blockSize) * blockSize;
        return {x: pointX, y: pointY};
    };

    const handleMouseDown = (event) => {
        console.log("0: " + isDragging)
        if (isDragging) {
            setIsDrawing(false);
            console.log("1: " + isDragging)
        } else {
            const pointerPos = getPosition(event.target.getStage().getPointerPosition());
            setStartPoint({x: pointerPos.x, y: pointerPos.y});
            setIsDrawing(true);
            console.log("2: " + isDragging)

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
                console.log("3: " + isDragging)
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
                {lines.map((line, index) => (
                    <Line
                        key={index}
                        points={line.points}
                        stroke="black"
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


export default EditorFree3;