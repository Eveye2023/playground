import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import logo from "../../assets/images/logo7.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

interface UserInfo {
  id: number;
  email: string;
  name?: string;
}
interface HeaderProps {
  user: UserInfo | null;
}
function Header({ user }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const profile = () => {
    navigate("profile");
  };

  const games = () => {
    navigate("/games");
  };

  const worksheets = () => {
    navigate("/worksheets");
  };

  const activities = () => {
    navigate("/activities");
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };
  return (
    <div className="header">
      <Link to="/" className="header__link">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <div className="header__nav">
        {user ? (
          // <Link to="profile" className="header__link">
          <div>
            <i className="fa fa-solid fa-user"></i> {user.name || user.email}
          </div>
        ) : (
          // </Link>
          <Link to="signin" className="header__link">
            <div>
              <i className="fa fa-solid fa-user"></i> Login
            </div>
          </Link>
        )}
        <div className="header__menu" onClick={() => setMenuOpen(true)}>
          <i className="fa fa-solid fa-bars"></i> Menu
        </div>
        <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setMenuOpen(false)}
            onKeyDown={() => setMenuOpen(false)}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                <i className="fa fa-user" aria-hidden="true"></i>&nbsp;
                  <ListItemText primary="Profile" onClick={profile} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                <i className="fa fa-gamepad" aria-hidden="true"></i>&nbsp;
                  <ListItemText primary="Games" onClick={games} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                <i className="fa fa-th-list" aria-hidden="true"></i>&nbsp;
                  <ListItemText primary="Worksheets" onClick={worksheets} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                <i className="fa fa-trophy" aria-hidden="true"></i>&nbsp;
                  <ListItemText primary="Activities" onClick={activities} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding> 
                <ListItemButton>
                <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;
                  <ListItemText primary="Logout" onClick={logout} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
