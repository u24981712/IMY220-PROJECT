import React from 'react';

import NavBar from '../components/NavBar';
import SearchBar from '../components/searchBar';
import Button1 from '../components/Button1';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
const name = "Njabulo";
const profileImage = "https://api.dicebear.com/9.x/adventurer/svg?seed=Mason"
const tempData = [
    {
        projectName: "React Todo App",
        Label: "Public",
        description: "A simple todo application built with React hooks and local storage. Features add, edit, delete, and mark complete functionality.",
        dateCreated: "2024-08-15",
        fileNo:"31",
        commits: "14",
        collabs:"4",
        downloads: 65,
        shares: 18
    },
    {
        projectName: "Python Web Scraper",
        Label: "Private",
        description: "Web scraping tool using BeautifulSoup and requests to extract product data from e-commerce websites with CSV export.",
        dateCreated: "2024-08-20",
        fileNo:"5",
        commits: "1",
        collabs:"1",
        downloads: 55,
        shares: 12
    },
    {
        projectName: "Node.js API Server",
        Label: "Public",
        description: "RESTful API server built with Express.js, MongoDB, and JWT authentication for user management and data operations.",
        dateCreated: "2024-08-10",
        fileNo:"15",
        commits: "6",
        collabs:"3",
        downloads: 10,
        shares: 5
    },
    {
        projectName: "CSS Animation Library",
        Label: "Public",
        description: "Collection of smooth CSS animations and transitions for modern web interfaces. Includes hover effects and loading spinners.",
        dateCreated: "2024-08-25",
        fileNo:"26",
        commits: "10",
        collabs:"2",
        downloads: 382,
        shares: 230
    },
    {
        projectName: "JavaScript Calculator",
        Label: "Private",
        description: "Advanced calculator with scientific functions, memory operations, and history tracking. Built with vanilla JavaScript.",
        dateCreated: "2024-08-12",
        fileNo:"20",
        commits: "09",
        collabs:"3",
        downloads: 79,
        shares: 50
    },
    {
        projectName: "Vue.js Dashboard",
        Label: "Public",
        description: "Interactive admin dashboard with charts, tables, and real-time data updates using Vue 3 and Chart.js integration.",
        dateCreated: "2024-08-28",
        fileNo:"38",
        commits: "11",
        collabs:"5",
        downloads: 149,
        shares: 101
    },
    {
        projectName: "PHP Login System",
        Label: "Private",
        description: "Secure user authentication system with password hashing, session management, and email verification features.",
        dateCreated: "2024-08-05",
        fileNo:"21",
        commits: "10",
        collabs:"2",
        downloads: 230,
        shares: 80
    }
];

const Home = () => {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Home.css" />
            <NavBar />

            <div className="mesh-wrap" aria-hidden="true">
                <div className="mesh-layer layer-1"></div>
                <div className="mesh-layer layer-2"></div>
                <div className="mesh-layer layer-3"></div>
                <div className="mesh-layer layer-4"></div>
                <div className="mesh-layer layer-5"></div>
                <div className="mesh-layer layer-6"></div>
            </div>

            <div className="homePage">
                <div className='welcomeMessage'>
                    <h1>Welcome {name}</h1>
                    <p>Let's build something amazing</p>
                </div>
                <div className='BTNsearchBar'>
                    <div className='addBtn'>
                        <Button1 text={"New Project"} style={"button1"} />
                    </div>
                    <div className='searchBarContainer'>
                        <SearchBar />
                    </div>
                </div>

                <div className="HomePageDropDowns">
                    <select className="dropdown" defaultValue="Popularity">
                        <option value="Popularity">Sort by Popularity</option>
                        <option value="Recent">Sort by Most Recent</option>
                        <option value="Shared">Sort by Most Shared</option>
                        <option value="Downloads">Sort by Most Downloads</option>
                        <option value="Alphabetical">Sort Alphabetically</option>
                    </select>

                    <select className="dropdown" defaultValue="Private">
                        <option value="Private">Private</option>
                        <option value="Public">Public</option>
                    </select>

                    <select className="dropdown" defaultValue="All Time">
                        <option value="All Time">All Time</option>
                        <option value="Today">Today</option>
                        <option value="This Week">This Week</option>
                        <option value="This Month">This Month</option>
                        <option value="This Year">This Year</option>
                    </select>
                </div>


            </div>

            <div className="AllProject">
                <img  />
                
                {tempData.map((data, index) => (
                    <ProjectCard key={index} data={data} />
                ))}
            </div>

            <div className='Loadmore'>
                <Button1 text={"Load More.."} style={"button3"} />
            </div>
            
            <Footer />
        </>
    );
}

export { tempData ,profileImage };
export default Home;