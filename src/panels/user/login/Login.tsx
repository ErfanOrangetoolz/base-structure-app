import { Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { logo } from "assets/images/ImageLink";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <Grid container sx={{ height: "calc(100vh - 16px)" }}>
      <Grid xs={6}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          bgcolor={"#2097C1"}
          sx={{ flex: 1, height: "100%" }}
        >
          <img src={logo} alt="logo" width={"100%"} />
        </Stack>
      </Grid>
      <Grid xs={6} sx={{ flex: 1, height: "100%" }}>
        <Stack sx={{ flex: 1, height: "100%" }} alignItems={"center"} justifyContent={"center"}>
          <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
            <TextField
              label="Email"
              type="text"
              value={userName}
              placeholder="Enter email"
              onChange={(e) => setUserName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              color="primary"
              onClick={handleLogin}
              fullWidth
            >
              Login
            </Button>
          </Container>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Login;
