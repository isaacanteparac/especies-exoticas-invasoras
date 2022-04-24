import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Home from "../home/Home";
import Search from "../home/Search";

export default function ContentComponent(porps) {
  const [homeViewComponent, setHomeViewComponent] = useState(false);
  const [searchViewComponent, setSearchViewComponent] = useState(false);

  const getComponent = () => {
    setHomeViewComponent(porps.home);
    setSearchViewComponent(porps.search);
  };

  useEffect(() => {
    getComponent();
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, borderRadius: "10px" }}>
      {homeViewComponent ? <Home /> : null}
      {searchViewComponent ? (
        <Search
          title={porps.titleSearch}
          urlChip={porps.urlChip}
          url={porps.url}
        />
      ) : null}
    </Container>
  );
}
