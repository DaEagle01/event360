import Container from "@/components/Container";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import EventItems from "./eventItems/EventItems";
import PricingPlans from "./pricingPlans/PricingPlans";
import Gallery from "./gallery/Gallery";
import RecentEvents from "./recentEvents/RecentEvents";
import UpcomingEvents from "./upcomingEvents/UpcomingEvents";
import Testimonials from "./testimonial/Testimonials";
import Faq from "./faq/Faq";
import Statistics from "./statistics/Statistics";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ['0 1', '1.2 1'],
  });

  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  const style = {
    scale: scaleValues,
    opacity: opacityValues,
  };

  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transitionDuration: 700 }}
    >
      <div className="pt-16 lg:pt-32 bg-[#F5F6F7]">
        <Container>
          <Hero />
        </Container>
      </div>
      <Container>
        <motion.div
          className="mt-10 sm:mt-[4.5rem] mb-12 sm:mb-[7.25rem]"
          style={style}
          ref={componentRef}
        >
          <Services />
        </motion.div>
        <div className="mb-12 sm:mb-[7.25rem]">
          <EventItems />
        </div>
        <div className="mb-12 sm:mb-28">
          <PricingPlans />
        </div>
        <div className="mb-12 sm:mb-28">
          <Gallery />
        </div>
        <div className="mb-8 sm:mb-28 py-11">
          <RecentEvents />
        </div>
        <div className="mb-24">
          <UpcomingEvents />
        </div>
        <div className="mb-28">
          <Testimonials />
        </div>
        <div className="mb-28">
          <Statistics />
        </div>
        <div className="mb-24">
          <Faq />
        </div>
      </Container>
    </motion.div>
  );
};

export default Home;
