import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import { Link as RouterLink } from "react-router-dom";
import LinkedinIcon from "../svg-icons/LinkedinIcon";
import GithubIcon from "../svg-icons/GithubIcon";
import TwitterIcon from "../svg-icons/TwitterIcon";
import FrontendMentorIcon from "../svg-icons/FrontendMentorIcon";

type Props = {};

export default function CustomNavbar({}: Props) {
  return (
    <Stack
      component="header"
      direction={{ xs: "column", md: "row" }}
      justifyContent={{md: "space-between" }}
      alignItems={{ xs: "center" }}
      spacing={{ xs: 2 }}
      sx={{ height: "70px", marginBottom: "1rem", padding: "0.5rem 1rem"}}
    >
      <Box sx={{ typography: "h5" }}>
        <RouterLink style={{ textDecoration: "none", color: "#fff" }} to="/">
          JumgalArymbaev
        </RouterLink>
      </Box>
      <Box component="nav" sx={{paddingLeft: '1.25rem'}}>
        <SvgIcon sx={{ marginRight: "2rem" }}>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.github.com/jumgal"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </SvgIcon>
        <SvgIcon sx={{ marginRight: "2rem" }}>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.frontendmentor.io/profile/jumgal"
            target="_blank"
          >
            <FrontendMentorIcon />
          </a>
        </SvgIcon>
        <SvgIcon sx={{ marginRight: "2rem" }}>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/jumgal"
            target="_blank"
          >
            <LinkedinIcon />
          </a>
        </SvgIcon>
        <SvgIcon sx={{ marginRight: "2rem" }}>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.twitter.com/jumgal9"
            target="_blank"
          >
            <TwitterIcon />
          </a>
        </SvgIcon>
      </Box>
    </Stack>
  );
}
