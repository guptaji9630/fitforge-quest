import { useState } from "react";
import { Play, Clock, Target, Calendar, Trophy, Plus, Activity, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Workouts = () => {
  const [activeTab, setActiveTab] = useState("active");

  const activeWorkout = {
    name: "Upper Body Strength",
    duration: "45 minutes",
    exercises: 8,
    completed: 5,
    timeRemaining: "18 minutes",
    currentExercise: "Bench Press",
    progress: 63,
    calories: 287
  };

  const workoutHistory = [
    {
      id: 1,
      name: "Full Body HIIT",
      date: "Today",
      duration: "30 min",
      calories: 345,
      exercises: 6,
      difficulty: "High",
      rating: 4.5,
      status: "completed"
    },
    {
      id: 2,
      name: "Lower Body Strength",
      date: "Yesterday",
      duration: "50 min",
      calories: 412,
      exercises: 8,
      difficulty: "Medium",
      rating: 4.8,
      status: "completed"
    },
    {
      id: 3,
      name: "Core & Flexibility",
      date: "2 days ago",
      duration: "25 min",
      calories: 156,
      exercises: 5,
      difficulty: "Low",
      rating: 4.2,
      status: "completed"
    },
    {
      id: 4,
      name: "Cardio Blast",
      date: "3 days ago",
      duration: "35 min",
      calories: 378,
      exercises: 7,
      difficulty: "High",
      rating: 4.6,
      status: "completed"
    }
  ];

  const plannedWorkouts = [
    {
      id: 1,
      name: "Leg Day Destroyer",
      scheduledDate: "Tomorrow",
      scheduledTime: "6:00 AM",
      duration: "60 min",
      exercises: 9,
      difficulty: "High",
      type: "Strength"
    },
    {
      id: 2,
      name: "Recovery Yoga",
      scheduledDate: "Sunday",
      scheduledTime: "7:00 PM",
      duration: "30 min",
      exercises: 8,
      difficulty: "Low",
      type: "Flexibility"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "low": return "bg-success/10 text-success border-success/20";
      case "medium": return "bg-warning/10 text-warning border-warning/20";
      case "high": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "strength": return "bg-primary/10 text-primary border-primary/20";
      case "cardio": return "bg-secondary/10 text-secondary border-secondary/20";
      case "flexibility": return "bg-accent/10 text-accent border-accent/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-hero text-foreground mb-2">Workouts</h1>
            <p className="text-muted-foreground">
              Track your training sessions and build consistency
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button className="btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              New Workout
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="planned">Planned</TabsTrigger>
          </TabsList>

          {/* Active Workout Tab */}
          <TabsContent value="active" className="space-y-6">
            <Card className="card-fitness bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">{activeWorkout.name}</CardTitle>
                    <p className="text-muted-foreground">In Progress</p>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">
                    Live
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{activeWorkout.completed}/{activeWorkout.exercises}</div>
                    <p className="text-sm text-muted-foreground">Exercises</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">{activeWorkout.timeRemaining}</div>
                    <p className="text-sm text-muted-foreground">Remaining</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{activeWorkout.calories}</div>
                    <p className="text-sm text-muted-foreground">Calories</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{activeWorkout.duration}</div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Current: {activeWorkout.currentExercise}</span>
                      <span className="text-sm text-muted-foreground">{activeWorkout.progress}%</span>
                    </div>
                    <Progress value={activeWorkout.progress} className="h-3" />
                  </div>

                  <div className="flex gap-3">
                    <Button className="btn-primary flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Continue Workout
                    </Button>
                    <Button variant="outline">
                      Pause
                    </Button>
                    <Button variant="destructive">
                      End
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Start Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-fitness hover:shadow-glow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Quick Strength</h3>
                  <p className="text-sm text-muted-foreground mb-4">30-minute full body workout</p>
                  <Button className="btn-primary w-full">Start Now</Button>
                </CardContent>
              </Card>

              <Card className="card-fitness hover:shadow-glow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary to-secondary-hover rounded-full flex items-center justify-center">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cardio Burn</h3>
                  <p className="text-sm text-muted-foreground mb-4">20-minute high intensity</p>
                  <Button className="btn-secondary w-full">Start Now</Button>
                </CardContent>
              </Card>

              <Card className="card-fitness hover:shadow-glow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-accent-hover rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                  <p className="text-sm text-muted-foreground mb-4">Today's fitness challenge</p>
                  <Button className="btn-accent w-full">Start Now</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workoutHistory.map((workout) => (
                <Card key={workout.id} className="card-fitness">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg mb-1">{workout.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{workout.date}</p>
                      </div>
                      <Badge className={getDifficultyColor(workout.difficulty)}>
                        {workout.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{workout.duration}</div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-secondary">{workout.calories}</div>
                        <p className="text-xs text-muted-foreground">Calories</p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-accent">{workout.exercises}</div>
                        <p className="text-xs text-muted-foreground">Exercises</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium">{workout.rating}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Planned Tab */}
          <TabsContent value="planned" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plannedWorkouts.map((workout) => (
                <Card key={workout.id} className="card-fitness">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg mb-1">{workout.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {workout.scheduledDate} at {workout.scheduledTime}
                        </p>
                      </div>
                      <Badge className={getTypeColor(workout.type)}>
                        {workout.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{workout.duration}</div>
                        <p className="text-xs text-muted-foreground">Duration</p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-secondary">{workout.exercises}</div>
                        <p className="text-xs text-muted-foreground">Exercises</p>
                      </div>
                      <div className="text-center">
                        <Badge className={getDifficultyColor(workout.difficulty)}>
                          {workout.difficulty}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1" variant="outline">
                        <Calendar className="w-4 h-4 mr-2" />
                        Reschedule
                      </Button>
                      <Button className="btn-primary flex-1">
                        <Play className="w-4 h-4 mr-2" />
                        Start Early
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Workouts;