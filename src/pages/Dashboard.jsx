import React, { useEffect, useState } from "react"
import { fetchFNG, fetchRemoteOKJobs, aggregateJobs } from "../api/client"
import FearLineChart from "../components/FearLineChart"
import JobBarChart from "../components/JobBarChart"
import EscapeGauge from "../components/EscapeGauge"

export default function Dashboard() {
  const [fng, setFng] = useState([])
  const [agg, setAgg] = useState({ byDate: {}, byCountry: {} })

  useEffect(() => {
    async function load() {
      const [fngData, jobData] = await Promise.all([
        fetchFNG(),
        fetchRemoteOKJobs()
      ])
      setFng(fngData)
      setAgg(aggregateJobs(jobData))
    }
    load()
  }, [])

  return (
    <div className="min-h-screen px-6 py-6 text-white">
      <h1 className="text-4xl font-bold mb-2 text-white text-center">
        The Panic Pivot
      </h1>
      <p className="text-slate-300 mb-6 text-center">
        How crypto market fear correlates with global AI job hiring
      </p>

      {/* Top Row */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-8 panel p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2 text-white">
            Fear & Greed Index (0–100)
          </h2>
          <FearLineChart data={fng} />
        </div>

        <div className="col-span-4 panel p-4 rounded-xl flex flex-col justify-center">
          <EscapeGauge fng={fng} jobsAgg={agg.byDate} />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 panel p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2 text-white">
            AI Job Postings by Location (Top)
          </h2>
          <JobBarChart byCountry={agg.byCountry} />
        </div>

        <div className="col-span-4 panel p-4 rounded-xl justify-center">
          <h2 className="text-xl font-semibold mb-3 text-white text-center">
            Key Insight
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
            Periods of increased crypto market fear often coincide with sustained
            AI hiring across regions like Remote, the United States, and India.
            This suggests professionals pivot toward stable, future-oriented
            tech roles during financial uncertainty.
          </p>
        </div>
      </div>
    </div>
  )
}
