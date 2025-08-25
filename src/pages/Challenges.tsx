import { useState } from "react";
import { Trophy, Users, Clock, Target, Medal, Plus, Flame, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Challenges = () => {
  const [activeTab, setActiveTab] = useState("active");

  const activeChallenges = [
    {
      id: 1,
      title: "30-Day Push-Up Challenge",
      description: "Complete 1,000 push-ups in 30 days",
      participants: 1247,
      timeLeft: "12 days",
      progress: 67,
      currentStreak: 8,
      yourRank: 23,
      totalParticipants: 1247,
      reward: "Champion Badge + 500 XP",
      category: "Strength",
      difficulty: "Medium",
      isJoined: true
    },
    {
      id: 2,
      title: "Million Step March",
      description: "Walk 1 million steps in the month",
      participants: 3456,
      timeLeft: "18 days",
      progress: 45,
      currentStreak: 12,
      yourRank: 156,
      totalParticipants: 3456,
      reward: "Walker Badge + 1000 XP",
      category: "Cardio",
      difficulty: "High",
      isJoined: true
    }
  ];

  const availableChallenges = [
    {
      id: 3,
      title: "Flexibility Master",
      description: "Complete 20 stretching sessions",
      participants: 892,
      duration: "2 weeks",
      reward: "Zen Master Badge",
      category: "Flexibility",
      difficulty: "Low",
      startDate: "Next Monday",
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "Strength Beast Mode",
      description: "Increase your max lifts by 10%",
      participants: 654,
      duration: "6 weeks",
      reward: "Beast Mode Badge",
      category: "Strength", 
      difficulty: "High",
      startDate: "This Friday",
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "Cardio Crusher",
      description: "Burn 10,000 calories this month",
      participants: 2134,
      duration: "4 weeks",
      reward: "Fire Badge + Premium Week",
      category: "Cardio",
      difficulty: "High",
      startDate: "Tomorrow",
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      title: "Mindful Movement", 
      description: "Practice yoga for 14 consecutive days",
      participants: 567,
      duration: "2 weeks",
      reward: "Mindfulness Badge",
      category: "Flexibility",
      difficulty: "Medium",
      startDate: "Next week",
      image: "/api/placeholder/300/200"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Alex Thompson", avatar: "/api/placeholder/40/40", score: 2847, badge: "👑" },
    { rank: 2, name: "Sarah Johnson", avatar: "/api/placeholder/40/40", score: 2756, badge: "🥈" },
    { rank: 3, name: "Mike Davis", avatar: "/api/placeholder/40/40", score: 2698, badge: "🥉" },
    { rank: 4, name: "Emma Wilson", avatar: "/api/placeholder/40/40", score: 2634, badge: "🏅" },
    { rank: 5, name: "Chris Lee", avatar: "/api/placeholder/40/40", score: 2589, badge: "🏅" },
    { rank: 23, name: "You", avatar: "/api/placeholder/40/40", score: 1847, badge: "", isUser: true }
  ];

  const completedChallenges = [
    {
      id: 1,
      title: "7-Day Hydration Challenge",
      completedDate: "Last week",
      rank: 12,
      participants: 456,
      reward: "Hydration Hero Badge",
      category: "Wellness"
    },
    {
      id: 2,
      title: "Morning Warrior",
      completedDate: "2 weeks ago",
      rank: 8,
      participants: 234,
      reward: "Early Bird Badge",
      category: "Habit"
    },
    {
      id: 3,
      title: "Plank Master",
      completedDate: "Last month",
      rank: 5,
      participants: 789,
      reward: "Core Champion Badge",
      category: "Strength"
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

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "strength": return "bg-primary/10 text-primary border-primary/20";
      case "cardio": return "bg-secondary/10 text-secondary border-secondary/20";
      case "flexibility": return "bg-accent/10 text-accent border-accent/20";
      case "wellness": return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "habit": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-hero text-foreground mb-2">Challenges</h1>
            <p className="text-muted-foreground">
              Push your limits and compete with the community
            </p>
          </div>
          <Button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Challenge
          </Button>
        </div>

        {/* Challenge Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-fitness text-center">
            <CardContent className="p-6">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary mb-1">12</div>
              <p className="text-sm text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
          <Card className="card-fitness text-center">
            <CardContent className="p-6">
              <Flame className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-accent mb-1">8</div>
              <p className="text-sm text-muted-foreground">Current Streak</p>
            </CardContent>
          </Card>
          <Card className="card-fitness text-center">
            <CardContent className="p-6">
              <Crown className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-secondary mb-1">3</div>
              <p className="text-sm text-muted-foreground">Top 10 Finishes</p>
            </CardContent>
          </Card>
          <Card className="card-fitness text-center">
            <CardContent className="p-6">
              <Medal className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary mb-1">2,847</div>
              <p className="text-sm text-muted-foreground">Total Points</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="available">Available</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          {/* Active Challenges Tab */}
          <TabsContent value="active" className="space-y-6">
            {activeChallenges.map((challenge) => (
              <Card key={challenge.id} className="card-fitness">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{challenge.title}</CardTitle>
                      <p className="text-muted-foreground mb-3">{challenge.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getCategoryColor(challenge.category)}>
                          {challenge.category}
                        </Badge>
                        <Badge className={getDifficultyColor(challenge.difficulty)}>
                          {challenge.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">#{challenge.yourRank}</div>
                      <p className="text-sm text-muted-foreground">Your Rank</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Progress</span>
                        <span className="text-sm font-semibold">{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-3 mb-2" />
                      <p className="text-xs text-muted-foreground">{challenge.timeLeft} remaining</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{challenge.participants.toLocaleString()} participants</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Flame className="w-4 h-4 text-accent" />
                        <span>{challenge.currentStreak} day streak</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Trophy className="w-4 h-4 text-primary" />
                        <span>{challenge.reward}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button className="btn-primary">
                        Continue Challenge
                      </Button>
                      <Button variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Available Challenges Tab */}
          <TabsContent value="available" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availableChallenges.map((challenge) => (
                <Card key={challenge.id} className="card-fitness overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Target className="w-12 h-12 text-primary" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{challenge.title}</CardTitle>
                      <Badge className={getCategoryColor(challenge.category)}>
                        {challenge.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{challenge.duration}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Participants:</span>
                        <span className="font-medium">{challenge.participants.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Starts:</span>
                        <span className="font-medium">{challenge.startDate}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Reward:</span>
                        <span className="font-medium text-primary">{challenge.reward}</span>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Badge className={getDifficultyColor(challenge.difficulty)}>
                          {challenge.difficulty}
                        </Badge>
                      </div>
                    </div>

                    <Button className="btn-primary w-full mt-4">
                      Join Challenge
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="card-fitness">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  30-Day Push-Up Challenge Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div
                      key={user.rank}
                      className={`flex items-center gap-4 p-3 rounded-lg ${
                        user.isUser ? "bg-primary/10 border border-primary/20" : "bg-muted/30"
                      }`}
                    >
                      <div className="text-2xl font-bold w-8 text-center">
                        {user.rank <= 3 ? user.badge : user.rank}
                      </div>
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className={`font-semibold ${user.isUser ? "text-primary" : ""}`}>
                          {user.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {user.score.toLocaleString()} points
                        </p>
                      </div>
                      {user.isUser && (
                        <Badge className="bg-primary text-primary-foreground">
                          You
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Completed Challenges Tab */}
          <TabsContent value="completed" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedChallenges.map((challenge) => (
                <Card key={challenge.id} className="card-fitness">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{challenge.title}</h3>
                        <p className="text-sm text-muted-foreground">{challenge.completedDate}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Final Rank:</span>
                        <span className="font-semibold text-primary">#{challenge.rank}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Participants:</span>
                        <span className="font-medium">{challenge.participants}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Reward:</span>
                        <span className="font-medium text-accent">{challenge.reward}</span>
                      </div>
                      
                      <Badge className={getCategoryColor(challenge.category)}>
                        {challenge.category}
                      </Badge>
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

export default Challenges;