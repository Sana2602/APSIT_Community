import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./Header.module.css";
const Header = () => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    columnGap={2}
    bgcolor={"primary.main"}
    className={styles.header}
  >
    <Link href={"/"}>
      <a>
        <Image
          src={"/community.svg"}
          alt="Community Logo"
          height="60px"
          width="60px"
          style={{
            cursor: "pointer",
          }}
        />
      </a>
    </Link>
    <Typography variant={"h6"} color={"white"} fontWeight={600}>
      APSIT Community
    </Typography>
  </Stack>
);

export default Header;
