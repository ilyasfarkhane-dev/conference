"use client"
import React from "react";

const GoogleMap: React.FC = () => {
  const heroContent = {
    title: "TIM'24: 7th International Conference on Information Technology and Modeling.",
    note: "The proceedings of the TIM'24 conference will be published in Springer's CCIS series, and extended versions of selected papers will be submitted to Scopus-indexed journals.",
    location: "Faculty of Sciences Ben M'Sik | Casablanca - Morocco",
    date: "November 26 - 27, 2024",
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      padding: "20px",
      
      backgroundColor: "#f4f5f7",
      color: "#333333", 
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
      padding: "40px 30px 40px 30px",
      width: "90%",
      maxWidth: "800px",
      textAlign: "center",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#0078d4", 
    },
    text: {
      fontSize: "16px",
      lineHeight: "1.6",
      marginBottom: "20px",
      color: "#555555", 
    },
    highlight: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#00a65a",
    },
    button: {
      display: "inline-block",
      marginTop:"20px",
      marginBottom:"20px",
      padding: "10px 20px",
      color: "#ffffff",
      backgroundColor: "#0078d4", 
      textDecoration: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#005a9e",
    },
  };

  const { title, note, location, date } = heroContent;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.text}>{note}</p>
        <h4 style={styles.highlight}>{location}</h4>
        <h4 style={styles.highlight}>{date}</h4>
        <a
          href="/PRGRAM_TIM_24.pdf"
          download="Conference_Programme.pdf"
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor!)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor!)}
        >
          Download  Program
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
