export interface TopicTrack {
  id: string;
  title: string;
  items: string[];
}

export const topicTracks: TopicTrack[] = [
  {
    id: "robotics",
    title: "Robotics and Automation",
    items: [
      "Industrial applications of robotics",
      "Artificial intelligence in robot design",
      "Collaborative robotics and human-machine interaction",
      "Medical robotics and healthcare",
      "Ethics and responsibility in robotics",
    ],
  },
  {
    id: "ml-ai",
    title: "Machine Learning and Artificial Intelligence",
    items: [
      "Machine learning models and algorithms",
      "Neural networks and deep learning",
      "Reinforcement learning and unsupervised learning",
      "Applications of artificial intelligence in industrial sectors",
      "Interpretability and transparency of AI models",
    ],
  },
  {
    id: "iot",
    title: "Intelligent Systems and Internet of Things (IoT)",
    items: [
      "Architecture of IoT systems",
      "Data processing in IoT systems",
      "Security and privacy in IoT systems",
      "Integration of AI in IoT systems",
      "Applications and use cases of intelligent IoT systems",
    ],
  },
  {
    id: "theories",
    title: "Theories and Applications",
    items: [
      "Graph Theory and Graph Algorithms",
      "Computational Complexity and Optimization",
      "Parallel and Distributed Algorithms",
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering and Predictive Analytics",
    items: [
      "Management of massive data and Big Data architectures",
      "Data analysis and visualization methods",
      "Data prediction and modeling",
      "Applications of predictive analytics in various fields",
      "Data security and privacy in data engineering",
    ],
  },
  {
    id: "control-systems",
    title: "Control Systems and Artificial Intelligence",
    items: [
      "Control and automatic regulation techniques",
      "Applications of AI in industrial control systems",
      "Adaptive control and machine learning in dynamic systems",
      "Integration of AI in autonomous vehicle control systems",
      "Challenges and perspectives of AI in real-time control systems",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity and Data Protection",
    items: [
      "Techniques for detecting and preventing cyberattacks",
      "Security of computer systems and networks",
      "Cryptography and protection of sensitive data",
      "Artificial intelligence for threat detection and security analysis",
      "Regulatory compliance and governance in cybersecurity",
    ],
  },
  {
    id: "biological-modeling",
    title: "Biological Modeling and Disease Forecasting",
    items: [
      "Mathematical and computational models for predicting disease spread",
      "Analysis of epidemiological data for disease forecasting",
      "Longitudinal studies and cohort designs to understand disease etiology",
      "Implementation of vaccination programs and disease prevention strategies",
    ],
  },
  {
    id: "nlp",
    title: "Natural Language Processing (NLP)",
    items: [
      "Syntactic and semantic analysis",
      "Named entity recognition",
      "Co-reference resolution",
      "Automatic text summarization",
      "Machine translation",
      "Sentiment analysis",
      "Text generation",
      "Speech recognition and speech synthesis",
      "Automatic question answering",
      "Topic modeling",
      "Word embeddings learning",
      "Dialogue and conversational systems",
      "Fraud detection and content filtering",
      "Information extraction",
      "Opinion and emotion analysis",
      "Text mining and text classification",
      "Natural language understanding (NLU)",
      "Language-based human-computer interaction",
      "Transforming text into structured data",
    ],
  },
];
