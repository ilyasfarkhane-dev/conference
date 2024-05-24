import Image from "next/image";
import team_data from "../data/team-data";
import SocialLinks from "../common/social-links";


const TeamArea = () => {
    return (
        <>
            <div className="our-team-area pt-110 pb-90">
            {/* <div className="mb-5">
          <h2 className="display-5 fw-bold text-center">Comité de pilotage</h2>
        </div> */}
                <div className="container teamArea">
                
                    <div className="row">
                    {team_data.map((item, i)  => 
                        <div key={i} className="col-xl-6 col-lg-6 col-md-6 ">
                            <div className="our-team-wrapper mb-30 wow fadeInUp" data-wow-delay=".9s">
                            <div className="team-img position-relative">
                                <Image src={item.avatar} alt="theme-pure" />
                                <div className={`team-shape shape${item.id}`}>
                                    <Image src={item.shape} alt="theme-pure" />
                                </div>
                            </div>
                            <div className="team-text">
                                <h2>{item.name}</h2>
                                <span>{item.job_title}</span>
                                <p>{item.sm_info}</p>
                                <div className="team-link">
                                    <SocialLinks />  
                                </div>
                            </div>
                            </div>
                        </div>                
                    )} 
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamArea;