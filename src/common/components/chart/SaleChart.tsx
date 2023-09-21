import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

type CChartProps = {
    labels: Array<String>;
    datasets: TypeDataset[];
};

type TypeDataset = {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension?: number
};
const CChart = ({ labels, datasets }: CChartProps) => {
    const chartRef = useRef(null);

    useEffect(() => {
        let chartInstance: Chart<"line", Number[], String> | undefined;
        if (chartRef && chartRef.current) {
            if (chartInstance) {
                chartInstance.destroy();
            }

            chartInstance = new Chart(chartRef.current, {
                type: "line",
                data: {
                    labels: labels,
                    datasets: datasets
                },
                options: {},
            });
        }

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [datasets, labels]);

    return <canvas ref={chartRef} />;
};

export default CChart;
