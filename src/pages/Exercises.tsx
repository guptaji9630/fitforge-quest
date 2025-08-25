import { useState } from "react";
import { Search, Filter, Heart, Clock, Target, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Exercises = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "strength", label: "Strength" },
    { value: "cardio", label: "Cardio" },
    { value: "flexibility", label: "Flexibility" },
    { value: "balance", label: "Balance" },
  ];

  const difficulties = [
    { value: "all", label: "All Levels" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ];

  const exercises = [
    {
      id: 1,
      name: "Push-ups",
      category: "Strength",
      difficulty: "Beginner",
      duration: "3 sets × 12 reps",
      targetMuscles: ["Chest", "Triceps", "Shoulders"],
      equipment: "Bodyweight",
      calories: "45-60",
      rating: 4.8,
      isFavorite: false,
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      name: "Squats",
      category: "Strength",
      difficulty: "Beginner",
      duration: "3 sets × 15 reps",
      targetMuscles: ["Quadriceps", "Glutes", "Hamstrings"],
      equipment: "Bodyweight",
      calories: "50-70",
      rating: 4.9,
      isFavorite: true,
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      name: "Deadlifts",
      category: "Strength",
      difficulty: "Intermediate",
      duration: "3 sets × 8 reps",
      targetMuscles: ["Hamstrings", "Glutes", "Back"],
      equipment: "Barbell",
      calories: "80-100",
      rating: 4.7,
      isFavorite: false,
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      name: "Mountain Climbers",
      category: "Cardio",
      difficulty: "Intermediate",
      duration: "3 sets × 30 sec",
      targetMuscles: ["Core", "Shoulders", "Legs"],
      equipment: "Bodyweight",
      calories: "60-80",
      rating: 4.6,
      isFavorite: true,
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      name: "Plank",
      category: "Strength",
      difficulty: "Beginner",
      duration: "3 sets × 45 sec",
      targetMuscles: ["Core", "Shoulders"],
      equipment: "Bodyweight",
      calories: "25-35",
      rating: 4.8,
      isFavorite: false,
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      name: "Burpees",
      category: "Cardio",
      difficulty: "Advanced",
      duration: "3 sets × 10 reps",
      targetMuscles: ["Full Body"],
      equipment: "Bodyweight",
      calories: "100-120",
      rating: 4.4,
      isFavorite: false,
      image: "/api/placeholder/300/200"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
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
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-hero text-foreground mb-2">Exercise Library</h1>
            <p className="text-muted-foreground">
              Discover over 500 exercises to build your perfect workout
            </p>
          </div>
          <Button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Exercise
          </Button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search exercises..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              {difficulties.map((difficulty) => (
                <SelectItem key={difficulty.value} value={difficulty.value}>
                  {difficulty.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Exercise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <Card key={exercise.id} className="card-fitness group cursor-pointer overflow-hidden">
              <div className="relative">
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-3 right-3 rounded-full ${
                    exercise.isFavorite ? "text-red-500 bg-white/20" : "text-white bg-black/20"
                  } hover:bg-white/30`}
                >
                  <Heart className={`w-4 h-4 ${exercise.isFavorite ? "fill-current" : ""}`} />
                </Button>
              </div>

              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-card-title group-hover:text-primary transition-colors">
                    {exercise.name}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {exercise.rating}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className={getCategoryColor(exercise.category)}>
                    {exercise.category}
                  </Badge>
                  <Badge className={getDifficultyColor(exercise.difficulty)}>
                    {exercise.difficulty}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{exercise.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4" />
                    <span>{exercise.targetMuscles.join(", ")}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Equipment:</span>
                    <span className="font-medium">{exercise.equipment}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Calories:</span>
                    <span className="font-medium text-accent">{exercise.calories}</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button className="flex-1" variant="outline">
                    View Details
                  </Button>
                  <Button className="btn-primary flex-1">
                    Add to Workout
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8">
            Load More Exercises
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Exercises;