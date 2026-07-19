import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const teamMembers = [
  {
    name: 'Wenuja Liyanamana',
    role: 'CS Major',
    email: 'mailto:wenujaweb@gmail.com',
    linkedin: 'https://www.linkedin.com/in/wenujaliyanamana',
    github: 'https://github.com/wenujacodes',
    image: '/avatar_wenuja.jpeg'
  },
  {
    name: 'Ramiru Wanigathunga',
    role: 'AI Major',
    email: 'mailto:samagispicesexport@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ramiruwanigathunga',
    github: 'https://github.com/ramiruwanigathunga',
    image: '/avatar_ramiru.jpg'
  }
];

export default function Team() {
  return (
    <section className="w-full font-mono mt-8">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-brand text-xl font-bold">&gt;</span>
        <h2 className="text-xl text-white font-bold tracking-tight">Meet_The_Devs</h2>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center text-center gap-4">
            <img 
              src={member.image} 
              alt={member.name} 
              loading="lazy"
              className="w-28 h-28 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-lg text-white font-bold">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-1">// {member.role}</p>
            </div>
            <div className="flex items-center gap-5">
              <a href={member.email} className="text-gray-500 hover:text-white transition-colors" aria-label="Email">
                <FiMail size={18} />
              </a>
              <a href={member.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub">
                <FiGithub size={18} />
              </a>
              <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
