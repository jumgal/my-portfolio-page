import Box from "@mui/material/Box";
import ButtonLink from "../../components/buttons/ButtonLink";

type Props = {};

function ContactPage({}: Props) {
  return (
    <>
      <ButtonLink to="/" variant="text">
        Home Page
      </ButtonLink>
      <Box
        sx={{
          typography: { xs: "h6", md: "h3" },
          marginBottom: "1.5rem",
          display: {xs: 'none', md: 'flex'},
          justifyContent: 'center',
        }}
      >
        Contact Page
      </Box>
    </>
  );
}

export default ContactPage;
