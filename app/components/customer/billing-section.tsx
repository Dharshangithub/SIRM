import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, CreditCard, Calendar, FileText } from "lucide-react"

export function BillingSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Billing Options</h2>
          <p className="text-gray-600">Manage your bills and payments</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button variant="outline" className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Download Statements
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 flex items-center">
            <CreditCard className="mr-2 h-4 w-4" />
            Make Payment
          </Button>
        </div>
      </div>

      <Tabs defaultValue="current" className="space-y-4">
        <TabsList className="bg-blue-50 p-1 border border-blue-100 rounded-lg">
          <TabsTrigger
            value="current"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
          >
            Current Bills
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
          >
            Payment History
          </TabsTrigger>
          <TabsTrigger
            value="methods"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-md"
          >
            Payment Methods
          </TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Current Bills</CardTitle>
              <CardDescription>Your current outstanding bills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Bill ID</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Type</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Period</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Amount</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Due Date</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">B-2023-1001</td>
                        <td className="px-4 py-3 text-sm">Electricity</td>
                        <td className="px-4 py-3 text-sm">June 2023</td>
                        <td className="px-4 py-3 text-sm font-medium">$125.00</td>
                        <td className="px-4 py-3 text-sm">July 15, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-yellow-500">Pending</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            Pay Now
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">B-2023-1000</td>
                        <td className="px-4 py-3 text-sm">Water</td>
                        <td className="px-4 py-3 text-sm">June 2023</td>
                        <td className="px-4 py-3 text-sm font-medium">$78.50</td>
                        <td className="px-4 py-3 text-sm">July 20, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-yellow-500">Pending</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            Pay Now
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Total Due</h3>
                      <p className="text-sm text-gray-600">All outstanding bills</p>
                    </div>
                    <div className="text-xl font-bold">$203.50</div>
                  </div>
                  <div className="mt-4">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Pay All Bills</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle>Upcoming Bills</CardTitle>
                <CardDescription>Bills that will be generated soon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium">Land Tax (Annual)</p>
                      <p className="text-sm text-gray-500">Period: 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$350.00 (Est.)</p>
                      <p className="text-sm text-gray-500">Due: August 15, 2023</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium">Maintenance Fee</p>
                      <p className="text-sm text-gray-500">Period: Q3 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$120.00 (Est.)</p>
                      <p className="text-sm text-gray-500">Due: September 1, 2023</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle>Payment Schedule</CardTitle>
                <CardDescription>Upcoming payment dates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Electricity Bill</p>
                      <p className="text-sm text-gray-500">Due on July 15, 2023</p>
                    </div>
                    <div className="font-medium">$125.00</div>
                  </div>

                  <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Water Bill</p>
                      <p className="text-sm text-gray-500">Due on July 20, 2023</p>
                    </div>
                    <div className="font-medium">$78.50</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Record of your past payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Payment ID</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Bill Type</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Amount</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Method</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Receipt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">P-2023-0050</td>
                        <td className="px-4 py-3 text-sm">Electricity</td>
                        <td className="px-4 py-3 text-sm font-medium">$118.75</td>
                        <td className="px-4 py-3 text-sm">June 12, 2023</td>
                        <td className="px-4 py-3 text-sm">Credit Card</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-green-500">Completed</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm" className="flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">P-2023-0049</td>
                        <td className="px-4 py-3 text-sm">Water</td>
                        <td className="px-4 py-3 text-sm font-medium">$65.25</td>
                        <td className="px-4 py-3 text-sm">June 10, 2023</td>
                        <td className="px-4 py-3 text-sm">Bank Transfer</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-green-500">Completed</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm" className="flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">P-2023-0048</td>
                        <td className="px-4 py-3 text-sm">Electricity</td>
                        <td className="px-4 py-3 text-sm font-medium">$110.50</td>
                        <td className="px-4 py-3 text-sm">May 15, 2023</td>
                        <td className="px-4 py-3 text-sm">Credit Card</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-green-500">Completed</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm" className="flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
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
        </TabsContent>

        <TabsContent value="methods" className="space-y-4">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Credit Card</p>
                      <p className="text-sm text-gray-500">**** **** **** 4567</p>
                      <p className="text-xs text-gray-500">Expires: 05/25</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500">Default</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Bank Account</p>
                      <p className="text-sm text-gray-500">City Bank - Checking</p>
                      <p className="text-xs text-gray-500">Account ending in 7890</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Set Default
                  </Button>
                </div>

                <div className="mt-6">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

