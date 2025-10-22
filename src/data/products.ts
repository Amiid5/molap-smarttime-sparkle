import watchFitness from "@/assets/watch-fitness.jpg";
import watchPremium from "@/assets/watch-premium.jpg";
import watchSport from "@/assets/watch-sport.jpg";
import watchCasual from "@/assets/watch-casual.jpg";
import watchUltra from "@/assets/watch-ultra.jpg";
import watchClassic from "@/assets/watch-classic.jpg";
import watchMinimalist from "@/assets/watch-minimalist.jpg";
import watchOutdoor from "@/assets/watch-outdoor.jpg";
import watchFashion from "@/assets/watch-fashion.jpg";
import watchBusiness from "@/assets/watch-business.jpg";
import watchKids from "@/assets/watch-kids.jpg";
import watchSwim from "@/assets/watch-swim.jpg";
import watchRunner from "@/assets/watch-runner.jpg";
import watchGaming from "@/assets/watch-gaming.jpg";
import watchMedical from "@/assets/watch-medical.jpg";
import watchSolar from "@/assets/watch-solar.jpg";
import watchDive from "@/assets/watch-dive.jpg";
import watchCycling from "@/assets/watch-cycling.jpg";
import watchHiking from "@/assets/watch-hiking.jpg";
import watchBand from "@/assets/watch-band.jpg";
import watchLuxury from "@/assets/watch-luxury.jpg";

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
  },
  {
    id: 7,
    name: "Pure Minimalist",
    price: 279,
    image: watchMinimalist,
    category: "Casual",
    description: "Ultra-thin ceramic smartwatch with minimalist design for modern lifestyles.",
    features: [
      "Ceramic Build",
      "Ultra-Thin Design",
      "Minimalist Interface",
      "Scratch Resistant",
      "Premium White Finish"
    ],
    specs: {
      display: "1.3\" AMOLED",
      battery: "6 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 8,
    name: "Tactical Outdoor",
    price: 399,
    image: watchOutdoor,
    category: "Sport",
    description: "Military-grade smartwatch designed for outdoor adventures and survival.",
    features: [
      "Military Grade",
      "Compass Navigation",
      "Tactical Features",
      "Extreme Durability",
      "Emergency SOS"
    ],
    specs: {
      display: "1.4\" MIP",
      battery: "21 Days",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.0, GPS"
    }
  },
  {
    id: 9,
    name: "Fashion Rose",
    price: 329,
    image: watchFashion,
    category: "Fashion",
    description: "Elegant rose gold smartwatch designed for fashion-forward individuals.",
    features: [
      "Rose Gold Finish",
      "Fashion Design",
      "Interchangeable Bands",
      "Style Tracking",
      "Premium Materials"
    ],
    specs: {
      display: "1.2\" AMOLED",
      battery: "5 Days",
      waterproof: "3ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 10,
    name: "Executive Pro",
    price: 549,
    image: watchBusiness,
    category: "Business",
    description: "Professional business smartwatch with corporate features and elegant design.",
    features: [
      "Business Calendar",
      "Email Notifications",
      "Professional Style",
      "Sapphire Crystal",
      "Stock Market Updates"
    ],
    specs: {
      display: "1.5\" AMOLED",
      battery: "9 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.2, WiFi"
    }
  },
  {
    id: 11,
    name: "Kids Guardian",
    price: 149,
    image: watchKids,
    category: "Kids",
    description: "Safe and fun smartwatch for kids with parental controls and GPS tracking.",
    features: [
      "GPS Tracking",
      "Parental Controls",
      "Educational Games",
      "Emergency Call",
      "Durable Design"
    ],
    specs: {
      display: "1.0\" LCD",
      battery: "7 Days",
      waterproof: "IP68",
      connectivity: "Bluetooth 5.0, GPS"
    }
  },
  {
    id: 12,
    name: "AquaPro Swim",
    price: 369,
    image: watchSwim,
    category: "Sport",
    description: "Professional swimming smartwatch with advanced aquatic metrics.",
    features: [
      "Swim Tracking",
      "Pool Mode",
      "Open Water GPS",
      "SWOLF Score",
      "Water Lock"
    ],
    specs: {
      display: "1.3\" AMOLED",
      battery: "10 Days",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.0, GPS"
    }
  },
  {
    id: 13,
    name: "Marathon Pro",
    price: 319,
    image: watchRunner,
    category: "Fitness",
    description: "Dedicated running watch with professional marathon training features.",
    features: [
      "Running Dynamics",
      "VO2 Max",
      "Training Plans",
      "Race Predictor",
      "Recovery Advisor"
    ],
    specs: {
      display: "1.2\" MIP",
      battery: "16 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0, GPS"
    }
  },
  {
    id: 14,
    name: "Gamer Sync",
    price: 279,
    image: watchGaming,
    category: "Gaming",
    description: "Gaming-focused smartwatch with RGB lighting and performance tracking.",
    features: [
      "RGB Lighting",
      "Gaming Stats",
      "Tournament Timer",
      "Reflex Tracking",
      "Game Notifications"
    ],
    specs: {
      display: "1.4\" AMOLED",
      battery: "4 Days",
      waterproof: "3ATM",
      connectivity: "Bluetooth 5.2, WiFi"
    }
  },
  {
    id: 15,
    name: "HealthGuard Plus",
    price: 479,
    image: watchMedical,
    category: "Health",
    description: "Medical-grade smartwatch with comprehensive health monitoring.",
    features: [
      "ECG Certified",
      "Blood Pressure",
      "Blood Glucose",
      "Medical Alerts",
      "FDA Approved"
    ],
    specs: {
      display: "1.5\" AMOLED",
      battery: "7 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.2, WiFi"
    }
  },
  {
    id: 16,
    name: "EcoSolar One",
    price: 389,
    image: watchSolar,
    category: "Eco",
    description: "Solar-powered smartwatch with sustainable materials and eco-friendly design.",
    features: [
      "Solar Charging",
      "Eco Materials",
      "Unlimited Battery",
      "Carbon Neutral",
      "Recycled Packaging"
    ],
    specs: {
      display: "1.3\" MIP",
      battery: "Solar Powered",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 17,
    name: "Deep Diver Pro",
    price: 699,
    image: watchDive,
    category: "Sport",
    description: "Professional diving computer with depth tracking and decompression calculations.",
    features: [
      "Dive Computer",
      "Depth Gauge",
      "Decompression",
      "Dive Log",
      "Underwater GPS"
    ],
    specs: {
      display: "1.4\" AMOLED",
      battery: "12 Days",
      waterproof: "100M",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 18,
    name: "Cycle Master",
    price: 339,
    image: watchCycling,
    category: "Sport",
    description: "Dedicated cycling computer with power metrics and route navigation.",
    features: [
      "Power Meter",
      "Cadence Tracking",
      "Route Navigation",
      "Bike Modes",
      "Performance Analytics"
    ],
    specs: {
      display: "1.3\" MIP",
      battery: "18 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0, GPS, ANT+"
    }
  },
  {
    id: 19,
    name: "Mountain Explorer",
    price: 429,
    image: watchHiking,
    category: "Sport",
    description: "Hiking smartwatch with topographic maps and altitude tracking.",
    features: [
      "Topo Maps",
      "Altitude Tracker",
      "Trail Navigation",
      "Weather Station",
      "Emergency Beacon"
    ],
    specs: {
      display: "1.4\" MIP",
      battery: "25 Days",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.0, GPS"
    }
  },
  {
    id: 20,
    name: "Slim Band Pro",
    price: 129,
    image: watchBand,
    category: "Fitness",
    description: "Slim fitness tracker with essential health monitoring in a minimalist design.",
    features: [
      "Ultra Slim",
      "Step Counter",
      "Heart Rate",
      "Sleep Score",
      "Long Battery"
    ],
    specs: {
      display: "0.95\" AMOLED",
      battery: "14 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 21,
    name: "Diamond Prestige",
    price: 1299,
    image: watchLuxury,
    category: "Luxury",
    description: "Ultimate luxury smartwatch with diamond bezel and haute horlogerie craftsmanship.",
    features: [
      "Diamond Bezel",
      "Luxury Materials",
      "Swiss Made",
      "Limited Edition",
      "Concierge Service"
    ],
    specs: {
      display: "1.5\" Sapphire AMOLED",
      battery: "8 Days",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.2, WiFi, LTE"
    }
  },
  {
    id: 22,
    name: "FitCore Basic",
    price: 99,
    image: watchFitness,
    category: "Fitness",
    description: "Entry-level fitness tracker with essential workout tracking features.",
    features: [
      "Basic Tracking",
      "Workout Modes",
      "Affordable",
      "Easy Setup",
      "Beginner Friendly"
    ],
    specs: {
      display: "1.1\" LCD",
      battery: "10 Days",
      waterproof: "3ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 23,
    name: "Elite Runner X",
    price: 379,
    image: watchRunner,
    category: "Fitness",
    description: "Elite running watch with professional coaching and training insights.",
    features: [
      "Training Plans",
      "Coach Integration",
      "Running Form",
      "Race Mode",
      "Virtual Pacer"
    ],
    specs: {
      display: "1.3\" MIP",
      battery: "20 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0, GPS"
    }
  },
  {
    id: 24,
    name: "Style Icon",
    price: 359,
    image: watchFashion,
    category: "Fashion",
    description: "Fashion smartwatch with designer collaborations and style recommendations.",
    features: [
      "Designer Bands",
      "Fashion Alerts",
      "Outfit Matching",
      "Premium Design",
      "Style Tips"
    ],
    specs: {
      display: "1.3\" AMOLED",
      battery: "6 Days",
      waterproof: "3ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 25,
    name: "Business Elite",
    price: 579,
    image: watchBusiness,
    category: "Business",
    description: "Executive smartwatch with business intelligence and productivity tools.",
    features: [
      "Meeting Scheduler",
      "Voice Recorder",
      "Business Analytics",
      "Professional Network",
      "Premium Support"
    ],
    specs: {
      display: "1.6\" AMOLED",
      battery: "8 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.2, WiFi, LTE"
    }
  },
  {
    id: 26,
    name: "Adventure Kids",
    price: 169,
    image: watchKids,
    category: "Kids",
    description: "Adventure-ready kids smartwatch with activity challenges and rewards.",
    features: [
      "Activity Challenges",
      "Reward System",
      "Safe Messaging",
      "Location Sharing",
      "Water Resistant"
    ],
    specs: {
      display: "1.1\" LCD",
      battery: "8 Days",
      waterproof: "IP68",
      connectivity: "Bluetooth 5.0, GPS"
    }
  },
  {
    id: 27,
    name: "Pool Champion",
    price: 289,
    image: watchSwim,
    category: "Sport",
    description: "Pool swimming specialist with automatic lap detection and stroke analysis.",
    features: [
      "Auto Lap Count",
      "Stroke Analysis",
      "Pool Length",
      "Swim Score",
      "Training Tips"
    ],
    specs: {
      display: "1.2\" AMOLED",
      battery: "9 Days",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 28,
    name: "Urban Sport",
    price: 259,
    image: watchSport,
    category: "Sport",
    description: "Urban sports watch for street workouts and city athletics.",
    features: [
      "Urban Workouts",
      "Street Running",
      "Parkour Mode",
      "City Maps",
      "Community Challenges"
    ],
    specs: {
      display: "1.3\" AMOLED",
      battery: "11 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0, GPS"
    }
  },
  {
    id: 29,
    name: "Zen Wellness",
    price: 249,
    image: watchMinimalist,
    category: "Health",
    description: "Wellness-focused smartwatch with meditation and stress management.",
    features: [
      "Meditation Guide",
      "Stress Tracking",
      "Breathing Exercises",
      "Mindfulness",
      "Calm Design"
    ],
    specs: {
      display: "1.2\" AMOLED",
      battery: "7 Days",
      waterproof: "3ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 30,
    name: "Night Vision",
    price: 419,
    image: watchOutdoor,
    category: "Sport",
    description: "Tactical watch with night vision mode and stealth features.",
    features: [
      "Night Mode",
      "Stealth Features",
      "Red Backlight",
      "Tactical Apps",
      "Silent Alarms"
    ],
    specs: {
      display: "1.4\" MIP",
      battery: "30 Days",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.0, GPS"
    }
  },
  {
    id: 31,
    name: "Glamour Gold",
    price: 499,
    image: watchLuxury,
    category: "Fashion",
    description: "Glamorous gold-plated smartwatch for special occasions and events.",
    features: [
      "Gold Plated",
      "Jewelry Quality",
      "Event Mode",
      "Premium Box",
      "Lifetime Warranty"
    ],
    specs: {
      display: "1.4\" AMOLED",
      battery: "6 Days",
      waterproof: "3ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 32,
    name: "Corporate Pro",
    price: 449,
    image: watchBusiness,
    category: "Business",
    description: "Professional smartwatch optimized for corporate environments.",
    features: [
      "Office Integration",
      "Calendar Sync",
      "Corporate Email",
      "Professional Look",
      "Business Hours Mode"
    ],
    specs: {
      display: "1.5\" AMOLED",
      battery: "9 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.2, WiFi"
    }
  },
  {
    id: 33,
    name: "SmartKid Learn",
    price: 139,
    image: watchKids,
    category: "Kids",
    description: "Educational smartwatch with learning games and homework reminders.",
    features: [
      "Learning Games",
      "Homework Timer",
      "Math Practice",
      "Reading Rewards",
      "Parent Dashboard"
    ],
    specs: {
      display: "1.0\" LCD",
      battery: "6 Days",
      waterproof: "IP67",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 34,
    name: "Open Water Pro",
    price: 449,
    image: watchSwim,
    category: "Sport",
    description: "Open water swimming watch with navigation and safety features.",
    features: [
      "Open Water GPS",
      "Safety Beacon",
      "Current Detection",
      "Distance Tracking",
      "Emergency Float"
    ],
    specs: {
      display: "1.4\" AMOLED",
      battery: "15 Days",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.0, GPS"
    }
  },
  {
    id: 35,
    name: "Trail Blazer",
    price: 389,
    image: watchHiking,
    category: "Sport",
    description: "Trail running and hiking watch with offline maps and navigation.",
    features: [
      "Offline Maps",
      "Trail Markers",
      "Elevation Profile",
      "Waypoint Tracking",
      "Rescue Signal"
    ],
    specs: {
      display: "1.3\" MIP",
      battery: "28 Days",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.0, GPS"
    }
  },
  {
    id: 36,
    name: "Yoga Master",
    price: 229,
    image: watchFitness,
    category: "Fitness",
    description: "Yoga and pilates focused smartwatch with pose detection.",
    features: [
      "Pose Detection",
      "Yoga Sessions",
      "Flexibility Score",
      "Breathing Coach",
      "Balance Tracking"
    ],
    specs: {
      display: "1.2\" AMOLED",
      battery: "8 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 37,
    name: "Speed Racer",
    price: 369,
    image: watchCycling,
    category: "Sport",
    description: "Road cycling watch with speed metrics and racing features.",
    features: [
      "Speed Analysis",
      "Race Timer",
      "Virtual Competitor",
      "Segment Tracking",
      "Team Challenges"
    ],
    specs: {
      display: "1.3\" MIP",
      battery: "20 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0, GPS, ANT+"
    }
  },
  {
    id: 38,
    name: "Retro Classic",
    price: 329,
    image: watchClassic,
    category: "Casual",
    description: "Vintage-inspired smartwatch with modern features in classic design.",
    features: [
      "Vintage Design",
      "Modern Features",
      "Genuine Leather",
      "Classic Dial",
      "Timeless Style"
    ],
    specs: {
      display: "1.3\" AMOLED",
      battery: "7 Days",
      waterproof: "3ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 39,
    name: "Power Lifter",
    price: 299,
    image: watchSport,
    category: "Fitness",
    description: "Strength training smartwatch with rep counting and form analysis.",
    features: [
      "Rep Counter",
      "Form Analysis",
      "Strength Gains",
      "Workout Plans",
      "Rest Timer"
    ],
    specs: {
      display: "1.4\" AMOLED",
      battery: "10 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 40,
    name: "Sleep Guardian",
    price: 269,
    image: watchMinimalist,
    category: "Health",
    description: "Sleep-focused smartwatch with advanced sleep staging and insights.",
    features: [
      "Sleep Staging",
      "Snore Detection",
      "Sleep Score",
      "Smart Alarm",
      "Recovery Analysis"
    ],
    specs: {
      display: "1.1\" AMOLED",
      battery: "9 Days",
      waterproof: "3ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 41,
    name: "Triathlon Pro",
    price: 549,
    image: watchUltra,
    category: "Sport",
    description: "Multi-sport triathlon watch with transitions and brick training.",
    features: [
      "Triathlon Mode",
      "Auto Transitions",
      "Brick Training",
      "Multi-Sport",
      "Race Analysis"
    ],
    specs: {
      display: "1.5\" AMOLED",
      battery: "22 Days",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.2, GPS, ANT+"
    }
  },
  {
    id: 42,
    name: "Golf Pro",
    price: 399,
    image: watchPremium,
    category: "Sport",
    description: "Golf smartwatch with course maps and shot tracking.",
    features: [
      "Course Maps",
      "Shot Distance",
      "Swing Analysis",
      "Scorecard",
      "Hazard Warnings"
    ],
    specs: {
      display: "1.4\" AMOLED",
      battery: "12 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0, GPS"
    }
  },
  {
    id: 43,
    name: "Beach Vibes",
    price: 219,
    image: watchCasual,
    category: "Casual",
    description: "Colorful casual smartwatch perfect for beach and vacation.",
    features: [
      "Colorful Bands",
      "Vacation Mode",
      "Water Fun",
      "Sunset Timer",
      "Beach Games"
    ],
    specs: {
      display: "1.2\" AMOLED",
      battery: "8 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 44,
    name: "Party Pulse",
    price: 189,
    image: watchGaming,
    category: "Fashion",
    description: "LED smartwatch with party mode and music sync lighting.",
    features: [
      "LED Effects",
      "Music Sync",
      "Party Mode",
      "Social Features",
      "Event Notifications"
    ],
    specs: {
      display: "1.3\" AMOLED",
      battery: "5 Days",
      waterproof: "3ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 45,
    name: "Senior Care",
    price: 299,
    image: watchMedical,
    category: "Health",
    description: "Health smartwatch designed for seniors with fall detection.",
    features: [
      "Fall Detection",
      "Medicine Reminder",
      "Emergency Contact",
      "Large Display",
      "Simple Interface"
    ],
    specs: {
      display: "1.6\" AMOLED",
      battery: "10 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0, LTE"
    }
  },
  {
    id: 46,
    name: "Eco Warrior",
    price: 259,
    image: watchSolar,
    category: "Eco",
    description: "Sustainable smartwatch made from recycled ocean plastic.",
    features: [
      "Ocean Plastic",
      "Carbon Tracking",
      "Eco Challenges",
      "Plant Trees",
      "Green Energy"
    ],
    specs: {
      display: "1.2\" MIP",
      battery: "Solar + 15 Days",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.0"
    }
  },
  {
    id: 47,
    name: "Mountain Peak",
    price: 479,
    image: watchOutdoor,
    category: "Sport",
    description: "Mountaineering watch with barometric altimeter and storm alerts.",
    features: [
      "Barometric Altimeter",
      "Storm Alert",
      "Summit Timer",
      "Oxygen Level",
      "Mountain Database"
    ],
    specs: {
      display: "1.4\" MIP",
      battery: "35 Days",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.0, GPS"
    }
  },
  {
    id: 48,
    name: "Festival Band",
    price: 159,
    image: watchBand,
    category: "Fashion",
    description: "Slim festival wristband with NFC payments and access control.",
    features: [
      "NFC Payments",
      "Festival Access",
      "Friends Locator",
      "Slim Design",
      "Waterproof"
    ],
    specs: {
      display: "0.95\" OLED",
      battery: "12 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0, NFC"
    }
  },
  {
    id: 49,
    name: "Royal Collection",
    price: 999,
    image: watchLuxury,
    category: "Luxury",
    description: "Exclusive luxury smartwatch with precious metals and gemstones.",
    features: [
      "Precious Metals",
      "Hand Crafted",
      "Limited Series",
      "Certificate",
      "VIP Service"
    ],
    specs: {
      display: "1.6\" Sapphire AMOLED",
      battery: "7 Days",
      waterproof: "10ATM",
      connectivity: "Bluetooth 5.2, WiFi, LTE"
    }
  },
  {
    id: 50,
    name: "All-Day Active",
    price: 179,
    image: watchFitness,
    category: "Fitness",
    description: "24/7 activity tracker with continuous health monitoring.",
    features: [
      "24/7 Tracking",
      "All-Day Heart Rate",
      "Activity Goals",
      "Move Reminders",
      "Wellness Score"
    ],
    specs: {
      display: "1.1\" AMOLED",
      battery: "14 Days",
      waterproof: "5ATM",
      connectivity: "Bluetooth 5.0"
    }
  }
];
