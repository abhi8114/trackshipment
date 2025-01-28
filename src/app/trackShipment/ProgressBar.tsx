"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ProgressBarProps {
    width?: number;
    height?: number;
    trackColor?: string;
    trackBgColor?: string;
    borderWidth?: number;
}

interface StopContent {
    svg: string;
    text: string;
    position: "top" | "bottom";
}

interface StopPosition {
    x: number;
    y: number;
}

const ProgressBar = ({
    width = 1200,
    height = 350,
    trackColor = "#c2212e",
    trackBgColor = "#F8F2F2",
    borderWidth = 8,
}: ProgressBarProps): JSX.Element => {
    const [currentProgress, setCurrentProgress] = useState<number>(0);
    const [activeStops, setActiveStops] = useState<boolean[]>([false, false, false, false, false, false]);

    const stopPercentages: number[] = [4, 20, 35, 65, 82, 100];
    const stopContent: StopContent[] = [
        {
            svg: "/sixth.svg",
            text: "Check the Prices and Book your Shipments with AAJ Swift",
            position: "top"
        },
        {
            svg: "/first.svg",
            text: "Know Your Promise Delivery Date before Booking",
            position: "top"
        },
        {
            svg: "/second.svg",
            text: "Shipment Pickup by AAJ Team",
            position: "top"
        },
        {
            svg: "/third.svg",
            text: "Access PODs Online",
            position: "bottom"
        },
        {
            svg: "/fourth.svg",
            text: "On-time Delivery as Promised",
            position: "bottom"
        },
        {
            svg: "/fifth.svg",
            text: "Real-time Shipment Tracking",
            position: "bottom"
        }
    ];

    useEffect(() => {
        const calculateProgress = (): void => {
            const section = document.getElementById("progress-section");
            if (!section) return;

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight - window.innerHeight;
            const scrollPosition = window.pageYOffset - sectionTop;

            if (scrollPosition < 0) return setCurrentProgress(0);
            if (scrollPosition > sectionHeight) return setCurrentProgress(100);

            const progress = ((scrollPosition * 1.1) / sectionHeight) * 100;

            const newStops = stopPercentages.map((stopPercent) => progress >= stopPercent);
            setActiveStops(newStops);

            const lastTriggeredStop = stopPercentages.filter((stopPercent) => progress >= stopPercent).pop() || 0;
            setCurrentProgress(lastTriggeredStop);
        };

        window.addEventListener("scroll", calculateProgress);
        calculateProgress();

        return () => window.removeEventListener("scroll", calculateProgress);
    }, []);

    const radius = height / 2;
    const straightLength = width - height;
    const totalLength = 2 * straightLength + Math.PI * radius;
    const progressLength = (totalLength * currentProgress) / 100;

    const trackPath = `
    M ${radius},${borderWidth / 2}
    L ${width - radius},${borderWidth / 2}
    A ${radius - borderWidth / 2},${radius - borderWidth / 2} 0 0 1 ${width - borderWidth / 2},${height / 2}
    A ${radius - borderWidth / 2},${radius - borderWidth / 2} 0 0 1 ${width - radius},${height - borderWidth / 2}
    L ${radius},${height - borderWidth / 2}
    `;
    useEffect(() => {
        stopContent.forEach(content => {
            console.log(`Loading SVG from path: ${content.svg}`);
        });
    }, []);


    return (
        <div className="relative z-50">
            <div className="relative">
                <div className="absolute top-0 -left-[25px] w-full">
                    {stopContent
                        .filter((content) => content.position === "top")
                        .map((content, index) => (
                            <div
                                key={`content-top-${index}`}
                                className="absolute transform -translate-x-1/2 flex flex-col items-center"
                                style={{
                                    left: `${width * (0.25 + index * 0.30)}px`,
                                    color: activeStops[index] ? trackColor : "#6B7280",
                                    transition: "color 0.3s ease-in-out",
                                }}
                            >
                                <div className="-top-12 absolute">

                                    <img
                                        src={content.svg}
                                        alt={content.text}
                                        width="36"
                                        height="36"
                                        className="w-auto h-[36px]"
                                        style={{
                                            filter: activeStops[index] ? "invert(0%) sepia(95%) saturate(10000%) hue-rotate(343deg) brightness(87%) contrast(93%)" : "invert(42%) sepia(9%) saturate(13%) hue-rotate(201deg) brightness(97%) contrast(87%)"
                                        }}

                                    />


                                </div>
                                <div className="-bottom-10 w-[160px] mt-4 text-sm font-medium text-center">{content.text}</div>
                            </div>
                        ))}
                </div>

                <svg width={width} height={height}>
                    <path
                        d={trackPath}
                        fill="none"
                        stroke={trackBgColor}
                        strokeWidth={borderWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d={trackPath}
                        fill="none"
                        stroke={trackColor}
                        strokeWidth={borderWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray={totalLength}
                        strokeDashoffset={totalLength - progressLength}
                        style={{
                            transition: "stroke-dashoffset 0.5s ease-in-out",
                        }}
                    />
                </svg>

                <div className="absolute bottom-0 -left-[25px] w-full">
                    {stopContent
                        .filter((content) => content.position === "bottom")
                        .map((content, index) => (
                            <div
                                key={`content-bottom-${index}`}
                                className="absolute transform -translate-x-1/2 flex flex-col items-center"
                                style={{
                                    left: `${width * (0.85 - index * 0.30)}px`,
                                    color: activeStops[index + 3] ? trackColor : "#6B7280",
                                    transition: "color 0.3s ease-in-out",
                                }}
                            >
                                <div className="bottom-20 absolute">
                                    <img
                                        src={content.svg}
                                        alt={content.text}
                                        width="36"
                                        height="36"
                                        className="w-auto h-10 transition-all duration-300"
                                        style={{
                                            filter: activeStops[index + 3] ? "invert(0%) sepia(95%) saturate(10000%) hue-rotate(343deg) brightness(87%) contrast(93%)" : "invert(42%) sepia(9%) saturate(13%) hue-rotate(201deg) brightness(97%) contrast(87%)"
                                        }}
                                    />
                                </div>
                                <div className="top-4 mt-3 w-[120px] text-center text-sm font-medium">{content.text}</div>
                            </div>
                        ))}
                </div>

                {/* <div className="absolute inset-0 flex items-center justify-center">
                    <span
                        className="text-lg font-semibold text-gray-700"
                        style={{
                            transition: "opacity 0.3s ease-in-out",
                        }}
                    >
                        {Math.round(currentProgress)}%
                    </span>
                </div> */}
            </div>
        </div>

    );
};

export default ProgressBar;
