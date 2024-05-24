interface accordion_data_type {
    id: number;
    question: string;
    answer: JSX.Element;
    accordion_id: string;
    collapsed: string;
    aria_expanded: boolean;
    show: string;
}
const accordion_data: accordion_data_type[] = [
    {
        id: 1,
        question: "Description",
        answer: (
            <>
                Les Journées des Sciences de l'Ingénieur et de l'Intelligence Artificielle (JSIIA) sont un événement exceptionnel réunissant des experts, des chercheurs, des professionnels et des passionnés du domaine de l'ingénierie et de l'intelligence artificielle. Cet événement offre une plateforme dynamique pour l'échange d'idées, la présentation de recherches innovantes et la discussion sur les avancées les plus récentes dans ces domaines en constante évolution. Lors de ces journées, les participants auront l'opportunité d'assister à des conférences données par des experts renommés, d'assister à des ateliers interactifs et de participer à des sessions de discussion sur des sujets variés liés à l'ingénierie et à l'intelligence artificielle. Les présentations couvriront un large éventail de thèmes, notamment la robotique, l'apprentissage automatique, la vision par ordinateur, les systèmes intelligents, les réseaux neuronaux, la cybersécurité, et bien d'autres encore. Les JSIIA offrent également une excellente opportunité de réseautage, permettant aux participants d'établir des contacts avec d'autres professionnels du secteur, de discuter des dernières tendances et de découvrir de nouvelles collaborations potentielles. Que vous soyez un chercheur, un étudiant, un ingénieur ou un entrepreneur, les Journées des Sciences de l'Ingénieur et de l'Intelligence Artificielle sont un événement incontournable pour rester à la pointe de l'innovation et de la technologie.
            </>
        ),
        accordion_id: "One",
        collapsed: "",
        aria_expanded: true,
        show: "show"
    },
    {
        id: 2,
        question: "Sujets",
        answer: (
            <ul>
                <li>- Robotique et Automatisation</li>
                <li>- Apprentissage Automatique et Intelligence Artificielle</li>
                <li>- Systèmes Intelligents et Internet des Objets (IoT)</li>
                <li>- Vision par Ordinateur et Traitement d’Images</li>
                <li>- Ingénierie des Données et Analyse Prédictive</li>
                <li>- Systèmes de Contrôle et Intelligence Artificielle</li>
                <li>- Cybersécurité et Protection des Données</li>
                <li>- Biological Modeling and Disease Prediction</li>
            </ul>
        ),
        accordion_id: "Two",
        collapsed: "collapsed",
        aria_expanded: false,
        show: ""
    },
    {
        id: 3,
        question: "Modèle",
        answer: (
            <>
                Pour vous aider à préparer votre soumission, veuillez télécharger notre modèle de document de conférence ci-dessous. Ce modèle fournit des directives et une structure pour la préparation de votre proposition, assurant ainsi une uniformité et une cohérence dans les soumissions. Veuillez consulter attentivement les instructions incluses dans le modèle avant de soumettre votre proposition.
            </>
        ),
        accordion_id: "Three",
        collapsed: "collapsed",
        aria_expanded: false,
        show: ""
    },
];

const FAQHomeOne = () => {
    return (
        <>
            <section className="faq-area grad-bg pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="faq-img mb-30">
                                <img className="bounce-animate" src="/assets/img/bg/illustration.png" alt="theme-pure" />
                            </div>
                        </div>
                        <div className="col-xl-6 ">
                            <div className="faq-wrapper mb-30">
                                <div className="section-title section-title-white mb-70"></div>
                                <div className="faq-box">
                                    <div className="accordion" id="accordionExample">
                                        {accordion_data.map((item) => (
                                            <div key={item.id} className="accordion-items">
                                                <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                                                    <button
                                                        className={`accordion-button ${item.collapsed}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse${item.accordion_id}`}
                                                        aria-expanded={item.aria_expanded}
                                                        aria-controls={`collapse${item.accordion_id}`}>
                                                        {item.question}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`collapse${item.accordion_id}`}
                                                    className={`accordion-collapse collapse ${item.show}`}
                                                    aria-labelledby={`heading${item.accordion_id}`}
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-content faq_content">
                                                        {item.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQHomeOne;
