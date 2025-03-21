"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Laptop,
  Stethoscope,
  Banknote,
  GraduationCap,
  Factory,
  ShoppingBag,
  Utensils,
  Video,
  Truck,
  Zap,
  Wheat,
  HardHat,
} from "lucide-react"

const industries = [
  { name: "Technology", icon: Laptop },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Finance", icon: Banknote },
  { name: "Education", icon: GraduationCap },
  { name: "Manufacturing", icon: Factory },
  { name: "Retail", icon: ShoppingBag },
  { name: "Hospitality", icon: Utensils },
  { name: "Media", icon: Video },
  { name: "Transportation", icon: Truck },
  { name: "Energy", icon: Zap },
  { name: "Agriculture", icon: Wheat },
  { name: "Construction", icon: HardHat },
]

interface SidebarProps {
  selectedCategory: string | null
  setSelectedCategory: (category: string | null) => void
}

export function Sidebar({ selectedCategory, setSelectedCategory }: SidebarProps) {
  const pathname = usePathname()

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null) // Deselect if already selected
    } else {
      setSelectedCategory(category) // Select the new category
    }
  }

  return (
    <div className="hidden w-64 border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-4">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <span className="text-lg">JobApps</span>
          </Link>
        </div>
        <ScrollArea className="flex-1">
          <div className="space-y-4 py-4 px-2">
            <div>
              <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Industry</h2>
              <div className="space-y-1">
                {industries.map((industry) => (
                  <Button
                    key={industry.name}
                    variant={selectedCategory === industry.name ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => handleCategoryClick(industry.name)}
                  >
                    <industry.icon className="mr-2 h-4 w-4" />
                    {industry.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="mt-auto p-4 border-t">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/avatar.png" alt="User" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Dharaneesh</p>
              <p className="text-xs text-gray-500">john.doe@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

