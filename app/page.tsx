"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  ExternalLink,
  Mail,
  MapPin,
  Code,
  Database,
  Smartphone,
  Globe,
  Zap,
  Users,
  ChevronDown,
  Linkedin,
  FileText,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    { name: "TypeScript", level: 90, icon: Code },
    { name: "React/Next.js", level: 95, icon: Globe },
    { name: "Node.js", level: 85, icon: Database },
    { name: "Solidity", level: 80, icon: Zap },
    { name: "Blockchain Development", level: 85, icon: Database },
    { name: "Discord.js", level: 90, icon: Users },
    { name: "Tailwind CSS", level: 90, icon: Smartphone },
    { name: "Git/GitHub", level: 85, icon: Github },
  ];

  const projects = [
    {
      title: "Discord RPG Bot",
      description:
        "A comprehensive Discord bot featuring RPG mechanics, user progression, and interactive gameplay elements.",
      technologies: ["Node.js", "Discord.js", "TypeScript", "Database"],
      github: "https://github.com/0xRickJames/cyber-knights-discord-rpg-bot",
      demo: null,
      status: "Active",
    },
    {
      title: "Solana to EVM Game Port",
      description:
        "Successfully rewrote a Solana-based crypto game to work on EVM-compatible blockchains, implementing smart contracts and game logic.",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      github: "https://github.com/0xRickJames/quadra-server-evm-rewrite",
      demo: "https://www.rickmcfarley.lol/game",
      status: "Completed",
    },
    {
      title: "Web Development Projects",
      description:
        "Multiple full-stack web applications showcasing modern development practices and responsive design.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "API Integration",
      ],
      github: "https://github.com/0xRickJames/ticketing-system",
      demo: "https://tickets.frankbones.best/tickets",
      status: "Portfolio",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Rick Tessari</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["hero", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors ${
                      activeSection === section
                        ? "text-blue-400"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {section === "hero" ? "Home" : section}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Web Developer &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Blockchain Engineer
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Crafting innovative web applications and blockchain solutions.
              Passionate about building the future of decentralized technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-300 hover:bg-slate-800 px-8 py-3"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/0xRickJames"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:frtessari4@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rick-tessari-3b0213260/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Passionate developer focused on creating innovative solutions in
              web development and blockchain technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-slate-900/50 p-8 rounded-lg border border-slate-700">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  My Journey
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  I'm a dedicated web developer with a strong passion for
                  blockchain technology and decentralized applications. My
                  experience spans from building engaging Discord bots to
                  porting complex Solana applications to EVM-compatible
                  blockchains.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  With expertise in modern web technologies like Next.js,
                  TypeScript, and Tailwind CSS, I create responsive,
                  user-friendly applications that solve real-world problems.
                </p>
                <div className="flex items-center text-slate-400 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Available for remote opportunities</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <Zap className="h-5 w-5 mr-2" />
                  <span>Actively seeking blockchain and IT positions</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Code className="h-5 w-5 mr-2 text-blue-400" />
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Building modern, responsive web applications with
                    cutting-edge technologies and best practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Database className="h-5 w-5 mr-2 text-teal-400" />
                    Blockchain Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Experienced in smart contract development, DApp creation,
                    and cross-chain implementations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="h-5 w-5 mr-2 text-purple-400" />
                    Discord Bot Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Creating engaging Discord bots with complex RPG mechanics
                    and interactive features.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Proficient in modern web technologies and blockchain development
              tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-colors"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center text-lg">
                    <skill.icon className="h-5 w-5 mr-2 text-blue-400" />
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-teal-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-sm text-slate-400">
                    {skill.level}% Proficiency
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              A showcase of my work in web development and blockchain technology
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white text-xl">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-blue-600 text-white"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-slate-600 text-slate-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-800"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-300 hover:bg-slate-800"
              asChild
            >
              <a
                href="https://github.com/0xRickJames?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              I'm actively seeking new opportunities in web development and
              blockchain technology. Let's discuss how I can contribute to your
              team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  Get In Touch
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Ready to discuss opportunities or collaborate on projects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-slate-300">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <a
                    href="mailto:frtessari4@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    frtessari4@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-slate-300">
                  <Github className="h-5 w-5 mr-3 text-blue-400" />
                  <a
                    href="https://github.com/0xRickJames"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    github.com/0xRickJames
                  </a>
                </div>
                <div className="flex items-center text-slate-300">
                  <Linkedin className="h-5 w-5 mr-3 text-blue-400" />
                  <a
                    href="https://www.linkedin.com/in/rick-tessari-3b0213260/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  What I'm Looking For
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Ideal role characteristics and company culture
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Zap className="h-5 w-5 mr-3 text-teal-400 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium">
                      Blockchain & Web3
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Smart contracts, DeFi, NFTs, and decentralized
                      applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 mr-3 text-teal-400 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium">
                      Full-Stack Development
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Modern web applications with React, Next.js, and Node.js
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-3 text-teal-400 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium">
                      Collaborative Environment
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Teams that value innovation, learning, and growth
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              asChild
            >
              <a href="mailto:frtessari4@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Send me an email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-6 w-6 text-blue-400" />
              <span className="text-white font-medium">Rick Tessari</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/0xRickJames"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:frtessari4@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rick-tessari-3b0213260/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <Separator className="my-4 bg-slate-700" />
          <div className="text-center text-slate-400 text-sm">
            <p>
              &copy; 2025 Rick Tessari. Built with Next.js, TypeScript, and
              Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
