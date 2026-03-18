"use client";

import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "Level Up Now! Hackathon + Games for Change Student Game Jam Asia 2026",
    category: "Hackathon Experience + Game Development",
    img: "Level Up.png",
    images: ["grassgame.mov"],
    span: "col-span-1",
    desc:
      "I participated in the Level Up Now! Hackathon/Games for Change Student Game Jam Asia Series, organised by 3D Heroes in partnership with the Games for Change Student Game Jam Asia Series. The challenge invited participants to design a Game For Change that could help players experience and care about ecosystems such as Reefs and Rainforests, which play a critical role in protecting biodiversity and mitigating climate change but are rapidly disappearing.\n\n" +
      "My team developed 'Touch Grass Simulator', a sandbox-style game concept inspired by games commonly played by our target audience, Gen Alpha, such as Roblox, Fortnite and Minecraft. I contributed to the concept development, gameplay design, and presentation of the project's business model. The game centred on restoring ecosystems rather than extracting resources, allowing players to rebuild reefs and rainforests through exploration and ecological interaction.\n\n" +
      "We structured the project using a business model framework introduced during the hackathon's entrepreneurship workshop. We identified Gen Alpha players as the primary audience and designed gameplay loops around exploration, creature discovery, and ecosystem restoration. The concept followed a free-to-play structure similar to popular online games, with cosmetic microtransactions instead of pay-to-win mechanics. We also explored marketing touchpoints such as short-form gameplay content and collaborations with gaming creators to reach players within their existing entertainment spaces. We chose this direction after observing how younger audiences spend significant time in online sandbox social environments. We explored how a similar interactive system could encourage curiosity about real ecosystems and climate challenges, using familiar game mechanics to make environmental learning more engaging, and for the greater good to make a change in their lives.",
    link: "https://placeholder.com/project",
    github: "https://github.com/placeholder",
    hideLink: true,
  },
  {
    title: "Source Awakening: Open Source Hackathon—Building AI Agents with OpenClaw",
    category: "Hackathon Experience",
    img: "Source_Hackathon.png",
    images: ["opensourcedeck.png", "email-04.png"],
    span: "col-span-1",
    desc:
      "Source Awakening's Inaugural Open Source Hackathon is a one-day intensive sprint focused on shipping a real product in one day, led by the Singapore Open Source AI Hub and co-hosted with industry leaders like WaveSpeedAI, Minimax, and memU.\n\n" +
      "The Challenge: Build AI Agents with OpenClaw\n\n" +
      "I collaborated in a team to conceptualize and prototype an AI agent addressing phishing and digital security risks in everyday communication platforms. By leveraging the OpenClaw framework to automate data workflows and surface actionable insights, it could monitor and process information across communication tools such as WhatsApp, Microsoft Teams, and Zoom.\n\n" +
      "The agent analyzed emails, messages, and call transcripts to summarize content and flag potential phishing attempts, helping users quickly identify suspicious communications and reduce security risks. The project involved ideation, designing the agent workflow, integrating OpenClaw capabilities, and presenting a functional prototype to a panel of industry judges.",
    link: "https://placeholder.com/project",
    github: "https://github.com/placeholder",
    hideLink: true,
  },
  {
    title: "Unity: Space Cadet",
    category: "Game Development with C#",
    img: "UnityPlay.mov",
    images: ["UnityPlay.mov"],
    span: "col-span-1",
    desc: 
      "I decided to learn Unity and C# to deepen my interest in game development. I followed tutorials and created this 2D game featuring particle physics and focused on tight controls with a satisfying game feel. I learnt how to develop games on Unity whilst focusing on implementing core gameplay systems through C#. This game's player-controlled character rotates based on keyboard input, whilst enemies exhibit autonomous behaviour by chasing the player. Core mechanics include a physics-based system where enemies fall into holes to generate score, alongside a health system that reduces player health upon enemy collision. A scoring system was also implemented programmatically.\n\n" +
      "The game's physics system, including colliders and trigger detection, integrates animation states such as idle and reactive motion. UI elements such as health were connected to scripts via the Inspector, reinforcing my understanding of Unity's component-based architecture.\n\n" +
      "I followed structured tutorials to learn the Unity workflow process and push my understanding of game development. I gained hands-on experience in writing and organising C# scripts, implementing collision-based interactions, and debugging common issues such as syntax errors, asset conflicts, and UI integration. This game reflects my focus on building functional game systems whilst translating guided learning into practical implementation.",
    link: "https://megctn.github.io/Space-Cadet/",
    github: "https://github.com/placeholder",
  },
  {
    title: "Godot: Pixel Pixie Quest",
    category: "Game Design & Development",
    img: "godot.mov",
    images: ["godot.mov"],
    span: "col-span-1",
    desc:
      "Pixel Pixie Quest is a 2D platformer game built using Godot and scripted in GDScript. The game allows the player to control a pixie character navigating a level to collect apples while avoiding snail enemies that trigger the death state. The project focuses on implementing core gameplay systems such as player movement, collision detection, and event-driven feedback, rather than visual complexity.\n\n" +
      "I decided to pick up Godot to learn its architecture and workflow while deepening my understanding of how gameplay systems are implemented programmatically. Building this game served as a practical way to explore game development, and train my technical thinking through constructing interactive systems from the ground up.\n\n" +
      "The game was structured with Godot's node-based scene architecture, organising components into modular nodes such as Player, Enemy, Collectibles, and UI. A player controller handles movement and jump mechanics through input mapping and frame-based updates, while a collision system manages player–enemy and player–collectible interactions. Enemy collisions trigger the death state and collectible collisions increment score. Game state logic controls transitions between active play and game-over conditions, with event feedback implemented through sound effects and sprite state changes. This game demonstrates foundational programming concepts including frame-based game loop logic, event-driven interactions, collision detection, state management, and modular scene architecture.\n\n" +
      "Click the link to try out the game and hear the sound effects! Recommended to play on desktop with keyboard controls for the best experience.", 
    link: "https://megctn.github.io/Pixel-Pixie-Quest/",
    github: "https://github.com/megctn/Pixel-Pixie-Quest",
  },
  {
    title: "Tic Tac Toe AI Logic Visualizer",
    category: "Game Development",
    img: "TTT.png",
    images: ["TTT.png"],
    span: "col-span-1",
    desc: 
    "I reimagined the classic game of Tic Tac Toe, building an AI Logic Visualiser version with a focus on polished UI/UX logic. It features an unbeatable AI opponent, animation states, and a clean design system, utilising JavaScript, HTML, and CSS.\n\n" +
    "The board has a 9-cell array, with win detection checking all possible combinations (rows, columns, diagonals) after every move. Two AI modes are implemented: Easy mode, where the AI picks randomly, and Hard mode, where the AI uses the Minimax algorithm with alpha-beta pruning, a recursive decision tree that simulates every possible game outcome and picks the mathematically optimal move. The core design goal was to make the AI's thinking visible. A live decision map annotates every empty cell with its Minimax score while the best move is highlighted in real time, and outcome probability bars update after each turn. The move log records every action with its strategy tag, giving a full audit trail of the game.\n\n" +
    "The game's mechanics are cause-and-effect driven: placing a mark triggers a spring animation, a win pulses the winning cells, a draw shakes the board, and the AI shows a thinking indicator while calculating. These responses are all tied directly to game events, and how the back-end works seamlessly with the front-end. The project demonstrates not just a working game, but one that features its very own logic. Try playing it!",
    link: "https://fascinating-narwhal-80ba5f.netlify.app/",
    github: "https://github.com/placeholder",
  },
  {
    title: "Feline Fatale",
    category: "Game Design & Development",
    img: "kitty.mov",
    images: ["kitty.mov"],
    span: "col-span-1",
    desc:
    "This is a physics-based endless runner built with JavaScript using the HTML5 Canvas API. The core of the game is a real-time physics simulation with cause and effect. Every frame, gravity (+0.38 px/frame²) is added to the cat's vertical velocity. A flap applies an instant upward impulse (−7.2 px/frame), which decays each frame as gravity pulls back down. Velocity is capped at a terminal value (9 px/frame) to simulate air resistance. The cat's rotation angle lerps toward its velocity, nose up when rising, nose down when falling, so the physics are always visually readable. On flap, a squash-and-stretch animation compresses and rebounds over 8 frames using spring interpolation, giving every input a satisfying physical response.\n\n" +
    "The collision uses circle-vs-AABB detection where the cat has a circular hitbox tested against each pipe's rectangular bounds every frame. Pipes are procedurally spawned at randomised heights and scroll left at increasing speed, ramping up every 5 points scored. A live physics panel overlays the game in real time, displaying altitude, vertical velocity with directional indicators, current pipe speed, and the gravity constant, making the underlying mechanics visible and legible at all times.\n\n" +
    "The cat is a canvas sprite with frame-by-frame animation featuring blinking eyes on a cycle, wagging tail driven by a sine wave, pawing motion, blush, whiskers, with distinct dead and alive states. Game events trigger particle responses such as flapping spawns, burst particles at the paws, scoring fires gold particles, while death emits a radial explosion. These effects are directly tied to a physics or game state event, demonstrating clear cause and effect throughout the game. This game helped me to understand more about the importance of physics in game development.",
    link: "https://papaya-phoenix-76c2f0.netlify.app/",
    github: "https://github.com/placeholder",
  },
  {
    title: "Machine Learning: Let's Stalk Animal Crossing's Stalk Market!",
    category: "Machine Learning Project",
    img: "ACNH.png",
    images: ["animal.png", "animalgraph.png"],
    span: "col-span-1",
    desc:
      "This Machine Learning Project applies EDA and binary classification to real player-generated data from Reddit's r/AnimalCrossing, analysing 757 top Reddit posts scraped between 2017 and 2020 to predict whether a post would go viral (top 25% of upvotes). I chose Animal Crossing: New Horizons as the subject because it's a game I particularly enjoy, and one that's deeply rooted in probability theory: from the Stalk Market's fluctuating turnip prices to the randomised spawn systems that govern its world.\n\n" +
      "Using Python, Pandas, Scikit-learn, Matplotlib, and Seaborn, I engineered features from post metadata, including upvote ratios, comment counts, and posting time, and trained 7 classifiers, achieving a best accuracy of 84.9% with Random Forest. I also applied regression and time-series forecasting to predict Stalk Market price fluctuations, visualising predictions with an interactive dashboard.\n\n" +
      "The project connects directly to game development: understanding what drives community engagement and viral content informs how games are marketed, how live-service content is scheduled, and how player behaviour can be modelled and predicted. Games like Animal Crossing: New Horizons thrive on community momentum, and ML is increasingly used in the industry to analyse and respond to that data at scale.\n\n" +
      "I made this project to challenge myself and prepare myself for machine learning modules in building hands-on familiarity with classification pipelines, data wrangling, and model evaluation.",
    link: "https://github.com/megctn/Machine-Learning-Animal-Crossing",
    github: "https://github.com/placeholder",
  },
  {
    title: "3D Multiverse World Building",
    category: "3D Web Development + Game Development",
    img: "WorldBuilding.mp4",
    images: ["WorldBuilding.mp4"],
    span: "col-span-1",
    desc:
      "I developed a 3D World Exploration game featuring 3 different maps by following an online tutorial, where I learned how to build interactive environments using modern web-based game development tools. The project was created using React Three Fiber, a React renderer for Three.js, allowing me to construct and manage 3D scenes directly within a React application. I implemented a third-person controller system, enabling player movement, camera tracking, and interaction within a 3D environment. The project also included features such as a mini map and basic game mechanics, helping me understand how different components work together in a real-time 3D application.\n\n" +
      "I used tools and technologies such as React (for structuring the application), React Three Fiber (for 3D rendering), Three.js (underlying 3D engine), JavaScript (JSX) for component-based development, pre-built assets and models from the tutorial. My key learning points from this project was learning how to set up a 3D scene using React Three Fiber, implementing player movement with a third-person camera system, integrating game elements such as environmental assets, following structured tutorial steps to build a functional game and learning to test and debug the application to ensure smooth interaction.\n\n" +
      "Overall, this game helped me to gain practical experience in building 3D web applications and strengthened my understanding of how React can be combined with 3D rendering libraries to create interactive game environments.",
    link: "https://3-d-world-building.vercel.app",
    github: "https://github.com/placeholder",
  },
  {
    title: "Inner Circle App",
    category: "UI/UX Design Prototype",
    img: "innercircle.png",
    images: ["innercircle.png"],
    span: "col-span-1",
    desc:
    "Inner Circle is an app that I ideated and designed in Figma with custom illustrations to explore self-reflection and active user engagement through a gamified, tiered belief system. Users progress through rituals, challenges, and confession prompts that encourage daily introspection and confront avoidance behaviours. Gameplay-like logic is embedded through tiered progression, point accumulation, and reward systems that provide unexpected visual and interactive feedback, mirroring the cause-and-effect mechanisms seen in game design. The structure ensures that actions have consequences, guiding users through escalating levels of engagement while maintaining a coherent interactive flow.\n\n" +
    "The app integrates challenge systems and reward mechanics similar to game loops: users encounter weekly tasks with difficulty tiers, earn visual and celebratory feedback for completing actions, and advance through 'cult' levels to unlock new rituals. These systems are designed to train consistent engagement, reflection, and personal accountability, while the interface uses particle-like motion, visual cues, and animated rewards to reinforce user behaviour and provide immediate, satisfying feedback. The leaderboard, anonymous confession boards, and community interactions create emergent social dynamics, further layering systemic interactivity.\n\n" +
    "This project demonstrates logic-driven UI/UX planning, interactive state management, and reward-based progression, all foundational to game development. The tiered progression and event-triggered feedback replicate key game systems such as state transitions, event-driven responses, and player motivation loops. By combining visual design, illustration, and interactive logic, this app showcases my deep understanding of  user experience systems and programmatic thinking. Click the link to explore the prototype and experience my Inner Circle!",
    link: "https://www.figma.com/proto/TUZGbd38QDc37gVeiifskX/INNER-CIRCLE?page-id=0%3A1&node-id=2-3&p=f&viewport=143%2C212%2C0.07&t=20XYnv2n5fblqV29-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A3&show-proto-sidebar=1",
    github: "https://github.com/placeholder",
  },
  {
    title: "blackx UI/UX Website Design Prototype",
    category: "UI/UX Design, Website Design",
    img: "blackx.png",
    images: ["blackx.png"],
    span: "col-span-1",
    desc: 
    "Work shown is a WIP and not final. As part of blackx’s brand evolution, I worked on the website redesign to complement their new visual identity, creating a sleek, minimal aesthetic enhanced by diamond motifs drawn from the brand’s graphic language. The process involved high-fidelity prototyping in Adobe XD whilst considering the user experience, which translated conceptual designs into interactive experiences.\n\n" +
    "Collaborating closely with a developer, these prototypes were iteratively tested and refined, ensuring our intentionality was preserved. This applied learning through the workflow of prototyping helped me to understand the importance of conceptual thinking, iterative testing, and technical collaboration to produce interactive systems that are experiential and functional, further sparking my interest in developing and coding, working on functions beyond design. Click on the prototype and scroll through the pages to see the full site!",
    link: "https://xd.adobe.com/view/f88fa7f5-11b6-43c0-9c9b-45076ad73bf6-addc/",
    github: "https://github.com/placeholder",
  },
];

const capabilities = [
  "Graphic Design", "UI/UX", "Web Development", "Game Design",
  "Interactive Experiences", "Prototyping", "Motion & Animation",
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

function AnimatedSection({ children, delay = 0, className = "", style = {} }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function isVideo(src: string) {
  return src.endsWith(".mov") || src.endsWith(".mp4") || src.endsWith(".webm");
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => { setTimeout(() => setEntered(true), 60); }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedProject(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --black: #0a0a0a;
          --white: #ffffff;
          --accent: #c8ff00;
          --grey: #888;
          --border: rgba(10,10,10,0.12);
        }

        html {
          scroll-snap-type: y proximity;
          scroll-behavior: smooth;
        }

        body { background: var(--white); color: var(--black); font-family: system-ui, sans-serif; }

        .snap-section { scroll-snap-align: start; }

        .font-display { font-family: system-ui, sans-serif; font-weight: 400; letter-spacing: -0.04em; }
        .font-mono    { font-family: system-ui, sans-serif; }

        .nav-link {
          text-decoration: none;
          color: var(--black);
          font-size: 0.75rem;
          letter-spacing: normal;
          font-weight: 400;
          transition: opacity 0.2s;
        }
        .nav-link:hover { opacity: 0.45; }

        .project-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          background: #d9d8d4;
        }
        .project-card img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }
        .project-card:hover img { transform: scale(1.06); }
        .project-card .overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.72) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex; flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
        }
        .project-card:hover .overlay { opacity: 1; }

        .ticker {
          display: flex;
          gap: 0;
          overflow: hidden;
          white-space: nowrap;
        }
        .ticker-inner {
          display: flex;
          gap: 0;
          animation: scroll-left 22s linear infinite;
        }
        .ticker-inner span {
          padding: 0 2.5rem;
          font-family: system-ui, sans-serif;
          font-weight: 400;
          font-size: 1.05rem;
          letter-spacing: normal;
          color: var(--black);
        }
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.75rem;
          background: var(--black);
          color: var(--white);
          font-size: 0.75rem;
          letter-spacing: normal;
          font-weight: 400;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          text-decoration: none;
        }
        .cta-btn:hover { background: var(--accent); color: var(--black); }

        .cta-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.75rem;
          background: transparent;
          color: var(--black);
          font-size: 0.75rem;
          letter-spacing: normal;
          font-weight: 400;
          border: 1.5px solid var(--black);
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          text-decoration: none;
        }
        .cta-btn-outline:hover { background: var(--black); color: var(--white); }

        .process-num {
          font-family: system-ui, sans-serif;
          font-weight: 400;
          letter-spacing: -0.04em;
          font-size: 5rem;
          line-height: 1;
          color: var(--accent);
        }

        .grid-projects {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 768px) {
          .grid-projects { grid-template-columns: 1fr; }
          .hero-headline { font-size: 15vw !important; }
        }
        .col-span-1 { grid-column: span 1; }

        .card-uniform { height: 400px; }

        .intro-hero {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .intro-hero.entered {
          opacity: 1;
          transform: translateY(0);
        }

        .line-stagger-1 { transition-delay: 0.05s !important; }

        .section-label {
          font-size: 0.68rem;
          letter-spacing: normal;
          text-transform: uppercase;
          color: var(--grey);
          font-weight: 400;
        }

        .mobile-menu {
          position: fixed; inset: 0; z-index: 50;
          background: var(--black);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 2.5rem;
          transform: translateY(-100%);
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1);
        }
        .mobile-menu.open { transform: translateY(0); }
        .mobile-menu a {
          font-family: system-ui, sans-serif;
          font-weight: 400;
          letter-spacing: -0.04em;
          font-size: 3rem;
          color: var(--white);
          text-decoration: none;
        }

        /* ── MODAL ── */
        .modal-backdrop {
          position: fixed; inset: 0; z-index: 60;
          background: rgba(10,10,10,0.65);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 1.5rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .modal-backdrop.open {
          opacity: 1;
          pointer-events: all;
        }
        .modal-box {
          background: #ffffff;
          border-radius: 16px;
          width: 100%;
          max-width: 580px;
          max-height: 88vh;
          overflow-y: auto;
          padding: 2rem;
          position: relative;
          transform: translateY(24px);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .modal-backdrop.open .modal-box {
          transform: translateY(0);
        }
        .modal-close {
          position: absolute; top: 1.25rem; right: 1.25rem;
          background: rgba(10,10,10,0.07);
          border: none; cursor: pointer;
          width: 32px; height: 32px;
          border-radius: 999px;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .modal-close:hover { background: rgba(10,10,10,0.14); }
        .modal-img {
          width: 100%; height: 220px;
          object-fit: cover;
          border-radius: 10px;
          margin: 1rem 0 1.25rem;
          background: #d9d8d4;
          display: block;
        }
        .modal-link {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.65rem 1.3rem;
          border-radius: 999px;
          font-size: 0.73rem; font-weight: 400;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .modal-link-filled {
          background: #0a0a0a; color: #ffffff;
        }
        .modal-link-filled:hover { background: var(--accent); color: #0a0a0a; }
        .modal-link-outline {
          border: 1.5px solid #0a0a0a; color: #0a0a0a;
        }
        .modal-link-outline:hover { background: #0a0a0a; color: #ffffff; }
      `}</style>

      {/* ── PROJECT MODAL ── */}
      <div
        className={`modal-backdrop${selectedProject ? " open" : ""}`}
        onClick={() => setSelectedProject(null)}
      >
        <div className="modal-box" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setSelectedProject(null)}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <line x1="1" y1="1" x2="11" y2="11" stroke="#0a0a0a" strokeWidth="1.5"/>
              <line x1="11" y1="1" x2="1" y2="11" stroke="#0a0a0a" strokeWidth="1.5"/>
            </svg>
          </button>

          {selectedProject && (
            <>
              <span className="section-label">{selectedProject.category}</span>
              <h2 style={{ fontFamily: "system-ui, sans-serif", fontWeight: 400, fontSize: "1.35rem", letterSpacing: "-0.02em", color: "#0a0a0a", marginTop: "0.4rem", lineHeight: 1.2, paddingRight: "2rem" }}>
                {selectedProject.title}
              </h2>

              {/* ── IMAGE / VIDEO GALLERY ── */}
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", margin: "1rem 0 1.25rem" }}>
                  {selectedProject.images.map((src, i) =>
                    isVideo(src) ? (
                      <video
                        key={i}
                        src={src}
                        controls
                        style={{ width: "100%", borderRadius: "10px", display: "block", background: "#d9d8d4", maxHeight: "320px" }}
                      />
                    ) : (
                      <img
                        key={i}
                        src={src}
                        alt={`${selectedProject.title} image ${i + 1}`}
                        style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px", display: "block", background: "#d9d8d4" }}
                        onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                    )
                  )}
                </div>
              ) : (
                <>
                  <img
                    className="modal-img"
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    onError={e => {
                      const t = e.target as HTMLImageElement;
                      t.style.display = "none";
                      (t.parentNode as HTMLElement).querySelector<HTMLDivElement>(".modal-img-fallback")!.style.display = "flex";
                    }}
                  />
                  <div className="modal-img-fallback" style={{ width: "100%", height: "220px", background: "#d9d8d4", borderRadius: "10px", margin: "1rem 0 1.25rem", display: "none", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "rgba(10,10,10,0.3)", fontSize: "0.8rem" }}>No image</span>
                  </div>
                </>
              )}

              <div style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(10,10,10,0.6)", marginBottom: "1.5rem" }}>
                {selectedProject.desc?.split("\n\n").map((para, i) => (
                  <p key={i} style={{ marginBottom: "0.85rem" }}>{para}</p>
                ))}
              </div>
              <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
                {!selectedProject.hideLink && (
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-link modal-link-filled">
                    View Project →
                  </a>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button
          onClick={() => setMenuOpen(false)}
          style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", cursor: "pointer" }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <line x1="4" y1="4" x2="24" y2="24" stroke="#ffffff" strokeWidth="2"/>
            <line x1="24" y1="4" x2="4" y2="24" stroke="#ffffff" strokeWidth="2"/>
          </svg>
        </button>
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.5rem 2.5rem",
        background: "transparent",
        border: "none",
      }}>
        <span className="font-display" style={{ fontSize: "1.1rem", letterSpacing: "normal", color: "var(--black)", fontWeight: 600 }}>
          MEGAN TAN YU YAN
        </span>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a href="#work" className="nav-link">Work</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="cta-btn" style={{ padding: "0.55rem 1.2rem", fontSize: "0.7rem" }}>
            Let's Connect →
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}
          >
            <span style={{ width: 22, height: 1.5, background: "var(--black)", display: "block" }}/>
            <span style={{ width: 22, height: 1.5, background: "var(--black)", display: "block" }}/>
          </button>
        </div>
      </nav>

      <main style={{ paddingTop: "5rem" }}>

        {/* ── HERO ── */}
        <section className="snap-section" style={{ padding: "5rem 2.5rem 3.5rem", maxWidth: "1400px", margin: "0 auto", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ marginBottom: "3rem" }}>
            <span style={{ fontSize: "0.75rem", color: "rgba(10,10,10,0.4)", fontWeight: 500, background: "rgba(10,10,10,0.07)", padding: "0.35rem 0.85rem", borderRadius: "999px", display: "inline-block" }}>Portfolio 2026</span>
          </div>

          <div className={`intro-hero${entered ? " entered" : ""}`}>
            <h1
              className="font-display hero-headline"
              style={{ fontSize: "clamp(4.5rem, 12vw, 12rem)", lineHeight: 0.92, letterSpacing: "-0.03em", marginBottom: "0.05em", color: "rgba(10,10,10,0.07)" }}
            >
              DESIGN &amp;
            </h1>
            <h1
              className="font-display hero-headline line-stagger-1"
              style={{ fontSize: "clamp(4.5rem, 12vw, 12rem)", lineHeight: 0.92, letterSpacing: "-0.03em", color: "var(--black)" }}
            >
              DEVELOP.
            </h1>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: "2.5rem", flexWrap: "wrap", gap: "1.5rem" }}>
            <div style={{ maxWidth: "800px" }}>
              <p style={{ fontSize: "1rem", lineHeight: 1.3, color: "rgba(10,10,10,0.6)", fontWeight: 500, marginBottom: "1rem" }}>
                Aspiring Game Designer + Developer with hands-on design experience in web development and game prototyping, building within the intersection of visual design, interaction systems, and programming.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.3, color: "rgba(10,10,10,0.6)", fontWeight: 500 }}>
                My work explores how design concepts translate into functional digital experiences through code, including interactive websites and game projects. Currently applying to the Computer Science in Interactive Media and Game Development at Singapore Institute of Technology to deepen my understanding of game systems, software development, and computational thinking.
              </p>
            </div>
          </div>
        </section>

        {/* ── TICKER ── */}
        <div className="ticker" style={{ padding: "1rem 0", borderTop: "1px solid rgba(10,10,10,0.12)", borderBottom: "1px solid rgba(10,10,10,0.12)" }}>
          <div className="ticker-inner">
            {[...capabilities, ...capabilities].map((c, i) => (
              <span key={i}>{c} </span>
            ))}
          </div>
        </div>

        {/* ── WORK ── */}
        <section id="work" className="snap-section" style={{ padding: "5rem 2.5rem", background: "#0a0a0a", maxWidth: "100%" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <AnimatedSection style={{ marginBottom: "2.5rem", display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem" }}>
                <span className="section-label" style={{ color: "rgba(245,244,240,0.5)" }}>Selected Work</span>
              </div>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", padding: "0.55rem 1.2rem", border: "1.5px solid #ffffff", borderRadius: "999px", fontSize: "0.7rem", letterSpacing: "normal", fontWeight: 400, color: "#ffffff", textDecoration: "none" }}>All Projects</a>
            </AnimatedSection>

            <div className="grid-projects">
              {projects.map((p, i) => (
                <AnimatedSection key={i} className={p.span} delay={0.05 * (i % 3)}>
                  <div
                    className={"project-card card-uniform"}
                    onClick={() => setSelectedProject(p)}
                  >
                    <img
                      src={p.img}
                      alt={p.title}
                      onError={e => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        (target.parentNode as HTMLElement).style.background = `hsl(${i * 42}, 18%, ${78 - i * 4}%)`;
                      }}
                    />
                    <div className="overlay">
                      <span className="section-label" style={{ color: "rgba(245,244,240,0.6)", marginBottom: "0.35rem" }}>{p.category}</span>
                      <h3 style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.65rem", color: "#ffffff", letterSpacing: "normal", lineHeight: 1 }}>
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT / PROCESS ── */}
        <section id="about" className="snap-section" style={{ background: "var(--black)", padding: "5rem 2.5rem" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <AnimatedSection style={{ marginBottom: "4rem" }}>
              <span className="section-label" style={{ color: "rgba(255,255,255,0.4)" }}>Process</span>
              <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", color: "#ffffff", lineHeight: 0.95, marginTop: "0.5rem", letterSpacing: "-0.02em" }}>
                WORK IN PERSPECTIVE
              </h2>
            </AnimatedSection>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "3rem" }}>
              {[
                { n: "01", title: "Research & Discovery", desc: "Deep-diving and understanding context, users, and constraints before a single pixel gets placed." },
                { n: "02", title: "Design & Prototype", desc: "Iterating quickly in high-fidelity—wireframes before building interactive prototypes." },
                { n: "03", title: "Build & Ship", desc: "Production-quality code with attention to performance, accessibility, and motion." },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={0.1 * i} style={{ borderTop: "1px solid rgba(245,244,240,0.15)", paddingTop: "1.5rem" }}>
                  <div className="process-num">{item.n}</div>
                  <h3 style={{ color: "#ffffff", fontWeight: 400, fontSize: "1rem", margin: "0.75rem 0 0.5rem" }}>{item.title}</h3>
                  <p style={{ color: "rgba(245,244,240,0.5)", fontSize: "0.875rem", lineHeight: 1.7, fontWeight: 400 }}>{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section className="snap-section" style={{ padding: "4rem 2.5rem", maxWidth: "100%" }}>
          <AnimatedSection>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {capabilities.map((c, i) => (
                <span key={i} style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "0.65rem 0",
                  border: "1px solid rgba(10,10,10,0.2)",
                  borderRadius: "999px",
                  fontSize: "0.78rem",
                  letterSpacing: "normal",
                  fontWeight: 400,
                  color: "var(--black)",
                  transition: "background 0.2s, color 0.2s",
                  cursor: "default",
                  whiteSpace: "nowrap",
                }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.background = "var(--white)"; (e.target as HTMLElement).style.color = "var(--black)"; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "var(--black)"; }}
                >
                  {c}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="snap-section" style={{ padding: "5rem 2.5rem", maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <AnimatedSection>
              <h2 className="font-display" style={{ fontSize: "clamp(3rem, 7vw, 7rem)", lineHeight: 0.9, letterSpacing: "0.01em", marginTop: "0.5rem", color: "var(--black)" }}>
                Let's<br/>
                Create<br/>
                Together.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p style={{ fontSize: "1.2rem", color: "rgba(10,10,10,0.6)", fontWeight: 400, marginBottom: "0.15rem" }}>Have a project in mind or looking to collaborate?</p>
              <p style={{ fontSize: "1.2rem", color: "rgba(10,10,10,0.6)", fontWeight: 400, marginBottom: "2rem" }}>Say hello at <a href="mailto:megctn@gmail.com" style={{ color: "#0a0a0a", textDecoration: "none" }}>megctn@gmail.com</a>.</p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a href="mailto:megctn@gmail.com" className="cta-btn">Let's Chat →</a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: "none", padding: "1.75rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <span className="font-mono" style={{ fontSize: "0.72rem", color: "rgba(10,10,10,0.4)" }}>© MEGAN TAN YU YAN 2026</span>
          <div style={{ display: "flex", gap: "2rem" }}>
            {[
              { name: "GitHub", href: "https://github.com/megctn" },
              { name: "LinkedIn", href: "https://www.linkedin.com/in/tan-megan?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
            ].map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: "0.7rem" }}>{s.name}</a>
            ))}
          </div>
        </footer>

      </main>
    </>
  );
}