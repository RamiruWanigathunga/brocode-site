import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const teamMembers = [
  {
    name: 'Wenuja Liyanamana',
    role: 'CS Undergrad',
    email: 'mailto:wenujaweb@gmail.com',
    linkedin: 'https://linkedin.com/in/wenujaliyanamana',
    github: 'https://github.com/wenujacodes',
    image: '/avatar_wenuja.jpeg'
  },
  {
    name: 'Ramiru Wanigathunga',
    role: 'AI Undergrad',
    email: 'mailto:ramiru@gmail.com',
    linkedin: 'https://linkedin.com/in/ramiruwanigathunga',
    github: 'https://github.com/RamiruWanigathunga',
    image: '/avatar_ramiru.jpg'
  }
];

export default function Team() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-2">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex items-center gap-4 py-3 border-b border-dark-border/30 last:border-0 group">
            <img 
              src={member.image} 
              alt={member.name} 
              loading="lazy"
              className="w-12 h-12 rounded-sm object-cover border border-dark-border/50 grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <div>
                <h3 className="text-base font-bold text-white font-mono">{member.name}</h3>
                <p className="text-xs text-brand font-mono">{member.role}</p>
              </div>
              
              <div className="flex items-center gap-4">
                <a href={member.email} className="text-gray-500 hover:text-white transition-colors" aria-label="Email">
                  <FiMail size={16} />
                </a>
                <a href={member.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub Profile">
                  <FiGithub size={16} />
                </a>
                <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn Profile">
                  <FiLinkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
