import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import styles from "../../styles/hero.module.css";

const jsonData = [
  {
    name: "Cosmic Chronicles",
    imageURI: "/img/cosmicchronicles.png",
    date: " 16th September 2023",
    time: " 10:00 am to 11:30 am",
    location: "Case tools Laboratory (H23) / CIS Laboratory (J14)",
    organizers: "Ashik S and Rithika R  ( Contact No : 9445387601 )",
    description: "Paper Presentation",
    registerationlink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfrG7uSLaSLP3EHutd59-OCYY4SsMLoj0X-O1Eiwgp0ppo6Ew",
    description2:
      "A competition to enhance your ability in the art of academic writing or making papers on your project or research works and present it in front of the jury.",
    rules: `
Rules:
  1. Maximum number of participants in a team is 3.
  2. Only Engineering students are allowed.
  3. Bring your College ID and Bonafide Certificate.
  4. Submitted papers must be in IEEE format.
  5. Papers must not be published before anywhere or be under consideration for  publication in any journal or conference.
  6. Each team presents their paper for 7 minutes followed by a Q&A session for 3 minutes.
  7. Plagiarism is not allowed. Original works only.
  8. Abstract should not exceed more than 250 words.
  9. Paper should have a minimum of 6 pages and should not exceed 15 pages.
  10. Soft-copies of the submitted paper must be in standard document formats (docx, doc, pdf).
  11. Paper must be preceded by a cover page specifying the title of the paper, names of authors and
  12. their college names as also their contact numbers and email ids
  13. Persons from different institutions can be a part of the same team. However, one person
  14. may not be a part of multiple teams for the same event.
  15. The paper is to be attached to the mail ----- with the subject as the title of the paper.
  16. The mail must contain - name of authors, college names and departments, phone numbers, and email addresses. 
  

Notes :
  1. Registration closes by 5th September 2023.
  2. Email your abstracts to flairit@licet.ac.in (Subject: “Abstract- TITLE” eg: “Abstract- Smart Garbage Management with IOT”) on or before 5th September 2023.
  3. By 8th September, the shortlisted teams will be informed (via email and phone call)
  4. Shortlisted teams must submit the ppt slides and paper by 11 September 2023.
  5. Email your papers and ppts to flairit@licet.ac.in (Subject: “Paper- TITLE” eg: “Paper- Smart Garbage Management with IOT”).
  6. All emails must contain:- names of authors, college names, departments, author’s phone numbers and email addresses.
  7. Shortlisted teams must present on 16 September 2023.
  8. Bring a hard copy of the paper and soft copy of the powerpoint presentation on a pen-drive.
  9. The top three papers will be selected as winners for the department level.
  10. The top two teams will compete with the other departments for the overall winner’s Award.


  `,
  },
  {
    name: "Stellar Hunt",
    imageURI: "/img/stellarhunt.jpg",
    date: "16th September 2023",
    time: "1:30 pm to 3:00 pm",
    location: "RDBMS (A21)",
    organizers: "Regis R and Arul Danica ( Contact : 9150206627 ) ",
    description: "Hunt your celestial treasure!",
    rules: `
Rules:
  1. All personal electronic devices (smartphones, smartwatches, laptops) are strictly prohibited during the mission.
  2. Essential tools will be provided to assist your mission.
  3. Only the appointed leader must register the team. Credentials will be shared via the registered communication channel.
  4. Any attempt at unethical behavior will lead to instant disqualification. Uphold the honor of humanity.
  5. Once you log in, breaks will not be permitted. This mission demands your unwavering dedication.
  6. Follow mission timelines meticulously. Delays may imperil the mission.
  7. The decisions of the mission control judges are conclusive and irrefutable.
  8. Prioritize safety during physical challenges. Mission control will ensure your well-being.
  
Event Guidelines:
  There are six rounds in stellar hunt :
   1. Wormhole Passage: Traverse the unknown through complex puzzles. Obtain Quantum Emblems to unlock the next phase.
   2. Gravity Labyrinth: Navigate shifting terrains and complete tasks to gain Quantum Emblems for your journey.
   3. Time Dilation Enigma: Solve temporal riddles to gather Quantum Emblems and advance.
   4. Black Hole Conundrum: Confront intellectual challenges. Quantum Emblems are your reward for mastering this phase.
   5. Exoplanet Exploration: Discover habitable worlds and gather Quantum Emblems, bringing humanity closer to salvation.
   6. Final Frontier: Engage in the ultimate test, where Quantum Emblems will determine humanity's destiny.


  `,
  },
  {
    name: "Celestial Canvas",
    imageURI: "/img/celestialcanvas.jpg",
    date: "16th September 2023",
    time: "11:00 am to 12:30 pm",
    location: "RDBMS (A21) ",
    organizers: "Keerthanaa B and Nadheedha S ( Contact : 7871123619 )",
    description: "UI Design",
    rules: `
Rules:
  1. Participants must use Figma for design.
  2. Sign up as an individual member.
  3. Strictly Individual participation.
  4. Each participant will be given individual systems..
  5. Respect copyright and intellectual property rights when using images and assets.
  6. Designs must be original work and not previously published.
  7. Participants should follow ethical and respectful behavior.
  8. Submissions should be as Figma project links.
  9. Participants must not use Figma's collaborative features to work together.
  10. Use of Figma plugins and resources is allowed.
    
Event Guidelines:
  1. Receive a detailed design brief that outlines the challenge, target users, and the major features required.
  2. Utilize your creativity and design tools to craft a visually appealing and user-centered interface.
  3. Submit your designs along with a brief rationale explaining your design choices.
  4. A panel of UI/UX experts and industry professionals will evaluate submissions based on creativity, user-centered design, visual appeal, consistency, and functionality.
  5. The top 3 designs will win attractive prizes and recognition during the award ceremony.


`,
  },
  {
    name: "Orbiting Oddities",
    imageURI: "/img/memescape.jpeg",
    date: "16th September 2023",
    time: "1:30 pm to 3:00 pm",
    location: "CIS (J14)",
    organizers: "Sowmya B and Ludo Kirsten Roy V (Contact : 8925050777 )",
    description: "Meme Creation",
    rules: `
Rules:
  1. Canva is the only application that should be used for meme creation.
  2. PNG, JPG, or JPEG image formats are accepted for creating memes.
  3. The theme will be provided on the spot.
  4. Decisions made by judges are authoritative and final.
  5. Please take note that any form of profanity in the content can result in immediate disqualification.

Event Guidelines:
  1. Register for the event as an Individual participant .
  2. On the day of the event, participants would receive a briefing on the event's theme.
  3. The given theme will serve as the basis for the participants' meme design in which they will be given 60 minutes to develop or make their memes.
  4. Judges will evaluate the memes based on its creativity, originality and technical relevance to the theme.
  5. During the judging process, all the memes would be reviewed  and participants will be given the opportunity to explain their memes to the judges. 
  6. Once Judging is completed, the top three meme creators will be awarded during the valedictory ceremony


`,
  },
  {
    name: "Space Complexity",
    imageURI: "/img/spacecomplexity.jpg",
    date: "16th September 2023",
    time: "10:00 am to 11:30 am",
    location: "Data Structures Laboratory (A22)  ",
    organizers: "Afrid Ariff H and Avanthika Y ( Contact : 9360959577 )",
    description: "Code Debugging",
    rules: `
Rules:
  1. Register for the event as an individual participant .
  2. Participants are allowed to bring their own laptops.
  3. The allotted time for each round is 45 minutes.
  4. There will be 15 minutes of break between the two rounds.
  5. Any participant resorting to unfair practices will be disqualified.

Event Guidelines:
  There will be two rounds of coding.

    ROUND 1: 
      1. There will be 9 questions of varying difficulty levels- easy, medium and hard.
      2. Each question has a predetermined score based on the difficulty level.
      3. Top 10 participants with the highest scores will qualify for the next round. This is subject to change based on the number of candidates. 
      4. The participant's score is determined by the number of test cases that their code submission successfully passes.
      5. Participants are ranked by score. If two or more participants achieve the same score, then the tie is broken by the total time taken on successful submissions.

    ROUND 2: 
      1. There will be two questions in this round- one medium and one hard question.
      2. The questions in this round will be space-themed.
      3. A participant's score is determined by the number of test cases that their code submission successfully passes.
      4. Time and space complexity will be used to break ties. 
      5. Time taken on successful submissions will be used to resolve further ties.

Evaluation Criteria:
  For each question, participants will be awarded points based on the difficulty level:
    Easy - 10 points,  Medium - 15 points, Hard - 20 points


`,
  },
  {
    name: "Tesseract",
    imageURI: "/img/tesseract.jpg",
    date: "16th September 2023",
    time: "11:30 am to 1:00 pm",
    location: "Drawing Room (G32)",
    organizers: "Kaviena Sharon and Judith (Contact: 7871123619 ) ",
    description: "Tech Charades",
    rules: `
Rules:
  1. The given word should be Enacted by one individual. 
  2. Each member of the team should perform in turns.
  3. NEVER mouth the word or represent the letters with symbols.
  4. You only have a timer to enact your word, and you must lock the response inside that period.
  5. Each team can have 2 members at max. 
  6. Teams can have participants from different institutions. 
  7. Gadget usage is restricted. 
  8. If any one in the team breaks the rules, marks will not be given. 
  9. The judge's decision will be final

Event Guidelines:
  There will be 3 rounds in this event.
    Round 1 : Guess It 
      A. The participants will be given a word for which they should enact and guess the word within 60 seconds. 
      B. There will be 4 rounds for each team. The team which acts out all the words flamboyantly will get the points. ( Top 10 teams will be selected)

    Round 2 : Minute to win it
      A. In this round, we will increase the number of words that must be enacted within 60 seconds as the intricacy increases, and the team that completes the task wins the points.
      B. There will be 3 rounds for each team. ( Top 5 teams will be selected )

    Round 3 : PICTIONARY
      A. In this round the person sketching has 1 minute to draw the word without using letters or symbols and only 3 guesses are allowed. 
      B. There will be 2 rounds for each team and the team that scores high points will be the winner.

Evaluation Criteria:
  The three rounds are evaluated in following manner:
    ROUND 1 - 5 points 
    ROUND 2 - 10 points 
    ROUND 3 - 15 points
      

`,
  },
  {
    name: "Pitch Black",
    imageURI: "/img/pitchblack.png",
    date: "16th September 2023",
    time: "11:30 am to 1:00 pm",
    location: "Classroom (I31) ",
    description: " Business pitch ",
    organizers: "Ananth and Ajay Roshan ( Contact : 7200126971 )",
    rules: `
Rules:
  1. Each team shall have a maximum of 4 members.
  2. Topic will be given 2 days prior to the event.
  3. Teams should prepare the presentation based on the topic.
  4. The pitch must be in English.
  5. The Judges decision is final.

Event Guidelines:
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
      "Nivedita Ramatoti and Chrispin Sheena ( Contact : 7418921212 )",
    description: "Technical Connection",
    rules: `
Rules:
  1. Each team can have a maximum of 3 members.
  2. The use of electronic gadgets is restricted throughout the event.
  3. Winners will be determined based on the cumulative points earned by the top three teams.
  4. The decisions made by the judges throughout the event will be considered final and binding.

Event Guidelines:
  The event is divided into two rounds to assess participants' skills.

  Round 1:
    1. Participants will match a given clue with a sequence of images.
    2. This round is divided into three sections: Easy (30 seconds), Medium (45 seconds), and Hard (60 seconds).
    3. Each team will receive three questions, one from each difficulty level, on a rotating basis.
    4. Correct answers in this round will earn the team 1 point each.
    5. Participants with sufficient points in Round 1 will proceed to Round 2.
    
  Round 2:
    1. Participants will analyze a sequence of images and a provided clue.
    2. The team that correctly responds first within the provided 30-second time frame will earn points.

Evaluation Criteria:
  A. 5 points for the first image
  B. 4 points for the second image
  C. 3 points for the third image
  D. 2 points for the fourth image
  E. 1 point for the fifth image
    

`,
  },
];

const inter = Inter({ subsets: ["latin"] });
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
          <video
            autoPlay
            loop
            muted
            className={styles["hero-background-video"]}
          >
            <source src="/space-theme.webm" type="video/webm" />
          </video>
        </div>
        {eventDeets && (
          <div className="flex-col justify-center items-center absolute top-[90px]">
            <div className="glasscard m-4 p-3">
              <div className="my-3 m-4 uppercase text-xl font-bold space-y-5">
                <p className="text-4xl mb-4 sm:mb-3">{eventDeets.name} </p>
                <div></div>
                <a
                  href="#regform"
                  className="py-2 px-4 border border-gray-400 rounded shadow"
                  onClick={() => {
                    setReg(true);
                  }}
                >
                  Register <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <pre className="lg:text-[17px] md:text-[15px] text-[13px] pl-5 font-inherit">
                {eventDeets.rules}
              </pre>
              <div className="space-y-3 mb-3">
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

              {reg && eventDeets?.registerationlink && (
                <>
                  <section id="regform">
                    <div
                      className="w-full p-10 border sm:p-0 rounded"
                      id="#regform"
                    >
                      <iframe
                        // scrolling="no"
                        src={`${eventDeets?.registerationlink}/viewform`}
                        className="w-full overflow-y-clip h-full overflow-hidden "
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
                  </section>
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
