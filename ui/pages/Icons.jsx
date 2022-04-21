/*Base*/
import usePage from "../../src/usePage";

import AccessTime from "ricon/AccessTime";
import Account from "ricon/Account";
import Add from "ricon/Add";
import BarChart from "ricon/BarChart";
import Blur from "ricon/Blur";
import Build from "ricon/Build";
import Calendar from "ricon/Calendar";
import ChevronRight from "ricon/ChevronRight";
import CircleLoading from "ricon/CircleLoading";
import Code from "ricon/Code";
import Dashboard from "ricon/Dashboard";
import Delete from "ricon/Delete";
import Description from "ricon/Description";
import Device from "ricon/Device";
import Download from "ricon/Download";
import Dropdown from "ricon/Dropdown";
import Edit from "ricon/Edit";
import Email from "ricon/Email";

// Alert
import Error from "ricon/Error";
import Warning from "ricon/Warning";

import Exit from "ricon/Exit";
import Facebook from "ricon/Facebook";
import FacebookMessage from "ricon/FacebookMessage";
import FeaturedPlayList from "ricon/FeaturedPlayList";
import File from "ricon/File";
import Git from "ricon/Git";
import Hamburger from "ricon/Hamburger";
import HamburgerToArrow from "ricon/HamburgerToArrow";
import HamburgerToX from "ricon/HamburgerToX";
import Help from "ricon/Help";
import Home from "ricon/Home";
import Link from "ricon/Link";
import Monetization from "ricon/Monetization";
import MyLocation from "ricon/MyLocation";
import Notification from "ricon/Notification";
import Npm from "ricon/Npm";
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
import Shopee from "ricon/Shopee";
import ShoppingCart from "ricon/ShoppingCart";
import Sort from "ricon/Sort";
import Sync from "ricon/Sync";
import Timer from "ricon/Timer";
import TouchApp from "ricon/TouchApp";
import VerifiedUser from "ricon/VerifiedUser";
import Video from "ricon/Video";
import ViewModule from "ricon/ViewModule";
import Visibility from "ricon/Visibility";
import Wallet from "ricon/Wallet";
import Wifi from "ricon/Wifi";
import X from "ricon/X";
import ZoomIn from "ricon/ZoomIn";

const icons = [
  ["AccessTime", <AccessTime />],
  ["AccessTime (fill)", <AccessTime type="fill" />],
  ["AccessTime (update)", <AccessTime type="update" />],
  ["Account", <Account />],
  ["Account (circle)", <Account type="circle" />],
  ["Account (supervisor)", <Account type="supervisor" />],
  ["Add", <Add />],
  ["Add (box)", <Add type="box" />],
  ["Add (circle)", <Add type="circle" />],
  ["Add (circleOutline)", <Add type="circleOutline" />],
  ["BarChart", <BarChart />],
  ["Blur", <Blur />],
  ["Build", <Build />],
  ["Calendar", <Calendar />],
  ["ChevronRight", <ChevronRight />],
  ["CircleLoading", <CircleLoading />],
  ["Code", <Code />],
  ["Dashboard", <Dashboard />],
  ["Delete", <Delete />],
  ["Delete (forever)", <Delete type="forever" />],
  ["Delete (sweep)", <Delete type="sweep" />],
  ["Description", <Description />],
  ["Device (desktop)", <Device type="desktop" />],
  ["Device (tablet)", <Device type="tablet" />],
  ["Device (phone)", <Device type="phone" />],
  ["Download", <Download />],
  ["Download (file)", <Download type="file" />],
  ["Dropdown", <Dropdown />],
  ["Dropdown (up)", <Dropdown type="up" />],
  ["Dropdown (right)", <Dropdown type="right" />],
  ["Dropdown (left)", <Dropdown type="left" />],
  ["Edit", <Edit />],
  ["Email", <Email />],

  // Alert
  ["Error", <Error />],
  ["Warning", <Warning />],

  ["Exit", <Exit />],
  ["Facebook", <Facebook />],
  ["FacebookMessage", <FacebookMessage />],
  ["FeaturedPlayList", <FeaturedPlayList />],
  ["File", <File>.js</File>],
  ["Git", <Git />],
  ["Hamburger", <Hamburger />],
  ["HamburgerToArrow", <HamburgerToArrow on={true} />],
  ["HamburgerToX", <HamburgerToX on={true} />],
  ["Help", <Help />],
  ["Home", <Home />],
  ["Link", <Link />],
  ["Monetization", <Monetization />],
  ["Monetization", <Monetization type="sign" />],
  ["MyLocation (fixed)", <MyLocation />],
  ["MyLocation (off)", <MyLocation type="off" />],
  ["MyLocation (on)", <MyLocation type="on" />],
  ["MyLocation (loading)", <MyLocation loading={true} type="on" />],
  ["Notification", <Notification />],
  ["Notification (active)", <Notification type="active" />],
  ["Notification (none)", <Notification type="none" />],
  ["Notification (off)", <Notification type="off" />],
  ["Notification (paused)", <Notification type="paused" />],
  ["Npm", <Npm />],
  ["Person", <Person />],
  ["Person (add)", <Person type="add" />],
  ["Phone", <Phone />],
  ["Pin", <Pin />],
  ["Pin (label=\"A\")", <Pin label="A" />],
  ["Play", <Play />],
  ["PlayListAdd", <PlayListAdd />],
  ["Pulse", <Pulse />],
  ["Pulse (breath)", <Pulse animation="breath" />],
  ["Refresh", <Refresh />],
  ["Reply", <Reply />],
  ["Reply (right)", <Reply type="right" />],
  ["Search", <Search />],
  ["Settings", <Settings />],
  ["Settings", <Settings type="square" />],
  ["Shopee", <Shopee />],
  ["ShoppingCart", <ShoppingCart />],
  ["Sort", <Sort />],
  ["Sync", <Sync />],
  ["Sync (disabled)", <Sync type="disabled" />],
  ["Sync (problem)", <Sync type="problem" />],
  ["Timer", <Timer />],
  ["Timer (off)", <Timer type="off" />],
  ["TouchApp", <TouchApp />],
  ["VerifiedUser", <VerifiedUser />],
  ["Video", <Video />],
  ["ViewModule", <ViewModule />],
  ["Visibility", <Visibility />],
  ["Wallet", <Wallet />],
  ["Wifi", <Wifi />],
  ["X", <X style={{ position: "static" }} />],
  ["ZoomIn", <ZoomIn />],
];

const Icons = (props) => {
  usePage({ ...props, pageName: "Icons" });
  return (
    <>
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
    </>
  );
};

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
