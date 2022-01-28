import React from 'react';
import { ResponsiveBar } from '@nivo/bar'

export function Bar({ data, axisBottom, axisLeft }) {
  return (
    <ResponsiveBar
      data={ data }
      keys={['employees']}
      indexBy="response"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: 'paired' }}
      colorBy="indexValue"
      valueScale={{ type: 'linear', valueFormat: 'c' }}
      indexScale={{ type: 'band', round: true }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: axisBottom,
          legendPosition: 'middle',
          legendOffset: 32
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: axisLeft,
          legendPosition: 'middle',
          legendOffset: -40
      }}
      role="application"
      ariaLabel="Nivo bar chart demo"
    />
  );
}
