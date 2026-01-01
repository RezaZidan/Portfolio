export type Achievement = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2023",
    category: "Networking",
    image: "/certificates/ccna-introduction-to-networks.jpg",
  },
  {
    id: 2,
    title: "NDG Linux Unhatched",
    issuer: "Cisco Networking Academy",
    date: "2023",
    category: "System / Linux",
    image: "/certificates/ndg-linux-unhatched.jpg",
  },
  {
    id: 3,
    title: "Hackfest 2025 Participant",
    issuer: "Hackfest 2025",
    date: "2025",
    category: "Competition",
    image: "/certificates/hackfest-2025.jpg",
  },
  {
    id: 4,
    title: "ITechno Cup 2024 Participant (Web Design)",
    issuer: "ITechno Cup",
    date: "2024",
    category: "Competition",
    image: "/certificates/itechno-cup-2024-web-design.jpg",
  },
  {
    id: 5,
    title: "KSM SPNJ – Website Division Member",
    issuer: "KSM Sahabat Politeknik Negeri Jakarta",
    date: "2023",
    category: "Organization",
    image: "/certificates/ksm-spnj-website-division.jpg",
  },
  {
    id: 6,
    title: "Chairman of KSM SPNJ",
    issuer: "KSM Sahabat Politeknik Negeri Jakarta",
    date: "2024",
    category: "Leadership",
    image: "/certificates/ksm-spnj-chairman.jpg",
  },
  {
    id: 7,
    title: "ITechno Cup 2025 IoT Finalist",
    issuer: "ITechno Cup",
    date: "2025",
    category: "IoT",
    image: "/certificates/itechno-cup-2025-iot-finalist.jpg",
  },
];
