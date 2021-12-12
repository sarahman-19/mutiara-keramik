import AppBarLogin from "../../../../components/molecules/AppBarLogin";
import { Box } from "@mui/material";
import TeksturList from "../../../template/TeksturList";

function Home() {
  return (
    <div className="Home">
      <AppBarLogin link="/masuk" title="Masuk" />
      <Box sx={{ display: "flex", justifyContent: "center", mt: {xs: 1, md: 2}}}>
        <TeksturList />
      </Box>
    </div>
  );
}

export default Home;
