import React from "react";
import {
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";

interface FlowNode {
  id: string;
  label: string;
  x: number;
  y: number;
  color?: string;
}

interface FlowEdge {
  from: string;
  to: string;
}

interface DiagramFlowProps {
  nodes: FlowNode[];
  edges: FlowEdge[];
  startFrame?: number;
}

export const DiagramFlow: React.FC<DiagramFlowProps> = ({
  nodes,
  edges,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 计算节点位置
  const getNodePosition = (nodeId: string) => {
    const node = nodes.find((n) => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <svg
      viewBox="0 0 1200 800"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {/* 渲染连接线 */}
      {edges.map((edge, index) => {
        const edgeStartFrame = startFrame + nodes.length * 15 + index * 10;
        const progress = spring({
          frame: frame - edgeStartFrame,
          fps,
          config: {
            damping: 100,
            stiffness: 200,
          },
        });

        const from = getNodePosition(edge.from);
        const to = getNodePosition(edge.to);

        const pathLength = Math.sqrt(
          Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2)
        );

        const strokeDashoffset = interpolate(
          progress,
          [0, 1],
          [pathLength, 0]
        );

        return (
          <g key={`edge-${index}`}>
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#6366f1"
              strokeWidth="3"
              strokeDasharray={pathLength}
              strokeDashoffset={strokeDashoffset}
              markerEnd="url(#arrowhead)"
            />
          </g>
        );
      })}

      {/* 箭头标记 */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#6366f1" />
        </marker>
      </defs>

      {/* 渲染节点 */}
      {nodes.map((node, index) => {
        const nodeStartFrame = startFrame + index * 15;
        const progress = spring({
          frame: frame - nodeStartFrame,
          fps,
          config: {
            damping: 100,
            stiffness: 200,
          },
        });

        const scale = interpolate(progress, [0, 1], [0, 1]);
        const opacity = interpolate(progress, [0, 1], [0, 1]);

        return (
          <g
            key={node.id}
            transform={`translate(${node.x}, ${node.y}) scale(${scale})`}
            opacity={opacity}
          >
            {/* 节点背景 */}
            <rect
              x={-80}
              y={-35}
              width={160}
              height={70}
              rx={12}
              fill={node.color || "#6366f1"}
              filter="drop-shadow(0 4px 12px rgba(0,0,0,0.2))"
            />

            {/* 节点文字 */}
            <text
              x={0}
              y={5}
              textAnchor="middle"
              fill="white"
              fontSize={20}
              fontWeight={600}
              fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
            >
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
