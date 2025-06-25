import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;

{
  /* <CompanionCard id="4" name="Captain Cosmos" topic="Exploring the Universe" subject="astronomy" duration={90} color="#ffd700"/>
        <CompanionCard id="5" name="Dr. AI Expert" topic="Artificial Intelligence Fundamentals" subject="computer science" duration={75} color="#add8e6"/>
        <CompanionCard id="6" name="Dr. Data Detective" topic="Data Analysis Techniques" subject="statistics" duration={45} color="#f08080"/>
        <CompanionCard id="7" name="Dr. Code Conductor" topic="Programming Basics for Beginners" subject="programming" duration={60} color="#b0c4de"/>
        <CompanionCard id="8" name="Dr. Mindful Mentor" topic="Mindfulness and Meditation Techniques" subject="psychology" duration={30} color="#dcdcdc"/>
        <CompanionCard id="9" name="Dr. Creative Catalyst" topic="Creative Writing and Storytelling" subject="literature" duration={45} color="#ffe4e1"/>
        <CompanionCard id="10" name="Dr. Fitness Frenzy" topic="Fitness Tips and Workouts" subject="health" duration={60} color="#90ee90"/>
        <CompanionCard id="11" name="Dr. Music Maestro" topic="Music Theory and Composition" subject="music" duration={45} color="#ffcccb"/>        
        <CompanionCard id="12" name="Dr. Nature Explorer" topic="Exploring the Natural World" subject="biology" duration={90} color="#ffff00"/> */
}
