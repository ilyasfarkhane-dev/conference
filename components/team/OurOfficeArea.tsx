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
      title: "Pr. Bentaib Mohssine",
      name: " (FSBM, Casablanca Morocco)",
    },
    { title: "Pr. Nawal Sael", name: "(FSBM, Casablanca Morocco)" },
    { title: "Pr. Mohamed Ghazouani", name: "(FSBM, Casablanca Morocco)" },
    { title: "Pr. Mounir Sadiq", name: "(FSBM, Casablanca Morocco)" },
  ];
  const publication = [
    { title: "Pr. Moussaid Laila", name: "(ENSAM, Casablanca Morocco)" },
    { title: "Pr. Benlahmar El Habib", name: "(FSBM, Casablanca Morocco)" },
    {
      title: "Pr. Marzak Abdelaziz  ",
      name: " (FSBM, Casablanca Morocco)",
    },
    { title: "Pr. Omar Zahour ", name: "(FSBM, Casablanca Morocco)" },
  ];
  const speakers = [
    { title: "Pr. Azouazi Mohamed ", name: "(FSBM, Casablanca Morocco)" },
    { title: "Pr. Benlahmar El Habib", name: "(FSBM, Casablanca Morocco)" },
    {
      title: "Pr. Marzak Abdelaziz  ",
      name: " (FSBM, Casablanca Morocco)",
    },
    { title: "Pr.  Silkan Hassan ", name: "(FS-UNIV-CD ,El Jadida,Morocco)" },
    { title: "Pr. Benabbou Faouzia ", name: "(FSBM, Casablanca Morocco)" },
  ];

  const local = [
    { title: "Oumaima Hourrane", name: "(FSBM, Casablanca Morocco)" },
    { title: "Fatima Zahra Alaoui ", name: "(FSBM, Casablanca Morocco)" },
    {
      title: "Laila Eljiani ",
      name: " (FSBM, Casablanca Morocco)",
    },
    { title: "El Yazid Radid ", name: "(FSBM, Casablanca Morocco)" },
    { title: "Adil Karim", name: "(FSBM, Casablanca Morocco)" },

    { title: "Banou Zouheir", name: "(FSBM, Casablanca Morocco)" },
    { title: "Bouhlal Meriem ", name: "(FSBM, Casablanca Morocco)" },
    {
      title: "Aarika  Kawtar ",
      name: " (FSBM, Casablanca Morocco)",
    },
    { title: "Hafsa Ouchraa", name: "(FSBM, Casablanca Morocco)" },
    { title: "Abdeljalil Elhassani ", name: "(FSBM, Casablanca Morocco)" },

    { title: "ILyas Farkhane ", name: "(FSBM, Casablanca Morocco)" },
    { title: "Ibtissame Ezzahoui", name: "(FSBM, Casablanca Morocco)" },
    { title: "Tarsi mariame", name: "(FSBM, Casablanca Morocco)" },
    { title: "MIHRAB FADOUA", name: "(FSBM, Casablanca Morocco)" },
    { title: "Mohamed Akram Lamhour", name: "(FSBM, Casablanca Morocco)" },
    { title: "Oussama Zemmnazi ", name: "(FSBM, Casablanca Morocco)" },
  ];

  const professionals2 = [
    { title: "Pr. Aamre Khalil", name: "Univ-Lorraine, France" },
    { title: "Pr. ACHTAICH Khadija", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. ACHTAICH Naceur", name: "(FSBM-UNIVH2C, MOROCCO)" },
    {
      title: "Pr. Ait Abdelouahed Rachida ",
      name: "(FSBM-UNIVH2C, MOROCCO)",
    },
    { title: "Pr. Ait Daoud Mohammed", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Ahajjam Tarik", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Anass Rghioui", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Anderson Rocha", name: "(Unicamp, Brazil)" },
    { title: "Pr. AOUHASSI Sara", name: "(ENSAD-UNIVH2C, MOROCCO)" },
    { title: "Pr. Ardchird Soufiane", name: "(ENCG-UNIVH2C, MOROCCO)" },
    { title: "Pr. Ataa Allah Fadoua", name: "(IRCAM, MOROCCO)" },
    { title: "Pr. Azzouazi Mohamed  ", name: "(FSBM-UNIVH2C, MOROCCO)" },
    {
      title: "Pr. Bahaj Mostafa",
      name: "(ENSA, Ibn Zohr University, Agadir, Morocco)",
    },

    { title: "Pr. Banane Mouad", name: "(FSJES-UNIVH2C, Morocco)" },
    { title: " Pr. Behja Hicham", name: "(ENSEM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Belangour Abdessamad", name: "(FSBM-UNIVH2C, MOROCCO)" },

    { title: "Pr. Ben Lahmar El Habib", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Benabbou Faouzia", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Benghazi Akhlaki Kawtar", name: "(Univ Grenade, Espagne)" },

    { title: "Pr. Benlahmar El Habib", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Bentaib Mouhcine", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Bouattane Omar", name: "(ENSAM-UNIVH2C, MOROCCO)" },
    {
      title: "Pr. Bouhrma Mohamed",
      name: "(USTM Nouakchott, Mauritania)",
    },
    { title: "Pr. Chemlal Yman", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Daif Abderrahmane", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Dabounou Jaouad", name: "(FST-UNIVH1, MOROCCO)" },

    { title: "Pr. Dandache Abbas", name: "(Univ-Lorraine, France)" },
    { title: "Pr. Debauche Olivier", name: "(UNIVERSITY OF LIÈGE (BELGIUM))" },
    {
      title: "Pr. Diakité Mohamed Lamine",
      name: "(USTM Nouakchott, Mauritania)",
    },
    {
      title: " Pr. Doukkali Sdigui Abdlaziz",
      name: "(ENSIAS-UNIVM5, MOROCCO)",
    },
    { title: "Pr. Douzi Khadija", name: "(FSTM-UNIVH2C, MOROCCO)" },
    { title: "Pr. El Adnani Mustapha", name: "(FST-UNIVH2C, MOROCCO)" },
    { title: "Pr. El Filali Sanaa", name: "(FSBM-UNIVH2C, MOROCCO)" },
    {
      title: "Pr. EL GHOUMARI Mohammed Yassine",
      name: "(ENCG-UNIVH2C, MOROCCO)",
    },

    { title: "Pr. El Guemmat Kamal", name: "(ENSET-UNIVH2C, MOROCCO)" },
    {
      title: "Pr. El Habouz Youssef",
      name: "(IGDR - Institute of Genetics and Development of Rennes, Rennes University | France)",
    },
    { title: "Pr. El younoussi Yacine", name: "(ENSA-UNIVAE, MOROCCO)" },
    { title: "Pr. Erraissi Allae", name: "(FPSB-UNIVCD, Morocco)" },
    { title: "Pr. Ettaoufik Abdelaziz", name: "( FSBM-UNIVH2C, MOROCCO)" },
    {
      title: "Pr. Fakir Mohamed",
      name: "(Sidi Mohamed Ben Abdellah University, Fez, Morocco)",
    },
    { title: "Pr. Fabrice Monteiro", name: "(Univ-Lorraine, France)" },
    { title: "Pr. Ghanimi Fadoua", name: "(ENSC-UNIVIT, MOROCCO)" },

    { title: "Pr. Ghazouani Mohamed", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Hain Mustapha", name: "(ENSAM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Hanoune Mostafa", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Hattaf Khalid", name: "(CRMEF of Casablanca, MOROCCO)" },
    { title: "Pr. Imane Lmati", name: "(FST-UNIVH1, MOROCCO)" },
    { title: "Pr. Jarir Zahi", name: "(FSS-UNIVCA, MOROCCO)" },
    { title: "Pr. Jebbar Mustapha", name: "(EST-UNIVH2C, Morocco)" },

    { title: "Pr. Khadija Sabiri", name: "(Senior Researcher at Fraunhofer)" },
    {
      title: "Pr. khammal Adil",
      name: "(AIAC Mohamed VI, Casablanca, Morocco)",
    },
    {
      title: "Pr. Kikomba Kahungu Michael",
      name: "(ISP-Gombe-Kinshasa, Democratic Republic of the Congo)",
    },
    {
      title: "Pr. Lachgar Ahmed",
      name: "(ENSIAS, Mohammed V University in Rabat, Morocco)",
    },
    { title: "Pr. Labriji El Houssine", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Lahby Mohamed", name: "(ENS-UNIVH2C, MOROCCO)" },
    { title: "Pr. Lamiae Demraoui", name: "(FEG, USMS, MOROCCO)" },
    { title: "Pr. Mahraz Mohamed Adnane", name: "(FSDM-UNIVSMBA, MOROCCO)" },
    { title: "Pr. Manuel Noguera Gracia", name: "(Univ Grenade, Espagne)" },
    { title: "Pr. Mansouri Khalifa", name: "(ENSET-UNIVH2C, MOROCCO)" },
    { title: "Pr. Marzak Abdelaziz", name: "(FSBM-UNIVH2C, MOROCCO)" },

    { title: "Pr. Mbarki Samir", name: "(FS-UNIV IBN TOFAIL, MOROCCO)" },
    { title: "Pr. Merzouk Soukaina", name: "(FPSB-UNIVUCD, MOROCCO)" },
    { title: "Pr. Mourchid Mohammed", name: "(FS-UNIV IBN TOFAIL, MOROCCO)" },
    { title: "Pr. Moussaid Khalid", name: "(FSAC-UNIVH2C, MOROCCO)" },

    { title: "Pr. Moutachaouik Hicham", name: "(ENSAM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Namir Abdelwahed", name: "(FSBM-UNIVH2C, MOROCCO)" },
    {
      title: "Pr. Nanne Mohamedade Farouk",
      name: "(USTM, Nouakchott, Mauritania)",
    },
    { title: "Pr. Nassar Mahmoud", name: "(ENSIAS-UNIVM5, MOROCCO)" },
    { title: "Pr. Naziha Laaz", name: "(EHTP, MOROCCO)" },

    {
      title: "Pr. Nouri Anas",
      name: "(FSK-UNIV Ibn Tofail, Kenitra, Morocco)",
    },
    { title: "Pr. Nouh Said", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Omary Fouzia", name: "(FSR-UNIVMD5, MOROCCO)" },
    { title: "Pr. Ouahabi Sara", name: "(FSBM-UNIVH2C, MOROCCO)" },
    {
      title: "Pr. Ouahman Abdellah",
      name: "(FSSM, Cadi Ayyad University, Marrakech, Morocco)",
    },
    { title: "Pr. Ounacer Soumaya", name: "(FSBM-UNIVH2C, MOROCCO)" },
    {
      title: "Pr. Qjidaa Hassan",
      name: "( FST, Abdelmalek Essaâdi University, Tangier, Morocco)",
    },
    { title: "Pr. Rachdi Mohamed", name: "(ENSAD-UNIVH2C, MOROCCO)" },
    { title: "Pr. Riffi Jamal", name: "(FSDM-UNIVSMBA, MOROCCO)" },
    { title: "Pr. Rochd Yassir", name: "(ENSA-UNIVH1, MOROCCO)" },

    { title: "Pr. Rochd Yassir", name: "(ENSA-UNIVH1, MOROCCO)" },
    { title: "Pr. Saadane Rachid", name: "(EHTP-UNIVH2C, MOROCCO)" },
    { title: "Pr. Sadiq Abdelalim", name: "(FS-UNIV IBN TOFAIL, MOROCCO)" },
    { title: "Pr. Sadik Mounir", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Sael Nawal", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Sara Arezki", name: "(FST-UNIVH1, MOROCCO)" },
    { title: "Pr. Sbai Hanae", name: "(FSTM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Sekhara Youssef", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Silkan Hassan", name: "(FSJ-UNIVCD, MOROCCO)" },
    { title: "Pr. Tabii Youness", name: "(ENSIAS, UNIV-MEDV ,Rabat)" },

    { title: "Pr. Tragha Abderrahim", name: "( FSBM-UNIVH2C, MOROCCO)" },
    {
      title: "Pr. Yousfi Abderrahim",
      name: "(Sidi Mohamed Ben Abdellah University, Fez, Morocco)",
    },
    { title: "Pr. Yousfi Noura", name: "(FSBM-UNIVH2C, MOROCCO)" },
    { title: "Pr. Zahour Omar", name: "(FSBM-UNIVH2C, MOROCCO)" },

    { title: "Pr. Zellou Ahmed", name: "(ENSIAS-UNIVM5, MOROCCO)" },
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

        <h4 className="h5 fw-bold text-muted my-4">
          Publicity & Communication Chairs
        </h4>

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

        <h4 className="h5 fw-bold text-muted my-4">Registration Chairs</h4>

        <div className="py-4">
          <div className="container ">
            <div className="row g-4 d-flex justify-content-center">
              {registration.map((registration, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-center p-4 bg-light rounded shadow-sm"
                >
                  <p className="mb-0">{registration.title}</p>
                  <p className="mb-0">{registration.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h4 className="h5 fw-bold text-muted my-4">Publication Chairs</h4>

        <div className="py-4">
          <div className="container ">
            <div className="row g-4 d-flex justify-content-center">
              {publication.map((publication, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-center p-4 bg-light rounded shadow-sm"
                >
                  <p className="mb-0">{publication.title}</p>
                  <p className="mb-0">{publication.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h4 className="h5 fw-bold text-muted my-4">Speakers Session Chairs</h4>

        <div className="py-4">
          <div className="container ">
            <div className="row g-4 d-flex justify-content-center">
              {speakers.map((speakers, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-center p-4 bg-light rounded shadow-sm"
                >
                  <p className="mb-0">{speakers.title}</p>
                  <p className="mb-0">{speakers.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h4 className="h5 fw-bold text-muted my-4">
          Organizing Local Committee (Juniors)
        </h4>

        <div className="py-4">
          <div className="container ">
            <div className="row g-4 d-flex justify-content-center">
              {local.map((local, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-lg-3 d-flex flex-column align-items-center justify-content-center p-4 bg-light rounded shadow-sm"
                >
                  <p className="mb-0">{local.title}</p>
                  <p className="mb-0">{local.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h4 className="h5 fw-bold text-muted my-4">Scientific Committee</h4>

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
