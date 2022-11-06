import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import React from 'react'
import "./topbar.css"

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>ronitadmin</span>
            </div>
            <div className='topRight'>
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                  </div> 
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>    
                <div className="topbarIconContainer">
                    <Settings />
                    <span className="topIconBadge">2</span>
                </div>
          <img src="https://media.istockphoto.com/id/1249420269/photo/young-smiling-handsome-man-in-casual-clothes-posing-isolated-on-blue-wall-background-studio.jpg?s=612x612&w=0&k=20&c=fr9I2Et7ApAJ9WSuZZRh83wpq_KoKtLXhoFvlfmffe8=" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

