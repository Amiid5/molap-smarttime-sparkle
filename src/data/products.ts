import watchFitness from "@/assets/watch-fitness.jpg";
import watchPremium from "@/assets/watch-premium.jpg";
import watchSport from "@/assets/watch-sport.jpg";
import watchCasual from "@/assets/watch-casual.jpg";
import watchUltra from "@/assets/watch-ultra.jpg";
import watchClassic from "@/assets/watch-classic.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  specs: {
    display: string;
    battery: string;
    waterproof: string;
    connectivity: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "FitPro X1",
    price: 299,
    image: watchFitness,
    category: "Fitness",
    description: "Advanced fitness tracking with heart rate monitoring, GPS, and 50+ workout modes.",
    features: [
      "Heart Rate Monitor",
      "GPS Tracking",
      "50+ Workout Modes",
      "Sleep Tracking",
      "Calorie Counter"
    ],
    specs: {
      display: "1.4\" AMOLED",
      battery: "7 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 2,
    name: "Prestige Elite",
    price: 599,
    image: watchPremium,
    category: "Premium",
    description: "Luxury smartwatch with sapphire crystal display and premium materials.",
    features: [
      "Sapphire Crystal Display",
      "Premium Metal Band",
      "Always-On Display",
      "Premium Build Quality",
      "Wireless Charging"
    ],
    specs: {
      display: "1.6\" Sapphire AMOLED",
      battery: "10 Days",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.2, WiFi"
    }
  },
  {
    id: 3,
    name: "Sport Runner",
    price: 349,
    image: watchSport,
    category: "Sport",
    description: "Rugged sports watch built for extreme conditions with advanced tracking.",
    features: [
      "Rugged Design",
      "Military Standard",
      "Advanced GPS",
      "Marathon Tracking",
      "Weather Alerts"
    ],
    specs: {
      display: "1.3\" Transflective",
      battery: "14 Days",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.0, GPS"
    }
  },
  {
    id: 4,
    name: "Daily Companion",
    price: 199,
    image: watchCasual,
    category: "Casual",
    description: "Perfect everyday smartwatch with essential features and long battery life.",
    features: [
      "Notifications",
      "Music Control",
      "Step Counter",
      "Sleep Monitor",
      "Affordable Price"
    ],
    specs: {
      display: "1.2\" LCD",
      battery: "10 Days",
      waterproof: "3ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 5,
    name: "Ultra Max",
    price: 799,
    image: watchUltra,
    category: "Premium",
    description: "The ultimate smartwatch with cutting-edge technology and premium features.",
    features: [
      "ECG Monitor",
      "Blood Oxygen",
      "Ultra-Bright Display",
      "Titanium Build",
      "Fast Charging"
    ],
    specs: {
      display: "1.8\" LTPO AMOLED",
      battery: "18 Hours",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.2, WiFi, LTE"
    }
  },
  {
    id: 6,
    name: "Classic Time",
    price: 449,
    image: watchClassic,
    category: "Premium",
    description: "Elegant design meets smart technology with traditional watch aesthetics.",
    features: [
      "Classic Design",
      "Leather Band",
      "Analog Display Mode",
      "Smart Features",
      "Premium Finish"
    ],
    specs: {
      display: "1.4\" AMOLED",
      battery: "8 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0"
    }
  }
];
