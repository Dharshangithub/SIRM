"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Demo pages to navigate through
const demoPages = [
  {
    id: 1,
    title: "Dashboard Overview",
    description: "Main dashboard with key metrics and insights",
    content:
      "This is the main dashboard page showing property statistics, resource usage, and system status. It provides a high-level overview of all managed properties and their current status.",
  },
  {
    id: 2,
    title: "Property Management",
    description: "Manage and update property information",
    content:
      "This section allows staff to view and edit property details, update ownership information, and manage property documentation. Staff can search for properties by ID, owner name, or location.",
  },
  {
    id: 3,
    title: "Resource Monitoring",
    description: "Monitor water, electricity and other resources",
    content:
      "The resource monitoring page displays real-time data on resource usage across all properties. Staff can identify unusual patterns, set up alerts, and generate resource efficiency reports.",
  },
  {
    id: 4,
    title: "Complaint Management",
    description: "Handle and resolve customer complaints",
    content:
      "This interface allows staff to view, prioritize, and respond to customer complaints. It includes a ticketing system, status tracking, and resolution documentation features.",
  },
  {
    id: 5,
    title: "Billing Administration",
    description: "Manage billing and payment processing",
    content:
      "The billing section provides tools for generating invoices, tracking payments, and managing payment plans. Staff can view payment history and handle billing inquiries.",
  },
]

export function DemoNavigationSection() {
  const [currentPage, setCurrentPage] = useState(0)

  const goToNextPage = () => {
    if (currentPage < demoPages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const currentDemoPage = demoPages[currentPage]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Demo Navigation</h2>
          <p className="text-gray-600">Explore the system features with guided navigation</p>
        </div>
      </div>

      <Card className="border-emerald-200">
        <CardHeader className="bg-emerald-50">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>{currentDemoPage.title}</CardTitle>
              <CardDescription>{currentDemoPage.description}</CardDescription>
            </div>
            <div className="bg-emerald-100 text-emerald-800 font-medium px-3 py-1 rounded-full text-sm">
              Page {currentPage + 1} of {demoPages.length}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="min-h-[300px] flex flex-col">
            <div className="flex-1 mb-8">
              <div className="p-6 bg-gray-100 rounded-lg h-full flex items-center justify-center">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-xl font-medium text-emerald-700 mb-4">{currentDemoPage.title}</h3>
                  <p className="text-gray-600">{currentDemoPage.content}</p>

                  {/* This would be where actual demo content would go */}
                  <div className="mt-8 text-sm text-gray-500">
                    <p>This is a placeholder for the actual demo content.</p>
                    <p>In a real implementation, this would contain interactive elements specific to this section.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-auto pt-4 border-t">
              <Button
                variant="outline"
                onClick={goToPreviousPage}
                disabled={currentPage === 0}
                className="flex items-center"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              <div className="flex space-x-1">
                {demoPages.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${currentPage === index ? "bg-emerald-600" : "bg-emerald-200"}`}
                    onClick={() => setCurrentPage(index)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                onClick={goToNextPage}
                disabled={currentPage === demoPages.length - 1}
                className="flex items-center"
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-emerald-200">
        <CardHeader>
          <CardTitle>Demo Instructions</CardTitle>
          <CardDescription>How to use the demo navigation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium mb-2 text-blue-800">Navigation Tips</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Use the <strong>Previous</strong> and <strong>Next</strong> buttons to navigate between demo pages.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Click on the indicator dots to jump directly to a specific page.</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Each page demonstrates a different aspect of the staff interface functionality.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-medium mb-2 text-yellow-800 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Important Note
              </h4>
              <p className="text-sm text-gray-600">
                This is a demonstration version with limited functionality. In a production environment, all features
                would be fully interactive and connected to live data.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

