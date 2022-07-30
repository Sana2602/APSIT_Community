import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <Grid container height={"80vh"} mx={"auto"}>
        <Grid item xs={6} alignSelf={"center"}>
          <Box p={"2rem"}>
            <Typography variant={"h1"} fontWeight={500}>
              Hello,
              <br /> APSITian
            </Typography>
            <Typography variant={"subtitle1"} mt={4}>
              To continue, Please
            </Typography>
            <Stack direction={"row"} mt={4} columnGap={3} alignItems={"center"}>
              <Button variant="contained">
                <Link href={"/signin"}>Sign In</Link>
              </Button>{" "}
              {"Or"}
              <Button variant="outlined">Create a new Account</Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6} alignSelf={"center"}>
          <Box textAlign={"center"}>
            <Image
              src={"/Home_Page_GIF.gif"}
              alt={"Home_Page_GIF"}
              width={"400"}
              height={"400"}
            />
          </Box>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}
