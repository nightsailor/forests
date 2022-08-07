import Head from "next/head";
import Image from "next/image";
import Topbar from "../components/TopBar";
import styled from "styled-components";
import { parks } from "./api/parks";

import {
  Grid,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Box,
  Paper,
  IconButton,
  TextField,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useAuth } from "../firebase/UserAuthContext";
import { useRouter } from "next/router";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  listRoot: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
    marginTop: 12,
    "& .MuiListItem-root": {
      "&:hover": {
        color: "orange",
      },
      "&.MuiListItem-divider": {
        borderBottom: "2px solid rgba(0,0,0,0.1)",
      },
    },
  },
  subheader: {
    backgroundColor: "rgba(0,0,0,0.1)",
    fontSize: 24,
    "&.MuiListSubheader-inset": { marginBottom: 12 }, //no space
  },
  listItemText: {
    "& .MuiListItemText-primary": {
      fontSize: "1.2rem",
    },
  },
}));

const filterData = (query, parks) => {
  if (!query) {
    return parks;
  } else {
    return parks.filter((d) => d.toLowerCase().includes(query));
  }
};

const SearchBar = ({ setSearchQuery }) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Enter a city name"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
  </form>
);

export default function Information() {
  const auth = useAuth();
  const router = useRouter();
  const [found, setFound] = useState(false);
  const [location, setLocation] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, parks);

  const handleToggle = (value) => () => {
    if (value !== location) {
      setLocation(value);
    }
  };

  const classes = useStyles();

  const requestSearch = (searchedValue) => {
    const filteredItems = parks.filter((item) => {
      return item.toLowerCase().includes(searchedValue.toLowerCase());
    });
    setItems(filteredItems);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  if (!found) {
    return (
      <>
        <Box component="section">
          <Topbar />
          <main>
            <Container
              maxWidth="xl"
              sx={{ textAlign: "center", paddingTop: "5%" }}
            >
              <Grid container spacing={12}>
                <Grid item xs={6}>
                  <Paper>
                    <SearchBar
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                    />
                    <List
                      className={classes.listRoot}
                      sx={{ maxHeight: 500, overflow: "auto" }}
                      subheader={
                        <ListSubheader
                          color={"primary"}
                          inset
                          className={classes.subheader}
                        >
                          National Parks
                        </ListSubheader>
                      }
                    >
                      {dataFiltered.map((item, index) => {
                        return (
                          <ListItem
                            key={item}
                            role={undefined}
                            divider
                            dense
                            button
                            onClick={handleToggle(index)}
                          >
                            <ListItemText
                              id={item}
                              primary={item}
                              className={classes.listItemText}
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <input
                    id="pac-input"
                    class="controls"
                    type="text"
                    placeholder="Search Box"
                  />
                  <div id="map"></div>
                  <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

                  <link
                    rel="stylesheet"
                    type="text/css"
                    href="../styles/map.css"
                  />
                  <script type="module" src="./information.ts"></script>
                  <script
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDSnMZH1ZQguXoFo4YvAoT564R6SEHDHF8&callback=initAutocomplete&libraries=places&v=weekly"
                    defer
                  ></script>
                </Grid>
              </Grid>
            </Container>
          </main>
        </Box>
      </>
    );
  }
}
