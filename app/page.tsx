import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Menu } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center fixed w-full bg-white/80 backdrop-blur-md z-50">
        <Link className="flex items-center justify-center" href="#">
          <Image src="/placeholder.svg" alt="Logo" width={32} height={32} />
          <span className="ml-2 text-xl font-bold">ModernCo</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden ml-auto">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to the Future of Design
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Elevate your projects with cutting-edge tools and unparalleled
                  creativity.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-purple-600 hover:bg-gray-100">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white/20"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  title: "AI-Powered Design",
                  description:
                    "Create stunning visuals with the help of advanced AI algorithms.",
                },
                {
                  title: "Collaborative Workspace",
                  description:
                    "Work seamlessly with your team in real-time, anywhere in the world.",
                },
                {
                  title: "Version Control",
                  description:
                    "Keep track of all your design iterations with built-in version control.",
                },
                {
                  title: "Asset Library",
                  description:
                    "Access a vast library of pre-made assets to speed up your workflow.",
                },
                {
                  title: "Custom Exports",
                  description:
                    "Export your designs in any format, optimized for any platform.",
                },
                {
                  title: "24/7 Support",
                  description:
                    "Our expert team is always available to help you succeed.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 border border-gray-300 p-4 rounded-lg bg-white transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                >
                  <CheckCircle className="h-8 w-8 text-purple-500" />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-500 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Clients Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Johnson",
                  role: "UX Designer",
                  quote:
                    "ModernCo has revolutionized the way I approach design. The AI-powered features are a game-changer!",
                },
                {
                  name: "Samantha Lee",
                  role: "Creative Director",
                  quote:
                    "The collaborative tools have made working with my remote team effortless. I can't imagine going back.",
                },
                {
                  name: "Michael Chen",
                  role: "Freelance Illustrator",
                  quote:
                    "The asset library and custom export options have significantly sped up my workflow. Highly recommended!",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 border border-gray-300 p-6 rounded-lg bg-white"
                >
                  <Image
                    src={`/placeholder.svg?height=100&width=100`}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-center italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Choose Your Plan
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Basic",
                  price: "$9.99",
                  features: [
                    "AI-Powered Design",
                    "Collaborative Workspace",
                    "5GB Storage",
                  ],
                },
                {
                  name: "Pro",
                  price: "$19.99",
                  features: [
                    "All Basic features",
                    "Version Control",
                    "25GB Storage",
                    "Priority Support",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "All Pro features",
                    "Unlimited Storage",
                    "24/7 Dedicated Support",
                    "Custom Integrations",
                  ],
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 border border-gray-300 p-6 rounded-lg bg-white"
                >
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-4xl font-bold">{plan.price}</p>
                  <p className="text-sm text-gray-500">
                    {plan.name === "Enterprise"
                      ? "per month, billed annually"
                      : "per month"}
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    {plan.name === "Enterprise"
                      ? "Contact Sales"
                      : "Get Started"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied customers and take your design
                  process to the next level.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="w-full">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 ModernCo Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
