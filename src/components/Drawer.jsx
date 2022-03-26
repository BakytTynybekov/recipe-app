import { useState } from "react";
import { Drawer, List, ListItem, ListItemText, Button } from "@mui/material";
import { Link } from "react-router-dom";

function DrawerMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        anchor="right"
      >
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>This is my menu</ListItem>
          <ListItem>This is my menu</ListItem>
        </List>
      </Drawer>
      <Button onClick={() => setDrawerOpen(!drawerOpen)}>Show Menu</Button>
    </div>
  );
}

export default DrawerMenu;
