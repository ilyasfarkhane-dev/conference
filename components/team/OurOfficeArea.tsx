const OurOfficeArea = () => {
  const web = [
    { title: "Pr. Omar Zahour ", name: "(FSBM, Casablanca Morocco)" },
    { title: "Pr. Sara Ouahabi", name: "(FSBM, Casablanca Morocco)" },
  ];
  const coChair = [
    { title: "Pr. Sara Ouahabi", name: "(FSBM, Casablanca Morocco)" },
    { title: "Pr. Soumaya Ounacer", name: "(FSBM, Casablanca Morocco)" },
  ];
  const professionals = [
    { title: "Pr. Marzak Abdelaziz", name: "(FSBM, Casablanca Morocco)" },
    { title: "Pr. Zahour Omar ", name: "(FSBM, Casablanca Morocco)" },
    { title: "Pr. Ouahabi Sara", name: "(FSBM, Casablanca Morocco)" },
    { title: "Pr. Ounacer  Soumaya", name: "(FSBM, Casablanca Morocco)" },
  ];
  const publicite = [
    { title: "Pr. Sanaa El Filali", name: "(FSBM, Casablanca Morocco)" },
    { title: "Pr. Soumaya Ounacer ", name: "(FSBM, Casablanca Morocco)" },
    {
      title: "Pr. Kikomba Kahungu Michael",
      name: "( ISP-Gombe-Kinshasa, Democratic Republic of the Congo)",
    },
    { title: "Pr. Soukaina Merzouk", name: "(FPS,El Jadida Morocco)" },
    { title: "Pr. Abderrahmane Daif", name: "(FSBM, Casablanca Morocco)" },
    { title: "Pr. Mohamed Ait Daoud", name: "(FSBM, Casablanca Morocco)" },
    {
      title: "Pr. Rachida Ait Abdelouahed ",
      name: "(FSBM, Casablanca Morocco)",
    },
    { title: "Pr.Mohamed Rachdi", name: "(ENSAD,Casablanca ,Morocco)" },
  ];

  const registration = [
    { title: "Pr. Omar Zahour ", name: "(FSBM, Casablanca Morocco)" },
    { title: "Pr. Abdelaziz Ettaoufik ", name: "(FSBM, Casablanca Morocco)" },
    {
      title: "Pr. Bentaib Mouhcine",
      name: " (FSBM, Casablanca Morocco)",
    },
    { title: "Pr. Nawal Sael", name: "(FSBM, Casablanca Morocco)" },
    { title: "Pr. Mohamed Ghazouani", name: "(FSBM, Casablanca Morocco)" },
    { title: "Pr. Mounir Sadiq", name: "(FSBM, Casablanca Morocco)" },
    {
      title: "Pr. Rachida Ait Abdelouahed ",
      name: "(FSBM, Casablanca Morocco)",
    },
    { title: "Pr.Mohamed Rachdi", name: "(ENSAD,Casablanca ,Morocco)" },
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
    {
      title: "Pr.  A. Tridane",
      name: "(United Arab Emirates University, Al Ain, UAE)",
    },
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
        <h4 className="h5 fw-bold text-muted my-4">Honorary Chairs</h4>

        <div className="py-4">
          <div className="container ">
            <div className="row g-4 d-flex justify-content-center">
              <div className="col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-center p-4 bg-light rounded shadow-sm">
                <p className="mb-0">Dean of Faculty of Sciences</p>
                <p className="mb-0">Ben M'sick</p>
              </div>
            </div>
          </div>
        </div>

        <h4 className="h5 fw-bold text-muted my-4">Conference Chair</h4>

        <div className="py-4">
          <div className="container ">
            <div className="row g-4 d-flex justify-content-center">
              <div className="col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-center p-4 bg-light rounded shadow-sm">
                <p className="mb-0">Pr. Omar Zahour </p>
                <p className="mb-0">(FSBM, Casablanca Morocco)</p>
              </div>
            </div>
          </div>
        </div>

        <h4 className="h5 fw-bold text-muted my-4">Conference Co-Chair</h4>

        <div className="py-4">
          <div className="container ">
            <div className="row g-4 d-flex justify-content-center">
              {coChair.map((co, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-center p-4 bg-light rounded shadow-sm"
                >
                  <p className="mb-0">{co.title}</p>
                  <p className="mb-0">{co.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h4 className="h5 fw-bold text-muted my-4">
          Sponsorship & Exhibits Chairs
        </h4>
        <div className="py-4">
          <div className="container">
            <div className="row g-4">
              {professionals.map((professional, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-center p-4 bg-light rounded shadow-sm"
                >
                  <p className="mb-0 text-center">
                    {professional.title} {professional.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h4 className="h5 fw-bold text-muted my-4">Web Chairs</h4>

        <div className="py-4">
          <div className="container ">
            <div className="row g-4 d-flex justify-content-center">
              {web.map((web, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-center p-4 bg-light rounded shadow-sm"
                >
                  <p className="mb-0">{web.title}</p>
                  <p className="mb-0">{web.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h4 className="h5 fw-bold text-muted my-4">Registration Chairs </h4>

        <div className="py-4">
          <div className="container ">
            <div className="row g-4 d-flex justify-content-center">
              {publicite.map((publicite, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-center p-4 bg-light rounded shadow-sm"
                >
                  <p className="mb-0">{publicite.title}</p>
                  <p className="mb-0">{publicite.name}</p>
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
