import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Search, MessageSquare, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export function ComplaintsManagementSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Complaints Management</h2>
          <p className="text-gray-600">Handle and resolve customer complaints</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <MessageSquare className="mr-2 h-4 w-4" />
            New Complaint
          </Button>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <div className="flex-1">
          <Input placeholder="Search complaints by ID, property, or description" />
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-emerald-50 p-1 border border-emerald-100 rounded-lg">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            All Complaints
          </TabsTrigger>
          <TabsTrigger
            value="open"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            Open
          </TabsTrigger>
          <TabsTrigger
            value="inprogress"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            In Progress
          </TabsTrigger>
          <TabsTrigger
            value="resolved"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            Resolved
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>All Complaints</CardTitle>
              <CardDescription>View and manage all customer complaints</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-emerald-50">
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Property</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Category</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Description</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">C-2023-102</td>
                        <td className="px-4 py-3 text-sm">LS-2023-45678</td>
                        <td className="px-4 py-3 text-sm">Water</td>
                        <td className="px-4 py-3 text-sm">Water leakage in main pipe</td>
                        <td className="px-4 py-3 text-sm">July 2, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-yellow-500">In Progress</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">C-2023-101</td>
                        <td className="px-4 py-3 text-sm">LS-2023-78945</td>
                        <td className="px-4 py-3 text-sm">Electricity</td>
                        <td className="px-4 py-3 text-sm">Power fluctuations</td>
                        <td className="px-4 py-3 text-sm">July 1, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-red-500">Open</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">C-2023-100</td>
                        <td className="px-4 py-3 text-sm">LS-2023-12345</td>
                        <td className="px-4 py-3 text-sm">Security</td>
                        <td className="px-4 py-3 text-sm">Camera not working</td>
                        <td className="px-4 py-3 text-sm">June 30, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-green-500">Resolved</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">C-2023-099</td>
                        <td className="px-4 py-3 text-sm">LS-2023-67890</td>
                        <td className="px-4 py-3 text-sm">Infrastructure</td>
                        <td className="px-4 py-3 text-sm">Roof leakage</td>
                        <td className="px-4 py-3 text-sm">June 28, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-yellow-500">In Progress</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">C-2023-098</td>
                        <td className="px-4 py-3 text-sm">LS-2023-45678</td>
                        <td className="px-4 py-3 text-sm">Water</td>
                        <td className="px-4 py-3 text-sm">Low water pressure</td>
                        <td className="px-4 py-3 text-sm">June 25, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-green-500">Resolved</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <div className="text-sm text-gray-500">Showing 5 of 37 complaints</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-emerald-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                  Open Complaints
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600 mb-1">12</div>
                <p className="text-sm text-gray-500">+3 from last week</p>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Water Issues</span>
                    <span>5</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Electricity</span>
                    <span>4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Other</span>
                    <span>3</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-yellow-500" />
                  In Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-600 mb-1">15</div>
                <p className="text-sm text-gray-500">-2 from last week</p>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Assigned to Technicians</span>
                    <span>8</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Waiting for Parts</span>
                    <span>4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Under Investigation</span>
                    <span>3</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  Resolved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-1">10</div>
                <p className="text-sm text-gray-500">This week</p>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Average Resolution Time</span>
                    <span>2.3 days</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Customer Satisfaction</span>
                    <span>4.2/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>First-time Fix Rate</span>
                    <span>85%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="open">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>Open Complaints</CardTitle>
              <CardDescription>Complaints that need to be addressed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-gray-500">
                <p>Open complaints content would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inprogress">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>In Progress Complaints</CardTitle>
              <CardDescription>Complaints currently being resolved</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-gray-500">
                <p>In progress complaints content would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resolved">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>Resolved Complaints</CardTitle>
              <CardDescription>Successfully resolved complaints</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-gray-500">
                <p>Resolved complaints content would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

