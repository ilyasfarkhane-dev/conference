import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import RecoverArea from "./RecoverArea";


const Recover = () => {
    return (
        <>            <main>
                <Breadcrumb top_title="Recover" title="Recover" />
                <RecoverArea />
            </main>
            <FooterOne />
        </>
    );
};

export default Recover;