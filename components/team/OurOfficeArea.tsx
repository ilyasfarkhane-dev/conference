

const OurOfficeArea = () => {

   
      
      const professionals = [
        { title: "Pr.", name: "M. RACHIK" },
        { title: "Pr.", name: "J. BOUYAGHROUMNI" },
        { title: "Pr.", name: "S. BIDAH" },
        { title: "Pr.", name: "K. ADNAOUI" },
        { title: "Pr.", name: "H. LABRIJI" },
        { title: "Pr.", name: "A. EL ADRAOUI" },
        { title: "Pr.", name: "H. FERJOUCHIA" },
        { title: "Pr.", name: "A. NAMIR" },
        { title: "Dr.", name: "I. KHALOUFI" },
        { title: "Dr.", name: "M. KARIM" },
        { title: "Dr.", name: "Y. BENFATAH" },
        { title: "Dr.", name: "M. LAFIF" },
        { title: "Dr.", name: "A. KOUIDERE" },
        { title: "Dr.", name: "O. AIT LMLOUDDEN" },
        { title: "Dr.", name: "A. ESSOUNAINI" },
        { title: "Phd.", name: "I. DEHAJ" },
        { title: "Phd.", name: "M. REDOUANE" },
        { title: "Phd.", name: "M. KADI" },
        { title: "Phd.", name: "A. KHADDAR" },
      ];
      
      const professionals2 = [
        { title: "Pr. A. EL ADRAOUI", name: "(FSBM, Casablanca)" },
        { title: "Pr. K. HATTAF", name: "(CRMEF Casablanca)" },
        { title: " Pr. A. LABZAI", name: "(CRMEF Essaouira)" },
        { title: "Pr. M. IZID", name: "(FSBM, Casablanca)" },
        { title: "Pr. H. BOUTAYEB", name: "(FSBM, Casablanca)" },
        { title: "Pr. T. AHAJJAM", name: "(FSBM, Casablanca)" },
        { title: "Pr. I. ELBERRAI", name: "(FSBM, Casablanca)" },
        { title: "Pr. O. ZAKARY", name: "(FSBM, Casablanca)" },

        { title: "Pr. K. ADNAOUI", name: "(FSBM, Casablanca)" },
        { title: " Pr. M. AZOUAZI", name: "(FSBM, Casablanca)" },
        { title: "Pr. M. AAMRI", name: "(FSBM, Casablanca)" },
        { title: "Pr. N. ACHTAICH", name: "(FSBM, Casablanca)" },
        { title: "Pr. O. BALATIF", name: "(FSBM, Casablanca)" },
        { title: "Pr. N. YOUSFI", name: "(FSBM, Casablanca)" },
        { title: "Pr. A. NAMIR", name: "(FSBM, Casablanca)" },

        { title: "Pr. A. BELANGOUR", name: "(FSBM, Casablanca)" },
        { title: " Pr. A. DAIF", name: "(FSBM, Casablanca)" },
        { title: "Pr. T. AHAJJAM", name: "(FSBM, Casablanca)" },
        { title: "Pr.  A. Tridane", name: "(United Arab Emirates University, Al Ain, UAE)" },
        { title: "Pr. E. LOTFI", name: "(FSBM, Casablanca)" },
        { title: "Pr. H. LABRIJI", name: "(FSBM, Casablanca)" },
        { title: "Pr. M. MAGRI", name: "(FSAC, Casablanca)" },

        { title: "Pr. F. LAHMIDI", name: "(FSBM, Casablanca)" },
        { title: "Pr. F. BENABBOU", name: "(FSBM, Casablanca)" },
        { title: " Pr. S. BENKADDOUR", name: "(FSBM, Casablanca)" },
        { title: "Pr. J. BOUYAGHROUMNI", name: "(FSBM, Casablanca)" },
        { title: "Pr. M. EL AALLAOUI", name: "(FSJES ainsbaa, Casablanca)" },
        { title: "Pr. H. EL BOUANANI", name: "(FSJES ainsbaa, Casablanca)" },
        { title: "Pr. Y. EL FOUTAYENI", name: "(ENSA, Marrakech)" },

        { title: "Pr. M. C. EL JAI", name: "(Perpignan, France)" },
        { title: "Pr. A. EL JAI", name: "(Perpignan, France)" },
        { title: " Pr. M. ELHIA", name: "(FSJES ainsbaa, Casablanca)" },
        { title: "Pr. A. EZZIANI", name: "(FSJES ainsbaa, Casablanca)" },
        { title: "Pr. R. GUERBAZ", name: "(FSJES ainsbaa, Casablanca)" },
        { title: "Pr. K. CHOUYEKH", name: "(EMSI, Casablanca)" },
        { title: "Pr. H. AIT LMAHJOUB", name: "(ENSAM, Casablanca)" },

        { title: "Pr. M. ZAHID", name: "(FSS, Marrakech)" },
        { title: "Pr. R. AIT ABDELOUAHED", name: "(FSBM, Casablanca)" },
        { title: "Pr. L. MANIAR", name: "(FSS, Marrakech)" },
        { title: "Pr. K. MANSOURI", name: "(ENSET, Casablanca)" },
        { title: "Pr. M. RACHIK", name: "(FSBM, Casablanca)" },
        { title: "Pr. Z. RACHIK", name: "(EHTP, Casablanca)" },
        { title: "Pr. M. RANNAN", name: "(FSJES ainsbaa, Casablanca)" },

        { title: "Pr. S. SAADI", name: "(FSBM, Casablanca)" },
        { title: "Pr. M. TALBI", name: "(FSBM, Casablanca)" },
        { title: "Pr. A. TRAGHA", name: "(FSBM, Casablanca)" },
        { title: "Pr. A. YAACOUBI", name: "(FSJES ainsbaa, Casablanca)" },
        { title: "Pr. T. ZARI", name: "(FSJES ainsbaa, Casablanca)" },
        { title: "Pr. M. ALKAMA", name: "(FSJES ain chock, Casablanca)" },
        { title: "Pr. Y. BAALA", name: "(FSBM, Casablanca)" },
        { title: "Pr. S. BENRHILA", name: "(FSBM, Casablanca)" },
        { title: "Pr. L. EL YOUSSOUFI", name: "(FSBM, Casablanca)" },
        { title: "Pr. A. AILANE", name: "(ENSA, Khouribga)" },

        { title: "Pr. S. ELOUARITI", name: "(FSBM, Casablanca)" },
        { title: "Pr. M. LHOUS", name: "(FSAC, Casablanca)" },
        { title: "Pr. H. EL AMRI", name: "(ENS, Casablanca)" },
        { title: "Pr. H. BASSOU", name: "(FSBM, Casablanca)" },
        { title: "Pr. K. ACHTAICH", name: "(FSBM, Casablanca)" },
        { title: "Pr. B. AHARMIM", name: "(FSBM, Casablanca)" },
        { title: "Pr. H. BENLAHMAR", name: "(FSBM, Casablanca)" },
        { title: "Pr A. BENLANGOUR", name: "(FSBM, Casablanca)" },
        { title: "Pr S. BENNANI", name: "(FSBM, Casablanca)" },
        { title: "Pr K.  BOUZKOURA", name: "(ENSA, Khouribga)" },

        { title: "Pr S. FILALI", name: "(FSBM, Casablanca)" },
        { title: "Pr M. GUESSOUS", name: "(FSBM, Casablanca)" },
        { title: "Pr M. RIHANI", name: "(FSBM, Casablanca)" },
        { title: " Pr I. AGMOUR", name: "(FSBM, Casablanca)" },
        { title: "Pr A. ALAMI LAAROUSSI", name: "(ENS, Martil)" },
        { title: "Pr M. BACHRAOUI", name: "(FSBM, Casablanca)" },
        { title: "Pr. M. KADIRI", name: "(FSJES ainsbaa, Casablanca)" },
        { title: " Pr H. SI MHAMD", name: "(FST, Errachidia)" },
        { title: "Dr. A. LABRIJI", name: "(FSBM, Casablanca)" },
        { title: "Pr. A. EL BHIH", name: "(EMSI, Casablanca)" },

        { title: "Pr. M. BARMAKI", name: "(FSBM, Casablanca)" },
        { title: "Pr. M. EL OUARRACHI", name: "(FSBM, Casablanca)" },
        { title: "Pr M. BELAM", name: "(FP, Khouribga)" },
        { title: "Pr A. ABTA", name: "(FP, Safi)" },
        { title: "Pr K. LOUARTITI", name: "(ENSA, Tétouan)" },
        { title: "Pr H. LAARABI", name: "(FSBM, Casablanca)" },
        { title: "Pr A. MARZAK", name: "(FSBM, Casablanca)" },
        { title: "Pr. J. MOULINE", name: "(FSBM, Casablanca)" },
        { title: "Pr S. NOUH", name: "(FSBM, Casablanca)" },
        { title: "Pr A. OUAZZANI", name: "(FSBM, Casablanca)" },

        { title: "Pr N. SAEL", name: "(FSBM, Casablanca)" },
        { title: "Pr. A. ABOUSSOROR", name: "(FSBM, Casablanca)" },
        { title: "Pr. A. ABDELHAK", name: "(FS, Kénitra)" },
        { title: "Pr. F. EL KIHEL", name: "(ENSAM, Casablanca)" },
        { title: "Pr. I. ABOUELKHEIR", name: "(FP, Khouribga)" },
      ];
    
    return (
        <div className="bg-white py-5 mt-5">
      <div className="container text-center">
        
       
        <h2 className="display-5 fw-bold mt-5">Comité d'organisation</h2>
        <h4 className="h5 fw-bold text-muted my-4">Faculté des sciences Ben M'Sik</h4>
        <div className="py-4">
          <div className="container">
            <div className="row g-4">
              {professionals.map((professional, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-center p-4 bg-light rounded shadow-sm"
                >
                  <p className="mb-0 text-center">{professional.title} {professional.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h4 className="h5 fw-bold text-muted my-4">Comité scientifique</h4>
        <div className="py-4">
          <div className="container">
            <div className="row g-4">
              {professionals2.map((professional, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-center p-4 bg-light rounded shadow-sm"
                >
                  <p className="mb-0">{professional.title}</p>
                  <p className="mb-0">{professional.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default OurOfficeArea;