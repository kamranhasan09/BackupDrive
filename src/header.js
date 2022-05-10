import React from "react";
import "./css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@mui/material";

export default function () {
  return (
    <div className="header">
      <div className="header_logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_Drive_logo.png/800px-Google_Drive_logo.png" />
        <span>Drive</span>
      </div>
      <div className="header_search">
        <SearchIcon />
        <input type="text" placeholder="Serach in Drive"></input>
        <FormatAlignCenterIcon />
      </div>
      <div className="header_icon">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>

        <span>
          <AppsIcon />
          <Avatar />
        </span>
      </div>
    </div>
  );
}
