const EducationSection = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-champagne/20 to-background" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="text-sm font-medium text-accent tracking-widest uppercase">
              Education
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mt-4 leading-tight">
              Academic
              <br />
              <span className="text-muted-foreground">Background</span>
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-12">
            <div className="group relative pl-8 border-l-2 border-border hover:border-accent transition-colors duration-500">
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] bg-accent rounded-full" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-accent font-medium">2020 — 2023</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-light text-foreground">
                  B.Sc. in Mathematics (Honours)
                </h3>
                
                <p className="text-lg text-muted-foreground">
                  with Statistics
                </p>
                
                <p className="text-muted-foreground">
                  Maharaja Bir Bikram University
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h4 className="text-sm font-medium text-foreground mb-4">Key Highlights</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Strong foundation in mathematical analysis
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Statistical modeling and data interpretation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Analytical and critical thinking skills
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
