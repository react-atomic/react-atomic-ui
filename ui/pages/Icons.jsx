import React from "react";

import Account from "ricon/Account";
import AccessTime from "ricon/AccessTime";
import Add from "ricon/Add";
import BarChart from "ricon/BarChart";
import Build from "ricon/Build";
import Blur from "ricon/Blur";
import Calendar from "ricon/Calendar";
import ChevronRight from "ricon/ChevronRight";
import Code from "ricon/Code";
import CircleLoading from "ricon/CircleLoading";
import Dashboard from "ricon/Dashboard";
import Description from "ricon/Description";
import Device from "ricon/Device";
import Dropdown from "ricon/Dropdown";
import Download from "ricon/Download";
import Delete from "ricon/Delete";
import Edit from "ricon/Edit";
import Email from "ricon/Email";
import Exit from "ricon/Exit";
import File from "ricon/File";
import Facebook from "ricon/Facebook";
import FacebookMessage from "ricon/FacebookMessage";
import FeaturedPlayList from "ricon/FeaturedPlayList";
import Git from "ricon/Git";
import Help from "ricon/Help";
import Hamburger from "ricon/Hamburger";
import HamburgerToArrow from "ricon/HamburgerToArrow";
import HamburgerToX from "ricon/HamburgerToX";
import Home from "ricon/Home";
import Link from "ricon/Link";
import Monetization from "ricon/Monetization";
import MyLocation from "ricon/MyLocation";
import Npm from "ricon/Npm";
import Notification from "ricon/Notification";
import Person from "ricon/Person";
import Phone from "ricon/Phone";
import Pin from "ricon/Pin";
import Play from "ricon/Play";
import PlayListAdd from "ricon/PlayListAdd";
import Pulse from "ricon/Pulse";
import Refresh from "ricon/Refresh";
import Reply from "ricon/Reply";
import Search from "ricon/Search";
import Settings from "ricon/Settings";
import ShoppingCart from "ricon/ShoppingCart";
import Sort from "ricon/Sort";
import Shopee from "ricon/Shopee";
import Sync from "ricon/Sync";
import Timer from "ricon/Timer";
import VerifiedUser from "ricon/VerifiedUser";
import Video from "ricon/Video";
import Wifi from "ricon/Wifi";
import Wallet from "ricon/Wallet";
import X from "ricon/X";
import ZoomIn from "ricon/ZoomIn";

// Alert
import Error from "ricon/Error";
import Warning from "ricon/Warning";

import { reactStyle } from "react-atomic-molecule";

import BasePage from "../pages/BasePage";
import Doc from "../templates/Doc";

const icons = [
  ["Account", <Account />],
  ["Account (circle)", <Account type="circle" />],
  ["Account (supervisor)", <Account type="supervisor" />],
  ["Add", <Add />],
  ["Add (box)", <Add type="box" />],
  ["Add (circle)", <Add type="circle" />],
  ["Add (circleOutline)", <Add type="circleOutline" />],
  ["AccessTime", <AccessTime />],
  ["AccessTime (fill)", <AccessTime type="fill" />],
  ["AccessTime (update)", <AccessTime type="update" />],
  ["BarChart", <BarChart />],
  ["Build", <Build />],
  ["Blur", <Blur />],
  ["Calendar", <Calendar />],
  ["ChevronRight", <ChevronRight />],
  ["Code", <Code />],
  ["CircleLoading", <CircleLoading />],
  ["Dashboard", <Dashboard />],
  ["Delete", <Delete />],
  ["Delete (forever)", <Delete type="forever" />],
  ["Delete (sweep)", <Delete type="sweep" />],
  ["Device (desktop)", <Device type="desktop" />],
  ["Device (tablet)", <Device type="tablet" />],
  ["Device (phone)", <Device type="phone" />],
  ["Download", <Download />],
  ["Download (file)", <Download type="file" />],
  ["Dropdown", <Dropdown />],
  ["Dropdown (up)", <Dropdown type="up" />],
  ["Dropdown (right)", <Dropdown type="right" />],
  ["Dropdown (left)", <Dropdown type="left" />],
  ["Description", <Description />],
  ["Edit", <Edit />],
  ["Email", <Email />],
  ["Exit", <Exit />],
  ["File", <File>.js</File>],
  ["Facebook", <Facebook />],
  ["FacebookMessage", <FacebookMessage />],
  ["FeaturedPlayList", <FeaturedPlayList />],
  ["Git", <Git />],
  ["Help", <Help />],
  ["Home", <Home />],
  ["Hamburger", <Hamburger />],
  ["HamburgerToArrow", <HamburgerToArrow on={true} />],
  ["HamburgerToX", <HamburgerToX on={true} />],
  ["Link", <Link />],
  ["Monetization", <Monetization />],
  ["Monetization", <Monetization type="sign" />],
  ["MyLocation (fixed)", <MyLocation />],
  ["MyLocation (off)", <MyLocation type="off" />],
  ["MyLocation (on)", <MyLocation type="on" />],
  ["MyLocation (loading)", <MyLocation loading={true} type="on" />],
  ["Npm", <Npm />],
  ["Notification", <Notification />],
  ["Notification (active)", <Notification type="active" />],
  ["Notification (none)", <Notification type="none" />],
  ["Notification (off)", <Notification type="off" />],
  ["Notification (paused)", <Notification type="paused" />],
  ["Person", <Person />],
  ["Person (add)", <Person type="add" />],
  ["Phone", <Phone />],
  ["Pin", <Pin />],
  ["Pulse", <Pulse />],
  ["Pulse (breath)", <Pulse animation="breath" />],
  ["Play", <Play />],
  ["PlayListAdd", <PlayListAdd />],
  ["Refresh", <Refresh />],
  ["Reply", <Reply />],
  ["Reply (right)", <Reply type="right" />],
  ["Search", <Search />],
  ["Settings", <Settings />],
  ["Settings", <Settings type="square" />],
  ["ShoppingCart", <ShoppingCart />],
  ["Sort", <Sort />],
  ["Shopee", <Shopee />],
  ["Sync", <Sync />],
  ["Sync (disabled)", <Sync type="disabled" />],
  ["Sync (problem)", <Sync type="problem" />],
  ["Timer", <Timer />],
  ["Timer (off)", <Timer type="off" />],
  ["VerifiedUser", <VerifiedUser />],
  ["Video", <Video />],
  ["Wifi", <Wifi />],
  ["Wallet", <Wallet />],
  ["X", <X style={{ position: "static" }} />],
  ["ZoomIn", <ZoomIn />],
  // Alert
  ["Error", <Error />],
  ["Warning", <Warning />],
];

class Icons extends BasePage {
  static defaultProps = {
    pageName: "icons",
  };
  render() {
    return (
      <Doc>
        <div className="pure-g">
          {icons.map((v, k) => (
            <div
              key={k}
              className="pure-u-1 pure-u-md-1-3 pure-u-lg-1-5"
              style={Styles.grid}
            >
              <div style={Styles.icon}>{v[1]}</div>
              <div>{v[0]}</div>
            </div>
          ))}
        </div>
      </Doc>
    );
  }
}

export default Icons;

const Styles = {
  grid: {
    textAlign: "center",
  },
  icon: {
    maxWidth: 30,
    minHeight: 30,
    maxHeight: 30,
    margin: "0 auto 10px",
    position: "relative",
  },
};
