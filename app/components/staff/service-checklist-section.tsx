import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, AlertTriangle, Phone, Calendar } from "lucide-react"

export function ServiceChecklistSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Service Checklist</h2>
          <p className="text-gray-600">Manage and track service requests</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button variant="outline" className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">New Service Request</Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-emerald-50 p-1 border border-emerald-100 rounded-lg">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            All Services
          </TabsTrigger>
          <TabsTrigger
            value="fire"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            Fire Services
          </TabsTrigger>
          <TabsTrigger
            value="technical"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            Technical
          </TabsTrigger>
          <TabsTrigger
            value="contacts"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            Service Contacts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>Service Requests</CardTitle>
              <CardDescription>All active and scheduled service requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-emerald-50">
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Service ID</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Property</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Type</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Description</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Scheduled</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">S-2023-0501</td>
                        <td className="px-4 py-3 text-sm">LS-2023-45678</td>
                        <td className="px-4 py-3 text-sm">Fire Safety</td>
                        <td className="px-4 py-3 text-sm">Annual fire alarm inspection</td>
                        <td className="px-4 py-3 text-sm">July 15, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-yellow-500">Scheduled</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">S-2023-0500</td>
                        <td className="px-4 py-3 text-sm">LS-2023-78945</td>
                        <td className="px-4 py-3 text-sm">Technical</td>
                        <td className="px-4 py-3 text-sm">Electrical system maintenance</td>
                        <td className="px-4 py-3 text-sm">July 12, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-yellow-500">Scheduled</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">S-2023-0499</td>
                        <td className="px-4 py-3 text-sm">LS-2023-12345</td>
                        <td className="px-4 py-3 text-sm">Technical</td>
                        <td className="px-4 py-3 text-sm">HVAC system repair</td>
                        <td className="px-4 py-3 text-sm">July 10, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-blue-500">In Progress</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">S-2023-0498</td>
                        <td className="px-4 py-3 text-sm">LS-2023-67890</td>
                        <td className="px-4 py-3 text-sm">Fire Safety</td>
                        <td className="px-4 py-3 text-sm">Fire extinguisher replacement</td>
                        <td className="px-4 py-3 text-sm">July 5, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-green-500">Completed</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">S-2023-0497</td>
                        <td className="px-4 py-3 text-sm">LS-2023-45678</td>
                        <td className="px-4 py-3 text-sm">Technical</td>
                        <td className="px-4 py-3 text-sm">Water pump maintenance</td>
                        <td className="px-4 py-3 text-sm">July 3, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-green-500">Completed</Badge>
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
                  <div className="text-sm text-gray-500">Showing 5 of 42 service requests</div>
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
                  <Clock className="h-5 w-5 mr-2 text-yellow-500" />
                  Scheduled Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-600 mb-1">15</div>
                <p className="text-sm text-gray-500">Next 30 days</p>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Fire Safety</span>
                    <span>6</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Technical</span>
                    <span>9</span>
                  </div>
                  <div className="flex justify-between">
                    <span>This Week</span>
                    <span>5</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-blue-500" />
                  In Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
                <p className="text-sm text-gray-500">Currently active</p>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Fire Safety</span>
                    <span>3</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Technical</span>
                    <span>5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg. Completion Time</span>
                    <span>2.3 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-1">19</div>
                <p className="text-sm text-gray-500">Last 30 days</p>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Fire Safety</span>
                    <span>8</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Technical</span>
                    <span>11</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customer Satisfaction</span>
                    <span>4.5/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="fire">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>Fire Services</CardTitle>
              <CardDescription>Fire safety inspections and maintenance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-gray-500">
                <p>Fire services content would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>Technical Services</CardTitle>
              <CardDescription>Technical maintenance and repairs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-gray-500">
                <p>Technical services content would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contacts">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>Service Contacts</CardTitle>
              <CardDescription>Contact information for service providers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-emerald-50">
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Company</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Service Type</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Contact Person</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Phone</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">FireSafe Solutions</td>
                        <td className="px-4 py-3 text-sm">Fire Safety</td>
                        <td className="px-4 py-3 text-sm">Michael Johnson</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-emerald-600" />
                            (555) 123-4567
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">michael@firesafe.com</td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            Contact
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">TechPro Services</td>
                        <td className="px-4 py-3 text-sm">Technical</td>
                        <td className="px-4 py-3 text-sm">Sarah Williams</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-emerald-600" />
                            (555) 987-6543
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">sarah@techpro.com</td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            Contact
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">WaterWorks Inc.</td>
                        <td className="px-4 py-3 text-sm">Plumbing</td>
                        <td className="px-4 py-3 text-sm">Robert Davis</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-emerald-600" />
                            (555) 456-7890
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">robert@waterworks.com</td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            Contact
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">PowerGrid Solutions</td>
                        <td className="px-4 py-3 text-sm">Electrical</td>
                        <td className="px-4 py-3 text-sm">Jennifer Lee</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-emerald-600" />
                            (555) 789-0123
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">jennifer@powergrid.com</td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            Contact
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

