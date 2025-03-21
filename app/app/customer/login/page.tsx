"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, MapPin } from "lucide-react"
import Link from "next/link"

export default function CustomerLogin() {
  const router = useRouter()
  const [surveyNumber, setSurveyNumber] = useState("")
  const [isNfcReading, setIsNfcReading] = useState(false)

  const handleSurveyLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (surveyNumber.trim()) {
      router.push("/customer/dashboard")
    }
  }

  const simulateNfcLogin = () => {
    setIsNfcReading(true)
    setTimeout(() => {
      setIsNfcReading(false)
      router.push("/customer/dashboard")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-4 left-4 text-blue-600 hover:text-blue-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Home
      </Link>

      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Customer Login</h1>
          <p className="text-blue-700 mt-2">Access your infrastructure management account</p>
        </div>

        <Card className="border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center text-blue-800">Choose Login Method</CardTitle>
            <CardDescription className="text-center">Select your preferred way to access the system</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="nfc" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="nfc" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <CreditCard className="mr-2 h-4 w-4" />
                  NFC Card
                </TabsTrigger>
                <TabsTrigger value="survey" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <MapPin className="mr-2 h-4 w-4" />
                  Survey Number
                </TabsTrigger>
              </TabsList>

              <TabsContent value="nfc" className="mt-0">
                <div className="flex flex-col items-center justify-center p-6 space-y-4 border rounded-lg bg-blue-50">
                  <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <CreditCard className={`h-12 w-12 text-blue-600 ${isNfcReading ? "animate-pulse" : ""}`} />
                  </div>
                  <p className="text-center text-gray-700">
                    {isNfcReading ? "Reading NFC card... Please wait" : "Tap your NFC card on the reader to login"}
                  </p>
                  <Button
                    onClick={simulateNfcLogin}
                    disabled={isNfcReading}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isNfcReading ? "Reading..." : "Simulate NFC Tap"}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="survey" className="mt-0">
                <form onSubmit={handleSurveyLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="survey-number">Land Survey Number</Label>
                    <Input
                      id="survey-number"
                      placeholder="Enter your survey number"
                      value={surveyNumber}
                      onChange={(e) => setSurveyNumber(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Login
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-6">
            <p className="text-sm text-gray-500">Need assistance? Contact support at support@smartinfra.com</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

