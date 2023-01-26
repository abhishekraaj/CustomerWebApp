import { RecoilRightSection } from "../../RecoilState/RecoilRightSection"
import { useRecoilValue } from "recoil"
import {MdAppRegistration} from "react-icons/md";
import Style from './Navbar.module.css'

export default function Navbar() {
    const personDetail = useRecoilValue(RecoilRightSection)
    return(
        <>
       <div className={Style.wrap}>
      
       <h3>  <MdAppRegistration style={{color : "white", fontSize:"1.5rem"}} /> Customer Kitab</h3>
       <div className={Style.user}>
       <h3>Customer Admin</h3>
       <div className={Style.admin}>
       {!personDetail.Image ? "" :
      <img className={Style.image} src={personDetail.Image} width="20px" alt="profile"  />
       }
       <h3>{personDetail.UserName}</h3>
       </div>
       </div>
       </div>
        </>
    )
}