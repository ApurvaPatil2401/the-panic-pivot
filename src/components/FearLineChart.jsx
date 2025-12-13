import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

export default function FearLineChart({ data }) {
  return (
    <div className="w-full h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            stroke="#94a3b8"
            tick={{ fontSize: 11 }}
          />
          <YAxis
            domain={[0, 100]}
            stroke="#94a3b8"
            tick={{ fontSize: 11 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid #1e293b",
              color: "#e5e7eb"
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8b5cf6"
            strokeWidth={2.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
