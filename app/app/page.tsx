import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ContactIcon, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-6xl w-full mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
          Smart Infrastructure and Resource Management System
        </h1>
        <p className="text-xl text-blue-700 max-w-3xl mx-auto">
          A comprehensive platform for managing infrastructure resources, utilities, and services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader className="bg-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Users className="mr-2 h-6 w-6" />
              Customer Portal
            </CardTitle>
            <CardDescription className="text-blue-100">
              Access your land details, resources, and services
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 pb-4 px-6">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <div className="bg-blue-100 p-1 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-600"
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
                View land survey details and ownership information
              </li>
              <li className="flex items-center">
                <div className="bg-blue-100 p-1 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-600"
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
                Monitor resource usage and infrastructure
              </li>
              <li className="flex items-center">
                <div className="bg-blue-100 p-1 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-600"
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
                Submit and track complaints
              </li>
              <li className="flex items-center">
                <div className="bg-blue-100 p-1 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-600"
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
                Access billing information and payment options
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Link href="/customer/login">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">Customer Login</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="border-emerald-200 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
          <CardHeader className="bg-emerald-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center justify-center">
              <ContactIcon className="mr-2 h-6 w-6" />
              Staff Portal
            </CardTitle>
            <CardDescription className="text-emerald-100">
              Manage land records, services, and customer requests
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 pb-4 px-6">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <div className="bg-emerald-100 p-1 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-emerald-600"
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
                Access analytical dashboards and reports
              </li>
              <li className="flex items-center">
                <div className="bg-emerald-100 p-1 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-emerald-600"
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
                Manage service requests and complaints
              </li>
              <li className="flex items-center">
                <div className="bg-emerald-100 p-1 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-emerald-600"
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
                Handle billing and payment processing
              </li>
              <li className="flex items-center">
                <div className="bg-emerald-100 p-1 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-emerald-600"
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
                Update land records and infrastructure details
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Link href="/staff/login">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">Staff Login</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 text-center text-gray-600">
        <p>© 2025 Smart Infrastructure and Resource Management System. All rights reserved.</p>
      </div>
    </div>
  )
}

