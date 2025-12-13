export default function EscapeGauge({ fng }) {
  if (!fng.length) return null

  const latest = fng[fng.length - 1]?.value || 0

  // Simple interpretation logic
  const pressure =
    latest < 30 ? 80 :
    latest < 50 ? 60 :
    latest < 70 ? 40 :
    20

  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-xl font-semibold mb-2 text-white text-center">
        Escape Pressure
      </h2>

      <div className="text-5xl font-bold text-violet-400 mb-2 text-center">
        {pressure}%
      </div>

      <p className="text-slate-300 text-sm leading-relaxed mx-4 text-center">
        Higher score indicates increased crypto market fear combined with
        sustained AI hiring - signaling stronger incentives for career pivots.
      </p>
    </div>
  )
}
