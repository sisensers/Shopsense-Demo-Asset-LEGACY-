// HoverTooltip.tsx
import React from "react";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import MDTypography from "components/MDTypography";
import { styled } from "@mui/material/styles";

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
    background: "linear-gradient(to bottom, #EDF2F3, #F0F2F3)",
  },
});

interface HoverTooltipProps {
  tooltipContentadidasshoes: () => React.ReactNode;
  children: React.ReactElement; // Use React.ReactElement for children
}

const HoverTooltipAdidasShoes: React.FC<HoverTooltipProps> = ({
  children,
  tooltipContentadidasshoes,
}) => {
  const content = tooltipContentadidasshoes();

  return (
    <CustomWidthTooltip title={content} followCursor>
      {children}
    </CustomWidthTooltip>
  );
};

export default HoverTooltipAdidasShoes;
