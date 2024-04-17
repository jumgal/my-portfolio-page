import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import { Box, Container} from "@mui/material";
import CustomNavbar from "../header/CustomNavbar";
import Footer from "../footer/Footer";


function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <Container>
      {isLoading && <Loader />}

      <CustomNavbar />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
}

export default AppLayout;
