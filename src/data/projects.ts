export type Project = {
  slug: string;
  name: string;
  description: string;
  thumbnail: string;
  images: string[];
  tech: string[];
  introduction: string;
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "wish2padel",
    name: "Wish2Padel League Management Website",
    description:
      "A web-based padel league management system for handling player registration, league scheduling, club management, and competition data in a structured and scalable platform.",
    thumbnail: "/projects/wish2padel/thumbnail.jpg",
    images: [
      "/projects/wish2padel/home.jpg",
      "/projects/wish2padel/league.jpg",
      "/projects/wish2padel/club.jpg",
    ],
    tech: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    introduction:
      "Wish2Padel is a web-based league management platform developed for an international padel sports organization based in the Middle East. The system was designed to simplify the management of padel leagues by providing a centralized platform for player registration, league organization, match scheduling, and club administration. The main goal of this project was to deliver a reliable, user-friendly, and responsive system that could be used by both administrators and participants across different devices.",
    features: [
      "Online padel league registration system for players and teams",
      "League and match scheduling management with structured competition flow",
      "Club and team management including participant listings",
      "Admin dashboard for monitoring leagues, teams, and matches",
      "Responsive user interface built with Bootstrap for multi-device access",
      "Relational database design using MySQL to manage users, teams, leagues, and schedules",
      "Clean and maintainable PHP-based backend structure",
    ],
  },

  {
    slug: "smart-canteen",
    name: "Smart Canteen IoT-Based Food Ordering System",
    description:
      "An IoT-based smart canteen system that integrates a web application with embedded devices to enable QR-based food ordering, real-time order notifications, and automated order processing.",
    thumbnail: "/projects/smart-canteen/thumbnail.jpg",
    images: [
      "/projects/smart-canteen/home.jpg",
      "/projects/smart-canteen/order.jpg",
      "/projects/smart-canteen/iot-device.jpg",
    ],
    tech: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "MQTT",
      "Raspberry Pi",
      "Scanner",
      "Printer",
    ],
    introduction:
      "Smart Canteen is an IoT-based food ordering system developed to improve the efficiency of canteen operations by integrating a web-based ordering platform with embedded IoT devices. The system allows customers to place orders by scanning a QR code at their table, while vendors and IoT devices receive real-time order notifications through an MQTT-based communication protocol. This project demonstrates the integration of web technologies, databases, and IoT hardware into a single end-to-end system.",
    features: [
      "QR-based table ordering system using dynamic QR codes",
      "Real-time order delivery using MQTT publish-subscribe communication",
      "Tenant dashboard for managing menus, orders, and order status",
      "Automated order notification on IoT devices (LCD display and buzzer)",
      "Thermal printer integration for printing order receipts",
      "Secure backend with role-based access (admin, tenant, customer)",
      "Relational database design for orders, menus, tenants, and transactions",
      "Embedded system integration using Raspberry Pi and Python scripts",
    ],
  },
  {
    slug: "myfinance",
    name: "MyFinance – Personal Finance Management Web App",
    description:
      "A personal finance management web application designed to help users track income and expenses, manage multiple wallets, categorize transactions, and visualize financial insights in a simple and user-friendly interface.",
    thumbnail: "/projects/myfinance/thumbnail.jpg",
    images: [
      "/projects/myfinance/dashboard.jpg",
      "/projects/myfinance/transactions.jpg",
      "/projects/myfinance/analytics.jpg",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Local Storage"],
    introduction:
      "MyFinance is a personal finance management web application built to help individuals gain better control over their daily financial activities. The application allows users to record income and expenses, manage multiple wallets, and categorize transactions for clearer financial tracking. With a clean and modern interface, MyFinance focuses on usability, performance, and clarity of financial information, making it suitable for personal budgeting and financial awareness.",
    features: [
      "Dashboard displaying monthly financial summaries including total balance, income, and expenses",
      "Transaction management for income and expense records with category selection",
      "Multi-wallet support to separate cash, bank accounts, and digital wallets",
      "Transaction categorization for better financial organization and analysis",
      "Simple analytics and visual summaries to monitor spending patterns",
      "Modern responsive UI built with React, TypeScript, and Tailwind CSS",
      "Frontend powered by Vite for fast development and optimized performance",
    ],
  },
  {
    slug: "weather-app",
    name: "Weather App – Modern Weather Forecast Landing Page",
    description:
      "A modern weather forecast landing page that displays real-time weather information, hourly forecasts, and location-based data with a clean and responsive UI.",
    thumbnail: "/projects/weather-app/thumbnail.jpg",
    images: [
      "/projects/weather-app/home.jpg",
      "/projects/weather-app/hourly-forecast.jpg",
      "/projects/weather-app/location-search.jpg",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Weather API"],
    introduction:
      "Weather App is a modern landing page designed to provide users with accurate and real-time weather information in a visually appealing interface. The application fetches live weather data from a public weather API and presents current conditions, temperature, and hourly forecasts based on the user’s location or searched city. The project emphasizes clean UI design, smooth user experience, and efficient data handling using modern frontend technologies.",
    features: [
      "Real-time weather data fetched from a public Weather API",
      "Current weather conditions including temperature and weather status",
      "Hourly weather forecast display for upcoming hours",
      "City and location-based weather search functionality",
      "Responsive and modern UI built with Tailwind CSS",
      "Fast development and optimized performance using Vite",
      "Type-safe data handling with TypeScript",
    ],
  },
  {
    slug: "to-do-list",
    name: "To-Do List – Task Management Web Application",
    description:
      "A task management web application designed to help users organize daily activities, manage tasks efficiently, and track progress through a simple and intuitive interface.",
    thumbnail: "/projects/to-do-list/thumbnail.jpg",
    images: [
      "/projects/to-do-list/dashboard.jpg",
      "/projects/to-do-list/task-form.jpg",
      "/projects/to-do-list/task-list.jpg",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Blade", "CSS"],
    introduction:
      "To-Do List is a web-based task management application developed to improve personal productivity and task organization. The application allows users to create, update, complete, and delete tasks with clear categorization and status indicators. This project focuses on clean backend logic, structured database design, and a straightforward user interface suitable for everyday use.",
    features: [
      "User authentication system for personal task management",
      "Create, edit, and delete tasks with title and description",
      "Task status management (pending, completed)",
      "Simple categorization to group related tasks",
      "Clean and responsive interface using Bootstrap",
      "Relational database design using MySQL for task storage",
      "Backend logic implemented with Laravel and PHP",
    ],
  },
  {
    slug: "campus-admin-3-role",
    name: "Campus Administration System – 3 Role Management Platform",
    description:
      "A campus administration web system with three levels of administrative roles to manage academic data, organizational structure, and campus information in a centralized and role-based platform.",
    thumbnail: "/projects/campus-admin/thumbnail.jpg",
    images: [
      "/projects/campus-admin/login.jpg",
      "/projects/campus-admin/admin-dashboard.jpg",
      "/projects/campus-admin/academic-management.jpg",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Tailwind", "Blade"],
    introduction:
      "Campus Administration System is a web-based management platform designed to support academic and administrative activities within a campus environment. The system implements a three-role access control model to separate responsibilities between campus-level administrators, department administrators, and program administrators. This project focuses on structured data management, secure authentication, and scalable role-based access control to ensure efficient and organized campus operations.",
    features: [
      "Three-level role-based access control (Campus Admin, Department Admin, Program Admin)",
      "Centralized authentication system with automatic role-based redirection",
      "Management of campus organizational structure including departments and study programs",
      "Academic data management such as courses, lecturers, rooms, and schedules",
      "Academic calendar management with categorized events and attachments",
      "News and announcement management with publish status control",
      "Admin dashboard with structured navigation and management panels",
      "Secure backend architecture using Laravel and relational database design with MySQL",
    ],
  },
  {
    slug: "pos-kasir",
    name: "POS Kasir System – Cashier & Stock Admin",
    description:
      "A point-of-sale (POS) web application with separate roles for cashier and admin to handle sales transactions, product management, and stock control in a structured retail system.",
    thumbnail: "/projects/pos-kasir/thumbnail.jpg",
    images: [
      "/projects/pos-kasir/cashier.jpg",
      "/projects/pos-kasir/transaction.jpg",
      "/projects/pos-kasir/admin-stock.jpg",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    introduction:
      "POS Kasir System is a web-based point-of-sale application designed to support daily retail operations with a clear separation of responsibilities between cashier and admin roles. Cashiers focus on handling transactions efficiently, while admins manage products, pricing, and stock availability. This project emphasizes transactional accuracy, stock consistency, and role-based access control to ensure smooth and reliable sales operations.",
    features: [
      "Two-role access control system (Cashier and Admin)",
      "Cashier interface for handling sales transactions quickly and efficiently",
      "Product selection and quantity management during transactions",
      "Automatic stock deduction after each completed transaction",
      "Admin dashboard for managing products, prices, and stock levels",
      "Transaction history and sales recap for monitoring daily operations",
      "Relational database design for products, transactions, and stock records",
      "Clean and responsive POS interface optimized for cashier usage",
    ],
  },
  {
    slug: "sewa-lapangan",
    name: "Sports Venue Booking System (Sewa Lapangan)",
    description:
      "A web-based sports venue booking platform that allows users to search, book, and manage sports field reservations with role-based access and integrated booking workflows.",
    thumbnail: "/projects/sewa-lapangan/thumbnail.jpg",
    images: [
      "/projects/sewa-lapangan/home.jpg",
      "/projects/sewa-lapangan/booking.jpg",
      "/projects/sewa-lapangan/owner-dashboard.jpg",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Midtrans", "Blade"],
    introduction:
      "Sewa Lapangan is a web-based sports venue booking system designed to simplify the process of reserving sports fields such as futsal, badminton, and other facilities. The platform supports multiple user roles including general users, venue owners, and administrators. Users can browse available venues, select schedules, and make bookings, while owners manage field availability and bookings through a dedicated dashboard. This project focuses on booking logic, schedule validation, and role-based access control in a real-world commercial scenario.",
    features: [
      "Multi-role access control (User, Venue Owner, Admin)",
      "Sports venue and field listing with detailed information",
      "Real-time field availability and schedule selection",
      "Online booking flow with date and time validation",
      "Venue owner dashboard for managing fields and booking schedules",
      "Admin panel for overseeing venues, users, and system data",
      "Integration with online payment gateway (Midtrans)",
      "Relational database design for venues, fields, schedules, and bookings",
      "Modern responsive interface built with React and Tailwind CSS",
    ],
  },
];
