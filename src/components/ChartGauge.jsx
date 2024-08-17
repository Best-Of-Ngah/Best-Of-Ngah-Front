import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

const ChartGauge = () => {
  const settings = {
    width: 200,
    height: 200,
    value: 80,
    valueMin: 0,
    valueMax: 100,
  };

  return (
    <Gauge
      {...settings}
      startAngle={0}
      endAngle={360}
      innerRadius="80%"
      outerRadius="100%"
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 20,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: "#52b202",
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
      text={({ value, valueMax }) => `${value} / ${valueMax}`}
    />
  );
};

export default ChartGauge;
