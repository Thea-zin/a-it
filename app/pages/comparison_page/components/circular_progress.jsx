export default function CircularProgress() {
  const percent = 400 - (220 * 85) / 100;
  return (
    <div className="flex place-items-center">
      <div className="relative w-16 h-16">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-[#EEEBEB] stroke-current"
            strokeWidth="5"
            cx="50"
            cy="50"
            r="35"
            fill="transparent"
          ></circle>

          <circle
            className="text-cyan progress-ring__circle stroke-current"
            strokeWidth="5"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="35"
            fill="transparent"
            strokeDashoffset={percent}
          ></circle>

          <text
            x="50"
            y="50"
            textAnchor="middle"
            alignmentBaseline="middle"
            className="text-2xl"
          >
            3.5
          </text>
        </svg>
      </div>
      <p className="text-xs">(20 ratings)</p>
    </div>
  );
}
