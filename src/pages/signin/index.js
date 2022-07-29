import {
  Box,
  Button,
  Card,
  Container,
  createTheme,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', "Roboto", "Arial", "sans-serif"].join(","),
  },
});

export default function IndexPage() {
  //Def
  // const usernameRef = useRef("");
  const moodleIdRef = useRef("");
  const passwordRef = useRef("");

  //states
  // const [usernameError, setUsernameError] = useState(false);
  const [moodleError, setMoodleError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    //Take values from inputs
    // const enteredUsername = usernameRef.current.value;
    const enteredMoodleId = moodleIdRef.current.value;
    const enteredPassword = passwordRef.current.value;

    //Show Error
    // !enteredUsername ? setUsernameError(true) : setUsernameError(false);
    !enteredMoodleId || isNaN(enteredMoodleId) || enteredMoodleId.length !== 8
      ? setMoodleError(true)
      : setMoodleError(false);
    !enteredPassword || enteredPassword.length < 8
      ? setPasswordError(true)
      : setPasswordError(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container height="100vh">
        <Box textAlign={"center"}>
          <Image
            src={"/community.svg"}
            alt="Community Logo"
            height="60px"
            width="60px"
          />
          <Typography variant={"h6"} color="black" fontWeight={600}>
            APSIT Community
          </Typography>
        </Box>
        <Typography
          m={2}
          variant={"h3"}
          textAlign={"center"}
          color="black"
          fontWeight={700}
        >
          Welcome back, we missed you!
        </Typography>
        <form id="signIn_form">
          <Card
            sx={{
              margin: "2rem auto",
              padding: "2rem 2rem",
              width: "max-content",
            }}
          >
            <Typography
              mb={2}
              align={"center"}
              variant={"h5"}
              color="black"
              fontWeight={500}
            >
              Please login to continue
            </Typography>
            <Stack
              direction="column"
              spacing={2}
              height={"inherit"}
              justifyContent={"center"}
            >
              <Image
                src={"/community.svg"}
                alt="Community Logo"
                height="60px"
                width="60px"
              />
              <TextField
                id="user_moodleId"
                label="Your Moodle ID"
                name="moodleId"
                inputRef={moodleIdRef}
                error={moodleError}
                helperText={
                  moodleError ? "Please enter a valid moodle id." : ""
                }
              />
              <TextField
                id="user_password"
                label="Password"
                type="password"
                name="password"
                inputRef={passwordRef}
                error={passwordError}
                helperText={passwordError ? "Please enter password." : ""}
              />
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={submitHandler}
              >
                Login
              </Button>
              <Typography
                variant={"caption"}
                color="lightslategrey"
                textAlign={"center"}
              >
                New to APSIT community?{" "}
                <Link href="/newaccount">
                  <a
                    style={{
                      textDecoration: "underline",
                    }}
                  >
                    Click here
                  </a>
                </Link>
              </Typography>
            </Stack>
          </Card>
        </form>
      </Container>
    </ThemeProvider>
  );
}
