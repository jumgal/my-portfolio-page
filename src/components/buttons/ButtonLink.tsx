import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

interface IButtonLink {
  to: string;
  variant: "text" | "contained" | "outlined";
  color?:
    | "primary"
    | "inherit"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  children: React.ReactNode;
}

function ButtonLink({ to, children, variant, color = "primary" }: IButtonLink) {
  return (
    <RouterLink to={to}>
      <Button
        sx={{
          color: "#fff",
          "&:hover": {
            color: "#4ee1a0",
          },
          borderBottom: '0.2rem solid #4ee1a0'
        }}
        variant={variant}
        color={color}
        size="large"
      >
        {children}
      </Button>
    </RouterLink>
  );
}

export default ButtonLink;
