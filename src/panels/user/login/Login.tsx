import {
  Button,
  FormGroup,
  Grid,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack
} from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import { logo } from "assets/images/ImageLink";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <Grid container sx={{ minHeight: "100vh", bgcolor: "other.bgPaperElevation" }}>
      {/* Left Side - Logo */}
      <Grid
        item
        md={6}
        sm={12}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "text.primary"
        }}
      >
        <img src={logo} width={"100%"} alt="FTPO Logo" />
      </Grid>

      {/* Right side */}
      <Grid item sm={12} md={6} py={5}>
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          height={"calc(100% - 100px)"}
          width={"100%"}
          sx={{ pt: { md: 10 } }}
        >
          <Box
            sx={{
              maxWidth: "540px",
              padding: "48px",
              gap: "48px",
              bgcolor: "common.white",
              borderRadius: "12px"
            }}
          >
            <Box textAlign={"center"} mb={3}>
              <Typography variant="h3" mb={0} color={"text.primary"}>
                Welcome
              </Typography>
              <Typography variant="body1" color={"text.secondary"}>
                Log in to your account & get started
              </Typography>
            </Box>

            <Box component={"span"}>
              <TextField
                id="outlined-multiline-flexible"
                label="Email Address"
                multiline
                fullWidth
                maxRows={4}
                type="email"
              />

              <FormControl variant="outlined" sx={{ my: 2 }} fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {/* <VisibilityOff /> */}
                        {/* <Visibility /> */}
                        {showPassword ? "off" : "on"}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mb={4}
              >
                <FormGroup sx={{ color: "text.secondary" }}>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                </FormGroup>

                <Link component={RouterLink} to="/forgot-password" underline="none">
                  Forgot Password?
                </Link>
              </Stack>

              <Button variant="contained" disableElevation>
                Log In
              </Button>
            </Box>
          </Box>

          <Box textAlign={"center"} mt={4}>
            <Typography variant="body2">@ 2023 FTPO - All Rights Reserved</Typography>
            <Typography variant="body2" color={"other.primaryDark"}>
              Terms of services & privacy policy
            </Typography>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Login;
