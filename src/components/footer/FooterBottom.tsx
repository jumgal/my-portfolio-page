import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import { Link as RouterLink } from "react-router-dom";
import LinkedinIcon from "../svg-icons/LinkedinIcon";
import TwitterIcon from "../svg-icons/TwitterIcon";
import FrontendMentorIcon from "../svg-icons/FrontendMentorIcon";
import GithubIcon from "../svg-icons/GithubIcon";

type Props = {};

export default function FooterBottom({}: Props) {
  return (
    <Stack
      component="footer"
      direction={{ xs: "column", md: "row" }}
      justifyContent={{ md: "space-between" }}
      alignItems={{ xs: "center" }}
      spacing={{ xs: 3, md: 4 }}
      sx={{
        padding: "2rem 1rem",
        borderTop:  '1px solid #fff'
      }}
    >
      <Box sx={{ typography: "h5" }}>
        <RouterLink style={{ textDecoration: "none", color: "#fff" }} to="/">
          JumgalArymbaev
        </RouterLink>
      </Box>
      <Box component="nav" sx={{paddingLeft: '1rem'}}>
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
