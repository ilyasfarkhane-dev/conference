import { StaticImageData } from "next/image";
import team_avatar_1 from  "../../public/assets/img/team/lhabib.jpg";
 import team_avatar_2 from  "../../public/assets/img/team/kikomba.jpg";
import team_avatar_3 from  "../../public/assets/img/team/deboch.jpg";
import team_avatar_4 from  "../../public/assets/img/team/anderson.jpg";
import team_avatar_5 from  "../../public/assets/img/team/angel.jpg";
// import team_avatar_6 from  "../../public/assets/img/team/team06.jpg"; 


import team_shape from  "../../public/assets/img/shape/team-shape.png";

interface team_data_type {
    id: number;
    shape: StaticImageData;
    avatar: StaticImageData;
    name: string;
    job_title: string;
    sm_info: string;
}[]

const team_data: team_data_type[] = [
    {
        id: 1,
        shape: team_shape,
        avatar:  team_avatar_1,
        name: "Pr. El Habib Benlahmar",
        job_title: " Faculty of Sciences Ben M’Sick, Hassan II University of Casablanca,Morocco",
        sm_info: "Professor in the Department of Mathematics and Computer Science at the Faculty of Sciences Ben M'Sik at Hassan II University of Casablanca, Morocco.",
    },
    {
        id: 2,
        shape: team_shape,
        avatar:  team_avatar_4,
        name: "Pr. Anderson Rocha",
        job_title: "Institute of Computing, University of Campinas (Unicamp), Brazil",
        sm_info: "Full-Professor of Artificial Intelligence and Digital Forensics at the Institute of Computing, University of Campinas (Unicamp), Brazil.",
    },
    {
        id: 3,
        shape: team_shape,
        avatar:  team_avatar_2,
        name: "Pr. KIKOMBA KAHUNGU Michael",
        job_title: "ISP-Gombe-Kinshasa, Democratic Republic of the Congo",
        sm_info: "Professor at the Higher Pedagogical Institute of Gombe in the Democratic Republic of Congo .",
    },
    {
        id: 4,
        shape: team_shape,
        avatar:  team_avatar_3,
        name: "Pr. Olivier Debauche",
        job_title: "University of Liège (Belgium).",
        sm_info: "Researcher at the Department of Gembloux Agro-Bio Tech of the University of Liège (Belgium).",
    },
    {
        id: 5,
        shape: team_shape,
        avatar:  team_avatar_5,
        name: "Pr. Angel Ruiz Zafra",
        job_title: "University of Granada (Granada, Spain).",
        sm_info: "Professor of Computer Engineering ,Departement of Computer languages and systems , University of Granada (Granada, Spain).",
    },
   
    
]
export default team_data
