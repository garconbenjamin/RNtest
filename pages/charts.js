import React from "react";
import { View, Dimensions, ScrollView } from "react-native";
import { BarChart, StackedBarChart } from "react-native-chart-kit";

const chartConfig = {
  backgroundColor: "#1cc910",
  backgroundGradientFrom: "#eff3ff",
  backgroundGradientTo: "#efefef",
  decimalPlaces: 3, // optional, defaults to 2dp
  color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
  fillShadowGradient: "blue",
  fillShadowGradientOpacity: 1,
  decimalPlaces: 0,
  style: {
    borderRadius: 16,
  },
};
const data = {
  labels: ["11:00", "12:00", "13:00", "14:00", "15:00"],
  datasets: [
    {
      data: [75, 75, 60, 50, 40],
    },
  ],
};
const padding = 20;
const BarChartExample = () => {
  return (
    <View style={{ height: 200, padding }}>
      <BarChart
        data={data}
        width={Dimensions.get("screen").width - padding * 2}
        height={220}
        yAxisLabel={"Rs"}
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <StackedBarChart
        data={{
          labels: ["11:00", "12:00", "13:00", "14:00", "15:00"],

          data: [[80, 20], [75], [75], [50], [45]],
          barColors: ["red", "rgba(0,0,0,0)"],
        }}
        width={Dimensions.get("screen").width - padding * 2}
        showBarTops={false}
        height={220}
        hideLegend={true}
        yAxisSuffix="%"
        fromZero={true}
        showValuesOnTopOfBars={false}
        decimalPlaces={0}
        chartConfig={{ ...chartConfig }}
        maxValue={500}
        minValue={0}
        // yAxisLabel={(value) => "value"}
      />
    </View>
  );
};

const Charts = () => {
  return (
    <ScrollView>
      <BarChartExample />
    </ScrollView>
  );
};
export default Charts;
