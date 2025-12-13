import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

export default function JobBarChart({ byCountry }) {
  const data = Object.entries(byCountry)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, value]) => ({ name, value }))

  return (
    <div className="w-full h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
          <XAxis type="number" stroke="#94a3b8" />
          <YAxis
            type="category"
            dataKey="name"
            stroke="#e5e7eb"
            width={110}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid #1e293b",
              color: "#e5e7eb"
            }}
          />
          <Bar dataKey="value" fill="#8b5cf6" radius={[0, 6, 6, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
