export type EducationItem = {
  school: string;
  major: string;
  period: string;
  description: string;
  logo: string;
};

export const education: EducationItem[] = [
  {
    school: "Politeknik Negeri Jakarta",
    major: "Applied Bachelor – Informatics and Computer Engineering",
    period: "2023 – Present",
    description: `
Continued studies at the Jakarta State Polytechnic, majoring in Informatics and Computer Engineering with a focus on web development, design, networking, IoT, and cybersecurity.

• Active member of the Student Study Group (KSM) Friends of the Jakarta State Polytechnic, participating in technical and soft skills training.
• Trusted as Chair of KSM for one year, responsible for managing routine activities, leading internal project collaborations, and building a professional learning environment.
• Acted as a driving force in the organization's transformation towards a more progressive and collaborative direction.
• Actively participated in various technology competitions to broaden practical experience in the IT field.
    `,
    logo: "https://upload.wikimedia.org/wikipedia/id/1/16/Logo_Politeknik_Negeri_Jakarta.jpg",
  },
  {
    school: "State Vocational School 21 Jakarta",
    major: "Vocational School – Software Engineering (RPL)",
    period: "2020 – 2023",
    description: `
Studied at SMK 21 Jakarta majoring in Software Engineering (RPL) with a focus on object-oriented programming (OOP), web development, and application development.

• Mastered the basics of algorithms and data structures.
• Implemented desktop and web-based systems during practical learning.
• Actively participated in curriculum and additional national-level training programs.
• Took part in several national-level competitions to strengthen problem-solving and technological innovation skills.
    `,
    logo: "https://www.smkn21jakarta.sch.id/wp-content/uploads/2024/10/cropped-WhatsApp_Image_2024-10-23_at_15.07.15_167d8703-removebg-preview.png",
  },
];
