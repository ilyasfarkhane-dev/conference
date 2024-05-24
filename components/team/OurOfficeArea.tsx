

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