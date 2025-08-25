import { useState } from "react";
import { Star, Clock, Target, Users, Heart, Plus, Filter, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const WorkoutPlans = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const workoutPlans = [
    {
      id: 1,
      title: "30-Day Muscle Builder",
      creator: "Mike Johnson",
      avatar: "/api/placeholder/40/40",
      duration: "4 weeks",
      level: "Intermediate",
      workouts: 24,
      rating: 4.8,
      reviews: 342,
      price: "Free",
      category: "Strength",
      description: "Build lean muscle mass with this comprehensive strength training program designed for intermediate lifters.",
      tags: ["Muscle Building", "Strength", "Progressive Overload"],
      isFavorite: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "HIIT Fat Burner",
      creator: "Sarah Williams",
      avatar: "/api/placeholder/40/40",
      duration: "6 weeks",
      level: "Advanced",
      workouts: 36,
      rating: 4.9,
      reviews: 567,
      price: "$9.99",
      category: "Cardio",
      description: "High-intensity interval training program designed to maximize fat burning and improve cardiovascular fitness.",
      tags: ["Fat Loss", "HIIT", "Cardio"],
      isFavorite: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Flexibility & Mobility",
      creator: "Emma Davis",
      avatar: "/api/placeholder/40/40",
      duration: "8 weeks",
      level: "Beginner",
      workouts: 32,
      rating: 4.7,
      reviews: 189,
      price: "Free",
      category: "Flexibility",
      description: "Improve your flexibility and mobility with this gentle yet effective program suitable for all fitness levels.",
      tags: ["Flexibility", "Mobility", "Recovery"],
      isFavorite: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Powerlifter's Protocol",
      creator: "David Thompson",
      avatar: "/api/placeholder/40/40",
      duration: "12 weeks",
      level: "Advanced",
      workouts: 48,
      rating: 4.9,
      reviews: 234,
      price: "$19.99",
      category: "Strength",
      description: "Elite powerlifting program focusing on the big three lifts: squat, bench press, and deadlift.",
      tags: ["Powerlifting", "Strength", "Competition Prep"],
      isFavorite: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Bodyweight Basics",
      creator: "Alex Chen",
      avatar: "/api/placeholder/40/40",
      duration: "4 weeks",
      level: "Beginner",
      workouts: 20,
      rating: 4.6,
      reviews: 423,
      price: "Free",
      category: "Bodyweight",
      description: "Perfect for beginners! Learn fundamental bodyweight exercises and build a solid fitness foundation.",
      tags: ["Bodyweight", "No Equipment", "Beginner Friendly"],
      isFavorite: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Athlete Performance",
      creator: "Jessica Martinez",
      avatar: "/api/placeholder/40/40",
      duration: "10 weeks",
      level: "Advanced",
      workouts: 50,
      rating: 4.8,
      reviews: 156,
      price: "$14.99",
      category: "Performance",
      description: "Sport-specific training program designed to enhance athletic performance and reduce injury risk.",
      tags: ["Athletic Performance", "Speed", "Agility"],
      isFavorite: false,
      image: "/api/placeholder/400/250"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner": return "bg-success/10 text-success border-success/20";
      case "intermediate": return "bg-warning/10 text-warning border-warning/20";
      case "advanced": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "strength": return "bg-primary/10 text-primary border-primary/20";
      case "cardio": return "bg-secondary/10 text-secondary border-secondary/20";
      case "flexibility": return "bg-accent/10 text-accent border-accent/20";
      case "bodyweight": return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "performance": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-hero text-foreground mb-2">Workout Plans</h1>
            <p className="text-muted-foreground">
              Discover expertly crafted workout programs for every fitness goal
            </p>
          </div>
          <Button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Plan
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-fitness text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <p className="text-sm text-muted-foreground">Available Plans</p>
            </CardContent>
          </Card>
          <Card className="card-fitness text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-secondary mb-2">25k+</div>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </CardContent>
          </Card>
          <Card className="card-fitness text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">4.8</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </CardContent>
          </Card>
          <Card className="card-fitness text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <p className="text-sm text-muted-foreground">Your Plans</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search workout plans..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Workout Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workoutPlans.map((plan) => (
            <Card key={plan.id} className="card-fitness group overflow-hidden">
              <div className="relative">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-3 right-3 rounded-full ${
                    plan.isFavorite ? "text-red-500 bg-white/20" : "text-white bg-black/20"
                  } hover:bg-white/30`}
                >
                  <Heart className={`w-4 h-4 ${plan.isFavorite ? "fill-current" : ""}`} />
                </Button>
                <div className="absolute top-3 left-3">
                  <Badge className={`${plan.price === "Free" ? "bg-success text-success-foreground" : "bg-primary text-primary-foreground"}`}>
                    {plan.price}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {plan.title}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{plan.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={plan.avatar} alt={plan.creator} />
                    <AvatarFallback>{plan.creator.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">{plan.creator}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className={getCategoryColor(plan.category)}>
                    {plan.category}
                  </Badge>
                  <Badge className={getLevelColor(plan.level)}>
                    {plan.level}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {plan.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Duration:
                    </span>
                    <span className="font-medium">{plan.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      Workouts:
                    </span>
                    <span className="font-medium">{plan.workouts}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Reviews:
                    </span>
                    <span className="font-medium">{plan.reviews}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {plan.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Preview
                  </Button>
                  <Button className="btn-primary flex-1" size="sm">
                    Start Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8">
            Load More Plans
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlans;