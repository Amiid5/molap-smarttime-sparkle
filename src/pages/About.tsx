import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">About Molap SmartTime</h1>
            <p className="text-xl text-muted-foreground">
              Pioneering the future of wearable technology since 2020
            </p>
          </header>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Molap SmartTime was founded with a simple mission: to create smartwatches that seamlessly blend 
              cutting-edge technology with elegant design. We believe that wearable technology should enhance 
              your life without compromising on style or functionality.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we're proud to serve customers worldwide with our premium collection of smartwatches, 
              each designed to meet the diverse needs of modern lifestyles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Award-Winning Design</h3>
                <p className="text-muted-foreground">
                  Our products have received multiple international design awards for innovation and aesthetics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100K+ Happy Customers</h3>
                <p className="text-muted-foreground">
                  Join our growing community of satisfied customers who trust Molap SmartTime.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Presence</h3>
                <p className="text-muted-foreground">
                  Available in over 50 countries with dedicated support teams worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  24/7 customer support and a 2-year warranty on all our products.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovation, quality, and customer satisfaction drive everything we do. We're committed to 
              pushing the boundaries of what's possible in wearable technology while maintaining the 
              highest standards of craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
