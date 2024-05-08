import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function GamesChartComponent() {
  const banks = [
    {
      name: "Audience Play Revenue",
      color: "#FB6D48",
    },
    {
      name: "Home Play Revenue",
      color: "#D37676",
    },
    {
      name: "Host Seat Revenue",
      color: "#FF004D",
    },
  ];
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  const data = [
    {
      name: "Jan",
      audiencePlayRevenue: "600",
      homePlayRevenuw: "700",
    },

    {
      name: "Feb",
      audiencePlayRevenue: "200",
      homePlayRevenuw: "500",
    },
    {
      name: "Mar",
      audiencePlayRevenue: "700",
      homePlayRevenuw: "850",
    },
    {
      name: "Apr",
      audiencePlayRevenue: "600",
      homePlayRevenuw: "200",
    },
    {
      name: "May",
      audiencePlayRevenue: "2000",
      homePlayRevenuw: "2000",
    },
    {
      name: "Jun",
      audiencePlayRevenue: "2000",
      homePlayRevenuw: "2000",
    },
    {
      name: "Jul",
      audiencePlayRevenue: "200",
      homePlayRevenuw: "1700",
    },
    {
      name: "Aug",
      audiencePlayRevenue: "300",
      homePlayRevenuw: "500",
    },
    {
      name: "Sept",
      audiencePlayRevenue: "2000",
      homePlayRevenuw: "2000",
    },
    {
      name: "Oct",
      audiencePlayRevenue: "600",
      homePlayRevenuw: "200",
    },
    {
      name: "Nov",
      audiencePlayRevenue: "700",
      homePlayRevenuw: "550",
    },
    {
      name: "Dec",
      audiencePlayRevenue: "700",
      homePlayRevenuw: "550",
    },
  ];
  return (
    <Head>
      <div className="header">
        <div className="selection">
          <div className="overhead">
            <h2>Earnings</h2>
            <p>Shows a snapshot of logs types on your system</p>
          </div>
          <div className="top">
            <div className="class">
              <div className="cors">
                <div className="line1"></div>
                <p>Earnings</p>
              </div>
              <div className="cors">
                <div className="line2"></div>
                <p>Expenses</p>
              </div>
              <HiOutlineDotsHorizontal size={20} />
            </div>
            <div className="games">
              <select>
                <option>2024</option>
              </select>
              <FaChevronDown style={{ color: "#667085" }} size={13} />
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: -20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              fontSize={14}
              fontWeight={500}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              fontSize={14}
              fontWeight={500}
            />
            {/* <Tooltip /> */}
            {/* <Legend /> */}

            <Bar
              dataKey="audiencePlayRevenue"
              barSize={10}
              fill="#4D2087"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="homePlayRevenuw"
              barSize={10}
              fill="#D2BAF2"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Head>
  );
}

export default GamesChartComponent;
const Head = styled.div`
  .top {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  }
  .class {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 10px;
  }
  .cors {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .line1 {
    background-color: #4d2087;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
  .line2 {
    background-color: #d2baf2;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
  .selection {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
  }
  .games {
    /* border: 1px solid #d0d5dd; */
    border: 1px solid purple;

    padding: 0px 10px 0px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 38px;
  }
  .games select {
    border: none;
    appearance: none;
    width: 100%;
    color: #667085;
    line-height: 24px;
    font-size: 14px;
    font-weight: 400;
    outline: none;
  }

  .header {
    background-color: white;
    margin: 20px;
    padding: 20px;
    /* height: 470px; */
  }
  .overhead {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .overhead p {
    color: #909090;
    letter-spacing: 2%;
    line-height: 19px;
    font-size: 14px;
  }
  .overhead h2 {
    color: #090814;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }
`;
