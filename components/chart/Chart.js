import { useQuery, gql } from "@apollo/client";
import dynamic from "next/dynamic";
import styles from "../../styles/pages/Demo.module.sass";
// import Highcharts from "highcharts";
import puta from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Highcharts = dynamic(
  () => {
    return import("highcharts/highstock");
  },
  { ssr: false }
);

const GET_REVENUE = gql`
  query stripeData($filter: topProducts!) {
    stripeTotalRevenueAndProduct(
      from: "2020-09-01"
      to: "2021-04-30"
      groupBy: MONTH
      limit: $filter
    ) {
      chart {
        type
      }
      title {
        text
      }
      subTitle {
        text
      }
      xAxis {
        categories
      }
      yAxis {
        title
      }
      series {
        type
        name
        data
      }
    }
  }
`;

export const Chart = ({ filter }) => {
  const { loading, error, data } = useQuery(GET_REVENUE, {
    variables: { filter },
  });

  console.log(data);

  return (
    <div className={styles.chartContainer}>
      {!loading && (
        <HighchartsReact
          highcharts={Highcharts}
          options={data && data.stripeTotalRevenueAndProduct}
          constructorType={"stockChart"}
        />
      )}
    </div>
  );
};
