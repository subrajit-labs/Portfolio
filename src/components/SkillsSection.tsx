const SkillsSection = () => {
  const skills = [
    {
      category: "Creative",
      items: ["Creativity & Innovation", "Content Writing", "Photography"],
    },
    {
      category: "Technical",
      items: ["DIY Robotics", "Problem Solving", "Technical Projects"],
    },
    {
      category: "Business",
      items: ["Entrepreneurship", "Business Planning", "Financial Planning"],
    },
    {
      category: "Leadership",
      items: ["Mentoring", "Guidance", "Smart Execution"],
    },
  ];

  return (
    <section id="skills" className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-sm font-medium text-accent tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mt-4">
            Skills & Capabilities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="group p-6 rounded-lg border border-primary-foreground/10 hover:border-accent/50 transition-all duration-500 hover:bg-primary-foreground/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-accent text-sm font-medium tracking-widest uppercase mb-6">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors duration-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
