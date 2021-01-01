// STEP 1 - Include Dependencies
// Include react
import React,{useContext} from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import {GithubContext} from './../../context/context';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 2 - Chart Data


// STEP 3 - Creating the JSON object to store the chart configurations


const ChartComponent=({data})=>{
  const {chartColor,chartFontColor}=useContext(GithubContext);

  const chartConfigs = {
    type: "pie3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
       caption:'Languages',captionFontColor:chartFontColor,
       theme:'fusion',
       bgColor:chartColor,valueFontColor:chartFontColor,
       pieRadius: '45%',
       paletteColors:'#FCBA04 ,#09814A, #0C6291, #FF5A5F, #7E1946',
      },
      // Chart Data
      data
    }
  };
  return (<ReactFC {...chartConfigs} />);
}
// STEP 4 - Creating the DOM element to pass the react-fusioncharts component


export default ChartComponent;