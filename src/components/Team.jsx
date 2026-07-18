import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const teamMembers = [
  {
    name: 'Wenuja Liyanamana',
    role: 'CS Major',
    email: 'mailto:wenujaweb@gmail.com',
    linkedin: 'https://linkedin.com/in/wenuja',
    github: 'https://github.com/wenuja',
    image: '/avatar_wenuja.jpeg'
  },
  {
    name: 'Ramiru Wanigathunga',
    role: 'AI Major',
    email: 'mailto:samagispicesexport@gmail.com',
    linkedin: 'https://linkedin.com/in/ramiru',
    github: 'https://github.com/ramiru',
    image: '/avatar_ramiru.jpg'
  }
];

export default function Team() {
  return (
    <section className="w-full font-mono">
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
