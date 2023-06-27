import { Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import LogoLightText from "assets/icons/LogoLightText";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <>
      <Grid container sx={{ height: "100%" }}>
        <Grid xs={6}>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            bgcolor={"black"}
            sx={{ flex: 1, height: "100%" }}
          >
            <LogoLightText />
          </Stack>
        </Grid>
        <Grid xs={6}>
          <Stack alignItems={"center"} justifyContent={"center"} sx={{ flex: 1 }}>
            <Container maxWidth="sm">
              <Typography variant="h4" align="center" gutterBottom>
                Login
              </Typography>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
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
      {/* <Stack direction={"row"}>
        <Box bgcolor={"black"} sx={{ flex: 1 }}>
          asd
        </Box>
        <Box sx={{ flex: 1 }}>asd</Box>
      </Stack> */}
    </>
  );
};

export default Login;
