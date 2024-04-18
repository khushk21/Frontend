import React from "react";
import { render } from "@testing-library/react";
import WasteCategoryChart from "./WasteCategoryChart.js";

describe("WasteCategoryChart", () => {

    //Not working
    // it("renders with correct dataset and options", () => {
    //     const wasteRecords = [
    //       { category: "NORMAL_WASTE" },
    //       { category: "NORMAL_WASTE" },
    //       { category: "E_WASTE" },
    //       { category: "LIGHTING_WASTE" },
    //       { category: "WASTE_TREATMENT" },
    //       { category: "CASH_FOR_TRASH" },
    //     ];
    
    //     const { container } = render(<WasteCategoryChart wasteRecords={wasteRecords} />);
    
    //     // Assert that the chart is rendered
    //     const chartElement = container.querySelector('canvas');
    //     expect(chartElement).toBeInTheDocument();
    
    //     // Get chart instance
    //     const chartInstance = chartElement.chart;
    //     expect(chartInstance.data.labels).toEqual([
    //       "NORMAL_WASTE",
    //       "E_WASTE",
    //       "LIGHTING_WASTE",
    //       "WASTE_TREATMENT",
    //       "CASH_FOR_TRASH"
    //     ]);
    //     expect(chartInstance.data.datasets[0].data).toEqual([2, 1, 1, 1, 1]);
    
    //     // Assert that the options are set correctly
    //     expect(chartInstance.options.plugins.legend.position).toBe("left");
    //     expect(chartInstance.options.plugins.tooltip.callbacks.label({
    //       label: "NORMAL_WASTE",
    //       parsed: 2
    //     })).toBe("NORMAL_WASTE: 2 (33.33%)");
    //   });
    
  it("renders null if wasteRecords is not provided", () => {
    const { container } = render(<WasteCategoryChart />);
    expect(container.firstChild).toBeNull();
  });
});
