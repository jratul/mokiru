import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type ChartSeries = {
  key: string;
  name: string;
  color?: string;
};

type ScatterPoint = { x: number; y: number; label?: string };

type ChartConfig =
  | {
      type: "bar" | "line" | "area";
      title?: string;
      height?: number;
      data: Record<string, unknown>[];
      xKey: string;
      xLabel?: string;
      yLabel?: string;
      series: ChartSeries[];
    }
  | {
      type: "scatter";
      title?: string;
      height?: number;
      groups: { name: string; color?: string; data: ScatterPoint[] }[];
      xLabel?: string;
      yLabel?: string;
    };

const DEFAULT_COLORS = [
  "#6366f1", // indigo
  "#f59e0b", // amber
  "#10b981", // emerald
  "#ef4444", // red
  "#8b5cf6", // violet
  "#3b82f6", // blue
];

const AXIS_STYLE = {
  style: { fontSize: 12, fill: "var(--color-muted-foreground)" },
};

const TOOLTIP_STYLE = {
  contentStyle: {
    background: "var(--color-card)",
    border: "1px solid var(--color-border)",
    borderRadius: 8,
    color: "var(--color-foreground)",
    fontSize: 13,
  },
  cursor: { fill: "var(--color-muted)", opacity: 0.4 },
};

export function ChartBlock({ config }: { config: ChartConfig }) {
  const h = config.height ?? 280;

  return (
    <div className="my-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4">
      {config.title && (
        <p className="mb-3 text-center text-sm font-semibold text-[var(--color-muted-foreground)]">
          {config.title}
        </p>
      )}

      <ResponsiveContainer width="100%" height={h}>
        {config.type === "bar" ? (
          <BarChart data={config.data} margin={{ top: 4, right: 16, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis
              dataKey={config.xKey}
              label={
                config.xLabel
                  ? { value: config.xLabel, position: "insideBottom", offset: -12, ...AXIS_STYLE }
                  : undefined
              }
              tick={AXIS_STYLE.style}
            />
            <YAxis
              label={
                config.yLabel
                  ? { value: config.yLabel, angle: -90, position: "insideLeft", offset: 12, ...AXIS_STYLE }
                  : undefined
              }
              tick={AXIS_STYLE.style}
            />
            <Tooltip {...TOOLTIP_STYLE} />
            {config.series.length > 1 && <Legend wrapperStyle={{ fontSize: 12 }} />}
            {config.series.map((s, i) => (
              <Bar
                key={s.key}
                dataKey={s.key}
                name={s.name}
                fill={s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]}
                radius={[3, 3, 0, 0]}
              />
            ))}
          </BarChart>
        ) : config.type === "line" ? (
          <LineChart data={config.data} margin={{ top: 4, right: 16, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis
              dataKey={config.xKey}
              label={
                config.xLabel
                  ? { value: config.xLabel, position: "insideBottom", offset: -12, ...AXIS_STYLE }
                  : undefined
              }
              tick={AXIS_STYLE.style}
            />
            <YAxis
              label={
                config.yLabel
                  ? { value: config.yLabel, angle: -90, position: "insideLeft", offset: 12, ...AXIS_STYLE }
                  : undefined
              }
              tick={AXIS_STYLE.style}
            />
            <Tooltip {...TOOLTIP_STYLE} />
            {config.series.length > 1 && <Legend wrapperStyle={{ fontSize: 12 }} />}
            {config.series.map((s, i) => (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.name}
                stroke={s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            ))}
          </LineChart>
        ) : config.type === "area" ? (
          <AreaChart data={config.data} margin={{ top: 4, right: 16, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis
              dataKey={config.xKey}
              label={
                config.xLabel
                  ? { value: config.xLabel, position: "insideBottom", offset: -12, ...AXIS_STYLE }
                  : undefined
              }
              tick={AXIS_STYLE.style}
            />
            <YAxis
              label={
                config.yLabel
                  ? { value: config.yLabel, angle: -90, position: "insideLeft", offset: 12, ...AXIS_STYLE }
                  : undefined
              }
              tick={AXIS_STYLE.style}
            />
            <Tooltip {...TOOLTIP_STYLE} />
            {config.series.length > 1 && <Legend wrapperStyle={{ fontSize: 12 }} />}
            {config.series.map((s, i) => (
              <Area
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.name}
                stroke={s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]}
                fill={s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]}
                fillOpacity={0.18}
                strokeWidth={2}
              />
            ))}
          </AreaChart>
        ) : config.type === "scatter" ? (
          <ScatterChart margin={{ top: 4, right: 16, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis
              dataKey="x"
              type="number"
              name={config.xLabel}
              label={
                config.xLabel
                  ? { value: config.xLabel, position: "insideBottom", offset: -12, ...AXIS_STYLE }
                  : undefined
              }
              tick={AXIS_STYLE.style}
            />
            <YAxis
              dataKey="y"
              type="number"
              name={config.yLabel}
              label={
                config.yLabel
                  ? { value: config.yLabel, angle: -90, position: "insideLeft", offset: 12, ...AXIS_STYLE }
                  : undefined
              }
              tick={AXIS_STYLE.style}
            />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              contentStyle={TOOLTIP_STYLE.contentStyle}
            />
            {config.groups.length > 1 && <Legend wrapperStyle={{ fontSize: 12 }} />}
            {config.groups.map((g, i) => (
              <Scatter
                key={g.name}
                name={g.name}
                data={g.data}
                fill={g.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]}
                opacity={0.8}
              />
            ))}
          </ScatterChart>
        ) : (
          <></>
        )}
      </ResponsiveContainer>
    </div>
  );
}
