// ══════════════════════════════════════════════════
//  Y.R.Jayasekara Portfolio — script.js
//  Bento-Grid Dashboard Style · Electric Emerald
// ══════════════════════════════════════════════════

// ─── DATA ──────────────────────────────────────────
const lectures = [
  {
    title: "Professional Skills & Employability",
    lecturer: "Ishara Raviharee Weerasinghe",
    overview: "The opening session set the foundation of the module, establishing why employability skills matter and how they shape a professional career in the technology sector.",
    activities: [
      "Explored the distinction between professional and employability skills",
      "Discussed personal values, beliefs, attitudes and their influence on character",
      "Engaged in self-reflection exercises using the Johari Window model",
      "Completed group activities centred on self-awareness and peer feedback"
    ],
    learned: "I learned that professional skills are not just supplementary to technical knowledge — they are the very foundation of a sustainable IT career. The Johari Window, in particular, gave me a new lens through which to understand how others perceive me versus how I perceive myself.",
    apply: "I will be more intentional about my professional development, actively seeking feedback and working on the blind spots that the Johari Window revealed.",
    takeaways: [
      "Professional skills are as important as technical ones",
      "Self-awareness is the starting point of all growth",
      "The Johari Window reveals hidden professional blind spots",
      "Values directly influence workplace behaviour"
    ]
  },
  {
    title: "Emotional Intelligence",
    lecturer: "Guest Lecture",
    overview: "This session explored the science and practice of emotional intelligence — examining how emotional awareness affects professional relationships, leadership capacity and team performance.",
    activities: [
      "Discussed real workplace emotional scenarios and appropriate responses",
      "Studied Goleman's five-component Emotional Intelligence framework",
      "Explored the relationship between empathy and effective teamwork",
      "Practised self-regulation techniques during group discussions"
    ],
    learned: "I learned that emotional intelligence is arguably more important than IQ in professional settings. A technically brilliant person who lacks EQ can undermine entire teams, while someone high in EQ can inspire and elevate those around them.",
    apply: "I will apply the principles of self-awareness and empathy when collaborating with teammates, especially during high-pressure project deadlines where tensions often run high.",
    takeaways: [
      "EQ often matters more than IQ in the workplace",
      "Empathy builds bridges in diverse teams",
      "Self-regulation prevents destructive reactions",
      "Emotional awareness is a learnable skill"
    ]
  },
  {
    title: "Professional Responsibilities & Code of Ethics",
    lecturer: "Nushkan Nismi",
    overview: "This lecture examined what it means to be a responsible computing professional — covering codes of ethics from leading bodies and the societal implications of IT decisions.",
    activities: [
      "Studied the ACM, IEEE and CSSL codes of professional ethics",
      "Discussed case studies where IT professionals faced ethical dilemmas",
      "Explored the duty of care owed by computing professionals to society",
      "Analysed frameworks for ethical decision-making under pressure"
    ],
    learned: "I learned that as an IT professional, I am not just writing code — I am making decisions that affect real people's privacy, safety and wellbeing. That is a profound responsibility I must take seriously throughout my career.",
    apply: "Before making any technical decision, I will ask myself whether it respects user privacy, avoids potential harm and aligns with established professional ethical standards.",
    takeaways: [
      "IT professionals carry a duty of care to society",
      "Ethics frameworks provide clear decision-making guides",
      "Privacy protection is a non-negotiable professional obligation",
      "Ethical behaviour builds lasting professional trust"
    ]
  },
  {
    title: "Business Ethics in Practice",
    lecturer: "Guest Lecture",
    overview: "This practical session bridged the gap between theoretical ethics and real business environments — examining how professionals navigate ethical dilemmas in daily work life.",
    activities: [
      "Analysed ethical and unethical business scenarios side by side",
      "Discussed the principles of integrity, objectivity and professional confidentiality",
      "Explored categories of ethical threats and the safeguards that address them",
      "Shared personal examples of ethical challenges faced in student life"
    ],
    learned: "I learned that ethics in business is not always black and white. Many situations exist in grey zones where professional judgement, grounded in core values, must guide decision-making.",
    apply: "I will approach all academic and professional assignments with integrity, ensuring I never compromise on honesty even when it is inconvenient or difficult.",
    takeaways: [
      "Integrity is a daily practice, not a one-off choice",
      "Ethical threats must be recognised early to be addressed",
      "Confidentiality protects all professional relationships",
      "Objectivity prevents personal bias from clouding judgement"
    ]
  },
  {
    title: "Grooming & Etiquette",
    lecturer: "Ms. Oshini Wimalasena",
    overview: "This session examined the professional significance of personal presentation, grooming standards and workplace etiquette — and how these factors influence career opportunities.",
    activities: [
      "Explored the psychology of first impressions and their lasting impact",
      "Studied corporate grooming and dress code expectations",
      "Practised professional greetings, handshakes and introductions",
      "Discussed cultural sensitivity and personal boundaries in the workplace"
    ],
    learned: "I learned that how you present yourself communicates your level of professionalism before you even speak. Grooming and etiquette are investments in your personal brand and career trajectory.",
    apply: "I will be more conscious of my professional presentation — from how I dress to how I introduce myself — particularly during interviews, client meetings and professional events.",
    takeaways: [
      "First impressions are formed within seconds",
      "Professional grooming signals respect and commitment",
      "Personal branding is built over consistent small actions",
      "Cultural awareness prevents unintentional disrespect"
    ]
  },
  {
    title: "Dining Etiquette",
    lecturer: "Guest Lecture",
    overview: "This session covered the art of professional dining — equipping students with the confidence and knowledge to navigate formal business meals and corporate networking dinners.",
    activities: [
      "Learned the conventions of formal table settings",
      "Practised the BMW rule: Bread (left), Meal (centre), Water (right)",
      "Discussed cutlery use from outside in, and napkin placement protocols",
      "Explored conversation etiquette during professional dining events"
    ],
    learned: "I learned that business dining is an extension of the professional environment. Your table manners communicate your social intelligence and respect for the people around you.",
    apply: "I will attend future networking dinners and corporate events with confidence, applying proper dining etiquette to strengthen professional impressions.",
    takeaways: [
      "Business dining is an opportunity to demonstrate professionalism",
      "The BMW rule eliminates common table-setting confusion",
      "Cutlery is used from the outside inward for each course",
      "Phones belong in pockets during professional meals"
    ]
  },
  {
    title: "Email Etiquette",
    lecturer: "Guest Lecture",
    overview: "This practical session developed students' ability to craft professional, effective emails — covering format, tone, common mistakes and digital communication best practices.",
    activities: [
      "Practised writing formal emails from scratch using structured templates",
      "Identified and corrected poorly written email examples",
      "Learned appropriate salutations, closings and signature formats",
      "Developed job application and follow-up email drafts"
    ],
    learned: "I learned that email is often the first written impression you make on an employer or client. A poorly structured email can undo the credibility built through excellent technical work.",
    apply: "Every professional email I send will follow proper structure, use formal language and include a complete signature — reflecting the same professionalism I would show in person.",
    takeaways: [
      "The subject line determines whether the email gets opened",
      "Formal tone must be consistent throughout the message",
      "Avoid casual language, slang and contractions",
      "A complete signature makes you easier to contact and trust"
    ]
  },
  {
    title: "Interview Skills",
    lecturer: "Guest Lecture",
    overview: "This high-impact session prepared students for real-world job and internship interviews — covering everything from preparation strategy to post-interview follow-up.",
    activities: [
      "Studied a wide range of common interview question types",
      "Learned and practised the STAR (Situation, Task, Action, Result) method",
      "Explored the role of non-verbal communication in interview performance",
      "Conducted peer mock interview practice with structured feedback"
    ],
    learned: "I learned that interview success is largely about preparation and structure. The STAR method gave me a clear, memorable way to articulate my experiences without rambling or losing focus.",
    apply: "Before every future interview, I will research the company, prepare STAR-format answers for likely questions and practise my delivery until it feels natural and confident.",
    takeaways: [
      "Preparation is the greatest interview competitive advantage",
      "STAR answers are concise, memorable and compelling",
      "Non-verbal confidence reinforces verbal answers",
      "Following up after an interview shows genuine interest"
    ]
  },
  {
    title: "CV & Cover Letter Writing",
    lecturer: "Guest Lecture",
    overview: "This session guided students through the creation of professional, tailored CVs and cover letters — the critical first documents that determine whether you get an interview.",
    activities: [
      "Studied CV structure, layout conventions and content best practices",
      "Learned how to tailor a CV for specific roles and industries",
      "Developed cover letter frameworks that complement the CV",
      "Reviewed and corrected real CV examples with common formatting errors"
    ],
    learned: "I learned that a CV is not a biography — it is a targeted marketing document. Every element must serve a purpose and speak directly to the role being applied for.",
    apply: "I will maintain a master CV and create customised versions for each application, ensuring both the CV and cover letter directly address the job requirements.",
    takeaways: [
      "Your CV is your personal marketing document",
      "Tailoring beats generic applications every time",
      "A cover letter introduces your human side to employers",
      "Grammar and formatting errors signal carelessness"
    ]
  },
  {
    title: "Negotiation Skills",
    lecturer: "S. Maneesha Aishcharya",
    overview: "This session introduced the principles and practices of effective negotiation — exploring how IT professionals can advocate for their interests while building positive relationships.",
    activities: [
      "Studied the structured negotiation process end to end",
      "Learned how BATNA empowers negotiators with confidence",
      "Identified and discussed the most common negotiation pitfalls",
      "Participated in a live role-play salary and project negotiation exercise"
    ],
    learned: "I learned that negotiation is not confrontation — it is a collaborative process aimed at finding solutions that serve all parties. Knowing your BATNA removes fear from the negotiation room.",
    apply: "I will use negotiation principles when discussing salaries, project scopes, deadlines and team responsibilities — always seeking outcomes that are fair and sustainable for everyone.",
    takeaways: [
      "Your BATNA is your greatest source of negotiation power",
      "Preparation determines negotiation success before it begins",
      "Collaborative negotiation builds stronger relationships",
      "Focusing on interests, not positions, reveals creative solutions"
    ]
  },
  {
    title: "Portfolio Development",
    lecturer: "Ishara Raviharee Weerasinghe",
    overview: "The final session brought the module full circle — exploring how to collect, organise and present learning evidence in a professional portfolio that demonstrates growth.",
    activities: [
      "Explored different types of professional portfolios and their purposes",
      "Learned the key components of an effective assessment portfolio",
      "Discussed digital portfolio platforms and presentation strategies",
      "Planned personal portfolio structure and identified key evidence items"
    ],
    learned: "I learned that a portfolio is not a storage box for completed assignments — it is a curated, reflective narrative of your professional journey. The reflection is what makes it powerful.",
    apply: "This portfolio is the direct application of what I learned. I will continue updating it throughout my career as evidence of ongoing professional growth.",
    takeaways: [
      "Portfolios tell a story, not just list achievements",
      "Reflection transforms evidence into insight",
      "Digital portfolios extend your professional reach globally",
      "A good portfolio is curated, not exhaustive"
    ]
  }
];

const skills = [
  { name: "Communication",          value: 87 },
  { name: "Professionalism",        value: 90 },
  { name: "Interview Readiness",    value: 84 },
  { name: "Teamwork",               value: 91 },
  { name: "Leadership",             value: 79 },
  { name: "Negotiation",            value: 82 },
  { name: "Emotional Intelligence", value: 88 },
  { name: "Ethical Awareness",      value: 93 }
];

const growthItems = [
  { title: "Professional Skills", skill: "Self Awareness",             icon: "🌱" },
  { title: "Emotional Intelligence", skill: "Emotional Growth",        icon: "🧠" },
  { title: "Code of Ethics",      skill: "Responsibility",             icon: "⚖️" },
  { title: "Business Ethics",     skill: "Integrity",                  icon: "🤝" },
  { title: "Grooming",            skill: "Professional Image",         icon: "👔" },
  { title: "Dining Etiquette",    skill: "Social Confidence",          icon: "🍽️" },
  { title: "Email Etiquette",     skill: "Written Communication",      icon: "📧" },
  { title: "Interview Skills",    skill: "Confidence",                 icon: "🎤" },
  { title: "CV & Cover Letter",   skill: "Career Readiness",           icon: "📄" },
  { title: "Negotiation",         skill: "Strategic Thinking",         icon: "🔗" },
  { title: "Portfolio Dev",       skill: "Industry Ready",             icon: "🏆" }
];

const evidence = [
  {
    title: "CV Preparation",
    icon: "📄",
    skill: "Career Readiness",
    desc: "A professionally formatted, targeted CV presenting my academic qualifications, technical skill set, software projects and extracurricular activities. I focused on clarity of layout, role-specific tailoring and eliminating common formatting errors that reduce applicant credibility."
  },
  {
    title: "Cover Letter",
    icon: "✉️",
    skill: "Career Readiness",
    desc: "A compelling cover letter crafted to complement my CV for IT internship applications. I practised articulating my unique value proposition, aligning my skills to employer requirements, and creating an engaging narrative that encourages the reader to open my CV."
  },
  {
    title: "LinkedIn Profile",
    icon: "💼",
    skill: "Career Readiness",
    desc: "A fully optimised LinkedIn profile with a professional headline, strategic summary, complete education history, skills endorsements and project descriptions. The profile serves as my live digital CV and professional networking tool in the technology industry."
  },
  {
    title: "Professional Email",
    icon: "📧",
    skill: "Communication",
    desc: "Developed formal email writing skills including structured layouts, appropriate salutations, concise body paragraphs and professional signatures. Practised writing emails to lecturers, potential employers and professional contacts in contexts that reflect real-world scenarios."
  },
  {
    title: "Interview Practice",
    icon: "🎤",
    skill: "Confidence",
    desc: "Prepared STAR-format answers for a range of behavioural interview questions. Practised mock interviews focusing on confident delivery, maintaining eye contact, managing nervousness and articulating technical experiences in language accessible to non-technical interviewers."
  },
  {
    title: "Dining Etiquette",
    icon: "🍽️",
    skill: "Professional Behaviour",
    desc: "Acquired practical knowledge of formal dining conventions — including the BMW rule, cutlery use from outside in, napkin etiquette and appropriate conversation topics during business meals. This prepares me for corporate networking events and client dinners."
  },
  {
    title: "Grooming Standards",
    icon: "👔",
    skill: "Professional Image",
    desc: "Applied grooming, dress code and personal presentation standards appropriate for formal business and IT workplace environments. Developed awareness of how personal presentation influences professional perception and career opportunity creation."
  },
  {
    title: "Portfolio Development",
    icon: "🏆",
    skill: "Industry Ready",
    desc: "This digital portfolio website is the culminating evidence item — representing the integration of all Professional Skills module learning. It demonstrates my ability to curate, reflect on and present professional learning evidence in a compelling digital format."
  }
];

const vivaQA = [
  {
    q: "Define professional skills and give three examples.",
    a: "Professional skills are non-technical, interpersonal workplace competencies. Examples include communication, emotional intelligence and time management."
  },
  {
    q: "What are the five components of emotional intelligence?",
    a: "Self-awareness, self-regulation, motivation, empathy and social skills — as defined in Goleman's Emotional Intelligence model."
  },
  {
    q: "What is a code of ethics and why does it matter?",
    a: "A code of ethics is a formal document outlining acceptable professional behaviour. It matters because it guides decision-making, builds public trust and protects all stakeholders."
  },
  {
    q: "What does BATNA stand for and why is it important?",
    a: "BATNA means Best Alternative To a Negotiated Agreement. It is important because it defines your fallback position and gives you confidence during negotiations."
  },
  {
    q: "Describe the STAR interview method.",
    a: "STAR stands for Situation, Task, Action and Result. It provides a structured way to answer behavioural interview questions with clear, evidence-based examples."
  },
  {
    q: "What is the BMW rule in dining etiquette?",
    a: "BMW stands for Bread (left), Meal (centre) and Water (right) — a mnemonic to remember where items are placed at a formal dining setting."
  },
  {
    q: "Why is personal branding important for IT professionals?",
    a: "Personal branding shapes how others perceive your skills and professionalism. In the digital age, a strong personal brand — especially online — can directly create career opportunities."
  },
  {
    q: "What makes a CV effective?",
    a: "An effective CV is clearly structured, tailored to the specific role, grammatically correct and focused on demonstrating relevant skills and achievements concisely."
  },
  {
    q: "What is the Johari Window model?",
    a: "The Johari Window is a self-awareness framework with four quadrants — the Arena (known to self and others), Blind Spot (unknown to self), Façade (hidden from others) and Unknown. It helps improve self-understanding and communication."
  },
  {
    q: "How does ethical behaviour benefit an IT organisation?",
    a: "Ethical behaviour builds client trust, protects organisational reputation, reduces legal risk and creates a positive internal culture where employees are proud to work."
  }
];

const moduleModules = [
  { num: "01", name: "Professional Skills & Employability" },
  { num: "02", name: "Emotional Intelligence" },
  { num: "03", name: "Code of Ethics" },
  { num: "04", name: "Business Ethics in Practice" },
  { num: "05", name: "Grooming & Etiquette" },
  { num: "06", name: "Dining Etiquette" },
  { num: "07", name: "Email Etiquette" },
  { num: "08", name: "Interview Skills" },
  { num: "09", name: "CV & Cover Letter Writing" },
  { num: "10", name: "Negotiation Skills" },
  { num: "11", name: "Portfolio Development" }
];

// ─── INIT ───────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  buildModuleOverview();
  buildJourney();
  buildLectures();
  buildReflections();
  buildGrowth();
  buildSkills();
  buildEvidence();
  buildViva();

  initReveal();
  initTopNavSpy();
  initScrollProgress();
  initCountUp();
  initReadinessBar();
  initNeonCanvas();
  initMobileMenu();
});

// ─── MODULE OVERVIEW ────────────────────────────────
function buildModuleOverview() {
  const grid = document.getElementById("module-cards-grid");
  if (!grid) return;
  grid.style.cssText = "display:grid; grid-template-columns:repeat(2,1fr); gap:10px;";
  moduleModules.forEach(m => {
    const card = document.createElement("div");
    card.style.cssText = `
      background: var(--bg-card);
      border: 1px solid var(--border-muted);
      border-radius: 8px;
      padding: 14px 16px;
      display: flex; align-items: center; gap: 12px;
      transition: var(--transition);
    `;
    card.innerHTML = `
      <span style="font-family:var(--font-mono);font-size:0.65rem;color:var(--emerald);letter-spacing:0.12em;">${m.num}</span>
      <span style="font-size:0.82rem;font-weight:600;color:var(--text-body);">${m.name}</span>
    `;
    card.addEventListener("mouseenter", () => {
      card.style.borderColor = "var(--border-glow)";
      card.style.background = "var(--bg-surface)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.borderColor = "var(--border-muted)";
      card.style.background = "var(--bg-card)";
    });
    grid.appendChild(card);
  });
}

// ─── JOURNEY GRID ───────────────────────────────────
function buildJourney() {
  const grid = document.getElementById("journey-grid");
  lectures.forEach((lec, idx) => {
    const card = document.createElement("div");
    card.className = "jg-card";
    card.style.transitionDelay = `${idx * 40}ms`;
    card.innerHTML = `
      <span class="jg-num">${String(idx + 1).padStart(2, "0")}</span>
      <div>
        <div class="jg-title">${lec.title}</div>
        <div class="jg-lec">${lec.lecturer}</div>
      </div>
    `;
    grid.appendChild(card);
  });

  const cards = grid.querySelectorAll(".jg-card");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("active"); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  cards.forEach(c => obs.observe(c));
}

// ─── LECTURE HIGHLIGHTS ─────────────────────────────
let activeLec = 0;
function buildLectures() {
  const sel = document.getElementById("lec-selector");
  lectures.forEach((lec, idx) => {
    const btn = document.createElement("button");
    btn.className = `lec-btn ${idx === activeLec ? "active" : ""}`;
    btn.innerHTML = `
      <span class="lec-btn-num">LECTURE ${String(idx + 1).padStart(2, "0")}</span>
      <span class="lec-btn-title">${lec.title}</span>
    `;
    btn.addEventListener("click", () => {
      if (activeLec === idx) return;
      document.querySelectorAll(".lec-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeLec = idx;
      const panel = document.getElementById("lec-panel");
      panel.classList.add("fade-out");
      setTimeout(() => { renderLecPanel(idx); panel.classList.remove("fade-out"); }, 280);
    });
    sel.appendChild(btn);
  });
  renderLecPanel(activeLec);
}

function renderLecPanel(idx) {
  const lec = lectures[idx];
  const panel = document.getElementById("lec-panel");
  panel.innerHTML = `
    <p class="lp-num">LECTURE ${String(idx + 1).padStart(2, "0")}</p>
    <h3 class="lp-title">${lec.title}</h3>
    <p class="lp-lec">Lecturer: ${lec.lecturer}</p>
    <div class="lp-grid">
      <div class="lp-block">
        <p class="lp-block-title">Session Overview</p>
        <p>${lec.overview}</p>
      </div>
      <div class="lp-block">
        <p class="lp-block-title">Activities Conducted</p>
        <ul>${lec.activities.map(a => `<li>${a}</li>`).join("")}</ul>
      </div>
      <div class="lp-block">
        <p class="lp-block-title">What I Learned</p>
        <p>${lec.learned}</p>
      </div>
      <div class="lp-block">
        <p class="lp-block-title">Future Application</p>
        <p>${lec.apply}</p>
      </div>
    </div>
  `;
}

// ─── REFLECTIONS ────────────────────────────────────
function buildReflections() {
  const grid = document.getElementById("reflections-grid");
  lectures.forEach((lec, idx) => {
    const card = document.createElement("div");
    card.className = "rfl-card";
    card.style.transitionDelay = `${(idx % 2) * 80}ms`;
    card.innerHTML = `
      <div class="rfl-header" onclick="toggleRfl(this)">
        <div>
          <span class="rfl-num">REFLECTION ${String(idx + 1).padStart(2, "0")}</span>
          <h3 class="rfl-title">${lec.title}</h3>
        </div>
        <span class="rfl-toggle">+</span>
      </div>
      <div class="rfl-body">
        <div class="rfl-body-inner">
          <p class="rfl-sec">Overview</p>
          <p>${lec.overview}</p>
          <p class="rfl-sec">Activities</p>
          <ul>${lec.activities.map(a => `<li>${a}</li>`).join("")}</ul>
          <p class="rfl-sec">What I Learned</p>
          <p>${lec.learned}</p>
          <p class="rfl-sec">Future Application</p>
          <p>${lec.apply}</p>
          <p class="rfl-sec">Takeaways</p>
          <div class="rfl-chips">${lec.takeaways.map(t => `<span class="rfl-chip">▸ ${t}</span>`).join("")}</div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  const cards = grid.querySelectorAll(".rfl-card");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("active"); obs.unobserve(e.target); } });
  }, { threshold: 0.07 });
  cards.forEach(c => obs.observe(c));
}

function toggleRfl(hdr) {
  const card = hdr.closest(".rfl-card");
  const isOpen = card.classList.contains("open");
  document.querySelectorAll(".rfl-card").forEach(c => c.classList.remove("open"));
  if (!isOpen) card.classList.add("open");
}

// ─── GROWTH FLOW ────────────────────────────────────
function buildGrowth() {
  const flow = document.getElementById("growth-flow");
  growthItems.forEach((item, idx) => {
    const el = document.createElement("div");
    el.className = "gf-item";
    el.style.transitionDelay = `${idx * 50}ms`;
    el.innerHTML = `
      <span class="gf-icon">${item.icon}</span>
      <div class="gf-info">
        <div class="gf-title">${item.title}</div>
        <div class="gf-skill">${item.skill}</div>
      </div>
    `;
    flow.appendChild(el);
  });

  const items = flow.querySelectorAll(".gf-item");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("active"); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  items.forEach(i => obs.observe(i));
}

// ─── SKILLS BARS ────────────────────────────────────
function buildSkills() {
  const barsContainer = document.getElementById("skills-bars");
  barsContainer.innerHTML = "";

  skills.forEach(sk => {
    const wrap = document.createElement("div");
    wrap.className = "sk-wrap";
    wrap.innerHTML = `
      <div class="sk-hdr">
        <span class="sk-name">${sk.name}</span>
        <span class="sk-val">${sk.value}%</span>
      </div>
      <div class="sk-bg">
        <div class="sk-fill" data-value="${sk.value}"></div>
      </div>
    `;
    barsContainer.appendChild(wrap);
  });

  const fills = barsContainer.querySelectorAll(".sk-fill");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = `${e.target.getAttribute("data-value")}%`;
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  fills.forEach(f => obs.observe(f));

  // Hex-style visual grid in the side card
  const hexGrid = document.getElementById("skills-hexgrid");
  hexGrid.innerHTML = `
    <p class="sr-title">SKILL COVERAGE</p>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:12px;">
      ${skills.map(sk => `
        <div style="
          background:var(--emerald-soft);
          border:1px solid var(--border);
          border-radius:8px;
          padding:12px 8px;
          text-align:center;
          transition:var(--transition);
        " onmouseenter="this.style.borderColor='var(--border-glow)';this.style.boxShadow='0 0 15px rgba(16,217,160,0.2)'"
           onmouseleave="this.style.borderColor='var(--border)';this.style.boxShadow='none'">
          <div style="font-family:var(--font-mono);font-size:1.1rem;font-weight:700;color:var(--emerald);">${sk.value}</div>
          <div style="font-size:0.6rem;color:var(--text-muted);margin-top:4px;text-transform:uppercase;letter-spacing:0.06em;">${sk.name.split(" ")[0]}</div>
        </div>
      `).join("")}
    </div>
  `;
}

// ─── EVIDENCE ───────────────────────────────────────
function buildEvidence() {
  const bento = document.getElementById("evidence-bento");
  evidence.forEach((ev, idx) => {
    const tile = document.createElement("div");
    tile.className = "ev-tile";
    tile.style.transitionDelay = `${idx * 55}ms`;
    tile.innerHTML = `
      <div class="ev-icon-box">${ev.icon}</div>
      <div class="ev-t-name">${ev.title}</div>
      <div class="ev-t-skill">${ev.skill}</div>
      <div class="ev-t-hint">Click to explore ▸</div>
    `;
    tile.addEventListener("click", () => openModal(idx));
    bento.appendChild(tile);
  });

  const tiles = bento.querySelectorAll(".ev-tile");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("active"); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  tiles.forEach(t => obs.observe(t));
}

function openModal(idx) {
  const ev = evidence[idx];
  document.getElementById("modal-icon").innerText = ev.icon;
  document.getElementById("modal-title").innerText = ev.title;
  document.getElementById("modal-skill").innerText = ev.skill;
  document.getElementById("modal-desc").innerText = ev.desc;
  document.getElementById("evidence-modal").classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("evidence-modal").classList.remove("show");
  document.body.style.overflow = "";
}
window.addEventListener("click", e => {
  if (e.target === document.getElementById("evidence-modal")) closeModal();
});

// ─── VIVA ───────────────────────────────────────────
function buildViva() {
  const grid = document.getElementById("viva-grid");
  vivaQA.forEach((item, idx) => {
    const el = document.createElement("div");
    el.className = "vv-item";
    el.style.transitionDelay = `${idx * 40}ms`;
    el.innerHTML = `
      <div class="vv-q">
        <span class="vv-q-txt">${item.q}</span>
        <span class="vv-icon">+</span>
      </div>
      <div class="vv-ans">
        <div class="vv-ans-inner">${item.a}</div>
      </div>
    `;
    el.querySelector(".vv-q").addEventListener("click", () => {
      const open = el.classList.contains("open");
      document.querySelectorAll(".vv-item").forEach(i => i.classList.remove("open"));
      if (!open) el.classList.add("open");
    });
    grid.appendChild(el);
  });

  const items = grid.querySelectorAll(".vv-item");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("active"); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  items.forEach(i => obs.observe(i));
}

// ─── SCROLL REVEAL ──────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("active"); obs.unobserve(e.target); } });
  }, { threshold: 0.07, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => obs.observe(el));
}

// ─── TOP NAV SCROLLSPY ──────────────────────────────
function initTopNavSpy() {
  const sections = ["home", "about", "journey", "lectures", "growth", "evidence", "csr", "conclusion"];
  const links = document.querySelectorAll(".tn-link");

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle("active", l.getAttribute("data-sec") === e.target.id));
      }
    });
  }, { threshold: 0.3, rootMargin: "-80px 0px -80px 0px" });

  sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
}

// ─── READING PROGRESS BAR ───────────────────────────
function initScrollProgress() {
  const fill = document.getElementById("tn-progress");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    fill.style.width = `${Math.min((scrolled / total) * 100, 100)}%`;
  });
}

// ─── COUNT UP ───────────────────────────────────────
function initCountUp() {
  const els = document.querySelectorAll(".count-up");
  const animate = el => {
    const target = parseInt(el.getAttribute("data-target"), 10);
    const dur = 1300;
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1);
      el.innerText = Math.floor(p * (2 - p) * target);
      if (p < 1) requestAnimationFrame(tick);
      else el.innerText = target;
    };
    requestAnimationFrame(tick);
  };
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animate(e.target); obs.unobserve(e.target); } });
  }, { threshold: 0.5 });
  els.forEach(el => obs.observe(el));
}

// ─── READINESS BAR ──────────────────────────────────
function initReadinessBar() {
  const bar = document.getElementById("readiness-progress");
  if (!bar) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        bar.style.width = `${bar.getAttribute("data-value")}%`;
        obs.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });
  obs.observe(bar);
}

// ─── NEON PARTICLE CANVAS ───────────────────────────
function initNeonCanvas() {
  const canvas = document.getElementById("neon-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function Particle() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.r  = Math.random() * 1.5 + 0.5;
    this.alpha = Math.random() * 0.5 + 0.1;
  }

  for (let i = 0; i < 60; i++) particles.push(new Particle());

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(16,217,160,${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(16,217,160,${p.alpha})`;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });

    requestAnimationFrame(draw);
  }
  draw();
}

// ─── MOBILE MENU ────────────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById("tn-hamburger");
  const menu = document.getElementById("tn-mobile-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    btn.innerText = menu.classList.contains("open") ? "✕" : "☰";
  });
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      btn.innerText = "☰";
    });
  });
}
