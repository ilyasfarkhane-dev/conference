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
    question: "Robotics and Automation",
    answer: (
      <ul>
        <li>- Industrial applications of robotics</li>
        <li>- Artificial intelligence in robot design</li>
        <li>- Collaborative robotics and human-machine interaction</li>
        <li>- Medical robotics and healthcare</li>
        <li>- Ethics and responsibility in robotics</li>
      </ul>
    ),
    accordion_id: "One",
    collapsed: "",
    aria_expanded: true,
    show: "show",
  },
  {
    id: 2,
    question: "Machine Learning and Artificial Intelligence",
    answer: (
      <ul>
        <li>- Machine learning models and algorithms</li>
        <li>- Neural networks and deep learning</li>
        <li>- Reinforcement learning and unsupervised learning</li>
        <li>- Applications of artificial intelligence in industrial sectors</li>
        <li>- Interpretability and transparency of AI models</li>
      </ul>
    ),
    accordion_id: "Two",
    collapsed: "collapsed",
    aria_expanded: false,
    show: "",
  },
  {
    id: 3,
    question: "Intelligent Systems and Internet of Things (IoT)",
    answer: (
      <ul>
        <ul>
          <li>- Architecture of IoT systems</li>
          <li>- Data processing in IoT systems</li>
          <li>- Security and privacy in IoT systems</li>
          <li>- Integration of AI in IoT systems</li>
          <li>- Applications and use cases of intelligent IoT systems</li>
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
    question: "Theories and Applications",
    answer: (
      <ul>
        <li>- Graph Theory and Graph Algorithms</li>
        <li>- Computational Complexity and Optimization</li>
        <li>- Parallel and Distributed Algorithms</li>
      </ul>
    ),
    accordion_id: "Foure",
    collapsed: "collapsed",
    aria_expanded: false,
    show: "",
  },
  {
    id: 5,
    question: "Data Engineering and Predictive Analytics",
    answer: (
      <ul>
        <li>- Management of massive data and Big Data architectures</li>
        <li>- Data analysis and visualization methods</li>
        <li>- Data prediction and modeling</li>
        <li>- Applications of predictive analytics in various fields</li>
        <li>- Data security and privacy in data engineering</li>
      </ul>
    ),
    accordion_id: "five",
    collapsed: "collapsed",
    aria_expanded: false,
    show: "",
  },
  {
    id: 6,
    question: "Control Systems and Artificial Intelligence",
    answer: (
      <ul>
        <li>- Control and automatic regulation techniques</li>
        <li>- Applications of AI in industrial control systems</li>
        <li>- Adaptive control and machine learning in dynamic systems</li>
        <li>- Integration of AI in autonomous vehicle control systems</li>
        <li>
          - Challenges and perspectives of AI in real-time control systems
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
    question: "Cybersecurity and Data Protection",
    answer: (
      <ul>
        <li>- Techniques for detecting and preventing cyberattacks</li>
        <li>- Security of computer systems and networks</li>
        <li>- Cryptography and protection of sensitive data</li>
        <li>
          - Artificial intelligence for threat detection and security analysis
        </li>
        <li>- Regulatory compliance and governance in cybersecurity</li>
      </ul>
    ),
    accordion_id: "seven",
    collapsed: "collapsed",
    aria_expanded: false,
    show: "",
  },
  {
    id: 8,
    question: "Biological Modeling and Disease Forecasting",
    answer: (
      <ul>
        <li>
          - Mathematical and computational models for predicting disease spread
        </li>
        <li>- Analysis of epidemiological data for disease forecasting</li>
        <li>
          - Longitudinal studies and cohort designs to understand disease
          etiology
        </li>
        <li>
          - Implementation of vaccination programs and disease prevention
          strategies
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
