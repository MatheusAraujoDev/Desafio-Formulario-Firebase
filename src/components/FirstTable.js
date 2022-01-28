import React from 'react';
import { ResponsiveBar } from 'nivo/lib/components/charts/bar';

export default function FirstTable({data}) {
  return (
    <ResponsiveBar
      data={data}
    />
  );
}
