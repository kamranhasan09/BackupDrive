import React from "react";
import "./css/sidebar.css";
import MobileScreenShareIcon from "@material-ui/icons/MobileScreenShare";
import DevicesIcon from "@material-ui/icons/Devices";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import { QueryBuilderOutlined, StarBorderOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_btn">
        <button>
          <span>New</span>
        </button>
      </div>
      <div className="sidebar_options">
        <div className="sidebar_option sidebar_option-Active">
          <MobileScreenShareIcon />

          <span>
            <b>My Drive</b>
          </span>
        </div>

        <div className="sidebar_option">
          <DevicesIcon />
          <span>Computers</span>
        </div>

        <div className="sidebar_option">
          <PeopleOutlineIcon />
          <span>Shared with me</span>
        </div>

        <div className="sidebar_option">
          <QueryBuilderOutlined />
          <span>Recent</span>
        </div>

        <div className="sidebar_option">
          <StarBorderOutlined />
          <span>Star</span>
        </div>

        <div className="sidebar_option">
          <DeleteOutlineIcon />
          <span>Trash</span>
        </div>
      </div>
      <hr />

      <div className="sidebar_options">
        <div className="sidebar_option">
          <CloudQueueIcon />
          <span>Storage</span>
        </div>

        <div className="progress_bar">
          <progress size="tiny" value="50" max="100" />
          <span>6.45 GB of 15 GB used</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
