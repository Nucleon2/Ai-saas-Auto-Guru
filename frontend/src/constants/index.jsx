import { BsRobot } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { MdPrivacyTip } from "react-icons/md";
import { MdDevices } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

import facebook from "../assets/socials/facebook.svg"
import discord from "../assets/socials/discord.svg"
import twitter from "../assets/socials/twitter.svg"
import instagram from "../assets/socials/instagram.svg"
import telegram from "../assets/socials/telegram.svg"

export const features = [
  {
    icon: <BsRobot size={24} />,
    title: "Conversational AI, Available 24/7",
    description: "Ask anything — no jargon, just real help.",
  },
  {
    icon: <FaCar size={24} />,
    title: "Model-Specific Expertise",
    description: "Get accurate answers based on your exact car.",
  },
  {
    icon: <HiLightningBolt size={24} />,
    title: "Instant, Personalized Answers",
    description: "No searching forums or watching long videos.",
  },
  {
    icon: <MdPrivacyTip size={24} />,
    title: "Secure & Private",
    description: "No sign-up required. No data shared.",
  },
  {
    icon: <MdDevices size={24} />,
    title: "Works on Mobile & Desktop",
    description: "Use it wherever and whenever you need car help.",
  },
  {
    icon: <GiBrain size={24} />,
    title: "Always Learning",
    description: "Powered by cutting-edge AI that improves with every question.",
  },
];

export const useCases = [
    {
      icon: "🚨",
      title: "Diagnose Issues Instantly",
      description: "Ask about warning lights, strange noises, or performance problems."
    },
    {
      icon: "🛠️",
      title: "DIY Repair Guidance",
      description: "Step-by-step instructions for basic maintenance and common fixes."
    },
    {
      icon: "📅",
      title: "Maintenance Planning",
      description: "Know when and what to service based on your car’s make, model, and mileage."
    },
    {
      icon: "🚗",
      title: "Buying or Selling a Car?",
      description: "Get smart recommendations, price checks, and negotiation tips."
    },
    {
      icon: "🛡️",
      title: "Safety & Emergency Advice",
      description: "Learn what to do in breakdowns, flat tires, or roadside emergencies."
    },
    {
      icon: "⚙️",
      title: "Parts & Product Suggestions",
      description: "Find the right oil, filters, tires, or upgrades tailored to your car."
    }
  ]

  export const pricingPlans = [
  {
    title: "Free",
    price: "$0",
    description: "Get instant AI car help — no account required.",
    features: [
      "Unlimited car questions",
      "Model-specific answers",
      "24/7 AI assistant",
      "No sign-up needed"
    ],
    cta: "Start Free"
  },
  {
    title: "Pro",
    price: "$9",
    description: "Unlock advanced features for power users and enthusiasts.",
    features: [
      "All Free features",
      "Priority response speed",
      "Access to repair diagrams",
      "Maintenance reminders",
      "Save vehicle profiles"
    ],
    cta: "Go Pro"
  },
  {
    title: "Garage+",
    price: "$29",
    description: "For families, garages, and car enthusiasts managing multiple vehicles.",
    features: [
      "All Pro features",
      "Multiple vehicle tracking",
      "Family sharing (up to 5 users)",
      "Premium repair support",
      "Early access to new tools"
    ],
    cta: "Try Garage+"
  }
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discord,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];