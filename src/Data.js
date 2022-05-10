import React from "react";
import "./css/data.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ListIcon from "@material-ui/icons/List";
import InfoIcon from "@material-ui/icons/Info";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function Data() {
  return (
    <div className="data">
      <div className="data_header">
        <div className="data_headerLeft">
          <p>My Drive</p>
          <ArrowDropDownIcon />
        </div>
        <div className="data_headerRight">
          <ListIcon />
          <InfoIcon />
        </div>
      </div>

      <div className="data_content">
        <div className="data_grid">
          <div className="data_file">
            <InsertDriveFileIcon />
            <p>File Name</p>
          </div>

          <div className="data_file">
            <InsertDriveFileIcon />
            <p>File Name</p>
          </div>

          <div className="data_file">
            <InsertDriveFileIcon />
            <p>File Name</p>
          </div>
        </div>
      </div>

      <div className="data_list">
        <div className="detailRow">
          <p>
            <b>
              Name <ArrowDownwardIcon />
            </b>
          </p>
          <p>
            <b>Owner</b>
          </p>
          <p>
            <b>Last Modified</b>
          </p>
          <p>
            <b>File Size</b>
          </p>
        </div>

        <div className="detailRow">
          <p>
            Name <InsertDriveFileIcon />
          </p>
          <p>Me</p>
          <p>Yesterday</p>
          <p>1 GB</p>
        </div>
      </div>
    </div>
  );
}

export default Data;
