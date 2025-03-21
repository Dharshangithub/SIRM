import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Download, Printer, AlertCircle } from "lucide-react"

export function BillingManagementSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Billing Management</h2>
          <p className="text-gray-600">Manage billing and payment processing</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button variant="outline" className="flex items-center">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Generate Bills</Button>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <div className="flex-1">
          <Input placeholder="Search by property ID, owner name, or bill number" />
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
            All Bills
          </TabsTrigger>
          <TabsTrigger
            value="pending"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            Pending
          </TabsTrigger>
          <TabsTrigger
            value="paid"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            Paid
          </TabsTrigger>
          <TabsTrigger
            value="overdue"
            className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md"
          >
            Overdue
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>All Bills</CardTitle>
              <CardDescription>View and manage all billing records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-emerald-50">
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Bill ID</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Property</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Owner</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Type</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Amount</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Due Date</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">B-2023-1001</td>
                        <td className="px-4 py-3 text-sm">LS-2023-45678</td>
                        <td className="px-4 py-3 text-sm">John Doe</td>
                        <td className="px-4 py-3 text-sm">Electricity</td>
                        <td className="px-4 py-3 text-sm">$125.00</td>
                        <td className="px-4 py-3 text-sm">July 15, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-yellow-500">Pending</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">B-2023-1000</td>
                        <td className="px-4 py-3 text-sm">LS-2023-78945</td>
                        <td className="px-4 py-3 text-sm">Jane Smith</td>
                        <td className="px-4 py-3 text-sm">Water</td>
                        <td className="px-4 py-3 text-sm">$78.50</td>
                        <td className="px-4 py-3 text-sm">July 20, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-yellow-500">Pending</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">B-2023-0999</td>
                        <td className="px-4 py-3 text-sm">LS-2023-12345</td>
                        <td className="px-4 py-3 text-sm">Robert Johnson</td>
                        <td className="px-4 py-3 text-sm">Land Tax</td>
                        <td className="px-4 py-3 text-sm">$350.00</td>
                        <td className="px-4 py-3 text-sm">June 30, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-red-500">Overdue</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">B-2023-0998</td>
                        <td className="px-4 py-3 text-sm">LS-2023-67890</td>
                        <td className="px-4 py-3 text-sm">Sarah Williams</td>
                        <td className="px-4 py-3 text-sm">Electricity</td>
                        <td className="px-4 py-3 text-sm">$95.75</td>
                        <td className="px-4 py-3 text-sm">June 25, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-green-500">Paid</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">B-2023-0997</td>
                        <td className="px-4 py-3 text-sm">LS-2023-45678</td>
                        <td className="px-4 py-3 text-sm">John Doe</td>
                        <td className="px-4 py-3 text-sm">Water</td>
                        <td className="px-4 py-3 text-sm">$65.25</td>
                        <td className="px-4 py-3 text-sm">June 20, 2023</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge className="bg-green-500">Paid</Badge>
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
                  <div className="text-sm text-gray-500">Showing 5 of 124 bills</div>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Pending Bills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-600 mb-1">45</div>
                <p className="text-sm text-gray-500">Total: $5,875.50</p>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Electricity</span>
                    <span>18</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Water</span>
                    <span>15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Land Tax</span>
                    <span>12</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                  Overdue Bills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600 mb-1">12</div>
                <p className="text-sm text-gray-500">Total: $2,450.75</p>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>30+ Days</span>
                    <span>5</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>60+ Days</span>
                    <span>4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>90+ Days</span>
                    <span>3</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Paid Bills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-1">67</div>
                <p className="text-sm text-gray-500">Total: $8,925.25</p>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>This Month</span>
                    <span>32</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Last Month</span>
                    <span>35</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Online Payments</span>
                    <span>85%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pending">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>Pending Bills</CardTitle>
              <CardDescription>Bills awaiting payment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-gray-500">
                <p>Pending bills content would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="paid">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>Paid Bills</CardTitle>
              <CardDescription>Successfully paid bills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-gray-500">
                <p>Paid bills content would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overdue">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle>Overdue Bills</CardTitle>
              <CardDescription>Bills past their due date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 text-gray-500">
                <p>Overdue bills content would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

