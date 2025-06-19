"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Get in touch with Pakistan Air Defense Forces for inquiries, information, or assistance.
        </p>
      </div>

      <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us through any of the following channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+92-XXX-XXXXXXX (General Inquiries)</p>
                  <p className="text-gray-600">+92-XXX-XXXXXXX (Emergency Line)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">info@pakairdefense.gov.pk</p>
                  <p className="text-gray-600">media@pakairdefense.gov.pk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">Pakistan Air Defense Headquarters</p>
                  <p className="text-gray-600">Islamabad, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Regional Offices</CardTitle>
              <CardDescription>Contact our regional offices for local inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Karachi Office</h3>
                  <p className="text-gray-600">Phone: +92-XXX-XXXXXXX</p>
                  <p className="text-gray-600">Email: karachi@pakairdefense.gov.pk</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Lahore Office</h3>
                  <p className="text-gray-600">Phone: +92-XXX-XXXXXXX</p>
                  <p className="text-gray-600">Email: lahore@pakairdefense.gov.pk</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Peshawar Office</h3>
                  <p className="text-gray-600">Phone: +92-XXX-XXXXXXX</p>
                  <p className="text-gray-600">Email: peshawar@pakairdefense.gov.pk</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Quetta Office</h3>
                  <p className="text-gray-600">Phone: +92-XXX-XXXXXXX</p>
                  <p className="text-gray-600">Email: quetta@pakairdefense.gov.pk</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="p-6 text-center bg-green-50 rounded-lg">
                  <h3 className="mb-2 text-xl font-bold text-green-800">Thank You!</h3>
                  <p className="text-green-700">Your message has been received. We will contact you shortly.</p>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="recruitment">Recruitment Information</SelectItem>
                        <SelectItem value="media">Media Request</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Emergency Contact</CardTitle>
              <CardDescription>For urgent matters requiring immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-red-50 rounded-lg">
                <h3 className="mb-2 font-bold text-red-700">Emergency Hotline</h3>
                <p className="text-red-700">+92-XXX-XXXXXXX (Available 24/7)</p>
                <p className="mt-2 text-sm text-red-600">
                  This line is reserved for emergencies only. For general inquiries, please use the contact form or call
                  our main office number.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="max-w-6xl p-6 mx-auto mt-16 bg-gray-50 rounded-lg">
        <h2 className="mb-6 text-2xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              question: "How can I join Pakistan Air Defense Forces?",
              answer:
                "Recruitment information is published in national newspapers and on our official website. You can also visit your nearest recruitment center for details.",
            },
            {
              question: "Do you offer tours of air defense facilities?",
              answer:
                "For security reasons, most air defense facilities are not open to the public. However, we occasionally organize special events where certain areas are accessible.",
            },
            {
              question: "How can I request a speaker for an event?",
              answer:
                "Please submit your request through our contact form at least 4 weeks before your event, providing details about the event and the specific topics you'd like addressed.",
            },
            {
              question: "Where can I find historical information about Pakistan's air defense?",
              answer:
                "Our website's History section provides comprehensive information. For more detailed research, you can contact our media relations department.",
            },
          ].map((faq, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="mb-2 font-medium">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
