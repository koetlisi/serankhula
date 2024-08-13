import './home.css.scss';
import {OnlineFriends} from "@/components/Components/Fiends/OnlineFriends/OnlineFriends";
import {Users} from "@/components/Components/Fiends/dummyData";

export const RightBarHome = () =>{
    return <div className="right-bar-home">
        <div className="bd-container">
            <img className="bd-image" src="/assets/gift.png"  alt=""/>
            <span className="bd-text"><b>Nalane Koetlisi</b> and <b>other friends</b> have graduations</span>
        </div>
        <img className="right-image-add" alt="" src="/assets/ad.png"/>
        <span className="right-bar-title">Online Friend</span>

        <ul className="rightbar-friend-list">
            {Users.map((user)=>(
                <OnlineFriends user={user} key={user.id}/>
            ))}
        </ul>
    </div>
}
