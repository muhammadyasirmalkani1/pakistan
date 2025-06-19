"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  FileText,
  GraduationCap,
  Medal,
  Users,
  Briefcase,
  Upload,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

export default function RecruitmentPage() {
  const [formStep, setFormStep] = useState(0)
  const [formProgress, setFormProgress] = useState(0)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    cnic: "",
    address: "",
    city: "",
    education: "",
    institution: "",
    graduationYear: "",
    position: "",
    experience: "",
    militaryBackground: false,
    howHeard: "",
    agreeTerms: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const nextStep = () => {
    const newStep = formStep + 1
    setFormStep(newStep)
    setFormProgress((newStep / 4) * 100)
  }

  const prevStep = () => {
    const newStep = formStep - 1
    setFormStep(newStep)
    setFormProgress((newStep / 4) * 100)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const positions = [
    { id: "air-defense-operator", title: "Air Defense Operator", department: "Operations", vacancies: 25 },
    { id: "radar-technician", title: "Radar Technician", department: "Technical", vacancies: 18 },
    {
      id: "communications-specialist",
      title: "Communications Specialist",
      department: "Communications",
      vacancies: 12,
    },
    { id: "missile-systems-engineer", title: "Missile Systems Engineer", department: "Engineering", vacancies: 8 },
    { id: "intelligence-analyst", title: "Intelligence Analyst", department: "Intelligence", vacancies: 15 },
    { id: "logistics-officer", title: "Logistics Officer", department: "Logistics", vacancies: 10 },
    { id: "it-specialist", title: "IT Specialist", department: "Information Technology", vacancies: 7 },
    { id: "administrative-officer", title: "Administrative Officer", department: "Administration", vacancies: 14 },
  ]

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Join Pakistan Air Defense Forces</h1>
        <p className="text-lg text-gray-600">
          Serve your nation by becoming part of Pakistan's elite air defense team. Explore career opportunities and
          apply online.
        </p>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden rounded-lg h-80 mb-16">
        <Image
          src="/placeholder.svg?height=500&width=1000"
          alt="Pakistan Air Defense Recruitment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Defending Our Skies, Securing Our Future</h2>
          <p className="text-xl max-w-2xl text-center mb-8">
            Join the elite team responsible for protecting Pakistan's airspace and contribute to national security
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              <a href="#current-openings">View Openings</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <a href="#application-form">Apply Now</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Join Pakistan Air Defense Forces</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Medal className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle>Prestigious Career</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Be part of an elite force responsible for protecting Pakistan's sovereignty and airspace.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle>Advanced Training</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Receive world-class training on cutting-edge air defense systems and technologies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle>Excellent Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">
                Enjoy comprehensive benefits including healthcare, housing, education, and retirement plans.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-10">Recruitment Process</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {[
              {
                step: 1,
                title: "Application Submission",
                description: "Complete and submit the online application form with all required documents.",
              },
              {
                step: 2,
                title: "Initial Screening",
                description: "Applications are reviewed to ensure candidates meet the basic eligibility criteria.",
              },
              {
                step: 3,
                title: "Written Test",
                description: "Qualified candidates take a written test to assess their aptitude and knowledge.",
              },
              {
                step: 4,
                title: "Physical Fitness Test",
                description: "Candidates must pass a physical fitness test to ensure they meet military standards.",
              },
              {
                step: 5,
                title: "Interview",
                description: "Successful candidates are invited for a comprehensive interview with a selection panel.",
              },
              {
                step: 6,
                title: "Medical Examination",
                description: "A thorough medical examination to ensure candidates are fit for service.",
              },
              {
                step: 7,
                title: "Background Check",
                description: "Verification of educational credentials, employment history, and security clearance.",
              },
              {
                step: 8,
                title: "Final Selection",
                description: "Selected candidates receive an offer letter and join the training program.",
              },
            ].map((item, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="mr-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold">
                    {item.step}
                  </div>
                  {index < 7 && <div className="w-0.5 h-full bg-green-600 mx-auto mt-2"></div>}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Eligibility Requirements</h2>

        <Tabs defaultValue="general" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="general">General Requirements</TabsTrigger>
            <TabsTrigger value="education">Educational Requirements</TabsTrigger>
            <TabsTrigger value="physical">Physical Requirements</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>General Eligibility Criteria</CardTitle>
                <CardDescription>Basic requirements for all positions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>
                      <strong>Nationality:</strong> Must be a Pakistani citizen
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>
                      <strong>Age:</strong> Between 18-25 years for non-commissioned positions; 20-28 years for officer
                      positions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>
                      <strong>Character:</strong> Must be of good moral character with no criminal record
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>
                      <strong>Security Clearance:</strong> Must be able to obtain security clearance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>
                      <strong>Marital Status:</strong> No restriction on marital status
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Educational Requirements</CardTitle>
                <CardDescription>Academic qualifications needed for different positions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Officer Positions</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <span>
                          <strong>Technical Officers:</strong> Bachelor's degree in Engineering, Computer Science, or
                          related field
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <span>
                          <strong>Administrative Officers:</strong> Bachelor's degree in any discipline
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <span>
                          <strong>Specialized Positions:</strong> Relevant professional qualifications
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Non-Commissioned Positions</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <span>
                          <strong>Technical Staff:</strong> Intermediate with Science or Diploma in relevant field
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <span>
                          <strong>Support Staff:</strong> Minimum Matriculation or equivalent
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <span>
                          <strong>Specialized Roles:</strong> Relevant technical certifications
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="physical" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Physical Requirements</CardTitle>
                <CardDescription>Physical fitness standards for all applicants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Medical Standards</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <span>
                          <strong>Vision:</strong> Minimum 6/6 vision with or without glasses
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <span>
                          <strong>Hearing:</strong> Normal hearing ability
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <span>
                          <strong>General Health:</strong> Free from any physical or mental condition that may interfere
                          with duties
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Physical Fitness Test Requirements</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Exercise</TableHead>
                          <TableHead>Male Standard</TableHead>
                          <TableHead>Female Standard</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Push-ups</TableCell>
                          <TableCell>25 in 1 minute</TableCell>
                          <TableCell>15 in 1 minute</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Sit-ups</TableCell>
                          <TableCell>30 in 1 minute</TableCell>
                          <TableCell>20 in 1 minute</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>1.5 Mile Run</TableCell>
                          <TableCell>Under 12 minutes</TableCell>
                          <TableCell>Under 14 minutes</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Swimming</TableCell>
                          <TableCell>100 meters</TableCell>
                          <TableCell>50 meters</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Current Openings */}
      <section id="current-openings" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Current Openings</h2>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-green-800 text-white">
                <TableHead>Position</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Vacancies</TableHead>
                <TableHead>Requirements</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {positions.map((position, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <TableCell className="font-medium">{position.title}</TableCell>
                  <TableCell>{position.department}</TableCell>
                  <TableCell>{position.vacancies}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#" className="flex items-center">
                        <FileText className="mr-1 h-4 w-4" /> View Details
                      </Link>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <a href="#application-form" className="flex items-center">
                        Apply Now
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Application Form</h2>

        {formSubmitted ? (
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in joining Pakistan Air Defense Forces. Your application has been received
                  and is under review.
                </p>
                <p className="text-gray-600 mb-6">
                  Your application reference number is:{" "}
                  <span className="font-bold">PAD-{Math.floor(100000 + Math.random() * 900000)}</span>
                </p>
                <p className="text-gray-600 mb-6">
                  We will contact you shortly with further instructions regarding the next steps in the recruitment
                  process.
                </p>
                <Button onClick={() => setFormSubmitted(false)} className="bg-green-600 hover:bg-green-700">
                  Submit Another Application
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Online Application</CardTitle>
              <CardDescription>Please fill out all required fields to submit your application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <Progress value={formProgress} className="h-2 bg-gray-200" />
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>Personal Information</span>
                  <span>Education & Experience</span>
                  <span>Position</span>
                  <span>Documents</span>
                  <span>Review</span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {formStep === 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender *</Label>
                        <Select onValueChange={(value) => handleSelectChange("gender", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cnic">CNIC Number *</Label>
                      <Input
                        id="cnic"
                        name="cnic"
                        value={formData.cnic}
                        onChange={handleInputChange}
                        placeholder="00000-0000000-0"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                    </div>

                    <div className="flex justify-end">
                      <Button type="button" onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                        Next: Education & Experience
                      </Button>
                    </div>
                  </div>
                )}

                {formStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">Education & Experience</h3>

                    <div className="space-y-2">
                      <Label htmlFor="education">Highest Education Level *</Label>
                      <Select onValueChange={(value) => handleSelectChange("education", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="matriculation">Matriculation</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                          <SelectItem value="masters">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution Name *</Label>
                      <Input
                        id="institution"
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="graduationYear">Year of Graduation *</Label>
                      <Input
                        id="graduationYear"
                        name="graduationYear"
                        type="number"
                        min="1990"
                        max="2025"
                        value={formData.graduationYear}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Relevant Experience</Label>
                      <Textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="Describe your relevant work experience"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="militaryBackground"
                        checked={formData.militaryBackground}
                        onCheckedChange={(checked) => handleCheckboxChange("militaryBackground", checked as boolean)}
                      />
                      <label
                        htmlFor="militaryBackground"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I have prior military service or background
                      </label>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Back: Personal Information
                      </Button>
                      <Button type="button" onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                        Next: Position Selection
                      </Button>
                    </div>
                  </div>
                )}

                {formStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">Position Selection</h3>

                    <div className="space-y-2">
                      <Label htmlFor="position">Desired Position *</Label>
                      <Select onValueChange={(value) => handleSelectChange("position", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          {positions.map((position) => (
                            <SelectItem key={position.id} value={position.id}>
                              {position.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>How did you hear about us? *</Label>
                      <RadioGroup
                        onValueChange={(value) => handleSelectChange("howHeard", value)}
                        defaultValue={formData.howHeard}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="newspaper" id="newspaper" />
                          <Label htmlFor="newspaper">Newspaper</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="website" id="website" />
                          <Label htmlFor="website">Official Website</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="social" id="social" />
                          <Label htmlFor="social">Social Media</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="friend" id="friend" />
                          <Label htmlFor="friend">Friend/Family</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Back: Education & Experience
                      </Button>
                      <Button type="button" onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                        Next: Document Upload
                      </Button>
                    </div>
                  </div>
                )}

                {formStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">Document Upload</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Please upload clear scanned copies or photos of the following documents in JPG, PNG, or PDF
                      format.
                    </p>

                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <Label htmlFor="cnicUpload" className="block mb-2">
                          CNIC (Front & Back) *
                        </Label>
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="cnicUpload"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-2 text-gray-500" />
                              <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                              </p>
                              <p className="text-xs text-gray-500">JPG, PNG or PDF (Max. 2MB)</p>
                            </div>
                            <input id="cnicUpload" type="file" className="hidden" />
                          </label>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <Label htmlFor="educationUpload" className="block mb-2">
                          Educational Certificates *
                        </Label>
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="educationUpload"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-2 text-gray-500" />
                              <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                              </p>
                              <p className="text-xs text-gray-500">JPG, PNG or PDF (Max. 5MB)</p>
                            </div>
                            <input id="educationUpload" type="file" multiple className="hidden" />
                          </label>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <Label htmlFor="photoUpload" className="block mb-2">
                          Recent Photograph *
                        </Label>
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="photoUpload"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-2 text-gray-500" />
                              <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                              </p>
                              <p className="text-xs text-gray-500">JPG or PNG (Max. 1MB)</p>
                            </div>
                            <input id="photoUpload" type="file" accept="image/*" className="hidden" />
                          </label>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <Label htmlFor="resumeUpload" className="block mb-2">
                          Resume/CV *
                        </Label>
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="resumeUpload"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-2 text-gray-500" />
                              <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> or drag and drop
                              </p>
                              <p className="text-xs text-gray-500">PDF or DOCX (Max. 2MB)</p>
                            </div>
                            <input id="resumeUpload" type="file" className="hidden" />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Back: Position Selection
                      </Button>
                      <Button type="button" onClick={nextStep} className="bg-green-600 hover:bg-green-700">
                        Next: Review & Submit
                      </Button>
                    </div>
                  </div>
                )}

                {formStep === 4 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">Review & Submit</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Please review your application details before submitting. You can go back to make changes if
                      needed.
                    </p>

                    <div className="space-y-6">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Personal Information</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-gray-500">Full Name:</div>
                          <div>
                            {formData.firstName} {formData.lastName}
                          </div>
                          <div className="text-gray-500">Email:</div>
                          <div>{formData.email}</div>
                          <div className="text-gray-500">Phone:</div>
                          <div>{formData.phone}</div>
                          <div className="text-gray-500">Date of Birth:</div>
                          <div>{formData.dateOfBirth}</div>
                          <div className="text-gray-500">Gender:</div>
                          <div>{formData.gender}</div>
                          <div className="text-gray-500">CNIC:</div>
                          <div>{formData.cnic}</div>
                          <div className="text-gray-500">Address:</div>
                          <div>{formData.address}</div>
                          <div className="text-gray-500">City:</div>
                          <div>{formData.city}</div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Education & Experience</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-gray-500">Education Level:</div>
                          <div>{formData.education}</div>
                          <div className="text-gray-500">Institution:</div>
                          <div>{formData.institution}</div>
                          <div className="text-gray-500">Graduation Year:</div>
                          <div>{formData.graduationYear}</div>
                          <div className="text-gray-500">Military Background:</div>
                          <div>{formData.militaryBackground ? "Yes" : "No"}</div>
                        </div>
                        <div className="mt-2">
                          <div className="text-gray-500 mb-1">Experience:</div>
                          <div className="text-sm">{formData.experience || "None provided"}</div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Position & Referral</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-gray-500">Desired Position:</div>
                          <div>{positions.find((p) => p.id === formData.position)?.title || "Not selected"}</div>
                          <div className="text-gray-500">How you heard about us:</div>
                          <div>{formData.howHeard}</div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Uploaded Documents</h4>
                        <ul className="list-disc list-inside text-sm">
                          <li>CNIC (Front & Back)</li>
                          <li>Educational Certificates</li>
                          <li>Recent Photograph</li>
                          <li>Resume/CV</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked as boolean)}
                        required
                      />
                      <label
                        htmlFor="agreeTerms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I certify that all information provided is true and accurate. I understand that any false
                        information may result in disqualification.
                      </label>
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Back: Document Upload
                      </Button>
                      <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={!formData.agreeTerms}>
                        Submit Application
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        )}
      </section>

      {/* FAQs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the age limit for applying?</AccordionTrigger>
            <AccordionContent>
              The age limit varies by position. For non-commissioned positions, applicants must be between 18-25 years
              of age. For officer positions, the age limit is 20-28 years. Age relaxation may be granted in exceptional
              cases or for candidates with specialized skills.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How long is the recruitment process?</AccordionTrigger>
            <AccordionContent>
              The entire recruitment process typically takes 2-3 months from application submission to final selection.
              This includes initial screening, written tests, physical fitness tests, interviews, medical examinations,
              and background checks.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Is there a fee to apply?</AccordionTrigger>
            <AccordionContent>
              No, there is no application fee for applying to Pakistan Air Defense Forces. Beware of any individuals or
              organizations asking for payment in exchange for recruitment assistance, as these are fraudulent.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>What training will I receive if selected?</AccordionTrigger>
            <AccordionContent>
              Selected candidates undergo comprehensive training programs tailored to their specific roles. This
              includes basic military training, specialized technical training, and ongoing professional development
              throughout their career.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Can women apply for all positions?</AccordionTrigger>
            <AccordionContent>
              Yes, Pakistan Air Defense Forces encourages women to apply for all positions. We are committed to gender
              equality and providing equal opportunities for all qualified candidates regardless of gender.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>What benefits are offered to employees?</AccordionTrigger>
            <AccordionContent>
              Pakistan Air Defense Forces offers a comprehensive benefits package including competitive salary,
              healthcare coverage, housing allowance or accommodation, education subsidies for children, retirement
              benefits, and opportunities for career advancement and specialized training.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>How can I check my application status?</AccordionTrigger>
            <AccordionContent>
              After submitting your application, you will receive a confirmation email with a reference number. You can
              use this reference number to check your application status through our online portal or by contacting our
              recruitment office.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Are there opportunities for further education and training?</AccordionTrigger>
            <AccordionContent>
              Yes, Pakistan Air Defense Forces strongly encourages continuing education and professional development. We
              offer various opportunities for further education, specialized training, and career advancement based on
              performance and organizational needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Need More Information?</h2>
        <p className="text-center mb-8">
          If you have any questions about the recruitment process or need assistance with your application, please
          contact our recruitment team.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">+92-XXX-XXXXXXX</p>
              <p className="text-gray-600">Monday - Friday, 9am - 5pm</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                recruitment@pakairdefense.gov.pk
              </p>
              <p className="text-gray-600">We respond within 48 hours</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">Recruitment Centers</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">Visit your nearest recruitment center</p>
              <Button variant="link" className="text-green-600 p-0 h-auto">
                <Link href="#">Find a center near you</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
