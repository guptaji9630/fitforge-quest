import { useState } from "react";
import { Camera, Edit, Settings, Trophy, Target, Calendar, Activity, Award, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const userProfile = {
    name: "John Doe",
    username: "@johndoe",
    email: "john@fitforge.com", 
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "January 2024",
    bio: "Passionate fitness enthusiast on a journey to become the best version of myself. Always looking for new challenges and ways to push my limits! 💪",
    avatar: "/api/placeholder/150/150",
    coverImage: "/api/placeholder/800/200",
    isPublic: true,
    verified: true
  };

  const fitnessStats = [
    { label: "Total Workouts", value: "127", icon: Activity, color: "text-primary" },
    { label: "Current Streak", value: "28 days", icon: Target, color: "text-accent" },
    { label: "Calories Burned", value: "45,231", icon: Trophy, color: "text-secondary" },
    { label: "Personal Records", value: "23", icon: Award, color: "text-primary" }
  ];

  const achievements = [
    { title: "First Month", description: "Completed first 30 days", badge: "🏆", date: "Feb 2024" },
    { title: "Strength Master", description: "Deadlifted 2x bodyweight", badge: "💪", date: "Mar 2024" },
    { title: "Consistency King", description: "28-day workout streak", badge: "⚡", date: "Mar 2024" },
    { title: "Photo Pro", description: "Uploaded 25 progress photos", badge: "📸", date: "Mar 2024" },
    { title: "Challenge Champion", description: "Won 3 community challenges", badge: "👑", date: "Apr 2024" },
    { title: "Mentor", description: "Helped 10 community members", badge: "🤝", date: "Apr 2024" }
  ];

  const goals = [
    { title: "Lose 10 more pounds", progress: 70, target: "June 2024", status: "On Track" },
    { title: "Bench press bodyweight", progress: 85, target: "May 2024", status: "On Track" },
    { title: "Run 5K under 25 minutes", progress: 45, target: "July 2024", status: "Behind" },
    { title: "Complete 100 workouts", progress: 80, target: "August 2024", status: "Ahead" }
  ];

  const recentActivity = [
    {
      type: "workout",
      title: "Upper Body Strength",
      detail: "Completed in 45 minutes",
      time: "2 hours ago",
      icon: Activity
    },
    {
      type: "achievement",
      title: "New Personal Record!",
      detail: "Deadlift: 225 lbs (+10 lbs)",
      time: "Yesterday",
      icon: Trophy
    },
    {
      type: "photo",
      title: "Progress Photo Added",
      detail: "Front view - feeling strong!",
      time: "2 days ago",
      icon: Camera
    },
    {
      type: "challenge",
      title: "Joined Challenge",
      detail: "30-Day Push-Up Challenge",
      time: "1 week ago",
      icon: Target
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "on track": return "bg-success/10 text-success border-success/20";
      case "ahead": return "bg-primary/10 text-primary border-primary/20";
      case "behind": return "bg-warning/10 text-warning border-warning/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Cover Photo */}
      <div className="relative">
        <div 
          className="h-64 bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/20 bg-cover bg-center"
          style={{ backgroundImage: `url(${userProfile.coverImage})` }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        {/* Profile Header */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 -mt-16 pb-6">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                <AvatarFallback className="text-2xl">{userProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute bottom-0 right-0 rounded-full w-8 h-8 bg-primary hover:bg-primary-hover"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-3xl font-bold text-foreground">{userProfile.name}</h1>
                    {userProfile.verified && (
                      <Badge className="bg-primary text-primary-foreground">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-2">{userProfile.username}</p>
                  <p className="text-sm text-muted-foreground max-w-2xl">{userProfile.bio}</p>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Stats */}
              <div className="lg:col-span-2">
                <Card className="card-fitness mb-6">
                  <CardHeader>
                    <CardTitle>Fitness Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {fitnessStats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                          <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Achievements */}
                <Card className="card-fitness">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-primary" />
                      Recent Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {achievements.slice(0, 4).map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                          <div className="text-2xl">{achievement.badge}</div>
                          <div className="flex-1">
                            <p className="font-semibold text-sm">{achievement.title}</p>
                            <p className="text-xs text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Profile Info */}
              <div className="space-y-6">
                <Card className="card-fitness">
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{userProfile.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{userProfile.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{userProfile.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Joined {userProfile.joinDate}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-fitness">
                  <CardHeader>
                    <CardTitle>Quick Goals</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {goals.slice(0, 2).map((goal, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">{goal.title}</span>
                          <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-fitness">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{achievement.badge}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Goals Tab */}
          <TabsContent value="goals" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.map((goal, index) => (
                <Card key={index} className="card-fitness">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{goal.title}</h3>
                        <p className="text-sm text-muted-foreground">Target: {goal.target}</p>
                      </div>
                      <Badge className={getStatusColor(goal.status)}>
                        {goal.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="text-sm font-semibold">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card className="card-fitness">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <activity.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.detail}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;