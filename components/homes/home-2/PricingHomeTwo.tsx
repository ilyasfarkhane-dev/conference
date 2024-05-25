import Link from "next/link";
import priceing_data from "../../data/priceing-data";


interface priceing_content_type {
    title: string;
    sub_title: string;
}
const priceing_content: priceing_content_type = {
    title: "TIM'24 – Faculté des sciences Ben M’Sik, Casablanca",
    sub_title: "Réservez votre place maintenant",
}
const {title, sub_title} = priceing_content

const PricingHomeTwo = () => {
    return (
        <>
           <section className="pricing-area gray-bg pt-115 pb-120">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="section-title text-center mb-70">
                                <h3>{sub_title}</h3>
                                <p>{title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {priceing_data.map((item, i) =>
                            <div key={i} className="col-xl-4 col-lg-4">
                                <div className="pricing-wrapper pricing-info white-bg  mb-30 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="pricing-header mb-20">
                                        {item.best_value && <span className="bg-price">Best plan</span>} 
                                        <h3>{item.title}</h3>
                                       
                                    </div>
                                    
                                    <div className="price-body price-body-two">
                                        <h2><span>MAD</span>{item.price}</h2>
                                       
                                    </div>
                                    <div className="price-body-bottom mt-25 mb-25">
                                        <ul>
                                            {item.price_features.map((feture, index ) => <li key={index}>{feture}</li>)}  
                                        </ul>
                                    </div>
                                        <div className="price-btn-w">
                                        <Link href="#" className="btn btn-soft-border">Inscription</Link>
                                    </div>
                                </div>
                            </div>                        
                        )} 
                </div>
                 
              </div>
            </section> 
        </>
    );
};

export default PricingHomeTwo;