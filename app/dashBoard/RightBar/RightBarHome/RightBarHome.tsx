import './home.css.scss';
import {OnlineFriends} from "@/app/dashBoard/Fiends/OnlineFriends/OnlineFriends";
import {Users} from "@/app/dashBoard/Fiends/dummyData";

export const RightBarHome = () =>{
    return <div className="right-bar-home">
        <div className="bd-container">
            <img className="bd-image" src="/assets/gift.png"  alt=""/>
            <span className="bd-text"><b>Nalane Koetlisi</b> and <b>other friends</b> have graduations</span>
        </div>
        <img alt="" src="/assets/ad.png" className="right-image-add"/>
        <span className="right-bar-title">Online Friend</span>

        <ul className="rightbar-friend-list">
            {Users.map((user)=>(
                <OnlineFriends user={user} key={user.id}/>
            ))}
        </ul>
    </div>
}
