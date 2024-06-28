import Image from "next/image";
import faq_img from "../../public/assets/img/bg/faq01.png";

// accordion data type
interface accordion_data_type {
  id: number;
  question: string;
  answer: JSX.Element;
  accordion_id: string;
  collapsed: string;
  aria_expanded: boolean;
  show: string;
}
// accordion data
const accordion_data: accordion_data_type[] = [
  {
    id: 1,
    question: "Robotique et Automatisation",
    answer: (
      <ul>
        <li>- Applications industrielles de la robotique</li>
        <li>- Intelligence artificielle dans la conception de robots</li>
        <li>- Robotique collaborative et interaction homme-machine</li>
        <li>- Robotique médicale et soins de santé</li>
        <li>- Éthique et responsabilité dans la robotique</li>
      </ul>
    ),
    accordion_id: "One",
    collapsed: "",
    aria_expanded: true,
    show: "show",
  },
  {
    id: 2,
    question: "Apprentissage Automatique et Intelligence Artificielle",
    answer: (
      <ul>
        <li>- Modèles et algorithmes d’apprentissage automatique</li>
        <li>- Réseaux de neurones et deep learning</li>
        <li>- Apprentissage par renforcement et apprentissage non supervisé</li>
        <li>
          - Applications de l’intelligence artificielle dans les secteurs
          industriels
        </li>
        <li>- Interprétabilité et transparence des modèles d’IA</li>
      </ul>
    ),
    accordion_id: "Two",
    collapsed: "collapsed",
    aria_expanded: false,
    show: "",
  },
  {
    id: 3,
    question: "Systèmes Intelligents et Internet des Objets (IoT)",
    answer: (
      <ul>
        <ul>
          <li>- Architecture des systèmes IoT</li>
          <li>- Traitement de données dans les systèmes IoT</li>
          <li>- Sécurité et confidentialité dans les systèmes IoT</li>
          <li>- Intégration de l’IA dans les systèmes IoT</li>
          <li>
            - Applications et cas d’utilisation des systèmes IoT intelligents
          </li>
        </ul>
      </ul>
    ),
    accordion_id: "Three",
    collapsed: "collapsed",
    aria_expanded: false,
    show: "",
  },
  {
    id: 4,
    question: "Théories et applications",
    answer: (
      <ul>
        <li>- Techniques de vision par ordinateur et de traitement d’images</li>
        <li>- Reconnaissance faciale et biométrie</li>
        <li>Analyse mathématique</li>
        <li>- Physique / Chimie</li>
        <li>- Algèbre et géométrie</li>
        <li>- Géologie / Biologie</li>
      </ul>
    ),
    accordion_id: "Foure",
    collapsed: "collapsed",
    aria_expanded: false,
    show: "",
  },
  {
    id: 5,
    question: "Ingénierie des Données et Analyse Prédictive",
    answer: (
      <ul>
        <li>- Gestion des données massives et architectures Big Data</li>
        <li>- Méthodes d’analyse de données et de visualisation</li>
        <li>- Prédiction et modélisation des données</li>
        <li>- Applications de l’analyse prédictive dans divers domaines</li>
        <li>
          - Sécurité et confidentialité des données dans l’ingénierie des
          données
        </li>
      </ul>
    ),
    accordion_id: "five",
    collapsed: "collapsed",
    aria_expanded: false,
    show: "",
  },
  {
    id: 6,
    question: "Systèmes de Contrôle et Intelligence Artificielle",
    answer: (
      <ul>
        <li>Techniques de contrôle et de régulation automatique</li>
        <li>Applications de l’IA dans les systèmes de contrôle industriels</li>
        <li>
          Contrôle adaptatif et apprentissage automatique dans les systèmes
          dynamiques
        </li>
        <li>
          Intégration de l’IA dans les systèmes de contrôle de véhicules
          autonomes
        </li>
        <li>
          Défis et perspectives de l’IA dans les systèmes de contrôle en temps
          réel
        </li>
      </ul>
    ),
    accordion_id: "six",
    collapsed: "collapsed",
    aria_expanded: false,
    show: "",
  },
  {
    id: 7,
    question: "Cybersécurité et Protection des Données",
    answer: (
      <ul>
        <li>- Techniques de détection et de prévention des cyberattaques</li>
        <li>- Sécurité des systèmes informatiques et des réseaux</li>
        <li>- Cryptographie et protection des données sensibles</li>
        <li>
          - Intelligence artificielle pour la détection des menaces et l’analyse
          de sécurité
        </li>
        <li>
          - Conformité réglementaire et gouvernance en matière de cybersécurité
        </li>
      </ul>
    ),
    accordion_id: "seven",
    collapsed: "collapsed",
    aria_expanded: false,
    show: "",
  },
  {
    id: 8,
    question: "Modélisation biologique et prévision des maladies",
    answer: (
      <ul>
        <li>
          - Modèles mathématiques et informatiques pour prédire la propagation
          des maladies
        </li>
        <li>
          - Analyse des données épidémiologiques pour la prévision des maladies
        </li>
        <li>
          - Études longitudinales et conceptions de cohortes pour comprendre
          l'étiologie des maladies
        </li>
        <li>
          - Mise en œuvre de programmes de vaccination et de stratégies de
          prévention des maladies
        </li>
      </ul>
    ),
    accordion_id: "huit",
    collapsed: "collapsed",
    aria_expanded: false,
    show: "",
  },
  {
    id: 9,
    question: "Natural language processing (NLP)",
    answer: (
      <ul>
        <li>- Syntactic and semantic analysis</li>
        <li>- Named entity recognition</li>
        <li>- Co-reference resolution</li>
        <li>- Automatic text summarization</li>

        <li>- Machine translation</li>
        <li>- Sentiment analysis</li>
        <li>- Text generation</li>
        <li>- Speech recognition and speech synthesis</li>

        <li>- Automatic question answering</li>
        <li>- Topic modeling</li>
        <li>- Word embeddings learning</li>
        <li>- Dialogue and conversational systems</li>

        <li>- Fraud detection and content filtering</li>
        <li>- Information extraction</li>
        <li>- Opinion and emotion analysis</li>
        <li>- Text mining and text classification</li>

        <li>- Natural language understanding (NLU)</li>
        <li>- Language-based human-computer interaction </li>
        <li>- Transforming text into structured data</li>
      </ul>
    ),
    accordion_id: "heigt",
    collapsed: "collapsed",
    aria_expanded: false,
    show: "",
  },
];

const faq_content = {
  title: "FAQ Here",
  sm_info:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
const { title, sm_info } = faq_content;

const FAQArea = ({ style }: any) => {
  return (
    <>
      <div className={`faq-area ${style && "pt-115"} pb-90`}>
        <div className="container">
          <div className="row ">
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2"></div>
          </div>
          <div className="row sujet">
            <div className="col-xl-6 col-lg-6">
              <div className="faq-box faq_style faq-box-white">
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
                        <div
                          className="accordion-content faq_content"
                          style={{ color: "#052c65" }}
                        >
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="faq-right-content text-center">
                <Image
                  className="bounce-animate"
                  src={faq_img}
                  alt="theme-pure"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQArea;
