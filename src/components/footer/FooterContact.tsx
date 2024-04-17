import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ContactForm from "../contact/ContactForm";

type Props = {};

function FooterContact({}: Props) {
  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 2, md: 4 }} sx={{padding: '1rem', marginBottom: '2rem'}}>
      <Grid item xs={12} md={6}>
        <Stack
          spacing={2}
          direction="column"
          sx={{ height: "100%", paddingTop: {xs: '1rem', md: '3rem'} }}
        >
          <Box
            sx={{
              typography: { xs: "h4", md: "h2" },
            }}
          >
            Contact
          </Box>
          <Box
            sx={{
              typography: { xs: "body1", md: "subtitle1" },
              paddingRight: "1rem",
            }}
          >
            I would love to hear about your company, about the position and how
            I can contribute. Please fill in the form, and I will get back to
            you as soon as possible.
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <ContactForm />
      </Grid>
    </Grid>
  );
}

export default FooterContact;
