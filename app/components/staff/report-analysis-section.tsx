import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, LineChart, Download, Filter, Calendar } from "lucide-react"

export function ReportAnalysisSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Report Analysis</h2>
          <p className="text-gray-600">Analyze data and generate insights</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button variant="outline" className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-emerald-50 p-1 border border-emerald-100 rounded-lg">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="resources"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            Resources
          </TabsTrigger>
          <TabsTrigger
            value="complaints"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            Complaints
          </TabsTrigger>
          <TabsTrigger
            value="financial"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            Financial
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>System Overview</CardTitle>
              <CardDescription>Key metrics and performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                    <p className="text-gray-500">Property distribution chart would be displayed here</p>
                    <p className="text-gray-500 text-sm">Showing properties by type and zone</p>
                  </div>
                </div>

                <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                    <p className="text-gray-500">Resource usage trend chart would be displayed here</p>
                    <p className="text-gray-500 text-sm">Showing monthly usage patterns</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h3 className="font-medium mb-2">Property Statistics</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Total Properties</span>
                      <span className="font-medium">1,248</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Commercial</span>
                      <span className="font-medium">485</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Agricultural</span>
                      <span className="font-medium">763</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h3 className="font-medium mb-2">Resource Efficiency</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Water Systems</span>
                      <span className="font-medium">82%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Electrical Systems</span>
                      <span className="font-medium">91%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Overall</span>
                      <span className="font-medium">87%</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h3 className="font-medium mb-2">Service Performance</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Avg. Response Time</span>
                      <span className="font-medium">1.2 days</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Resolution Rate</span>
                      <span className="font-medium">94%</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Customer Satisfaction</span>
                      <span className="font-medium">4.3/5</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>Resource Analysis</CardTitle>
              <CardDescription>Detailed analysis of resource usage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-gray-500">
                <p>Resource analysis content would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="complaints">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>Complaint Analysis</CardTitle>
              <CardDescription>Patterns and trends in customer complaints</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-gray-500">
                <p>Complaint analysis content would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>Financial Analysis</CardTitle>
              <CardDescription>Revenue and expense analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-gray-500">
                <p>Financial analysis content would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

