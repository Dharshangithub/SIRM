"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CustomerHeader } from "@/components/customer/customer-header"
import { LandDetailsSection } from "@/components/customer/land-details-section"
import { ResourcesSection } from "@/components/customer/resources-section"
import { ComplaintsSection } from "@/components/customer/complaints-section"
import { BillingSection } from "@/components/customer/billing-section"
import { RegistrationSection } from "@/components/customer/registration-section"
import { InfrastructureSection } from "@/components/customer/infrastructure-section"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Bell, FileText, Home, MapPin, Settings } from "lucide-react"

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomerHeader />

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome, Dharaneesh</h1>
            <p className="text-gray-600">Land Survey ID: LS-2023-45678</p>
          </div>

          <div className="flex space-x-2 mt-4 md:mt-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                  <Badge className="ml-2 bg-blue-500">3</Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="p-2 font-medium border-b">Recent Notifications</div>
                <DropdownMenuItem className="p-3 cursor-pointer">
                  <div>
                    <p className="font-medium">Water Tank Alert</p>
                    <p className="text-sm text-gray-500">Water level is below 20%. Please refill soon.</p>
                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 cursor-pointer">
                  <div>
                    <p className="font-medium">Electricity Bill Due</p>
                    <p className="text-sm text-gray-500">Your electricity bill is due in 3 days.</p>
                    <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 cursor-pointer">
                  <div>
                    <p className="font-medium">Complaint Update</p>
                    <p className="text-sm text-gray-500">Your water leakage complaint has been resolved.</p>
                    <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Home className="h-5 w-5 mr-2 text-blue-600" />
                Property Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Status</span>
                <Badge className="bg-green-500">Active</Badge>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Zone Type</span>
                <span className="font-medium">Commercial</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Registration Date</span>
                <span className="font-medium">Jan 15, 2022</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Resource Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Water</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Electricity</span>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                  <Progress value={82} className="h-2 bg-yellow-100" indicatorClassName="bg-yellow-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Fire Safety</span>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                  <Progress value={100} className="h-2 bg-green-100" indicatorClassName="bg-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  className="h-auto py-2 justify-start"
                  onClick={() => setActiveTab("complaints")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Report Issue
                </Button>
                <Button variant="outline" className="h-auto py-2 justify-start" onClick={() => setActiveTab("billing")}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Pay Bills
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-2 justify-start"
                  onClick={() => setActiveTab("resources")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13 7H7v6h6V7z" />
                    <path
                      fillRule="evenodd"
                      d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Monitor Usage
                </Button>
                <Button variant="outline" className="h-auto py-2 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-purple-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                  Download Docs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="bg-blue-50 p-1 border border-blue-100 rounded-lg">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="land-details"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
            >
              Land Details
            </TabsTrigger>
            <TabsTrigger
              value="infrastructure"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
            >
              Infrastructure
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
            >
              Resources
            </TabsTrigger>
            <TabsTrigger
              value="complaints"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
            >
              Complaints
            </TabsTrigger>
            <TabsTrigger
              value="billing"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
            >
              Billing
            </TabsTrigger>
            <TabsTrigger
              value="registration"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
            >
              Registration
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle>Land Overview</CardTitle>
                  <CardDescription>Key information about your property</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Primary Owner</span>
                      <span className="font-medium">John Doe</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Survey Number</span>
                      <span className="font-medium">LS-2023-45678</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Total Area</span>
                      <span className="font-medium">2,500 sq. ft.</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Zone Type</span>
                      <span className="font-medium">Commercial</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Maximum Floor Limits</span>
                      <span className="font-medium">4 Floors</span>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4 w-full" onClick={() => setActiveTab("land-details")}>
                    View Full Details
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle>Resource Status</CardTitle>
                  <CardDescription>Current status of your property resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-gray-600">Fire Safety Sensors</span>
                      </div>
                      <Badge className="bg-green-500">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-gray-600">Camera Surveillance</span>
                      </div>
                      <Badge className="bg-green-500">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <span className="text-gray-600">Water Tank Level</span>
                      </div>
                      <span className="font-medium">65% (Low)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-gray-600">Electricity</span>
                      </div>
                      <span className="font-medium">Normal</span>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4 w-full" onClick={() => setActiveTab("resources")}>
                    View All Resources
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle>Property Location</CardTitle>
                <CardDescription>Map view of your property</CardDescription>
              </CardHeader>
              <CardContent className="h-80 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-500">Interactive map would be displayed here</p>
                  <p className="text-gray-500 text-sm">Location: 123 Main Street, Cityville</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle>Recent Complaints</CardTitle>
                  <CardDescription>Status of your recent complaints</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Water Leakage</p>
                        <p className="text-sm text-gray-500">Reported on: May 15, 2023</p>
                      </div>
                      <Badge className="bg-green-500">Resolved</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Electricity Fluctuation</p>
                        <p className="text-sm text-gray-500">Reported on: June 2, 2023</p>
                      </div>
                      <Badge className="bg-yellow-500">In Progress</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4 w-full" onClick={() => setActiveTab("complaints")}>
                    View All Complaints
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle>Upcoming Bills</CardTitle>
                  <CardDescription>Your upcoming payment schedule</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="font-medium">Electricity Bill</p>
                        <p className="text-sm text-gray-500">Due on: July 15, 2023</p>
                      </div>
                      <span className="font-medium">$125.00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Water Bill</p>
                        <p className="text-sm text-gray-500">Due on: July 20, 2023</p>
                      </div>
                      <span className="font-medium">$78.50</span>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4 w-full" onClick={() => setActiveTab("billing")}>
                    View All Bills
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="land-details">
            <LandDetailsSection />
          </TabsContent>

          <TabsContent value="infrastructure">
            <InfrastructureSection />
          </TabsContent>

          <TabsContent value="resources">
            <ResourcesSection />
          </TabsContent>

          <TabsContent value="complaints">
            <ComplaintsSection />
          </TabsContent>

          <TabsContent value="billing">
            <BillingSection />
          </TabsContent>

          <TabsContent value="registration">
            <RegistrationSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

