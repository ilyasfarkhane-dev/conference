import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import PrivacyArea from "./PrivacyArea";


const Privacy = () => {
    return (
        <>            <main>
                <Breadcrumb top_title="Privacy & Policy"  title="Privacy & Policy"  />
                <PrivacyArea />
            </main>
            <FooterOne />
        </>
    );
};

export default Privacy;