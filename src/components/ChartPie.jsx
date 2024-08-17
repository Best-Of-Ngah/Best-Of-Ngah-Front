import { PieChart } from "@mui/x-charts/PieChart";

const ChartPie = () => {
  const mockData = [
    { id: 0, value: 30, label: "series A" },
    { id: 1, value: 15, label: "series B" },
    { id: 2, value: 20, label: "series C" },
  ];

  const pieData = Array.isArray(mockData)
    ? mockData.map((entry) => ({
        id: entry.id,
        value: entry.value,
      }))
    : [];

  const palette = ["red", "blue", "purple"];

  return (
    <PieChart
      colors={palette}
      series={[
        {
          data: pieData,
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -90,
          endAngle: 180,
          cx: 150,
          cy: 150,
        },
      ]}
      width={400}
      height={300}
    />
  );
};

export default ChartPie;
