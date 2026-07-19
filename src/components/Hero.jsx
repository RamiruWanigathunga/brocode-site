import { FiGithub } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="text-left md:text-center w-full">
      <div className="flex items-center justify-start md:justify-center gap-3 mb-3">
        <h1 className="text-lg md:text-xl font-mono font-bold tracking-tight text-gray-400">
          &gt; Bro Code Collective_
        </h1>
        <a href="https://github.com/brocode-collective" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub">
          <FiGithub size={18} />
        </a>
      </div>
      <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-mono">
        Two undergrad devs cooking random ideas, breaking stuff, fixing it at 3AM, and somehow shipping real projects.
      </p>
    </section>
  );
}
