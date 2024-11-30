import akash from './images/akashdhole.png';
import elya from './images/Elyalino.png';
import akansha from './images/Akansha.jpg';
import amar from './images/Amar.png';
import anjana from './images/AnjanaPathak.jpg';
import anmol from './images/Anmolaziz.jpg';
import anup from './images/AnupKumar.jpg';
import dhruvi from './images/DhruviThakkar.jpg';
import herumb from './images/Herumbnegpal.png';
import ishika from './images/IshikaAgrawal.png';
import pranshu from './images/PranshuGupta.png';
import shalini from './images/ShaliniShree.png';
import zena from './images/Zenakrishno.png';
import default_img from './images/default.webp'; 

const Hall_of_fame = () => {

    const fame_data = [
    {
        id: 1,
        name: 'Akash Dhole',
        desc: 'Senior Finance Executive at Bajaj Finserv',
        link: 'https://www.linkedin.com/in/akash-dhole-b70a6a195',
        img: akash,
    },
    {
        id: 2,
        name: 'Elya Lino Fernandes',
        desc: 'talent Acquisition Executive at Uplers',
        link: 'https://www.linkedin.com/in/elyafernandes/',
        img: elya,
    },
    {
        id: 3,
        name: 'Herumb Nagpal',
        desc: 'Data Engineer @ ZS',
        link: 'https://www.linkedin.com/in/herumb-nagpal/',
        img: herumb,
    },
    {
        id: 4,
        name: 'Zena Krishnoo',
        desc: 'Sales Strategy India || MBA, IIM Indore || (Ex) Jimmy Cocktails',
        link: 'https://www.linkedin.com/in/zena-krishnoo/',
        img: zena,
    },
    {
        id: 5,
        name: 'Ishika Agrawal',
        desc: 'Great Lakes PGDM 2024-26',
        link: 'https://www.linkedin.com/in/ishika-agarwal-324452106/',
        img: ishika,
    },
    {
        id: 6,
        name: 'Pranshu Gupta',
        desc: 'Senior Analyst at Natwest Group',
        link: 'https://www.linkedin.com/in/pranshu-gupta-7529b8139/',
        img: pranshu,
    },
    {
        id: 7,
        name: 'Shweta Sabu',
        desc: 'Senior Associate - HRBP Role at HDFC Life',
        link: 'https://www.linkedin.com/in/swetha-s-b56793191',
        img: default_img,
    },
    {
        id: 8,
        name: 'Shruti Bhagat',
        desc: 'Acquisition Manager at IndusInd Bank',
        link: 'https://www.linkedin.com/in/shruti-bhagat-7b5452190/',
        img: default_img,
    },
    {
        id: 9,
        name: 'Shalini Shree',
        desc: 'CS Professional | AIR 21 in CS Foundation',
        link: 'https://www.linkedin.com/in/shalini-shree-6711621b1/',
        img: shalini,
    },
    {
        id: 10,
        name: 'Akansha Ramesh',
        desc: 'Intern at Lodha Ventures',
        link: 'https://www.linkedin.com/in/akansha10',
        img: akansha,
    },
    {
        id: 11,
        name: 'Anmol aziz',
        desc: 'Reference Data Specialist at JPMorganChase',
        link: 'https://www.linkedin.com/in/anmol-aziz-605278217',
        img: anmol,
    },
    {
        id: 12,
        name: 'Dhruvi Thakkar',
        desc: 'Web Designer at Sigma IT Academy',
        link: 'https://www.linkedin.com/in/dhruvi-thakkar-760170217',
        img: dhruvi,
    },
    {
        id: 13,
        name: 'Anjana Pathak',
        desc: 'Data Analyst 2 at SOLVE',
        link: 'https://www.linkedin.com/in/anjana-pathak-97291015b',
        img: anjana,
    },
    {
        id: 14,
        name: 'Anup Kumar',
        desc: 'Machine Learning Engineer at Karyahub Solutions',
        link: 'https://www.linkedin.com/in/anup-kumar-b717366154',
        img: anup,
    },
    {
        id: 15,
        name: 'Amar Kumar',
        desc: 'Trainee Software Developer at Fuvion Techsys',
        link: 'https://www.linkedin.com/in/amar-codingenthusiast/',
        img: amar,
    },
]

    return (
        <>
        <h1 className="text-center text-xl font-semibold">Success Story</h1>
        <p className="text-md font-medium text-center text-gray-500">Every achievement has a story behind it—a journey of challenges, perseverance, and triumph. Explore inspiring tales of individuals and teams who turned their dreams into reality. These success stories highlight the milestones, lessons learned, and strategies that paved the way for extraordinary accomplishments. Let these narratives fuel your motivation and spark your own journey to success!
        </p>
        <div className='flex flex-wrap justify-center gap-[3rem] my-3'>
            {
                fame_data.map((data, id) => (
                    <div key={id} className="bg-slate-50 w-[350px] overflow-hidden rounded-xl shadow-lg border-2 flex flex-col justify-between mb-2 hover:scale-95 transition-transform">
                        <img src={data.img} alt='member_hof' className='rounded-t-xl w-[100%] h-[300px] object-contain' />
                        <h1 className='text-3xl font-semibold text-center my-2'>{data.name}</h1>
                        <p className='text-center font-light text-md my-2'>{data.desc}</p>
                        <div className='text-center mt-4 mb-2 py-2'>
                            <a href={data.link} className='text-sky-600 text-xl font-light'>LinkedIn Profile</a>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    );
}

export default Hall_of_fame;
