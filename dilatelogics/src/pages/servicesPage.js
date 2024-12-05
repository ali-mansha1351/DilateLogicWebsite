import BackgroundText from "../components/BackgroundText";
import DevelopmentProcess from "../components/developmentProcess";
import Footer from "../components/footer";
import GetQuote from "../components/getAquote";
import Header from "../components/header";
import Heading from "../components/heading";
import ContentDetail from "../components/img";
import styles from "./services.module.css";

const services = [
  {
    title: "Web Development",
    abstract:
      "We specialize in creating custom mobile applications for our clients. We develop native and hybrid mobile apps for both Android and iOS platforms using Swift, Kotlin, Java, and Objectice-C and React Native, Xamarin, and Flutter.",
    overview:
      "We specialize in creating responsive and visually appealing websites tailored to your needs. Our strategies ensure a seamless user experience and efficient performance.",
    strategyWeUse:
      " Our approach focuses on understanding your business goals, crafting engaging designs, and implementing scalable solutions.We take a collaborative approach to mobile app development, working closely with our clients to understand their unique business goals and target audiences. We then develop a custom strategy that aligns with their budget and timeline. By focusing on user experience, performance, and platform-specific optimizations, we ensure your app meets your business objectives and delights your users.x",
    ourFocusAreas: {
      design: ["UX/UI", "wireframing", "Prototyping"],
      development: [
        "Frontend Development",
        "Backend Development",
        "API Integration",
      ],
      technologyStack: ["React", "Node.js", "MongoDB"],
    },
  },
];

export default function ServicesPage() {
  const service = services[0];
  return (
    <div className={styles.mainDiv}>
      <Header />
      <BackgroundText />
      <Heading services={service} />
      <div className={styles.servicesContainer}>
        <div className={styles.contentDetail}>
          <ContentDetail services={service} />
        </div>
        <div className={styles.sideContainer}>
          <GetQuote />
          <DevelopmentProcess />
        </div>
      </div>
      <Footer />
    </div>
  );
}
