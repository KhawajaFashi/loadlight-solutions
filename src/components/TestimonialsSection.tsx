import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mike Rodriguez",
      role: "Fleet Manager",
      company: "Rodriguez Trucking",
      content: "Dispatchers has completely transformed how we manage our fleet. The real-time tracking and automated load matching have increased our efficiency by 40%.",
      rating: 5,
      initials: "MR"
    },
    {
      name: "Sarah Chen",
      role: "Owner-Operator",
      company: "Independent Driver",
      content: "As an owner-operator, finding consistent loads was my biggest challenge. Dispatchers' load matching system has kept my truck moving and my income steady.",
      rating: 5,
      initials: "SC"
    },
    {
      name: "David Thompson",
      role: "Operations Director",
      company: "Logistics Plus",
      content: "The 24/7 support team is incredible. Whenever we have an issue, they're there to help immediately. It's like having an extension of our team.",
      rating: 5,
      initials: "DT"
    },
    {
      name: "Lisa Johnson",
      role: "Dispatch Manager",
      company: "FreightForward Inc",
      content: "The automated invoicing feature alone has saved us 15 hours per week. The entire platform is intuitive and our drivers love the mobile app.",
      rating: 5,
      initials: "LJ"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what trucking professionals are saying 
            about their experience with Dispatchers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">500+</div>
            <div className="text-muted-foreground">Active Drivers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">98%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">2M+</div>
            <div className="text-muted-foreground">Miles Dispatched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;