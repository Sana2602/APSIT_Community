import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function IndexPage() {
  //Def
  const usernameRef = useRef("");
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

    console.log(enteredPassword, enteredMoodleId, enteredUsername);
  };

  return (
    <Grid container height="100vh">
      <Grid item xs={6}>
        <form id="signIn_form">
          <Typography m={2} variant={"h3"} color="black" fontWeight={900}>
            Welcome back,
          </Typography>
          <Typography ml={3} variant={"h5"} color="black" fontWeight={500}>
            Please login to continue
          </Typography>
          <Card
            sx={{
              margin: "8rem auto",
              padding: "2rem 2rem",
              width: "max-content",
            }}
          >
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
                helperText={moodleError ? "Please enter a valid moodleid." : ""}
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
            </Stack>
          </Card>
        </form>
      </Grid>
      <Grid item xs={6} bgcolor="primary.main">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Typography m={2} variant={"h3"} color="white" fontWeight={900}>
            New to APSIT community?
          </Typography>
          <Typography m={2} color="white">
            <Link href="/newaccount">
              <a
                style={{
                  fontStyle: "italic",
                  textDecoration: "underline",
                }}
              >
                Click here
              </a>
            </Link>
            {"  "}
            to create a New account
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
