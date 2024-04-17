import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ButtonLink from "../buttons/ButtonLink";

type Props = {};

export default function HeroComponent({}: Props) {
  return (
    <Grid
      container
      direction={{ xs: "column", md: "row" }}
      height={{ xs: "40vh", md: "50vh" }}
      sx={{ borderBottom: "1px solid #fff", paddingX: '1rem' }}
    >
      <Grid
        container
        item
        xs
        md={7}
        direction="column"
        justifyContent="space-evenly"
        alignItems={{ xs: "center", md: "start" }}
        sx={{ marginTop: { xs: "1.5rem" } }}
      >
        <Grid item>
          <Typography
            sx={{ typography: { md: "h4", xs: "h6" }, marginBottom: "2rem" }}
          >
            Nice to meet you! <br />
            I'm{" "}
            <span style={{ borderBottom: "0.2rem solid #4ee1a0" }}>
              Jumgal Arymbaev.
            </span>
          </Typography>
        </Grid>
        <Grid item>
          <Box
            sx={{
              typography: { xs: "body1", md: "h6" },
              marginBottom: "1.5rem",
            }}
          >
            Full Stack Developer with 5 plus years of expertise in JavaScript,
            TypeScript, Python, Java, Spring Boot, Devops, SQL, React, Redux,
            CSS, and HTML.
          </Box>
        </Grid>
        <Grid item sx={{ marginBottom: "1rem" }}>
          <ButtonLink to="/contact" variant="text">
            CONTACT ME
          </ButtonLink>
        </Grid>
      </Grid>
      <Grid
        item
        xs
        md={5}
        sx={{
          display: { xs: "none", md: "block" },
          backgroundImage: {
            xs: `url(./images/software-developer.jpg)`,
          },
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          
        }}
      ></Grid>
    </Grid>
  );
}
