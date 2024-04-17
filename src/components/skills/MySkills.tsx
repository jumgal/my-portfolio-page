import Grid from "@mui/material/Grid";
import { ReactNode } from "react";
import DemoPaper from "../ui/Paper";
import Box from "@mui/material/Box";

interface ISkill {
  skill: string;
  yearsOfExperience: number;
}

interface Props {
  skills: ISkill[];
}

const MySkills = ({ skills }: Props): ReactNode => {
  return (
    <Grid
      container
      rowSpacing={{ xs: 2, md: 4 }}
      columnSpacing={{ sm: 2, md: 3 }}
    >
      {skills.length > 0 &&
        skills?.map((s, i) => {
          return (
            <Grid key={i} item xs={12} sm={6} md={4} sx={{ marginBottom: { xs: "1.5rem" } }}>
              <DemoPaper square>
                <Box
                  sx={{
                    typography: { xs: "h6", md: "h5" },
                    marginBottom: "0.25rem",
                  }}
                >
                  {s.skill}
                </Box>
                <Box sx={{ typography: { xs: "body2", md: "body1" } }}>
                  {s.yearsOfExperience} Years Experience
                </Box>
              </DemoPaper>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default MySkills;
