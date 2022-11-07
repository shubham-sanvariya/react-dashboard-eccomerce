import "./chart.css";
import { LineChart,
    Line,
    XAxis,
    CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';


export default function Chart({title,data,dataKey, grid}) {
      return (
    
        <div className="chart">
          <h3 className="charTitle">{title}</h3>  
          <ResponsiveContainer width="100%" aspect={4 / 1}>
              <LineChart data={data}
                //   width={500}
                //   height={300}
                //   data={data}
                //   margin={{
                //       top: 5,
                //       right: 30,
                //       left: 20,
                //       bottom: 5, 
                //   }}
              >
                  <XAxis dataKey="name" stroke="#5559bd" />
                  <Line type="monotone" dataKey={dataKey}stroke="#82ca9d" />
                  {/* <YAxis /> */}
                  <Tooltip />
                  {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
              </LineChart>
          </ResponsiveContainer>
          </div>
     
  )
}
