import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import { Inter } from 'next/font/google'
import { useRouter } from "next/router";
import styles from "../../styles/hero.module.css";

const jsonData = [
  {
    name: "Cosmic Chronicles",
    imageURI: "/img/cosmicchronicles.png",
    date: " 16th September 2023",
    time: " 10:00 am to 11:30 am",
    location: "Case tools Laboratory (H23) / CIS Laboratory (J14)",
    organizers: " Heads: Ashik S and Rithika R  ( Contact No : 9876543210 )",
    description: "Paper Presentation",
    registerationlink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfrG7uSLaSLP3EHutd59-OCYY4SsMLoj0X-O1Eiwgp0ppo6Ew",
    description2:
      "A competition to enhance your ability in the art of academic writing or making papers on your project or research works and present it in front of the jury.",
    rules: `
Team:
  1. Team of max 3 members.
  2. Teams can have participants from different institutions.

Abstract & Paper:
  1. The abstract is limited to 250 words.
  2. Submitted papers must be in IEEE format.
  3. Paper length is limited to 6 pages and must be in .pdf, .docx, or .doc formats.
  4. Papers must not be published anywhere or be under consideration for publication in any journal or conference. 
  5. Participating teams should not register for the same paper in multiple departments. 

Presentation:
  6. 7 min presentation 3 min Q/A
  7. Plagiarism is not allowed. Original works only!
  8. Foul Language is not encouraged.
  9. Presentation should be in English

Notes :
  1. Registration closes by 5th September 2023.
  2. Email your ABSTRACT to flairit@licet.ac.in (Subject: “Abstract- TITLE” eg: “Abstract- Smart Garbage Management with IOT”) on or before 5th September 2023.
  3. By 8th September,  the shortlisted teams will be informed (via email and phone call)
  4. Shortlisted teams must submit the PPT slides and PAPER by 11 September 2023.
  5. Email your PAPERS and PPTs to flairit@licet.ac.in (Subject: “Paper- TITLE” eg: “Paper- Smart Garbage Management with IOT”).
  6. All emails must contain:- Name of authors, College Names, Departments, Author’s Phone Numbers and Email Addresses.
  7. Shortlisted teams must present on 16 September 2023.
  8. Bring a hard copy of the PPT and Paper.
  9. The top 3 papers will be selected as winners.
  10. The winning team will compete with other departments for the overall 
 
  `,
  },
  {
    name: "Stellar Hunt",
    imageURI: "/img/stellarhunt.jpg",
    date: "16th September 2023",
    time: "1:30 pm to 3:00 pm",
    location: "RDBMS (A21)",
    organizers: " Heads: Regis R and Arul Danica ( Contact : 9876543210) ",
    description: "Hunt your celestial treasure!",
    rules: `
Phases:
  1. Wormhole Passage: Traverse the unknown through complex puzzles. Obtain Quantum Emblems to unlock the next phase.
  2. Gravity Labyrinth: Navigate shifting terrains and complete tasks to gain Quantum Emblems for your journey.
  3. Time Dilation Enigma: Solve temporal riddles to gather Quantum Emblems and advance.
  4. Black Hole Conundrum: Confront intellectual challenges. Quantum Emblems are your reward for mastering this phase.
  5. Exoplanet Exploration: Discover habitable worlds and gather Quantum Emblems, bringing humanity closer to salvation.
  6. Final Frontier: Engage in the ultimate test, where Quantum Emblems will determine humanity's destiny.

1. Technology Protocol: All personal electronic devices (smartphones, smartwatches, laptops) are strictly prohibited during the mission.
2. Mission Equipment: Essential tools will be provided to assist your mission.
3. Registration and Credentials: Only the appointed leader must register the team. Credentials will be shared via the registered communication channel.
4. Fair Play: Any attempt at unethical behavior will lead to instant disqualification. Uphold the honor of humanity.
5. Continuous Engagement: Once you log in, breaks will not be permitted. This mission demands your unwavering dedication.
6. Timekeeping: Follow mission timelines meticulously. Delays may imperil the mission.
7. Judicial Authority: The decisions of the mission control judges are conclusive and irrefutable.
8. Safety Measures: Prioritize safety during physical challenges. Mission control will ensure your well-being.
9. Teamwork: Collaboration is essential to overcome the challenges and emerge victorious.

  `,
  },
  {
    name: "Celestial Canvas",
    imageURI: "/img/celestialcanvas.jpg",
    date: "16th September 2023",
    time: "11:00 am to 12:30 pm",
    location: "RDBMS (A21) ",
    organizers:
      " Heads: Keerthanaa B and Nadheedha S ( Contact : Kabilan (President): 7871123619 )",
    description: "UI Design",
    rules: `
Registration: Sign up as an individual member.
Design Brief: Receive a detailed design brief that outlines the challenge, target users, and main features required.
Design Phase: Utilize your creativity and design tools to craft a visually appealing and user-centered interface.
Submission: Submit your designs along with a brief rationale explaining your design choices.
Judging: A panel of UI/UX experts and industry professionals will evaluate submissions based on creativity, user-centered design, visual appeal, consistency, and functionality.
Winners: The top 3 designs will win attractive prizes and recognition during the award ceremony.

1. Participants must use Figma for design.
2. Strictly Individual participation.
3. Each participant will be provided with individual systems.
4. Respect copyright and intellectual property rights when using images and assets.
5. Designs must be original work and not previously published.
6. Participants should follow ethical and respectful behavior.
7. Submissions should be shared as Figma project links.
8. Participants must not use Figma's collaborative features to work together.
9. Use of Figma plugins and resources is allowed.

`,
  },
  {
    name: "Memescape",
    imageURI: "/img/memescape.jpeg",
    date: "16th September 2023",
    time: "1:30 pm to 3:00 pm",
    location: "CIS (J14)",
    organizers:
      "Heads: Sowmya B and Ludo Kirsten Roy V (Contact : 8925050777 )",
    description: "Meme Creation",
    rules: `
Registration: Register for the event as an Individual participant .
Event Briefing: At the day of the event , the theme for the event would be briefed to the participants.
Design Phase: Participants will have a period of 60 minutes to design and create their memes based on the given theme. Participants must use Canva to create their memes. 
Evaluation: Judges will evaluate the memes based on its creativity, originality and technical relevance to the theme.
Judging: During the judging process, all the memes would be reviewed  and participants will be given the opportunity to explain their memes to the judges. 
Winners: Once Judging is completed , the top three meme creators will be awarded during the valedictory ceremony

1. Software tool to be used for meme creation is Canva.
2. Only Individual Participation is allowed.
3. Create your meme in image format either in PNG/JPG/JPEG.
4. Judges will evaluate the memes based on creativity, originality, and technical relevance to the theme.
5. Theme would be given On the spot.
6. The judge's decision is final and binding.
7. Kindly note that any kind of vulgarity in the content can lead to direct disqualification.

`,
  },
  {
    name: "Space Complexity",
    imageURI: "/img/spacecomplexity.jpg",
    date: "16th September 2023",
    time: "10:00 am to 11:30 am",
    location: "Data Structures Laboratory (A22)  ",
    organizers: "Heads: Afrid Ariff H and Avanthika Y ( Contact : 9360959577 )",
    description: "Code Debugging",
    rules: `
There will be two levels of coding.
LEVEL 1: 
DURATION: 45 mins
NO OF QUESTIONS: 9 (Difficulty: easy, medium, hard)
EVALUATION:  Each challenge has a predetermined score based on the difficulty level.

Easy- 10 points
Medium- 15 points
Hard- 20 points

1. Top 10 participants with the highest scores will qualify for the next round. This is subject to change based on the number of candidates. 
2. A participant’s score depends on the number of test cases a participant’s code submission successfully passes.
3. Participants are ranked by score. If two or more participants achieve the same score, then the tie is broken by the total time taken to submit the last solution resulting in a higher score

LEVEL 2: 
DURATION: 45 mins
NO OF QUESTIONS: 2
EVALUATION: A participant’s score depends on the number of test cases a participant’s code submission successfully passes. Time and space complexity will be used to break a tie, and time taken will be used to break further ties.

1. It is an individual event.
2. Participants are allowed to bring their own laptops.
3. There will be 15 minutes of break between the two rounds.
4. Any participant resorting to unfair practices will be disqualified.

`,
  },
  {
    name: "Tesseract",
    imageURI: "/img/tesseract.jpg",
    date: "16th September 2023",
    time: "11:30 am to 1:00 pm",
    location: "Drawing Room (G32)",
    organizers:
      " Heads: Kaviena Sharon and Judith (Contact: Kabilan (President) : 7871123619 ) ",
    description: "Tech Charades",
    rules: `
1. The given word should be Enacted by one individual. 
2. Each member of the team should perform in turns.
3. NEVER mouth the word or represent the letters with symbols.
4. You only have a timer to enact your word, and you must lock the response inside that period.

Round 1 : Guess It 
  The participants will be given a word for which they should enact and guess the word within 60 seconds .There will be 4 rounds for each team. The team which acts out all the words flamboyantly will get the points. ( Top 10 teams will be selected)

Round 2 : Minute to win it
  In this round, we will increase the number of words that must be enacted within 60 seconds as the intricacy increases, and the team that completes the task wins the points.There will be 3 rounds for each team. ( Top 5 teams will be selected )

Round 3 : PICTIONARY
  In this round the person sketching has 1 minute to draw the word without using letters or symbols and only 3 guesses are allowed. There will be 2 rounds for each team and the team that scores high points will be the winner. 

3 Rounds:
ROUND 1 - 5 points 
ROUND 2 - 10 points 
ROUND 3 - 15 points

5. Each team can have 2 members at max. 
6. Teams can have participants from different institutions. 
7. Gadget usage is restricted. 
8. If any one in the team breaks the rules, marks will not be given. 
9. The judge's decision will be final. 

`,
  },
  {
    name: "Pitch Black",
    imageURI: "/img/pitchblack.png",
    date: "16th September 2023",
    time: "11:30 am to 1:00 pm",
    location: "Classroom (I31) ",
    description: " Business pitch ",
    organizers: "Heads: Ananth and Ajay Roshan ( Contact : 7200126971 )",
    rules: `
Each team shall have a maximum of 4 members.
Topic will be given 2 days prior to the event.
Teams should prepare the presentation based on the topic.
The pitch must be in English.
The Judges decision is final.

The event has two Rounds.

Round 1:
  1. The business pitch will be for 3 minutes
  2. Q & A for 2 minutes.
  3. Plagiarism is not allowed.
  4. Foul or abusive language and malpractice will not be entertained.
  5. Shortlisted teams will move to Round 2

Round 2:
  1. Each team will be allotted a domain
  2. The product must be from the allotted domain only.
  3. The business pitch will be for 2 minutes.
  4. Q & A for 2 minutes

  `,
  },

  {
    name: "Constellation",
    imageURI: "/img/constellation.jpg",
    date: " 16th September 2023",
    time: "1:30 pm to 3:00 pm",
    location: "Classroom (I32)",
    organizers:
      "Heads: Nivedita Ramatoti and Chrispin Sheena ( Contact : Akash C(Vice-President): 7418921212 )",
    description: "Technical Connection",
    rules: `
The event will have two rounds

Round 1:
  1. Participants will be presented with a clue and images arranged in  sequence. The round consists of three sections. Participants must associate the clue with the images within the given time limit
    Sections     Time limit             
      Easy        30 secs                     
      Medium      45 secs
      Hard        60 secs
  2. Each team will get 3 questions(Easy-1,Medium-1,Hard-1) on slot basis
  3. Each question carries 1 point
  4. The participants will be shortlisted to the second round based on their points
                      
Round 2:
  1. Participants will be presented with a clue and images given in a sequence which will be displayed one after another
  2. The team which finalizes the answer first within the given time(30 secs) will only be considered otherwise the other teams may get a chance to answer
  3. If the teams guesses the answer by  
    First image    -     5 points
    Second image   -     4 points
    Third image    -     3 points
    Fourth image   -     2 points
    Fifth image    -     1 point

Each team shall have a maximum of 3 members
Teams can have participants from different institutions
Gadgets usage is restricted
Based on the points obtained the first three team will be announced as winners
The judges decision will be final

`,
  },
];

const inter = Inter({ subsets: ['latin'] })
export default function EventPage() {
  const [events, setEvents] = useState(jsonData);
  const [eventDeets, setEventDeets] = useState(null);
  const [reg, setReg] = useState(false);
  const router = useRouter();
  const ename = router.query.slug;
  console.log("route is ", router.query.slug);
  useEffect(() => {
    setEventDeets(
      events.find(
        (event) =>
          event.name.toLowerCase().replace(/'/g, "'") ===
          ename?.replace(/-/g, " ")
      )
    );
  }, [ename]);
  return (
    <>
      <main className={`bg-fixed flex justify-center ${inter.className}`}>
        <Header />
        <div className=" fixed top-0 left-0 w-full h-full z-0">
        <video autoPlay loop muted className={styles["hero-background-video" ]}>
          <source src="/space-theme.webm" type="video/webm" />
        </video>
        </div>
        {eventDeets && (
          <div className="flex-col justify-center items-center absolute top-[80px]">
            <div className="glasscard m-4 p-2">
              <div className="my-3 m-4 uppercase text-xl font-bold">
                {eventDeets.name}
              </div>
              <pre className="lg:text-[17px] md:text-[15px] text-[13px] pl-5 font-inherit">
                {eventDeets.rules}
              </pre>
              <div className="space-y-3">
                <div className="lg:text-[17px] md:text-[15px] text-[13px] pl-5">
                  When : {eventDeets.time} {eventDeets.date}
                </div>
                <div className="lg:text-[17px] md:text-[15px] text-[13px] pl-5">
                  Where : {eventDeets.location}
                </div>
                <div className="lg:text-[17px] md:text-[15px] text-[13px] pl-5">
                  Organizers : {eventDeets.organizers}
                </div>
              </div>
              <button
                className="m-4 py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => {
                  setReg(true);
                }}
              >
                Register <span aria-hidden="true">&rarr;</span>
              </button>
              {reg && eventDeets?.registerationlink && (
                <>
                  <div className="w-full p-10 border rounded">
                    <iframe
                      // scrolling="no"
                      src={`${eventDeets?.registerationlink}/viewform`}
                      className="w-full overflow-y-clip h-full overflow-hidden"
                      style={{ minHeight: "2000px" }}
                    >
                      Loading…
                    </iframe>
                  </div>
                  <button
                    className="m-4 py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={() => {
                      setReg(false);
                    }}
                  >
                    Close <span aria-hidden="true">&rarr;</span>
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}