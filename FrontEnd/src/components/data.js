import React from "react"

const data = [
    {
        "projectName": "React Todo App",
        "Label": "Public",
        "description": "A simple todo application built with React hooks and local storage. Features add, edit, delete, and mark complete functionality.",
        "dateCreated": "2024-08-15",
        "fileNo": "31",
        "commits": "14",
        "collabs": "4",
        "downloads": 65,
        "shares": 18
    },
    {
        "projectName": "Python Web Scraper",
        "Label": "Private",
        "description": "Web scraping tool using BeautifulSoup and requests to extract product data from e-commerce websites with CSV export.",
        "dateCreated": "2024-08-20",
        "fileNo": "5",
        "commits": "1",
        "collabs": "1",
        "downloads": 55,
        "shares": 12
    },
    {
        "projectName": "Node.js API Server",
        "Label": "Public",
        "description": "RESTful API server built with Express.js, MongoDB, and JWT authentication for user management and data operations.",
        "dateCreated": "2024-08-10",
        "fileNo": "15",
        "commits": "6",
        "collabs": "3",
        "downloads": 10,
        "shares": 5
    },
    {
        "projectName": "CSS Animation Library",
        "Label": "Public",
        "description": "Collection of smooth CSS animations and transitions for modern web interfaces. Includes hover effects and loading spinners.",
        "dateCreated": "2024-08-25",
        "fileNo": "26",
        "commits": "10",
        "collabs": "2",
        "downloads": 382,
        "shares": 230
    },
    {
        "projectName": "JavaScript Calculator",
        "Label": "Private",
        "description": "Advanced calculator with scientific functions, memory operations, and history tracking. Built with vanilla JavaScript.",
        "dateCreated": "2024-08-12",
        "fileNo": "20",
        "commits": "09",
        "collabs": "3",
        "downloads": 79,
        "shares": 50
    },
    {
        "projectName": "Vue.js Dashboard",
        "Label": "Public",
        "description": "Interactive admin dashboard with charts, tables, and real-time data updates using Vue 3 and Chart.js integration.",
        "dateCreated": "2024-08-28",
        "fileNo": "38",
        "commits": "11",
        "collabs": "5",
        "downloads": 149,
        "shares": 101
    },
    {
        "projectName": "PHP Login System",
        "Label": "Private",
        "description": "Secure user authentication system with password hashing, session management, and email verification features.",
        "dateCreated": "2024-08-05",
        "fileNo": "21",
        "commits": "10",
        "collabs": "2",
        "downloads": 230,
        "shares": 80
    },
    {
        "projectName": "Flutter Mobile App",
        "Label": "Public",
        "description": "Cross-platform mobile application for expense tracking with offline sync and chart visualizations using Flutter framework.",
        "dateCreated": "2024-07-30",
        "fileNo": "42",
        "commits": "18",
        "collabs": "6",
        "downloads": 295,
        "shares": 167
    },
    {
        "projectName": "Django Blog Platform",
        "Label": "Private",
        "description": "Full-featured blog platform with user profiles, comments, tags, and admin panel built with Django and PostgreSQL.",
        "dateCreated": "2024-08-18",
        "fileNo": "67",
        "commits": "25",
        "collabs": "8",
        "downloads": 124,
        "shares": 89
    },
    {
        "projectName": "Angular E-commerce",
        "Label": "Public",
        "description": "Modern e-commerce frontend with shopping cart, product filtering, and payment integration using Angular and TypeScript.",
        "dateCreated": "2024-08-22",
        "fileNo": "89",
        "commits": "32",
        "collabs": "12",
        "downloads": 456,
        "shares": 312
    },
    {
        "projectName": "Go Microservice",
        "Label": "Private",
        "description": "Lightweight microservice for user authentication with gRPC communication and Redis caching, written in Go.",
        "dateCreated": "2024-08-03",
        "fileNo": "13",
        "commits": "7",
        "collabs": "2",
        "downloads": 87,
        "shares": 41
    },
    {
        "projectName": "React Native Fitness",
        "Label": "Public",
        "description": "Fitness tracking mobile app with workout plans, progress charts, and social features built with React Native.",
        "dateCreated": "2024-07-28",
        "fileNo": "54",
        "commits": "22",
        "collabs": "9",
        "downloads": 378,
        "shares": 203
    },
    {
        "projectName": "Java Spring Boot API",
        "Label": "Private",
        "description": "Enterprise-grade REST API with Spring Security, JPA, and comprehensive testing for inventory management system.",
        "dateCreated": "2024-08-14",
        "fileNo": "76",
        "commits": "28",
        "collabs": "11",
        "downloads": 156,
        "shares": 94
    },
    {
        "projectName": "Svelte Weather App",
        "Label": "Public",
        "description": "Responsive weather application with location-based forecasts and interactive maps using Svelte and weather APIs.",
        "dateCreated": "2024-08-26",
        "fileNo": "23",
        "commits": "12",
        "collabs": "3",
        "downloads": 213,
        "shares": 145
    },
    {
        "projectName": "Ruby on Rails CRM",
        "Label": "Private",
        "description": "Customer relationship management system with lead tracking, email campaigns, and reporting features in Ruby on Rails.",
        "dateCreated": "2024-08-08",
        "fileNo": "91",
        "commits": "41",
        "collabs": "15",
        "downloads": 298,
        "shares": 178
    },
    {
        "projectName": "TypeScript Game Engine",
        "Label": "Public",
        "description": "2D game engine with physics simulation, sprite management, and audio support built entirely in TypeScript.",
        "dateCreated": "2024-07-25",
        "fileNo": "127",
        "commits": "63",
        "collabs": "18",
        "downloads": 892,
        "shares": 634
    },
    {
        "projectName": "Express Chat Server",
        "Label": "Private",
        "description": "Real-time chat server with Socket.io, message encryption, and room management built on Express.js framework.",
        "dateCreated": "2024-08-17",
        "fileNo": "29",
        "commits": "15",
        "collabs": "5",
        "downloads": 167,
        "shares": 98
    },
    {
        "projectName": "Kotlin Android App",
        "Label": "Public",
        "description": "Native Android application for recipe sharing with image upload, rating system, and offline mode using Kotlin.",
        "dateCreated": "2024-08-07",
        "fileNo": "58",
        "commits": "24",
        "collabs": "7",
        "downloads": 445,
        "shares": 289
    },
    {
        "projectName": "C# Desktop Tool",
        "Label": "Private",
        "description": "Windows desktop application for PDF manipulation with merge, split, and annotation features using WPF and C#.",
        "dateCreated": "2024-08-21",
        "fileNo": "34",
        "commits": "16",
        "collabs": "4",
        "downloads": 234,
        "shares": 123
    },
    {
        "projectName": "Next.js Portfolio",
        "Label": "Public",
        "description": "Developer portfolio website with blog, project showcase, and contact form built with Next.js and Tailwind CSS.",
        "dateCreated": "2024-08-29",
        "fileNo": "19",
        "commits": "8",
        "collabs": "2",
        "downloads": 567,
        "shares": 398
    },
    {
        "projectName": "Python ML Pipeline",
        "Label": "Private",
        "description": "Machine learning pipeline for sentiment analysis with data preprocessing, model training, and deployment automation.",
        "dateCreated": "2024-08-01",
        "fileNo": "45",
        "commits": "19",
        "collabs": "6",
        "downloads": 189,
        "shares": 134
    },
    {
        "projectName": "Vue Component Library",
        "Label": "Public",
        "description": "Reusable Vue.js component library with documentation, testing, and npm package distribution for UI development.",
        "dateCreated": "2024-08-13",
        "fileNo": "83",
        "commits": "35",
        "collabs": "14",
        "downloads": 723,
        "shares": 456
    },
    {
        "projectName": "FastAPI Backend",
        "Label": "Private",
        "description": "High-performance API backend with async support, automatic documentation, and database migrations using FastAPI.",
        "dateCreated": "2024-08-04",
        "fileNo": "37",
        "commits": "21",
        "collabs": "8",
        "downloads": 276,
        "shares": 162
    },
    {
        "projectName": "Electron Music Player",
        "Label": "Public",
        "description": "Cross-platform desktop music player with playlist management, equalizer, and last.fm integration using Electron.",
        "dateCreated": "2024-07-31",
        "fileNo": "62",
        "commits": "27",
        "collabs": "10",
        "downloads": 834,
        "shares": 567
    },
    {
        "projectName": "Laravel E-learning",
        "Label": "Private",
        "description": "Online learning platform with course management, video streaming, and progress tracking built with Laravel framework.",
        "dateCreated": "2024-08-16",
        "fileNo": "105",
        "commits": "48",
        "collabs": "19",
        "downloads": 367,
        "shares": 245
    },
    {
        "projectName": "Rust CLI Tool",
        "Label": "Public",
        "description": "Command-line utility for file organization and duplicate detection with high performance and cross-platform support.",
        "dateCreated": "2024-08-09",
        "fileNo": "18",
        "commits": "11",
        "collabs": "3",
        "downloads": 512,
        "shares": 298
    },
    {
        "projectName": "React Testing Suite",
        "Label": "Private",
        "description": "Comprehensive testing framework for React applications with component testing, mocking utilities, and CI/CD integration.",
        "dateCreated": "2024-08-24",
        "fileNo": "56",
        "commits": "23",
        "collabs": "9",
        "downloads": 178,
        "shares": 123
    },
    {
        "projectName": "MongoDB Schema Designer",
        "Label": "Public",
        "description": "Visual tool for designing MongoDB schemas with relationship mapping, validation rules, and code generation features.",
        "dateCreated": "2024-08-11",
        "fileNo": "41",
        "commits": "17",
        "collabs": "5",
        "downloads": 456,
        "shares": 289
    },
    {
        "projectName": "SwiftUI iOS App",
        "Label": "Private",
        "description": "Native iOS application for habit tracking with widgets, notifications, and data visualization using SwiftUI framework.",
        "dateCreated": "2024-08-19",
        "fileNo": "33",
        "commits": "14",
        "collabs": "4",
        "downloads": 298,
        "shares": 187
    },
    {
        "projectName": "Docker DevOps Kit",
        "Label": "Public",
        "description": "Collection of Docker configurations and scripts for common development environments with documentation and examples.",
        "dateCreated": "2024-08-27",
        "fileNo": "27",
        "commits": "13",
        "collabs": "6",
        "downloads": 689,
        "shares": 423
    }
]

export {data}