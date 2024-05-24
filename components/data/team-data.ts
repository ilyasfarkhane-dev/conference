import { StaticImageData } from "next/image";
import team_avatar_1 from  "../../public/assets/img/team/team01.jpg";
 import team_avatar_2 from  "../../public/assets/img/team/team02.jpg";
// import team_avatar_3 from  "../../public/assets/img/team/team03.jpg";
// import team_avatar_4 from  "../../public/assets/img/team/team04.jpg";
// import team_avatar_5 from  "../../public/assets/img/team/team05.jpg";
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
        name: "Sanaa EL Filali",
        job_title: "Université Hassan II de Casablanca | Maroc",
        sm_info: "Professeur au département de Mathématiques et informatique à la faculté des sciences Ben M'Sik à l'Université Hassan II de Casablanca, Maroc",
    },
    {
        id: 2,
        shape: team_shape,
        avatar:  team_avatar_2,
        name: "Kawtar Benghazi Akhlaki",
        job_title: "Université de Grenade | Espagne ",
        sm_info: "Professeur associé au département de langages et systèmes informatiques de l'Université de Grenade | Espagne.",
    },
    
]
export default team_data
