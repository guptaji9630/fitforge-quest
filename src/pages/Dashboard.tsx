import { Activity, Target, Trophy, TrendingUp, Play, BookOpen, Camera, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const stats = [
    {
      label: "Workouts This Week",
      value: "5",
      target: "6",
      icon: Activity,
      color: "text-primary",
      progress: 83
    },
    {
      label: "Current Streak",
      value: "12",
      unit: "days",
      icon: Trophy,
      color: "text-accent",
      progress: 75
    },
    {
      label: "Calories Burned",
      value: "2,847",
      target: "3,000",
      icon: TrendingUp,
      color: "text-secondary",
      progress: 95
    },
    {
      label: "Personal Records",
      value: "8",
      unit: "this month",
      icon: Target,
      color: "text-primary",
      progress: 100
    }
  ];

  const quickActions = [
    {
      title: "Start Workout",
      subtitle: "Begin your training session",
      icon: Play,
      action: "primary",
      path: "/workouts/active"
    },
    {
      title: "Exercise Library",
      subtitle: "Browse 500+ exercises",
      icon: BookOpen,
      action: "secondary",
      path: "/exercises"
    },
    {
      title: "Progress Photos",
      subtitle: "Track your transformation",
      icon: Camera,
      action: "accent",
      path: "/progress/photos"
    },
    {
      title: "Join Challenge",
      subtitle: "Compete with others",
      icon: Users,
      action: "secondary",
      path: "/challenges"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border-b">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <div className="animate-fade-in">
              <h1 className="text-hero gradient-hero bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
                Welcome to FitForge
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
                Transform your fitness journey with personalized workouts, progress tracking, and community challenges.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button className="btn-primary text-lg px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                Start Training
              </Button>
              <Button variant="outline" className="text-lg px-8 py-3 border-2 hover:bg-primary/5">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Exercises
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-scale-in">
            {stats.map((stat, index) => (
              <Card key={index} className="metric-card border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    <div className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                      {stat.unit && <span className="text-sm text-muted-foreground ml-1">{stat.unit}</span>}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <Progress value={stat.progress} className="h-2" />
                  {stat.target && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Target: {stat.target}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-section text-foreground mb-2">Quick Actions</h2>
          <p className="text-muted-foreground">Jump back into your fitness routine</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="card-fitness group cursor-pointer border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-glow transition-all duration-300">
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                  action.action === 'primary' ? 'from-primary to-primary-hover' :
                  action.action === 'secondary' ? 'from-secondary to-secondary-hover' :
                  'from-accent to-accent-hover'
                } flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-card-title">{action.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{action.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="text-center mb-8">
          <h2 className="text-section text-foreground mb-2">Recent Activity</h2>
          <p className="text-muted-foreground">Your latest fitness achievements</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Latest Workout */}
          <Card className="card-fitness">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Latest Workout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-semibold">Upper Body Strength</p>
                    <p className="text-sm text-muted-foreground">45 minutes • Yesterday</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">387 cal</p>
                    <p className="text-sm text-muted-foreground">8 exercises</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Progress Chart */}
          <Card className="card-fitness">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                Weekly Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Workouts Completed</span>
                  <span className="font-semibold">5/6</span>
                </div>
                <Progress value={83} className="h-3" />
                
                <div className="flex justify-between text-sm">
                  <span>Calories Burned</span>
                  <span className="font-semibold">2,847/3,000</span>
                </div>
                <Progress value={95} className="h-3" />
                
                <div className="flex justify-between text-sm">
                  <span>Active Minutes</span>
                  <span className="font-semibold">285/300</span>
                </div>
                <Progress value={95} className="h-3" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;