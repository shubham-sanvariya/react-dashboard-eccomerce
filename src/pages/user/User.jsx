import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"
import "./user.css"

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
            <Link to={"/newUser"}>
              <button className="userAddButton">Create</button>
            </Link>
        </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowtop">
            <img src="https://image.shutterstock.com/image-photo/portrait-young-smiling-indian-technical-260nw-1316784989.jpg"
             alt="" className="userShowImg" />
          </div>
          <div className="userShowTopTitle">
            <span className="userShowUsername">sachin pathak</span>
            <span className="userShowUserTitle">Software Engineer</span>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
            <PermIdentity className="userShowIcon" />
            <span className="userShowInfoTitle">sachin99</span>
            </div>
            <div className="userShowInfo">
            <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+91 123 456 67</span>
            </div>
            <div className="userShowInfo">
            <MailOutline className="userShowIcon" />
            <span className="userShowInfoTitle">sachinPathak99@gamil.com</span>
            </div>
            <div className="userShowInfo">
            <LocationSearching className="userShowIcon" />
            <span className="userShowInfoTitle">Mumbai  |  India</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder="sachin99"
                 className="userUpdateInput"/>
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder="sachin pathak"
                 className="userUpdateInput"/>
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder="sachinPathak99@gamil.com"
                 className="userUpdateInput"/>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder="+91 123 456 67"
                 className="userUpdateInput"/>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder="Mumbai | India"
                 className="userUpdateInput"/>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="https://image.shutterstock.com/image-photo/portrait-young-smiling-indian-technical-260nw-1316784989.jpg"
                 alt="" className="userUpdateImg" />
                 <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                 <input type="file" name="" id="file" style={{display: "none"}} /> 
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
