import Box from "@mui/material/Box";
import HeroComponent from "../../components/hero/HeroComponent";
import MySkills from "../../components/skills/MySkills";
import MyProjects from "../../components/projects/MyProjects.tsx";
import { mySkills } from "../../data/my-skills.ts";
import { myProjects } from "../../data/my-projects.ts";
import ButtonLink from "../../components/buttons/ButtonLink.tsx";
import Stack from "@mui/material/Stack";

const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <Box component="section" id="skills-section" sx={{ marginY: "1.5rem" }}>
        <MySkills skills={mySkills} />
      </Box>
      <Box component="section" id="projects-section" sx={{paddingX: '1rem'}}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ borderTop: "1px solid #fff", paddingTop: '1.5rem', marginBottom: '2rem'}}
        >
          <Box
            sx={{
              typography: { xs: "h5", md: "h3" },
            }}
          >
            Projects
          </Box>
          <ButtonLink to="/contact" variant="text">
            CONTACT ME
          </ButtonLink>
        </Stack>
        <MyProjects projects={myProjects} />
      </Box>
    </>
  );
};

export default HomePage;
