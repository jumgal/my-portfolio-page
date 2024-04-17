import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export default function AlertComponent() {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Thank you for contacting me. I have receieved your email. Talk to you soon ...
    </Alert>
  );
}
