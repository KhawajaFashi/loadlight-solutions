import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Users, 
  FileText, 
  Headphones, 
  BarChart3,
  Clock,
  Shield
} from "lucide-react";

// Import truck images
import truckCargo from "@/assets/truck-cargo.jpg";
import truckDelivery from "@/assets/truck-delivery.jpg";
import truckSemi from "@/assets/truck-semi.jpg";
import truckLorry from "@/assets/truck-lorry.jpg";
import truckFlatbed from "@/assets/truck-flatbed.jpg";
import truckBox from "@/assets/truck-box.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Load Matching",
      description: "Intelligent load matching system that finds the best freight opportunities for your fleet based on location, capacity, and preferences.",
      badge: "Smart AI",
      popular: true
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Live GPS tracking with automated status updates, route optimization, and delivery confirmations for complete visibility.",
      badge: "Live GPS"
    },
    {
      icon: Users,
      title: "Driver Management",
      description: "Comprehensive driver profiles, performance tracking, document management, and communication tools all in one place.",
      badge: "Complete"
    },
    {
      icon: FileText,
      title: "Automated Invoicing",
      description: "Streamlined billing process with automatic invoice generation, payment tracking, and integration with accounting systems.",
      badge: "Automated"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock expert support from experienced dispatchers and technical specialists whenever you need assistance.",
      badge: "Always On"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Detailed performance analytics, profit tracking, and customizable reports to help optimize your operations.",
      badge: "Insights"
    },
    {
      icon: Clock,
      title: "Schedule Management",
      description: "Advanced scheduling tools for managing driver hours, load deadlines, and maintenance schedules efficiently.",
      badge: "Efficient"
    },
    {
      icon: Shield,
      title: "Compliance Tools",
      description: "Stay compliant with DOT regulations, ELD requirements, and safety standards with automated compliance monitoring.",
      badge: "Secure"
    }
  ];

  const truckImages = [
    { src: truckCargo, alt: "Cargo Truck" },
    { src: truckDelivery, alt: "Delivery Truck" },
    { src: truckSemi, alt: "Semi Truck" },
    { src: truckLorry, alt: "Lorry Truck" },
    { src: truckFlatbed, alt: "Flatbed Truck" },
    { src: truckBox, alt: "Box Truck" }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your trucking operations efficiently. 
            From load matching to real-time tracking, we've got you covered.
          </p>
        </div>

        {/* Main Features Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left: Feature descriptions */}
          <div className="space-y-6">
            {features.slice(0, 4).map((feature, index) => (
              <Card 
                key={index} 
                className={`relative bg-card border-border hover:shadow-lg transition-all duration-300 group animate-slide-up ${
                  feature.popular ? 'ring-2 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {feature.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right: Truck images grid */}
          <div className="grid grid-cols-2 gap-6">
            {truckImages.map((truck, index) => (
              <div
                key={index}
                className="truck-hover rounded-xl overflow-hidden bg-white shadow-lg"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <img
                  src={truck.src}
                  alt={truck.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-foreground">{truck.alt}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.slice(4).map((feature, index) => (
            <Card 
              key={index + 4} 
              className="bg-card border-border hover:shadow-lg transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${(index + 8) * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-secondary/10 rounded-2xl p-8 lg:p-12 border border-border">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Dispatching?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of successful trucking companies already using Dispatchers 
              to streamline their operations and increase profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;