import axnLogo from "../assets/images/ourCustomers/axn-logo-2015-.svg";
import lenovoLogo from "../assets/images/ourCustomers/lenovo-logo-2015.svg";
import slackLogo from "../assets/images/ourCustomers/slack-2.svg";
import youtubeLogo from "../assets/images/ourCustomers/youtube-6.svg";
import amazonLogo from "../assets/images/ourCustomers/logo-amazon.svg";
import googleLogo from "../assets/images/ourCustomers/google-1-1.svg";
import clientImage1 from "../assets/images/ourCustomers/clientImage1.avif";
import { TClientTestimonial } from "@/types/ClientTestimonial";

export const clientTestimonials: TClientTestimonial[] = [
  {
    name: "Annette Black",
    role: "Chief Chairman",
    company: "AXN",
    description:
      "“Golio is one of the BEST web designers I've ever worked with professionally. I am a repeat customer who continues to work with Zakir because of his talent/skills, great customer service, work ethic, and attention to detail.”",
    image: clientImage1,
    logo: axnLogo,
  },
  {
    name: "John Smith",
    role: "Marketing Manager",
    company: "Lenovo",
    description:
      "“Working with Golio was a great experience, understanding person, fast response time dose his work with honestly, experienced, a problem solver. Gives it it's all. I highly recommend him for providing beyond of high quality service.”",
    image: clientImage1,
    logo: lenovoLogo,
  },
  {
    name: "Dean Morrison",
    role: "COO",
    company: "Slack",
    description:
      "“This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!”",
    image: clientImage1,
    logo: slackLogo,
  },
  {
    name: "John Henderson",
    role: "Head of Marketing",
    company: "Youtube",
    description:
      "“Golio is one of the BEST web designers I've ever worked with professionally. I am a repeat customer who continues to work with Zakir because of his talent/skills, great customer service, work ethic, and attention to detail.”",
    image: clientImage1,
    logo: youtubeLogo,
  },
  {
    name: "Abdur Rahman",
    role: "Marketing Manager",
    company: "Amazon",
    description:
      "“This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!”",
    image: clientImage1,
    logo: amazonLogo,
  },
  {
    name: "Shin Yu",
    role: "Engineering Manager",
    company: "Google",
    description:
      "“This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!”",
    image: clientImage1,
    logo: googleLogo,
  },
];
