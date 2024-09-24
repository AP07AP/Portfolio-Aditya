import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate software developer with a strong focus on creating efficient and scalable solutions. With experience in web development, real-time applications, and data-driven projects, I am proficient in programming languages like C++, Python, and SQL. My expertise includes building responsive web applications using React.js, Node.js, and Socket.io, as well as data visualization with tools like MS Power BI. I am committed to leveraging my skills in software engineering, problem-solving, and collaboration to deliver innovative solutions that enhance user experience and streamline processes.`;

export const ABOUT_TEXT = `I am a versatile software developer with a passion for solving complex problems and creating efficient applications. My journey in technology has equipped me with a solid foundation in web development, real-time systems, and application design. I have hands-on experience in projects ranging from building responsive applications with React.js and Node.js to implementing data-driven solutions with SQL and Power BI. I thrive in collaborative environments and enjoy tackling new challenges that enhance user experiences and streamline workflows. Outside of my professional work, I actively engage with emerging technologies and continuously seek opportunities to learn and grow in the ever-evolving tech landscape.`;

export const EXPERIENCES = [
  {
    year: "May-2024",
    role: " Software Engineering",
    company: "J.P. Morgan",
    description: `Set up a local dev environment by downloading the necessary files, tools and dependencies.
    Fixed broken files in the repository to make web application output correctly.
    Used JPMorgan Chase’s open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.`,
    technologies: ["Web Applications", "React", "Git"],
  },
  {
    year: "June-2024",
    role: "Data Analyst",
    company: "Mentorness",
    description: `Conducted detailed analysis of Walmart's sales data using SQL queries, identifying key trends such as top
    selling product lines, peak sales hours, and branch performance. 
    Extracted and interpreted business-critical insights from the dataset, leading to recommendations for 
    inventory management, staffing optimization, and revenue growth strategies. 
    Utilized Power BI to analyze survey responses from the food and beverage industry, focusing on consumer 
    behavior, brand perception, and preferences. 
    Created an interactive dashboard to visualize key insights, trends, and correlations, enabling data-driven 
    decision-making for product and marketing strategies.`,
    technologies: ["SQL", "Power BI", "Data Analysis"],
  },
  {
    year: "August-2024",
    role: " Machine Learning Intern",
    company: "Mentorness",
    description: `Developed a machine learning model to forecast future sales trends using historical order data, customer 
    information, and product categories.
    The project involved feature engineering, model training, and testing multiple algorithms.
    Built a predictive model to estimate customer purchase likelihood based on demographic and behavioral 
    features. 
    Analyzed customer data to support business decision-making, optimize marketing strategies, and improve 
    customer retention.`,
    technologies: ["Python", "SQL", "ML", "Scikit-learn", "Pandas", "Numpy"],
  },
];

export const PROJECTS = [
  {
    title: "Customer Segmentation and Classification",
    image: project1,
    description: "Created an application based on the clustering technique to identify customer segments. Conducted exploratory data analysis (EDA), cleaned and imputed missing values, and removed duplicates. Applied feature scaling techniques, employed KMeans clustering, and utilized Principal Component Analysis (PCA). Developed a Decision Tree Classifier to classify customers into segments and evaluated model performance using key metrics.",
    technologies: ["Python", "EDA", "PCA", "Decision Tree Classifier", "KMeans Clustering", "Matplotlib", "Scikit-learn"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "Framer Motion", "React"],
  },
  
  {
    title: "Realtime Chat Application",
    image: project4,
    description:
      "Developed a real-time chat application using React, Node.js, and Socket.io for seamless communication. Integrated WebSocket support to enable instant messaging between users with real-time message broadcasting. Utilized Express.js for server-side functionality, ensuring efficient connection handling and message flow.",
       technologies: ["HTML", "CSS", "React", "Node", "Socket.io"],
  },

];

export const CONTACT = {
  phoneNo: "+91 8789366875",
  email: "aditya71prakash@gmail.com",
};
