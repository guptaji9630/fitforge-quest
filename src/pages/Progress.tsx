import { useState } from "react";
import { Camera, TrendingUp, Calendar, Target, Award, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Progress = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const progressStats = [
    {
      label: "Weight Lost",
      value: "12",
      unit: "lbs",
      target: "20 lbs",
      progress: 60,
      icon: TrendingUp,
      color: "text-primary"
    },
    {
      label: "Muscle Gained",
      value: "8",
      unit: "lbs",
      target: "12 lbs",
      progress: 67,
      icon: Target,
      color: "text-secondary"
    },
    {
      label: "Workout Streak",
      value: "28",
      unit: "days",
      target: "30 days",
      progress: 93,
      icon: Award,
      color: "text-accent"
    },
    {
      label: "Body Fat %",
      value: "18",
      unit: "%",
      target: "15%",
      progress: 75,
      icon: TrendingUp,
      color: "text-success"
    }
  ];

  const progressPhotos = [
    {
      id: 1,
      date: "Today",
      type: "Front",
      image: "/api/placeholder/200/300",
      notes: "Feeling stronger and more confident!"
    },
    {
      id: 2,
      date: "1 week ago",
      type: "Side",
      image: "/api/placeholder/200/300",
      notes: "Great progress on core strength"
    },
    {
      id: 3,
      date: "2 weeks ago", 
      type: "Back",
      image: "/api/placeholder/200/300",
      notes: "Back definition improving"
    },
    {
      id: 4,
      date: "1 month ago",
      type: "Front",
      image: "/api/placeholder/200/300",
      notes: "Starting point - excited for the journey!"
    }
  ];

  const measurements = [
    { label: "Weight", current: "168 lbs", change: "-12 lbs", trend: "down" },
    { label: "Body Fat %", current: "18%", change: "-5%", trend: "down" },
    { label: "Muscle Mass", current: "142 lbs", change: "+8 lbs", trend: "up" },
    { label: "Chest", current: "42 in", change: "+2 in", trend: "up" },
    { label: "Waist", current: "32 in", change: "-4 in", trend: "down" },
    { label: "Arms", current: "15 in", change: "+1.5 in", trend: "up" },
    { label: "Thighs", current: "24 in", change: "+2 in", trend: "up" },
  ];

  const achievements = [
    {
      title: "First Month Complete",
      date: "Yesterday",
      description: "Completed 30 days of consistent workouts",
      badge: "🏆",
      rarity: "Gold"
    },
    {
      title: "Strength Milestone",
      date: "3 days ago", 
      description: "Deadlifted 2x bodyweight for the first time",
      badge: "💪",
      rarity: "Platinum"
    },
    {
      title: "Consistency King",
      date: "1 week ago",
      description: "Worked out 5 days in a row",
      badge: "⚡",
      rarity: "Silver"
    },
    {
      title: "Progress Photo Pro",
      date: "2 weeks ago",
      description: "Uploaded 10 progress photos",
      badge: "📸",
      rarity: "Bronze"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "bronze": return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      case "silver": return "bg-gray-500/10 text-gray-600 border-gray-500/20";
      case "gold": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "platinum": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-hero text-foreground mb-2">Progress Tracking</h1>
            <p className="text-muted-foreground">
              Monitor your transformation journey and celebrate achievements
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Camera className="w-4 h-4 mr-2" />
              Take Photo
            </Button>
            <Button className="btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              Log Measurement
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="measurements">Measurements</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Progress Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {progressStats.map((stat, index) => (
                <Card key={index} className="metric-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      <div className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                        <span className="text-sm text-muted-foreground ml-1">{stat.unit}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                    <ProgressBar value={stat.progress} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">
                      Target: {stat.target}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Progress */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Latest Photo */}
              <Card className="card-fitness">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="w-5 h-5 text-primary" />
                    Latest Progress Photo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <img
                      src={progressPhotos[0].image}
                      alt="Latest progress"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{progressPhotos[0].type} View</p>
                        <p className="text-sm text-muted-foreground">{progressPhotos[0].date}</p>
                      </div>
                      <Button variant="outline">
                        View All Photos
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      "{progressPhotos[0].notes}"
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Weight Trend Chart */}
              <Card className="card-fitness">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                    Weight Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary mb-2">168 lbs</div>
                      <p className="text-sm text-muted-foreground">Current Weight</p>
                      <Badge className="bg-success/10 text-success mt-2">
                        ↓ 12 lbs from start
                      </Badge>
                    </div>
                    
                    {/* Simple trend visualization */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Starting Weight</span>
                        <span className="font-semibold">180 lbs</span>
                      </div>
                      <ProgressBar value={67} className="h-3" />
                      <div className="flex justify-between text-sm">
                        <span>Goal Weight</span>
                        <span className="font-semibold">160 lbs</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {progressPhotos.map((photo) => (
                <Card key={photo.id} className="card-fitness overflow-hidden">
                  <div className="relative">
                    <img
                      src={photo.image}
                      alt={`Progress photo ${photo.type}`}
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-black/20 text-white">
                      {photo.type}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{photo.date}</span>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      "{photo.notes}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Measurements Tab */}
          <TabsContent value="measurements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {measurements.map((measurement, index) => (
                <Card key={index} className="card-fitness">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg">{measurement.label}</h3>
                        <p className="text-2xl font-bold text-primary">{measurement.current}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={`${
                          measurement.trend === 'up' 
                            ? 'bg-success/10 text-success' 
                            : 'bg-destructive/10 text-destructive'
                        }`}>
                          {measurement.trend === 'up' ? '↑' : '↓'} {measurement.change}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-fitness">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{achievement.badge}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{achievement.title}</h3>
                          <Badge className={getRarityColor(achievement.rarity)}>
                            {achievement.rarity}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-2">{achievement.description}</p>
                        <p className="text-sm text-muted-foreground">{achievement.date}</p>
                      </div>
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

export default Progress;