import React from 'react';
import './Commiteemembers.css'; // Import the CSS for styling
import { default_img, img1, img10, img11, img12, img13, img14, img15, img16, img17, img2, img3, img4, img5, img6, img7, img8, img9 } from '../../assets/assets';

const CommitteeMembers = () => {
  const members = [
    {
      id: '1',
      name: 'Premji B',
      description: 'Senior AI Product Leader',
      details: "Premji Boominathan, a seasoned leader with 26 years in agile product management, excels in driving innovation, team development, and strategic growth.",
			image: img1,
    },
    {
      id: '2',
      name: 'Divya Thaikkoottathil',
      description: 'Senior IT Leader',
      details: "Senior IT leader with over 20 years of experience in decisive role, leading bussiness transformation with customer centric, scalable, Enterprise-ready Products.",
			image: img2,
    },
    {
      id: '3',
      name: 'Saurabh Gupta',
      description: 'Chief Product & Tech Officer',
      details: "Chief Product & Tech Officer at FroGo with 18+ years of experience in digital products, data-driven transformation, leadership, and entrepreneurship.",
			image: img3,
    },
    {
      id: '4',
      name: 'Avinash Karve',
      description: 'IT Leader',
      details: "IT leader managing SAP projects, team development, specializing in project management and professional mentoring.",
			image: img4,
    },
    {
      id: '5',
      name: 'Ms Pooja Lalan',
      description: 'AWS trainer and Cloud Consultant',
      details: "Experienced AWS trainer and Cloud Consultant with 15 years' expertise in technology, strategy, and AWS Cloud.",
			image: img5,
    },
    {
      id: '6',
      name: 'Sachin Chaudhary',
      description: 'Data Science Leader',
      details: "Data science leader specializing in automotive, manufacturing, healthcare, insurance, mentoring career transitions, and fostering AI learning paths.",
			image: img6,
    },
    {
      id: '7',
      name: 'Ayan Kumar Ghosh',
      description: 'Research & development',
      details: "With 10 years' R&D experience, I specialize in microelectronics, machine learning, quantum technologies, and quantum device fabrication for AI applications.",
			image: img7,
    },
    {
      id: '8',
      name: 'Abhishek kumar',
      description: 'Full Stack Developer',
      details: "With 7+ years of experience, I led full-stack development, project management, and backend systems for companies like Dody Dev and UrbanClap.",
			image: default_img,
    },
    {
      id: '9',
      name: 'Afif Patel',
      description: 'Senior Engineer',
      details: "Senior Engineer with 7 years' experience in IT infrastructure, security, Azure Cloud, device management, automation, and IT operations improvement.",
			image: default_img,
    },
    {
      id: '10',
      name: 'Pooja Chopra',
      description: 'Java Full Stack Developer',
      details: "I have expertise in Java Full Stack training and development, covering frontend, backend, databases, and frameworks for comprehensive solutions.",
			image: default_img,
    },
    {
      id: '11',
      name: 'Harshadi Hansora',
      description: 'Software Developer',
      details: "With 6+ years' experience in software development and teaching, I specialize in React, Angular, TypeScript, Node.js, Python, and more.",
			image: img8,
    },
    {
      id: '12',
      name: 'Sonia Malik',
      description: 'Lead Instructor & Software Developer',
      details: "I specialize in conducting live and recorded sessions on Data Structures, Algorithms, C, C++, JavaScript, HTML, CSS, Git, and more.",
			image: img9,
    },
    {
      id: '13',
      name: 'Srikrupa HD',
      description: 'Project Manager & Data Scientist',
      details: "Experienced in data science, specializing in multivariable regression and web scraping using Python, Pandas, and BeautifulSoup.",
			image: img14,
    },
    {
      id: '14',
      name: 'Bhagyashree Patil',
      description: 'Project Manager',
      details: "A mentor at TEN, she excels in React.js, Java, HTML, CSS, and JavaScript, guiding software engineering teams effectively.",
			image: img15,
    },
    {
      id: '15',
      name: 'Priyanshi Sharma',
      description: 'Senior HR Manager',
      details: "professional HR manages recruitment, employee relations, training, and ensures compliance with company policies.",
			image: img16,
    },
    {
      id: '16',
      name: 'Samsul Alam',
      description: 'Web Developer',
      details: "As Web Developer at TEN, he leverages React.js,Java, HTML, CSS, and JavaScript, guiding software engineering teams effectively.",
			image: img17,
    },
    {
      id: '17',
      name: 'Amar Kumar',
      description: 'MERN Stack Developer',
      details: "Passionate coder with expertise in Java, C++, DSA, and MERN stack, contributing to impactful web development projects.",
			image: img10,
    },
    {
      id: '18',
      name: 'Faizan Surani',
      description: 'Full Stack Developer',
      details: "A skilled Full Stack Developer, he specializes in JavaScript, React, Node.js, Express, and MongoDB technologies.",
			image: img11,
    },
    {
      id: '19',
      name: 'Aryan Panchal',
      description: 'Full Stack Developer',
      details: "Full-stack developer with AI/ML expertise, pursuing a computer engineering degree. Skilled in front-end and back-end.",
			image: img12,
    },
    {
      id: '20',
      name: 'Piush Bose',
      description: 'Full Stack Developer',
      details: "A mentor at TEN, he leverages Next.js, React.js, and DevOps to develop efficient and innovative full-stack solutions.",
			image: img13,
    },
  ];

  return (
    <div className="committee-container">
      <h1>Committee Members</h1>
      <p className="description">
        The Committee Members are an integral part of the program offering support in the selection of startups and mentorship.
      </p>
      <div className="members-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <img src={member.image} alt={member.name} className="member-photo" />
            <h3>{member.name}</h3>
            <p style={{color:'black'}}>{member.description}</p>
            <p>{member.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeMembers;
