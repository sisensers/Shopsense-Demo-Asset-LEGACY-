import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import reportsLineChartData from "layouts/dashboards/analytics/data/reportsLineChartData";

// Sisense
import { ExecuteQuery } from "@sisense/sdk-ui";
import * as DM from "sisense/Schemas/ecommerce-master";
import { Data, measures, filters } from "@sisense/sdk-data";
import MDBox from "components/MDBox";
import MDProgress from "components/MDProgress";

export default function Sentiment(): JSX.Element {
  const { tasks } = reportsLineChartData;

  return (
    <MDBox>
      <MDBox>
        <ReportsLineChart
          color="warning"
          title="daily sales"
          description={
            <>
              (<strong>-52%</strong>) decrease in average review.
            </>
          }
          date="updated 35 min ago"
          chart={tasks}
        />
      </MDBox>
      <MDBox>
        <MDProgress variant="gradient" value={30} color="error" />
      </MDBox>
    </MDBox>
  );
}
