import React, { useState } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Rect, Line } from "react-konva";

export default function Editor() {
    const [state, setState] = useState({
        points: [],
        curMousePos: [0, 0],
        isMouseOverStartPoint: false,
        isFinished: false,
    });

    const getMousePos = (stage) => {
        return [stage.getPointerPosition().x, stage.getPointerPosition().y];
    };

    const handleClick = (event) => {
        const stage = event.target.getStage();
        const mousePos = getMousePos(stage);

        if (state.isFinished) {
            return;
        }

        if (state.isMouseOverStartPoint && state.points.length >= 3) {
            setState((prev) => ({ ...prev, isFinished: true }));
        } else {
            setState((prev) => ({ ...prev, points: [...prev.points, mousePos] }));
        }
    };

    const handleMouseMove = (event) => {
        const stage = event.target.getStage();
        const mousePos = getMousePos(stage);

        setState((prev) => ({ ...prev, curMousePos: mousePos }));
    };

    const handleMouseOverStartPoint = (event) => {
        if (state.isFinished || state.points.length < 3) return;
        event.target.scale({ x: 2, y: 2 });
        setState((prev) => ({ ...prev, isMouseOverStartPoint: true }));
    };

    const handleMouseOutStartPoint = (event) => {
        event.target.scale({ x: 1, y: 1 });
        setState((prev) => ({ ...prev, isMouseOverStartPoint: false }));
    };

    const handleDragStartPoint = (event) => {
        console.log("start", event);
    };

    const handleDragMovePoint = (event) => {
        const index = event.target.index - 1;
        const pos = [event.target.attrs.x, event.target.attrs.y];

        setState((prev) => ({
            ...prev,
            points: [...prev.points.slice(0, index), pos, ...prev.points.slice(index + 1)],
        }));
    };

    const handleDragEndPoint = (event) => {
        console.log("end", event);
    };

    // [ [a, b], [c, d], ... ] to [ a, b, c, d, ...]
    const flattenedPoints = state.points
        .concat(state.isFinished ? [] : state.curMousePos)
        .reduce((a, b) => a.concat(b), []);

    return (
        <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={handleClick}
            onMouseMove={handleMouseMove}
        >
            <Layer>
                <Line
                    points={flattenedPoints}
                    stroke="black"
                    strokeWidth={5}
                    closed={state.isFinished}
                />
                {state.points.map((point, index) => {
                    const width = 6;
                    const x = point[0] - width / 2;
                    const y = point[1] - width / 2;
                    const startPointAttr =
                        index === 0
                            ? {
                                hitStrokeWidth: 12,
                                onMouseOver: handleMouseOverStartPoint,
                                onMouseOut: handleMouseOutStartPoint,
                            }
                            : null;

                    return (
                        <Rect
                            key={index}
                            x={x}
                            y={y}
                            width={width}
                            height={width}
                            fill="white"
                            stroke="black"
                            strokeWidth={3}
                            onDragStart={handleDragStartPoint}
                            onDragMove={handleDragMovePoint}
                            onDragEnd={handleDragEndPoint}
                            draggable
                            {...startPointAttr}
                        />
                    );
                })}
            </Layer>
        </Stage>
    );
};