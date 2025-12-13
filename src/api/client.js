// src/api/client.js

export async function fetchFNG() {
  const res = await fetch("https://api.alternative.me/fng/?limit=120")
  const json = await res.json()

  return json.data.map(d => ({
    date: new Date(d.timestamp * 1000).toLocaleDateString(),
    value: Number(d.value)
  }))
}

export async function fetchRemoteOKJobs() {
  const res = await fetch("https://remoteok.com/api")
  const json = await res.json()
  return json.filter(j => j.position && j.location)
}

export function aggregateJobs(jobs) {
  const byCountry = {}
  const byDate = {}

  jobs.forEach(job => {
    const location = job.location.toLowerCase()

    let key = "Other"

    if (location.includes("remote")) key = "Remote"
    else if (location.includes("india")) key = "India"
    else if (location.includes("united states") || location.includes("usa")) key = "United States"
    else if (location.includes("new york")) key = "New York"
    else if (location.includes("san francisco")) key = "San Francisco"

    byCountry[key] = (byCountry[key] || 0) + 1

    const date = new Date().toLocaleDateString()
    byDate[date] = (byDate[date] || 0) + 1
  })

  return { byCountry, byDate }
}
