import React from "react";
import { Divider, Typography } from "@mui/material";
import style from "./Footer.module.css";
const Footer = () => (
  <footer className={style.footer}>
    <Divider />
    <Typography
      variant={"body2"}
      color={"lightslategrey"}
      textAlign={"center"}
      mt={2}
    >
      &copy; copyright 22-23 APSIT. Made by APSIT Students for the APSIT
      Students.
    </Typography>
  </footer>
);

export default Footer;
