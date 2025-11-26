import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code2, Terminal, ArrowLeft, CheckCircle2, Layers, Image as ImageIcon } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import { skills, projects } from './data/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      window.scrollTo(0, 0);
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen pb-12">
      {/* Background Animado */}
      <ParticleBackground />

      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        
        {/* VIEW DE DETALHES DO PROJETO */}
        {selectedProject ? (
          <div className="animate-fade-in-up">
            <button 
              onClick={() => setSelectedProject(null)}
              className="btn-back group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Voltar para Home
            </button>

            <div className="card-glass overflow-hidden !p-0">
              {/* Header do Projeto */}
              <div className={`h-32 ${selectedProject.bgColor} border-b border-slate-700/50 relative`}>
                <div className="absolute -bottom-10 left-8 p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-xl">
                  <div className={`w-12 h-12 rounded-lg ${selectedProject.bgColor} flex items-center justify-center`}>
                    <Code2 className="text-white" size={24} />
                  </div>
                </div>
              </div>

              <div className="pt-14 px-8 pb-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h1>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} className="tag-tech">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <Github size={20} />
                    Ver no GitHub
                  </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  {/* Coluna Principal */}
                  <div className="md:col-span-2 space-y-8">
                    <section>
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <Terminal size={20} className="text-blue-400" /> Sobre o Projeto
                      </h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {selectedProject.longDescription}
                      </p>
                    </section>

                    <section>
                      <h3 className="section-title">Galeria</h3>
                      <div className="space-y-4">
                        {/* LÓGICA DA IMAGEM: Se tiver imagem, mostra ela. Se não, mostra o placeholder cinza */}
                        {selectedProject.image ? (
                           <div className="w-full rounded-lg overflow-hidden border border-slate-700 shadow-xl hover:border-blue-500 transition-colors group cursor-pointer">
                              <img 
                                src={selectedProject.image} 
                                alt={`Tela do projeto ${selectedProject.title}`} 
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                           </div>
                        ) : (
                          <div className="h-64 w-full bg-slate-700/50 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-slate-600 text-slate-500 group hover:border-blue-500 hover:text-blue-400 transition-colors">
                            <Layers size={48} className="mb-2 opacity-50" />
                            <span>Imagem não disponível (Adicione em src/assets)</span>
                          </div>
                        )}

                        {/* Exemplo de grid para imagens secundárias (Placeholder) */}
                        {!selectedProject.image && (
                          <div className="grid grid-cols-2 gap-4 opacity-50">
                            <div className="h-32 bg-slate-700/50 rounded-lg border border-slate-600 flex items-center justify-center"><ImageIcon /></div>
                            <div className="h-32 bg-slate-700/50 rounded-lg border border-slate-600 flex items-center justify-center"><ImageIcon /></div>
                          </div>
                        )}
                      </div>
                    </section>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-8">
                    <section className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                      <h3 className="text-lg font-bold text-white mb-4">Funcionalidades</h3>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                            <CheckCircle2 size={16} className="text-green-400 mt-1 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ) : (
          /* VIEW INICIAL (HOME) */
          <>
            {/* HEADER / HERO SECTION */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 animate-fade-in-down">
              <div>
                <h1 className="gradient-title">
                  Henrique Dominguez
                </h1>
                <h2 className="subtitle">
                  Desenvolvedor Web Júnior
                </h2>
                <div className="flex items-center gap-2 mt-4 text-sm text-slate-400">
                  <MapPin size={16} />
                  <span>Bebedouro/SP</span>
                </div>
              </div>

              <div className="flex gap-4 mt-6 md:mt-0">
                <a href="https://github.com/Henrique87645/" target="_blank" rel="noreferrer" 
                   className="btn-social group">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/henrique-dominguez3034/" target="_blank" rel="noreferrer"
                   className="btn-social">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:henriquedominguez12@gmail.com"
                   className="btn-social">
                  <Mail size={24} />
                </a>
              </div>
            </header>

            {/* SOBRE MIM */}
            <section className="mb-16 card-glass">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="text-blue-400" /> Sobre Mim
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Desenvolvedor Web Júnior com forte base em lógica de programação e paixão por resolver problemas. 
                Atualmente cursando Sistemas de Informação e atuando no SESI com suporte a sistemas e dados. 
                Tenho experiência prática criando soluções Full Stack utilizando <span className="text-blue-400 font-semibold">C#, .NET, React e SQL Server</span>. 
                Busco oportunidades para aplicar meus conhecimentos em projetos desafiadores e escaláveis.
              </p>
            </section>

            {/* SKILLS */}
            <section className="mb-16">
              <h3 className="section-title">Tech Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="card-skill">
                      <span className="text-blue-400"><Icon size={16} /></span>
                      <span className="font-medium text-slate-200">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* LISTA DE PROJETOS */}
            <section>
              <div className="flex justify-between items-end mb-8">
                <h3 className="section-title">Projetos Selecionados</h3>
                <span className="text-xs text-slate-500 uppercase tracking-widest hidden md:block">Clique para detalhes</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <div 
                    key={project.id} 
                    onClick={() => setSelectedProject(project)}
                    className={`card-project group ${project.color}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <ExternalLink size={20} className="text-slate-500 hover:text-white transition-colors" />
                    </div>
                    
                    <p className="text-slate-400 mb-6 text-sm leading-relaxed line-clamp-2">
                      {project.shortDescription || project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="tag-tech">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="tag-tech !text-slate-500">+{project.tech.length - 3}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* FOOTER */}
        <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© 2024 Henrique Dominguez. Desenvolvido com React + Tailwind.</p>
        </footer>

      </div>
    </div>
  );
}