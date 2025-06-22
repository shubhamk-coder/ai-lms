import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import React from "react";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="Neura: The Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="2"
          name="Countsy: The Number Wizard"
          topic="Derivatives & Integrals"
          subject="maths"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="3"
          name="Verba: The Vocabulary Builder"
          topic="English literature"
          subject="language"
          duration={30}
          color="#bde7ff"
        />
        {/* <CompanionCard id="4" name="Captain Cosmos" topic="Exploring the Universe" subject="astronomy" duration={90} color="#ffd700"/>
        <CompanionCard id="5" name="Dr. AI Expert" topic="Artificial Intelligence Fundamentals" subject="computer science" duration={75} color="#add8e6"/>
        <CompanionCard id="6" name="Dr. Data Detective" topic="Data Analysis Techniques" subject="statistics" duration={45} color="#f08080"/>
        <CompanionCard id="7" name="Dr. Code Conductor" topic="Programming Basics for Beginners" subject="programming" duration={60} color="#b0c4de"/>
        <CompanionCard id="8" name="Dr. Mindful Mentor" topic="Mindfulness and Meditation Techniques" subject="psychology" duration={30} color="#dcdcdc"/>
        <CompanionCard id="9" name="Dr. Creative Catalyst" topic="Creative Writing and Storytelling" subject="literature" duration={45} color="#ffe4e1"/>
        <CompanionCard id="10" name="Dr. Fitness Frenzy" topic="Fitness Tips and Workouts" subject="health" duration={60} color="#90ee90"/>
        <CompanionCard id="11" name="Dr. Music Maestro" topic="Music Theory and Composition" subject="music" duration={45} color="#ffcccb"/>        
        <CompanionCard id="12" name="Dr. Nature Explorer" topic="Exploring the Natural World" subject="biology" duration={90} color="#ffff00"/> */}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </div>
  );
};

export default Page;
