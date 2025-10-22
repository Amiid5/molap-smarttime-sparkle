import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Watch, Heart, Zap } from "lucide-react";
import heroWatch from "@/assets/hero-watch.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroWatch})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            The Future on Your Wrist
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Experience innovation with Molap SmartTime premium smartwatches
          </p>
          <div className="flex gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/products">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-500 hover:shadow-glow transition-all duration-300 text-lg px-8">
                Shop Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Molap SmartTime</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Watch className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Technology</h3>
              <p className="text-muted-foreground">
                Cutting-edge sensors and processors deliver unmatched performance and accuracy
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Health Focused</h3>
              <p className="text-muted-foreground">
                Comprehensive health tracking keeps you informed about your wellness 24/7
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Long Battery Life</h3>
              <p className="text-muted-foreground">
                Engineered for endurance with battery life that lasts days, not hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Featured Collection</h2>
            <Link to="/products">
              <Button variant="ghost" className="text-primary hover:text-primary">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have upgraded their lifestyle with Molap SmartTime
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-gradient-to-r from-primary to-blue-500 hover:shadow-glow transition-all duration-300 text-lg px-8">
              Explore Our Collection <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
