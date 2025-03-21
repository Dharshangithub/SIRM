import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { AlertTriangle, CheckCircle, Clock, MessageSquare } from "lucide-react"

export function ComplaintsSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Complaints Management</h2>
          <p className="text-gray-600">Submit and track your complaints</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <MessageSquare className="mr-2 h-4 w-4" />
            New Complaint
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-blue-50 p-1 border border-blue-100 rounded-lg">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
          >
            All Complaints
          </TabsTrigger>
          <TabsTrigger
            value="active"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
          >
            Active
          </TabsTrigger>
          <TabsTrigger
            value="resolved"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
          >
            Resolved
          </TabsTrigger>
          <TabsTrigger
            value="new"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
          >
            Submit New
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>All Complaints</CardTitle>
              <CardDescription>History of all your submitted complaints</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Category</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Description</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">C-2023-001</td>
                        <td className="px-4 py-3 text-sm">Water</td>
                        <td className="px-4 py-3 text-sm">Water leakage in main pipe</td>
                        <td className="px-4 py-3 text-sm">May 15, 2023</td>
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
                        <td className="px-4 py-3 text-sm">C-2023-002</td>
                        <td className="px-4 py-3 text-sm">Electricity</td>
                        <td className="px-4 py-3 text-sm">Power fluctuations</td>
                        <td className="px-4 py-3 text-sm">June 2, 2023</td>
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
                        <td className="px-4 py-3 text-sm">C-2023-003</td>
                        <td className="px-4 py-3 text-sm">Infrastructure</td>
                        <td className="px-4 py-3 text-sm">Crack in the wall</td>
                        <td className="px-4 py-3 text-sm">June 15, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-red-500">Open</Badge>
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
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                  Open Complaints
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600 mb-1">1</div>
                <p className="text-sm text-gray-500">Awaiting response</p>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Infrastructure</span>
                    <span>1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Submitted</span>
                    <span>June 15, 2023</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-yellow-500" />
                  In Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-600 mb-1">1</div>
                <p className="text-sm text-gray-500">Being addressed</p>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Electricity</span>
                    <span>1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Update</span>
                    <span>June 5, 2023</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  Resolved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-1">1</div>
                <p className="text-sm text-gray-500">Successfully resolved</p>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Water</span>
                    <span>1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Resolution Time</span>
                    <span>3 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="active">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Active Complaints</CardTitle>
              <CardDescription>Complaints that are open or in progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Electricity Fluctuations</h3>
                      <p className="text-sm text-gray-600 mt-1">Complaint ID: C-2023-002</p>
                      <p className="text-sm text-gray-600">Submitted on: June 2, 2023</p>
                      <p className="mt-2">
                        Experiencing frequent power fluctuations, especially during evening hours. Some electronic
                        devices have been affected.
                      </p>
                    </div>
                    <Badge className="bg-yellow-500">In Progress</Badge>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="text-sm font-medium">Latest Update (June 5, 2023)</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Technician has inspected the electrical system. Identified issue with the main circuit. Parts have
                      been ordered and repair scheduled for June 10.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Crack in the Wall</h3>
                      <p className="text-sm text-gray-600 mt-1">Complaint ID: C-2023-003</p>
                      <p className="text-sm text-gray-600">Submitted on: June 15, 2023</p>
                      <p className="mt-2">
                        Noticed a significant crack in the eastern wall of the property. Approximately 2 feet long and
                        widening.
                      </p>
                    </div>
                    <Badge className="bg-red-500">Open</Badge>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="text-sm font-medium">Status</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Complaint received. Awaiting initial assessment by the infrastructure team.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resolved">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Resolved Complaints</CardTitle>
              <CardDescription>Successfully resolved complaints</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Water Leakage</h3>
                      <p className="text-sm text-gray-600 mt-1">Complaint ID: C-2023-001</p>
                      <p className="text-sm text-gray-600">Submitted on: May 15, 2023</p>
                      <p className="mt-2">
                        Water leakage from the main pipe near the entrance. Creating puddles and potential slip hazard.
                      </p>
                    </div>
                    <Badge className="bg-green-500">Resolved</Badge>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="text-sm font-medium">Resolution (May 18, 2023)</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Plumbing team identified a loose connection in the main pipe. The connection was tightened and
                      sealed. Leak has been fixed and area dried.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="text-sm font-medium">Your Feedback</h4>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">Excellent service</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="new">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Submit New Complaint</CardTitle>
              <CardDescription>Report an issue with your property</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="water">Water</SelectItem>
                        <SelectItem value="electricity">Electricity</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="security">Security</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select>
                      <SelectTrigger id="priority">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of the issue" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description</Label>
                  <Textarea id="description" placeholder="Provide detailed information about the issue" rows={5} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location in Property</Label>
                  <Input id="location" placeholder="Where exactly is the issue located?" />
                </div>

                <div className="space-y-2">
                  <Label>Attach Photos (Optional)</Label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 5MB)</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Submit Complaint</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

