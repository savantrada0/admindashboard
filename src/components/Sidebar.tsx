import React, { useState } from "react";
import "../assets/dashboardstyle.css"
import { DashboardOutlined,AccountBookOutlined } from "@ant-design/icons";

const Listitem = [{
  icon :<DashboardOutlined />,
  name:"Dashboard"
}
, 
{
 icon : <AccountBookOutlined />,
  name:"Event"
}
];

type sidebarProps = {
  event: any,
  setEvent: any
}

const Sidebar = ({event,setEvent}:sidebarProps) => {

  const [active,setActive] = useState("Dashboard")
 
  const handleSidepage = (rightside:string)=>{
      if(event === false&& rightside==="Event"){
        setEvent(true)
        setActive("Event")

      }else if(event===true&& rightside==="Dashboard"){
        setEvent(false)
        setActive("Dashboard")
      }
  }
  return (
  <div className="sidebarcontainer">
        
      <ul className="sidebarlist">
        {Listitem.map((item) => (
          
          
          <li key={item.name} className={item.name===active?"activelink":"sidebaritem"} onClick={()=>{handleSidepage(item.name)}}>

            {item.icon} {item.name}
          </li>

))}
      </ul>
</div>
  )
};

export default Sidebar;
