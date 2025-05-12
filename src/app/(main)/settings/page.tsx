import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Key, Lock, Save, Shield, User } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">

      <main className="container py-6 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Settings ⚙️</h1>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-64 flex-shrink-0">
              <TabsList className="flex flex-col h-auto p-0 bg-transparent space-y-1">
                <TabsTrigger
                  value="account"
                  className="w-full justify-start px-3 data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-500 rounded-lg"
                >
                  <User className="h-4 w-4 mr-2" />
                  Account
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="w-full justify-start px-3 data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-500 rounded-lg"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger
                  value="privacy"
                  className="w-full justify-start px-3 data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-500 rounded-lg"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Privacy
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="w-full justify-start px-3 data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-500 rounded-lg"
                >
                  <Lock className="h-4 w-4 mr-2" />
                  Security
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 space-y-6">
              <TabsContent value="account" className="m-0">
                <Card className="border-pink-500/20">
                  <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input
                            id="first-name"
                            defaultValue="Your"
                            className="border-pink-500/20 focus-visible:ring-pink-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input
                            id="last-name"
                            defaultValue="Name"
                            className="border-pink-500/20 focus-visible:ring-pink-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            defaultValue="your.email@university.edu"
                            className="border-pink-500/20 focus-visible:ring-pink-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input
                            id="username"
                            defaultValue="yourname"
                            className="border-pink-500/20 focus-visible:ring-pink-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Academic Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Select defaultValue="computer-science">
                            <SelectTrigger className="border-pink-500/20 focus:ring-pink-500">
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="computer-science">Computer Science</SelectItem>
                              <SelectItem value="psychology">Psychology</SelectItem>
                              <SelectItem value="literature">Literature</SelectItem>
                              <SelectItem value="engineering">Engineering</SelectItem>
                              <SelectItem value="business">Business</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="year">Year</Label>
                          <Select defaultValue="2">
                            <SelectTrigger className="border-pink-500/20 focus:ring-pink-500">
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">Year 1</SelectItem>
                              <SelectItem value="2">Year 2</SelectItem>
                              <SelectItem value="3">Year 3</SelectItem>
                              <SelectItem value="4">Year 4</SelectItem>
                              <SelectItem value="5">Year 5+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-pink-500/10 pt-4">
                    <Button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="m-0">
                <Card className="border-pink-500/20">
                  <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Email Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-matches">New Matches</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive emails when you match with new people
                            </p>
                          </div>
                          <Switch id="email-matches" defaultChecked className="data-[state=checked]:bg-pink-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-messages">New Messages</Label>
                            <p className="text-sm text-muted-foreground">Receive emails when you get new messages</p>
                          </div>
                          <Switch id="email-messages" defaultChecked className="data-[state=checked]:bg-pink-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-events">Event Invitations</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive emails about events you might be interested in
                            </p>
                          </div>
                          <Switch id="email-events" defaultChecked className="data-[state=checked]:bg-pink-500" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Push Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="push-matches">New Matches</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive push notifications when you match with new people
                            </p>
                          </div>
                          <Switch id="push-matches" defaultChecked className="data-[state=checked]:bg-pink-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="push-messages">New Messages</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive push notifications when you get new messages
                            </p>
                          </div>
                          <Switch id="push-messages" defaultChecked className="data-[state=checked]:bg-pink-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="push-events">Event Reminders</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive push notifications for upcoming events
                            </p>
                          </div>
                          <Switch id="push-events" defaultChecked className="data-[state=checked]:bg-pink-500" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Notification Frequency</h3>
                      <div className="space-y-3">
                        <Label>Email Digest Frequency</Label>
                        <Select defaultValue="daily">
                          <SelectTrigger className="border-pink-500/20 focus:ring-pink-500">
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="realtime">Real-time</SelectItem>
                            <SelectItem value="daily">Daily Digest</SelectItem>
                            <SelectItem value="weekly">Weekly Digest</SelectItem>
                            <SelectItem value="never">Never</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-pink-500/10 pt-4">
                    <Button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="privacy" className="m-0">
                <Card className="border-pink-500/20">
                  <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                    <CardTitle>Privacy Settings</CardTitle>
                    <CardDescription>Control your privacy and visibility</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Profile Visibility</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="profile-public">Public Profile</Label>
                            <p className="text-sm text-muted-foreground">
                              Allow your profile to be visible to all university students
                            </p>
                          </div>
                          <Switch id="profile-public" defaultChecked className="data-[state=checked]:bg-pink-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="show-department">Show Department</Label>
                            <p className="text-sm text-muted-foreground">Display your department on your profile</p>
                          </div>
                          <Switch id="show-department" defaultChecked className="data-[state=checked]:bg-pink-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="show-year">Show Year</Label>
                            <p className="text-sm text-muted-foreground">Display your year of study on your profile</p>
                          </div>
                          <Switch id="show-year" defaultChecked className="data-[state=checked]:bg-pink-500" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Matching Preferences</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="match-department">Match Within Department</Label>
                            <p className="text-sm text-muted-foreground">Prioritize matches within your department</p>
                          </div>
                          <Switch id="match-department" defaultChecked className="data-[state=checked]:bg-pink-500" />
                        </div>
                        <div className="space-y-0.5">
                          <Label>Match Distance (Years)</Label>
                          <p className="text-sm text-muted-foreground">
                            How many years apart you're willing to match with
                          </p>
                          <div className="pt-2">
                            <Slider defaultValue={[2]} max={4} step={1} className="[&_[role=slider]]:bg-pink-500" />
                            <div className="flex justify-between text-xs text-muted-foreground mt-2">
                              <span>Same year only</span>
                              <span>±2 years</span>
                              <span>Any year</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Data Privacy</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="data-analytics">Analytics Participation</Label>
                            <p className="text-sm text-muted-foreground">
                              Allow us to use your data to improve the platform
                            </p>
                          </div>
                          <Switch id="data-analytics" defaultChecked className="data-[state=checked]:bg-pink-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="data-research">Research Participation</Label>
                            <p className="text-sm text-muted-foreground">
                              Allow your anonymized data to be used in research
                            </p>
                          </div>
                          <Switch
                            id="data-research"
                            defaultChecked={false}
                            className="data-[state=checked]:bg-pink-500"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-pink-500/10 pt-4">
                    <Button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="m-0">
                <Card className="border-pink-500/20">
                  <CardHeader className="bg-gradient-to-r from-pink-500/10 to-yellow-400/10">
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Manage your account security</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Password</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input
                            id="current-password"
                            type="password"
                            className="border-pink-500/20 focus-visible:ring-pink-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input
                            id="new-password"
                            type="password"
                            className="border-pink-500/20 focus-visible:ring-pink-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input
                            id="confirm-password"
                            type="password"
                            className="border-pink-500/20 focus-visible:ring-pink-500"
                          />
                        </div>
                        <Button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black hover:opacity-90">
                          <Key className="h-4 w-4 mr-2" />
                          Update Password
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="enable-2fa">Enable 2FA</Label>
                            <p className="text-sm text-muted-foreground">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                          <Switch id="enable-2fa" defaultChecked={false} className="data-[state=checked]:bg-pink-500" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Login Sessions</h3>
                      <div className="space-y-3">
                        <div className="rounded-lg border border-pink-500/20 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">Current Session</h4>
                              <p className="text-sm text-muted-foreground">Chrome on MacOS • San Francisco, CA</p>
                              <p className="text-xs text-muted-foreground mt-1">Started 2 hours ago</p>
                            </div>
                            <Badge className="bg-green-500">Active</Badge>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          className="border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500"
                        >
                          Sign Out of All Other Sessions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </main>
    </div>
  )
}
