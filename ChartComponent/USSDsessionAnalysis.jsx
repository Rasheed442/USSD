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
function USSDsessionAnalysis() {
  const banks = [
    {
      name: "Total USSD",
      color: "#459C61",
    },
    {
      name: "Push",
      color: "#5E5ADB",
    },
    {
      name: "Pull",
      color: "#D94040",
    },
  ];
  //   let data = [];
  // if (userDetails?.analyticByGameChannels && Array.isArray(userDetails?.analyticByGameChannels )) {
  //   data = userDetails?.analyticByGameChannels.map((s) => ({
  //         name: "Jan",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   }));
  // }
  const data = [
    {
      name: "Jan",
      uv: 7000,
      pv: 5400,
      amt: 3400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 6120,
      pv: 4900,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 4390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 6300,
      amt: 2100,
    },
  ];
  return (
    <Head>
      <div className="header">
        <div className="banks">
          {banks?.map((b) => {
            return (
              <div className="content">
                <div
                  className="line"
                  style={{ backgroundColor: b?.color }}
                ></div>
                <p>{b.name}</p>
              </div>
            );
          })}
        </div>
        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5,
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

            <Bar
              dataKey="pv"
              fill="#459C61"
              barSize={10}
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="uv"
              barSize={10}
              fill="#5E5ADB"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="amt"
              barSize={10}
              fill="#D94040"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Head>
  );
}

export default USSDsessionAnalysis;
const Head = styled.div`
  .content {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .content p {
    color: #464f60;
    line-height: 19px;
    font-size: 13px;
    font-weight: 400;
  }
  .line {
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
  /* .header {
    background-color: white;
    margin: 20px;
    padding: 20px;
  } */
  .overhea {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .overhea p {
    color: #909090;
    letter-spacing: 2%;
    line-height: 19px;
    font-size: 14px;
  }
  .overhea h2 {
    color: #090814;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }
  .banks {
    display: flex;
    gap: 30px;
    padding: 0px 0px 30px 0px;
  }
`;
