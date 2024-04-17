import { ReactNode } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export type IProject = {
  id: number;
  label: string;
  imgPath: string;
  title: string;
  techStack: string[];
};

type Props = {
  projects: IProject[];
};

const MyProjects = ({ projects }: Props): ReactNode => {
  return (
    <Grid
      container
      rowSpacing={{ xs: 4, md: 6 }}
      columnSpacing={{ md: 4, lg: 6 }}
    >
      {projects?.length ? (
        projects.map((project) => (
          <Grid item xs={12} md={6} key={project.id}>
            <img
              width="100%"
              height="auto"
              src={project.imgPath}
              alt={project.title}
            />
            <Typography variant="h6">{project.title}</Typography>
            <Stack
              direction="row"
              spacing={2}
            >
              {project.techStack.length &&
                project.techStack.map((tech, i) => {
                  return (
                    <Typography key={i} variant="body1">
                      {tech.toUpperCase()}
                    </Typography>
                  );
                })}
            </Stack>
          </Grid>
        ))
      ) : (
        <h5>I am currently working on Projects ...</h5>
      )}
    </Grid>
  );
};

export default MyProjects;
