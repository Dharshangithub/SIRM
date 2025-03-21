import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, Calendar } from "lucide-react"

export function RegistrationSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Registration Details</h2>
          <p className="text-gray-600">Information about your property registration</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button variant="outline" className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Download Documents
          </Button>
        </div>
      </div>

      <Tabs defaultValue="details" className="space-y-4">
        <TabsList className="bg-blue-50 p-1 border border-blue-100 rounded-lg">
          <TabsTrigger
            value="details"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
          >
            Registration Details
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
          >
            Documents
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
          >
            History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Property Registration</CardTitle>
              <CardDescription>Key details about your property registration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-3">Registration Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Registration Number</span>
                        <span className="font-medium">REG-2022-45678</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Registration Date</span>
                        <span className="font-medium">January 15, 2022</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Property ID</span>
                        <span className="font-medium">LS-2023-45678</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status</span>
                        <Badge className="bg-green-500">Active</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Renewal Due</span>
                        <span className="font-medium">January 15, 2032</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-3">Property Classification</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Zone Type</span>
                        <span className="font-medium">Commercial</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Land Use</span>
                        <span className="font-medium">Business</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Building Type</span>
                        <span className="font-medium">Office Building</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Floor Area Ratio</span>
                        <span className="font-medium">2.5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-3">Ownership Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Primary Owner</span>
                        <span className="font-medium">Dharaneesh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Co-Owner</span>
                        <span className="font-medium">Jane</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ownership Type</span>
                        <span className="font-medium">Joint</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Acquisition Date</span>
                        <span className="font-medium">January 15, 2022</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-3">Location Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Address</span>
                        <span className="font-medium">123 Main Street</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">City</span>
                        <span className="font-medium">Cityville</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">State/Province</span>
                        <span className="font-medium">State</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Postal Code</span>
                        <span className="font-medium">12345</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500 mt-0.5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-medium text-yellow-800">Important Notice</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Please ensure all your registration information is up to date. Any changes in ownership or
                      property details must be reported within 30 days to avoid penalties.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Registration Documents</CardTitle>
              <CardDescription>Important documents related to your property registration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-md mr-4">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Deed of Ownership</p>
                      <p className="text-sm text-gray-500">Uploaded on: Jan 15, 2022</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-md mr-4">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Property Registration Certificate</p>
                      <p className="text-sm text-gray-500">Uploaded on: Jan 20, 2022</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-md mr-4">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Land Survey Certificate</p>
                      <p className="text-sm text-gray-500">Uploaded on: Feb 5, 2022</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-md mr-4">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Property Tax Certificate</p>
                      <p className="text-sm text-gray-500">Uploaded on: Mar 10, 2022</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Registration History</CardTitle>
              <CardDescription>Timeline of registration events and changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative border-l-2 border-blue-200 pl-6 pb-6">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-600"></div>
                  <div className="mb-1 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-sm text-gray-500">January 15, 2022</span>
                  </div>
                  <h3 className="text-lg font-medium">Initial Registration</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Property registered under John Doe and Jane Doe as joint owners.
                  </p>
                </div>

                <div className="relative border-l-2 border-blue-200 pl-6 pb-6">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-400"></div>
                  <div className="mb-1 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-sm text-gray-500">February 10, 2022</span>
                  </div>
                  <h3 className="text-lg font-medium">Zone Classification Update</h3>
                  <p className="text-sm text-gray-600 mt-1">Property zoning updated from Residential to Commercial.</p>
                </div>

                <div className="relative border-l-2 border-blue-200 pl-6">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-400"></div>
                  <div className="mb-1 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-sm text-gray-500">March 20, 2022</span>
                  </div>
                  <h3 className="text-lg font-medium">Floor Area Ratio Amendment</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Floor Area Ratio (FAR) updated from 2.0 to 2.5 following approval of building expansion.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

