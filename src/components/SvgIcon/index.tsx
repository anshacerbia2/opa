import { forwardRef } from "react";
import type { ISvgProps } from "../../models/siedbar.model";

const SvgIcon = forwardRef<SVGPathElement, ISvgProps>(
  (
    { className = "", viewBox = "0 0 24 24", fill = "none", paths = [] },
    ref
  ) => {
    return (
      <svg className={className} viewBox={viewBox} fill={fill}>
        {paths.map((path, index) => {
          const { className, data, stroke, strokeLinecap, strokeLinejoin } =
            path;
          return (
            <path
              key={`path-index-${index}`}
              ref={ref}
              className={className}
              d={data}
              stroke={stroke}
              strokeLinecap={strokeLinecap || "butt"}
              strokeLinejoin={strokeLinejoin || "miter"}
            />
          );
        })}
      </svg>
    );
  }
);

export default SvgIcon;
