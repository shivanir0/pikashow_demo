// import React from 'react'

import { link } from "fs";
import homeIcon from "../../assets/icons/icon-nav-home.svg";
import moviesIcon from "../../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../../assets/icons/icon-nav-tv-series.svg";
import bookmarkIcon from "../../assets/icons/icon-nav-bookmark.svg";
import { Link, useLocation } from "react-router-dom";
import { Box, Hidden, Icon, Typography } from "@mui/material";
// import { MdWindow } from "react-icons/md";
// import { MdLocalMovies } from "react-icons/md";
// import { PiTelevisionFill } from "react-icons/pi";
// import { FaBookmark } from "react-icons/fa";


const navLinks = [
  {
    name: "Home",
    icon : homeIcon,
    link: "/",
  },
  {
    name: "Movies",
    icon: moviesIcon,
    link: "/movie",
  },
  {
    name: "Tv Series",
    icon: tvSeriesIcon,
    link: "/tv-series",
  },
  {
    name: "Bookmark",
    icon: bookmarkIcon,
    link: "/bookmark",
  },
];


const Sidebar = () => {
  const { pathname } = useLocation();
  
  return (
    <Box
      sx={{
        background: "161d2f",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
      >
        <Hidden smDown>
          <Typography
            variant="h5"
            component="h1"
            my={2}
            fontWeight={400}
            fontSize={18}
          >
            PikaShowApp
          </Typography>
        </Hidden>
        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            > 
              <Box sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none",
                }}>
              
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{
                    width: "18px",
                    filter: `${
                      pathname === item.link
                        ? "invert(58%) sepia(14%) saturate(3166%) hue-rotate(215deg) brightness(91%) contrast(87%)"
                        : "invert(84%)"
                    }`,
                  }}
                />
                <Hidden mdDown>
                  <Typography>{item.name}</Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
