"use client"
import { DotGrid } from "@paper-design/shaders-react"
import type React from "react"

type DotGridShaderProps = React.ComponentProps<typeof DotGrid>

export default function DotGridShader(props: DotGridShaderProps) {
  return (
    <DotGrid
      colorFill="#7a7a7a"
      colorStroke="#000000"
      colorBack="#000000"
      size={1.3}
      gapY={10}
      gapX={10}
      strokeWidth={0.5}
      sizeRange={0.1}
      opacityRange={0.9}
      shape="circle"
      {...props}
      style={{
        backgroundColor: "#000000",
        width: "100%",
        height: "100%",
        ...(props?.style || {}),
      }}
    />
  )
}
