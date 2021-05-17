import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Container, Fab } from "../components";
import { gql, useQuery } from "@apollo/client";
import client from "../apollo-client";
import styles from "../styles/pages/Demo.module.sass";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Demo({ opts }) {
  const [options, setOptions] = useState(opts);
  const [onError, setOnError] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(3);

  const getData = useCallback(async (filter) => {
    try {
      const { data } = await client.query(
        {
          query: gql`
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
          `,
        },
        {
          variables: { filter },
        }
      );
      console.log(data);
      setOnError(false);
      setOptions(data);
    } catch (error) {
      setOnError(true);
      console.error(error);
    }
  }, []);

  return (
    <Container title="Radix Haven - Demo Charts">
      <main className={styles.main}>
        <h1>Charts Demo</h1>
        <div>
          <motion.button
            className={`${styles.btn} ${
              selectedFilter === 1 && styles.selected
            }`}
            onClick={() => {
              setSelectedFilter(1);
              getData("TOP_3");
            }}
          >
            TOP 3
          </motion.button>
          <motion.button
            className={`${styles.btn} ${
              selectedFilter === 2 && styles.selected
            }`}
            onClick={() => {
              setSelectedFilter(2);
              getData("TOP_5");
            }}
          >
            TOP 5
          </motion.button>
          <motion.button
            className={`${styles.btn} ${
              selectedFilter === 3 && styles.selected
            }`}
            onClick={() => {
              setSelectedFilter(3);
              getData("TOP_10");
            }}
          >
            TOP 10
          </motion.button>
        </div>
        <div className={styles.chartContainer}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options.data.stripeTotalRevenueAndProduct}
          />
        </div>
      </main>
    </Container>
  );
}

export async function getStaticProps() {
  const revenue = await client.query({
    query: gql`
      query {
        stripeTotalRevenueAndProduct(
          from: "2020-09-01"
          to: "2021-04-30"
          groupBy: MONTH
          limit: TOP_10
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
    `,
  });
  const users = await client.query({
    query: gql`
      query {
        stripeAllCustomerTable(perPage: 25, page: 1) {
          title
          subtitle
          helpinfo
          page
          perPage
          pages
          total
          docs {
            customer_id
            created
            name
            email
            phone
            country
            state
            city
            amount
            fee
            total_records
            currency
          }
        }
      }
    `,
  });

  return {
    props: {
      opts: {
        data: revenue.data,
        users: users.data,
      },
    },
  };
}
