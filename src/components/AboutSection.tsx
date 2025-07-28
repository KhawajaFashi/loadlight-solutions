import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Users, TrendingUp } from "lucide-react";
import techImage from "@/assets/tech-professional.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "Built with security and reliability at its core"
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Live tracking and instant notifications"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated team available 24/7"
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Tools to scale your operations efficiently"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <img
              src={techImage}
              alt="Professional logistics management"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                About <span className="text-gradient">Dispatchers</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Dispatchers is a tech-driven dispatching solution designed specifically for freight 
                and trucking companies. We combine cutting-edge technology with industry expertise 
                to deliver transparent, efficient, and reliable dispatch services.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our platform emphasizes ease of use, complete transparency, and round-the-clock 
                support to help drivers and fleet managers focus on what they do best – moving freight safely and efficiently.
              </p>
              
              {/* Feature grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-sm">
                            {feature.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;