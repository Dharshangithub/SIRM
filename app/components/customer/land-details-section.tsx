import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

export function LandDetailsSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Land Survey Details</h2>
          <p className="text-gray-600">Comprehensive information about your property</p>
        </div>
      </div>

      <Tabs defaultValue="ownership" className="space-y-4">
        <TabsList className="bg-blue-50 p-1 border border-blue-100 rounded-lg">
          <TabsTrigger
            value="ownership"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
          >
            Ownership
          </TabsTrigger>
          <TabsTrigger
            value="location"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
          >
            Location
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
          >
            History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ownership" className="space-y-4">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Ownership Information</CardTitle>
              <CardDescription>Details about the current property owner</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500">Primary Owner</h3>
                    <p className="text-lg font-medium">Dharaneesh</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500">Number of Lands</h3>
                    <p className="text-lg font-medium">3 Properties</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500">Ownership History</h3>
                    <p className="text-lg font-medium">2 Previous Owners</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500">Current Address</h3>
                    <p className="text-lg font-medium">123 Main Street, Cityville</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500">Net Worth (Approx.)</h3>
                    <p className="text-lg font-medium">$1,250,000</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500">Acquisition Date</h3>
                    <p className="text-lg font-medium">January 15, 2022</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Additional Owners</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                      <span>Jane</span>
                      <Badge>Co-owner</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Legal Documents</CardTitle>
              <CardDescription>Important legal documents related to ownership</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600 mr-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Deed of Ownership</p>
                      <p className="text-sm text-gray-500">Uploaded on: Jan 15, 2022</p>
                    </div>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    View
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600 mr-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Property Tax Certificate</p>
                      <p className="text-sm text-gray-500">Uploaded on: Mar 10, 2022</p>
                    </div>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    View
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600 mr-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Land Survey Certificate</p>
                      <p className="text-sm text-gray-500">Uploaded on: Feb 5, 2022</p>
                    </div>
                  </div>
                  <a href="#" className="text-blue-600 hover:underline text-sm">
                    View
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="location" className="space-y-4">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Location Map</CardTitle>
              <CardDescription>Interactive map of your property location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-500">Interactive map would be displayed here</p>
                  <p className="text-gray-500 text-sm">Location: 123 Main Street, Cityville</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500">GPS Coordinates</h3>
                  <p className="text-lg font-medium">37.7749° N, 122.4194° W</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500">Nearest Landmark</h3>
                  <p className="text-lg font-medium">City Park (0.5 miles)</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500">Zoning</h3>
                  <p className="text-lg font-medium">Commercial</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500">District</h3>
                  <p className="text-lg font-medium">Central Business District</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Surrounding Area</CardTitle>
              <CardDescription>Information about the surrounding area</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-2">Nearby Facilities</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-blue-600 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Hospital (1.2 miles)
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-blue-600 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        School (0.8 miles)
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-blue-600 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Shopping Mall (0.3 miles)
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-2">Transportation</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-blue-600 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Bus Stop (0.1 miles)
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-blue-600 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Train Station (0.5 miles)
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-blue-600 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Highway Access (1.0 mile)
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-2">Utilities</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-blue-600 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Water Supply
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-blue-600 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Electricity
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-blue-600 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        High-Speed Internet
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Ownership History</CardTitle>
              <CardDescription>Previous owners of this property</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative border-l-2 border-blue-200 pl-6 pb-2">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-600"></div>
                  <div className="mb-1">
                    <span className="text-sm text-gray-500">Current Owner</span>
                    <h3 className="text-lg font-medium">John Doe</h3>
                  </div>
                  <p className="text-sm text-gray-600">Acquired on January 15, 2022</p>
                  <p className="text-sm text-gray-600">Purchase Price: $750,000</p>
                </div>

                <div className="relative border-l-2 border-blue-200 pl-6 pb-2">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-300"></div>
                  <div className="mb-1">
                    <span className="text-sm text-gray-500">Previous Owner</span>
                    <h3 className="text-lg font-medium">Robert Smith</h3>
                  </div>
                  <p className="text-sm text-gray-600">Owned from March 10, 2015 to January 15, 2022</p>
                  <p className="text-sm text-gray-600">Purchase Price: $620,000</p>
                </div>

                <div className="relative border-l-2 border-blue-200 pl-6">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-300"></div>
                  <div className="mb-1">
                    <span className="text-sm text-gray-500">Original Owner</span>
                    <h3 className="text-lg font-medium">Sarah Johnson</h3>
                  </div>
                  <p className="text-sm text-gray-600">Owned from June 5, 2005 to March 10, 2015</p>
                  <p className="text-sm text-gray-600">Purchase Price: $450,000</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Property Value History</CardTitle>
              <CardDescription>Historical valuation of the property</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-60 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-blue-500 mx-auto mb-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <p className="text-gray-500">Property value chart would be displayed here</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium">Current Valuation (2023)</p>
                    <p className="text-sm text-gray-500">Based on recent market assessment</p>
                  </div>
                  <span className="font-bold text-lg">$850,000</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium">Purchase Price (2022)</p>
                    <p className="text-sm text-gray-500">Amount paid by current owner</p>
                  </div>
                  <span className="font-bold text-lg">$750,000</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium">Previous Valuation (2020)</p>
                    <p className="text-sm text-gray-500">Pre-pandemic assessment</p>
                  </div>
                  <span className="font-bold text-lg">$680,000</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium">Initial Valuation (2005)</p>
                    <p className="text-sm text-gray-500">When property was first registered</p>
                  </div>
                  <span className="font-bold text-lg">$450,000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

