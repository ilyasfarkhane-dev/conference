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
        The 7th edition of the InternationalConference on Information Technology
        and Modeling (TIM'24), organized by our TIM Laboratory at the Faculty of
        Sciences Ben M'Sick. This year's conference will be held under the theme
        <b>
          "Innovation and Trends in Computer Science and Modeling : Bridging
          Theory, Practice, and the Power of AI"
        </b>{" "}
        . Join us at TIM'24 to discover the future of AI and digital
        transformation, and to be part of the conversation that is shaping
        thenext frontier of technology.
      </>
    ),
    accordion_id: "One",
    collapsed: "",
    aria_expanded: true,
    show: "show",
  },
  {
    id: 2,
    question: "Sujets",
    answer: (
      <ul>
        <li>- Artificial intelligence</li>
        <li>- Machine Learning and Deep Learning</li>
        <li>- Business Intelligence, Big Data and Data Mining</li>
        <li>- Intelligent smart city systems</li>
        <li>- Ontology and knowledge modeling</li>
        <li>- Natural Language processing </li>
        <li>- Computer Vision</li>
        <li>- Information system security</li>
        <li>- Blockchain & Security</li>
        <li>- Cloud Computing</li>
      </ul>
    ),
    accordion_id: "Two",
    collapsed: "collapsed",
    aria_expanded: false,
    show: "",
  },
  {
    id: 3,
    question: "Modèle",
    answer: (
      <>
        Pour vous aider à préparer votre soumission, veuillez télécharger notre
        modèle de document de conférence ci-dessous. Ce modèle fournit des
        directives et une structure pour la préparation de votre proposition,
        assurant ainsi une uniformité et une cohérence dans les soumissions.
        Veuillez consulter attentivement les instructions incluses dans le
        modèle avant de soumettre votre proposition.
      </>
    ),
    accordion_id: "Three",
    collapsed: "collapsed",
    aria_expanded: false,
    show: "",
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
                <img
                  className="bounce-animate"
                  src="/assets/img/bg/illustration.png"
                  alt="theme-pure"
                />
              </div>
            </div>
            <div className="col-xl-6 ">
              <div className="faq-wrapper mb-30">
                <div className="section-title section-title-white mb-70"></div>
                <div className="faq-box">
                  <div className="accordion" id="accordionExample">
                    {accordion_data.map((item) => (
                      <div key={item.id} className="accordion-items">
                        <h2
                          className="accordion-header"
                          id={`heading${item.accordion_id}`}
                        >
                          <button
                            className={`accordion-button ${item.collapsed}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.accordion_id}`}
                            aria-expanded={item.aria_expanded}
                            aria-controls={`collapse${item.accordion_id}`}
                          >
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.accordion_id}`}
                          className={`accordion-collapse collapse ${item.show}`}
                          aria-labelledby={`heading${item.accordion_id}`}
                          data-bs-parent="#accordionExample"
                        >
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
