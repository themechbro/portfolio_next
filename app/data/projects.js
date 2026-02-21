export const projects = [
  {
    title: "LinkedIn-Style Professional Social Platform",
    period: "2025 - Present",
    impact:
      "Designed fan-out feed architecture, HLS video streaming pipeline and redis based caching for faster data retrieval",
    description:
      "Built a professional social platform with posts, nested comments, profiles, media uploads, and timeline generation. Implemented JWT-layered authentication between Express and Spring Boot microservices.",
    outcomes: [
      "Reduced high-read feed pressure with Redis cache-aside strategy.",
      "Enabled adaptive playback using HLS chunked streaming and FFmpeg processing.",
      "Strengthened service boundaries with secure internal JWT-based communication.",
    ],
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Java Spring Boot",
      "Microservices",
      "FFmpeg",
      "Redis",
      "Material UI",
      "Joy UI",
      "Tailwind CSS",
    ],
    image: "/projects/linkedup.png",
    imageAlt: "Preview of the LinkedIn-style social platform with feed cards.",
    imageLabel: "Feed + Media Experience",
    caseStudy: {
      overview:
        "LinkedUp is a production-grade LinkedIn-style platform built with a Node.js gateway, Spring Boot microservices, PostgreSQL, Redis, and object storage for scalable social interactions and media delivery.",
      problem:
        "Monolithic designs create bottlenecks under high feed read load, media-heavy traffic, and cross-module dependencies. LinkedUp solves this with service isolation, cache-first reads, and optimized data flow between systems.",
      architecture: [
        "Frontend: Next.js on Vercel",
        "Gateway: Node.js + Express on Render",
        "Microservices: Spring Boot on Render",
        "Database: PostgreSQL on Supabase",
        "Cache: Redis on Upstash",
        "Storage: Krutrim Object Storage",
        "UI Libraries: Material UI, Joy UI and Tailwind CSS",
      ],
      highlights: [
        "Scalable feed generation with Redis cache-aside",
        "Secure internal JWT authentication between services",
        "PostgreSQL full-text search with GIN indexes",
        "HLS video streaming pipeline and sprite generation using FFmpeg",
        "Distributed Redis Lua token-bucket rate limiting",
        "Nested comments, likes, and optimistic UI updates",
      ],
      learnings: [
        "Distributed system design",
        "Microservice authentication patterns",
        "Redis caching and invalidation strategies",
        "Media streaming optimization",
        "Database performance tuning",
      ],
      nextSteps: [
        "Real-time notifications",
        "WebSocket integration",
        "Feed fan-out optimization",
        "Message delivery improvements",
      ],
    },
    link: "https://github.com/themechbro/linkedup",
  },
  {
    title: "Management System (Internal) - CSIR India",
    period: "2024 - Present",
    impact: "Enabled secure uploads, validations, and filing status tracking",
    description:
      "Developed an internal IP filing portal with modular backend services and optimized PostgreSQL queries for consistent performance under real usage.",
    outcomes: [
      "Stabilized filing workflows with secure uploads and validation gates.",
      "Improved query consistency for smoother status tracking under real usage.",
      "Delivered maintainable service modules for internal team scalability.",
    ],
    tech: ["Next.js", "Node.js", "Express", "PostgreSQL", "Redux"],
    image: "/projects/Internal Mangaement.png",
    imageAlt:
      "Preview of the CSIR internal management portal with forms and status table.",
    imageLabel: "Internal Filing Dashboard",
    link: "https://github.com/themechbro",
  },
  {
    title: "YelpCamp Web App",
    period: "2023",
    impact:
      "Built full CRUD workflows with geolocation and cloud media support",
    description:
      "Created a full-stack campsite platform with geolocation mapping, image uploads, scalable routing patterns, and production-style CRUD architecture.",
    outcomes: [
      "Shipped complete CRUD flows with map-driven discovery experience.",
      "Integrated media upload pipeline for user-generated campsite content.",
      "Applied scalable routing and middleware patterns for feature growth.",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Cloudinary", "Mapbox"],
    image: "/projects/yelpcamp.png",
    imageAlt: "Preview of YelpCamp app with map and campsite cards.",
    imageLabel: "Map + Listing View",
    link: "https://github.com/themechbro",
  },
];
