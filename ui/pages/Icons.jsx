/*Base*/
import usePage from "../../src/usePage";

import AccessTime from "ricon/AccessTime.js";
import Account from "ricon/Account.js";
import Add from "ricon/Add.js";
import BarChart from "ricon/BarChart.js";
import Blur from "ricon/Blur.js";
import Build from "ricon/Build.js";
import Calendar from "ricon/Calendar.js";
import ChevronRight from "ricon/ChevronRight.js";
import CircleLoading from "ricon/CircleLoading.js";
import Code from "ricon/Code.js";
import Dashboard from "ricon/Dashboard.js";
import Delete from "ricon/Delete.js";
import Description from "ricon/Description.js";
import Device from "ricon/Device.js";
import Download from "ricon/Download.js";
import Dropdown from "ricon/Dropdown.js";
import Edit from "ricon/Edit.js";
import Email from "ricon/Email.js";

// Alert
import Error from "ricon/Error.js";
import Warning from "ricon/Warning.js";

import Exit from "ricon/Exit.js";
import Facebook from "ricon/Facebook.js";
import FacebookMessage from "ricon/FacebookMessage.js";
import FeaturedPlayList from "ricon/FeaturedPlayList.js";
import File from "ricon/File.js";
import Git from "ricon/Git.js";
import Hamburger from "ricon/Hamburger.js";
import HamburgerToArrow from "ricon/HamburgerToArrow.js";
import HamburgerToX from "ricon/HamburgerToX.js";
import Help from "ricon/Help.js";
import Home from "ricon/Home.js";
import Link from "ricon/Link.js";
import Monetization from "ricon/Monetization.js";
import MyLocation from "ricon/MyLocation.js";
import Notification from "ricon/Notification.js";
import Npm from "ricon/Npm.js";
import Person from "ricon/Person.js";
import Phone from "ricon/Phone.js";
import Pin from "ricon/Pin.js";
import Play from "ricon/Play.js";
import PlayListAdd from "ricon/PlayListAdd.js";
import Pulse from "ricon/Pulse.js";
import Refresh from "ricon/Refresh.js";
import Reply from "ricon/Reply.js";
import Search from "ricon/Search.js";
import Settings from "ricon/Settings.js";
import Shopee from "ricon/Shopee.js";
import ShoppingCart from "ricon/ShoppingCart.js";
import Sort from "ricon/Sort.js";
import Sync from "ricon/Sync.js";
import Timer from "ricon/Timer.js";
import TouchApp from "ricon/TouchApp.js";
import VerifiedUser from "ricon/VerifiedUser.js";
import Video from "ricon/Video.js";
import ViewModule from "ricon/ViewModule.js";
import Visibility from "ricon/Visibility.js";
import Wallet from "ricon/Wallet.js";
import Wifi from "ricon/Wifi.js";
import X from "ricon/X.js";
import ZoomIn from "ricon/ZoomIn.js";

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
