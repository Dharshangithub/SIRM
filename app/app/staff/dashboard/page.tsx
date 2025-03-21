"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { StaffHeader } from "@/components/staff/staff-header"
import { ReportAnalysisSection } from "@/components/staff/report-analysis-section"
import { ServiceChecklistSection } from "@/components/staff/service-checklist-section"
import { ComplaintsManagementSection } from "@/components/staff/complaints-management-section"
import { BillingManagementSection } from "@/components/staff/billing-management-section"
import { DemoNavigationSection } from "@/components/staff/demo-navigation-section"
import { BarChart3, Bell, Download, FileText, Filter, Printer, Search, Settings, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function StaffDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50">
      <StaffHeader />

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Staff Dashboard</h1>
            <p className="text-gray-600">Staff ID: ST-2023-1234 | Role: Land Management Officer</p>
          </div>

          <div className="flex space-x-2 mt-4 md:mt-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  <Bell className="h-4 w-4 mr-2" />
                  Alerts
                  <Badge className="ml-2 bg-red-500">5</Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="p-2 font-medium border-b">System Alerts</div>
                <DropdownMenuItem className="p-3 cursor-pointer">
                  <div>
                    <p className="font-medium">New Complaint Filed</p>
                    <p className="text-sm text-gray-500">Property ID: LS-2023-45678</p>
                    <p className="text-xs text-gray-400 mt-1">10 minutes ago</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 cursor-pointer">
                  <div>
                    <p className="font-medium">Fire Sensor Alert</p>
                    <p className="text-sm text-gray-500">Property ID: LS-2023-78945</p>
                    <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 cursor-pointer">
                  <div>
                    <p className="font-medium">Overdue Payments</p>
                    <p className="text-sm text-gray-500">3 properties have overdue payments</p>
                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>

            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-emerald-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Users className="h-5 w-5 mr-2 text-emerald-600" />
                Total Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-700">1,248</div>
              <p className="text-sm text-gray-500">+12 from last month</p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <FileText className="h-5 w-5 mr-2 text-emerald-600" />
                Active Complaints
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-700">37</div>
              <p className="text-sm text-gray-500">-5 from last week</p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-emerald-600" />
                Resource Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-700">87%</div>
              <p className="text-sm text-gray-500">+2% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-emerald-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Revenue Collected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-700">$245,890</div>
              <p className="text-sm text-gray-500">+8% from last quarter</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <Card className="border-emerald-200 flex-1">
            <CardHeader>
              <CardTitle>Quick Search</CardTitle>
              <CardDescription>Find property information quickly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <div className="flex-1">
                  <Input placeholder="Enter Survey Number or Owner Name" />
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Printer className="h-4 w-4 mr-1" />
                  Print Report
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 flex-1">
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>Current status of all systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Database</span>
                    <span className="text-sm font-medium text-green-600">Operational</span>
                  </div>
                  <Progress value={100} className="h-2 bg-green-100" indicatorClassName="bg-green-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">API Services</span>
                    <span className="text-sm font-medium text-green-600">Operational</span>
                  </div>
                  <Progress value={100} className="h-2 bg-green-100" indicatorClassName="bg-green-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Sensor Network</span>
                    <span className="text-sm font-medium text-yellow-600">Partial Outage</span>
                  </div>
                  <Progress value={85} className="h-2 bg-yellow-100" indicatorClassName="bg-yellow-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Billing System</span>
                    <span className="text-sm font-medium text-green-600">Operational</span>
                  </div>
                  <Progress value={100} className="h-2 bg-green-100" indicatorClassName="bg-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="bg-emerald-50 p-1 border border-emerald-100 rounded-lg">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
            >
              Reports
            </TabsTrigger>
            <TabsTrigger
              value="services"
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
            >
              Services
            </TabsTrigger>
            <TabsTrigger
              value="complaints"
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
            >
              Complaints
            </TabsTrigger>
            <TabsTrigger
              value="billing"
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
            >
              Billing
            </TabsTrigger>
            <TabsTrigger
              value="demo"
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
            >
              Demo
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest system activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 border-b pb-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Property Inspection Completed</p>
                        <p className="text-sm text-gray-500">Property ID: LS-2023-45678</p>
                        <p className="text-xs text-gray-400 mt-1">Today, 10:30 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-b pb-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Complaint Resolved</p>
                        <p className="text-sm text-gray-500">Complaint ID: C-2023-089</p>
                        <p className="text-xs text-gray-400 mt-1">Today, 9:15 AM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-purple-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                          <path
                            fillRule="evenodd"
                            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Payment Received</p>
                        <p className="text-sm text-gray-500">Property ID: LS-2023-78945</p>
                        <p className="text-xs text-gray-400 mt-1">Yesterday, 3:45 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>Tasks scheduled for today and tomorrow</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="font-medium">Property Inspection</p>
                        <p className="text-sm text-gray-500">Property ID: LS-2023-12345</p>
                        <p className="text-xs text-gray-400 mt-1">Today, 2:00 PM</p>
                      </div>
                      <Badge className="bg-blue-500">Scheduled</Badge>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="font-medium">Fire Safety Audit</p>
                        <p className="text-sm text-gray-500">Property ID: LS-2023-67890</p>
                        <p className="text-xs text-gray-400 mt-1">Tomorrow, 10:00 AM</p>
                      </div>
                      <Badge className="bg-yellow-500">Pending</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Complaint Investigation</p>
                        <p className="text-sm text-gray-500">Complaint ID: C-2023-102</p>
                        <p className="text-xs text-gray-400 mt-1">Tomorrow, 1:30 PM</p>
                      </div>
                      <Badge className="bg-red-500">Urgent</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle>Resource Usage Overview</CardTitle>
                <CardDescription>Monthly usage statistics across all properties</CardDescription>
              </CardHeader>
              <CardContent className="h-80 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                  <p className="text-gray-500">Interactive charts would be displayed here</p>
                  <p className="text-gray-500 text-sm">Showing water, electricity, and maintenance data</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle>Complaint Distribution</CardTitle>
                  <CardDescription>Breakdown of complaints by category</CardDescription>
                </CardHeader>
                <CardContent className="h-60 bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-emerald-500 mx-auto mb-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                    <p className="text-gray-500">Pie chart would be displayed here</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardHeader>
                  <CardTitle>Service Efficiency</CardTitle>
                  <CardDescription>Average resolution time by service type</CardDescription>
                </CardHeader>
                <CardContent className="h-60 bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-emerald-500 mx-auto mb-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <p className="text-gray-500">Bar chart would be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <ReportAnalysisSection />
          </TabsContent>

          <TabsContent value="services">
            <ServiceChecklistSection />
          </TabsContent>

          <TabsContent value="complaints">
            <ComplaintsManagementSection />
          </TabsContent>

          <TabsContent value="billing">
            <BillingManagementSection />
          </TabsContent>

          <TabsContent value="demo">
            <DemoNavigationSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

