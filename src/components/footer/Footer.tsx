import Stack from "@mui/material/Stack";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

type Props = {};

function Footer({}: Props) {
  return (
    <Stack sx={{ marginY: "3rem", color: "#fff", backgroundColor: 'primary.main', padding: '2rem 1rem' }}>
      <FooterContact />
      <FooterBottom />
    </Stack>
  );
}

export default Footer;
