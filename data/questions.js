// data/questions.js
// Each choice has a weights object that increments scores across multiple view keys.
// You can tune weights later; this set is designed to be “enough questions to be confident”.

window.QUESTIONS = [
  {
    id: "q1",
    tag: "Hermeneutics",
    title: "How should apocalyptic imagery function?",
    prompt: "When Revelation uses cosmic signs, beasts, dragons, etc., what is the default interpretive posture?",
    choices: [
      { id: "a", title: "Primarily symbolic with real referents", desc: "Symbols point to historical/spiritual realities; not wooden literalism.", weights: { idealist: 2, amill: 2, postmill: 1, preterist_partial: 1 } },
      { id: "b", title: "Mostly literal unless clearly symbolic", desc: "Try to read judgments/events as concrete predictions.", weights: { futurist_classic: 2, premill_historic: 2, premill_dispensational: 2 } },
      { id: "c", title: "Symbolic and mostly about first-century events", desc: "Imagery codes for Jerusalem/Rome-era fulfillment.", weights: { preterist_partial: 2, preterist_full: 2 } }
    ]
  },
  {
    id: "q2",
    tag: "Timing",
    title: "What does 'soon / near' primarily indicate in Revelation?",
    prompt: "Rev 1:1, 1:3, 22:6, 22:10—what do these time indicators mean?",
    choices: [
      { id: "a", title: "Primarily first-century nearness", desc: "Most key referents begin/occur in the early church era.", weights: { preterist_partial: 3, preterist_full: 3 } },
      { id: "b", title: "Rapidity once the end-sequence begins", desc: "Not about start-date; about swift execution when it starts.", weights: { futurist_classic: 3, premill_historic: 2, premill_dispensational: 2 } },
      { id: "c", title: "Both: immediate relevance + ultimate horizon", desc: "Near-term referents, plus typological/ultimate fulfillment.", weights: { preterist_partial: 2, amill: 2, postmill: 2, idealist: 2 } }
    ]
  },
  {
    id: "q3",
    tag: "Structure",
    title: "Seals, trumpets, bowls: how do they relate?",
    prompt: "Do these judgment cycles repeat the same period or progress forward?",
    choices: [
      { id: "a", title: "Mostly recapitulation (spiral)", desc: "Repeated visions of the same age with intensification.", weights: { idealist: 3, amill: 3, postmill: 2, preterist_partial: 2 } },
      { id: "b", title: "Mostly linear progression", desc: "Seals → trumpets → bowls are sequential stages.", weights: { futurist_classic: 3, premill_historic: 3, premill_dispensational: 3 } },
      { id: "c", title: "Mostly first-century cycles", desc: "Judgments primarily describe Jerusalem/Rome crisis.", weights: { preterist_partial: 2, preterist_full: 3 } }
    ]
  },
  {
    id: "q4",
    tag: "70 AD",
    title: "How central is 70 AD (Jerusalem/Temple destruction) to interpreting Revelation?",
    prompt: "Does 70 AD function as major fulfillment, background pattern, or marginal detail?",
    choices: [
      { id: "a", title: "Central fulfillment lens", desc: "A major anchor for Revelation’s judgment imagery.", weights: { preterist_partial: 3, preterist_full: 3 } },
      { id: "b", title: "Important but not dominant", desc: "Meaningful backdrop, but not the main target.", weights: { amill: 2, postmill: 2, idealist: 2 } },
      { id: "c", title: "Not central; mostly future", desc: "Revelation primarily addresses end-of-age events.", weights: { futurist_classic: 3, premill_historic: 2, premill_dispensational: 2 } }
    ]
  },
  {
    id: "q5",
    tag: "Babylon",
    title: "Who/what is 'Babylon' (Rev 17–18)?",
    prompt: "What best captures Babylon’s identity?",
    choices: [
      { id: "a", title: "Rome / imperial city-system", desc: "A first-century empire center and its economic-religious order.", weights: { preterist_partial: 2, preterist_full: 2 } },
      { id: "b", title: "Jerusalem / apostate covenant city", desc: "Covenant unfaithfulness culminating in judgment.", weights: { preterist_partial: 3, preterist_full: 3 } },
      { id: "c", title: "A trans-historical world system", desc: "Any idolatrous empire order; culminates finally.", weights: { idealist: 3, amill: 2, postmill: 2 } },
      { id: "d", title: "A future final global system", desc: "End-times political/economic/religious complex.", weights: { futurist_classic: 3, premill_historic: 2, premill_dispensational: 2 } }
    ]
  },
  {
    id: "q6",
    tag: "Beast",
    title: "Who/what is the Beast (Rev 13)?",
    prompt: "What best fits the Beast’s identity in your view?",
    choices: [
      { id: "a", title: "Nero / first-century persecutor", desc: "Personal referent in the early Roman context.", weights: { preterist_partial: 2, preterist_full: 3 } },
      { id: "b", title: "Rome / imperial power", desc: "An empire structure opposing Christ.", weights: { preterist_partial: 2, idealist: 2 } },
      { id: "c", title: "Archetype of beastly empires + final climax", desc: "Recurring pattern culminating in a final form.", weights: { amill: 2, postmill: 2, preterist_partial: 2, futurist_classic: 1, premill_historic: 1 } },
      { id: "d", title: "Future personal Antichrist", desc: "A final world ruler in the end crisis.", weights: { futurist_classic: 3, premill_historic: 3, premill_dispensational: 3 } }
    ]
  },
  {
    id: "q7",
    tag: "Mark (666)",
    title: "How should the 'mark of the Beast' be understood?",
    prompt: "Is it primarily symbolic loyalty, a first-century emperor cult marker, or a future economic control system?",
    choices: [
      { id: "a", title: "Symbolic allegiance marker", desc: "A sign of worship/loyalty to beastly systems.", weights: { idealist: 3, amill: 2, postmill: 2 } },
      { id: "b", title: "First-century emperor worship / commerce pressure", desc: "Social-economic coercion tied to Roman cultic life.", weights: { preterist_partial: 3, preterist_full: 3 } },
      { id: "c", title: "Future end-times economic control", desc: "Concrete mechanism controlling buying/selling.", weights: { futurist_classic: 3, premill_historic: 2, premill_dispensational: 3 } },
      { id: "d", title: "Both: symbolic loyalty with concrete expressions", desc: "A recurring reality that can be literalized in a final crisis.", weights: { amill: 2, postmill: 2, futurist_classic: 1, preterist_partial: 1 } }
    ]
  },
  {
    id: "q8",
    tag: "Two Witnesses",
    title: "Who are the Two Witnesses (Rev 11)?",
    prompt: "What best accounts for their symbolism and role?",
    choices: [
      { id: "a", title: "Symbolic of the witnessing church", desc: "The church’s prophetic testimony in the world.", weights: { idealist: 3, amill: 3, postmill: 2 } },
      { id: "b", title: "Two literal end-times prophets", desc: "Specific individuals with miraculous ministry.", weights: { futurist_classic: 3, premill_historic: 2, premill_dispensational: 2 } },
      { id: "c", title: "First-century leadership / apostolic witness", desc: "A near-term referent tied to early church/Jerusalem crisis.", weights: { preterist_partial: 2, preterist_full: 3 } },
      { id: "d", title: "Moses & Elijah typology realized in final form", desc: "Symbolic typology that may culminate in specific agents.", weights: { futurist_classic: 1, premill_historic: 1, amill: 1, idealist: 1 } }
    ]
  },
  {
    id: "q9",
    tag: "144,000",
    title: "Who are the 144,000 (Rev 7, 14)?",
    prompt: "How literal should the number and tribal listing be read?",
    choices: [
      { id: "a", title: "Symbolic number for the whole people of God", desc: "12×12×1000 fullness; church as true Israel.", weights: { amill: 3, idealist: 3, postmill: 2 } },
      { id: "b", title: "Literal ethnic Israel remnant", desc: "A specific Jewish remnant in the end times.", weights: { premill_dispensational: 3, futurist_classic: 2, premill_historic: 1 } },
      { id: "c", title: "First-century Jewish believers / remnant", desc: "A near-term referent around apostolic era.", weights: { preterist_partial: 2, preterist_full: 2 } },
      { id: "d", title: "Both/and: symbolic with particular historical expressions", desc: "Symbol for God’s sealed people with real instantiations.", weights: { preterist_partial: 1, amill: 2, postmill: 2 } }
    ]
  },
  {
    id: "q10",
    tag: "Tribulation",
    title: "What is the 'Great Tribulation' primarily?",
    prompt: "Is it 70 AD, the whole church age, or a future short end-time crisis?",
    choices: [
      { id: "a", title: "Primarily 70 AD / Jewish War", desc: "Climax of old covenant judgment.", weights: { preterist_partial: 3, preterist_full: 3 } },
      { id: "b", title: "Primarily a future short crisis", desc: "A final concentrated tribulation before the return.", weights: { futurist_classic: 3, premill_historic: 2, premill_dispensational: 3 } },
      { id: "c", title: "The church age with intensification near the end", desc: "Ongoing tribulation; final ‘little season’ intensifies.", weights: { amill: 3, idealist: 3, postmill: 2, preterist_partial: 1 } }
    ]
  },
  {
    id: "q11",
    tag: "Second Coming",
    title: "Revelation 19 describes…",
    prompt: "What is the best reading of Christ on the white horse (Rev 19)?",
    choices: [
      { id: "a", title: "Future bodily, visible return of Christ", desc: "The climactic second advent ending the age.", weights: { futurist_classic: 3, premill_historic: 3, premill_dispensational: 3, amill: 2, postmill: 2, preterist_partial: 2 } },
      { id: "b", title: "Symbolic covenant judgment in the first century", desc: "Christ ‘comes’ in judgment without bodily appearing.", weights: { preterist_full: 3, preterist_partial: 1 } },
      { id: "c", title: "Symbolic of Christ’s victory across history", desc: "Theological portrait more than a calendar event.", weights: { idealist: 3, amill: 2, postmill: 2 } }
    ]
  },
  {
    id: "q12",
    tag: "Millennium",
    title: "The 'thousand years' in Revelation 20 is…",
    prompt: "Which option best represents your view?",
    choices: [
      { id: "a", title: "The present church age (symbolic)", desc: "Christ reigns now; millennium = now.", weights: { amill: 4, postmill: 2, idealist: 2, preterist_partial: 2 } },
      { id: "b", title: "A future literal earthly reign after Christ returns", desc: "Premillennial millennium.", weights: { premill_historic: 4, premill_dispensational: 4, futurist_classic: 2 } },
      { id: "c", title: "A future long era of gospel victory before Christ returns", desc: "Postmillennial millennium.", weights: { postmill: 4, amill: 1 } }
    ]
  },
  {
    id: "q13",
    tag: "Binding Satan",
    title: "Satan is 'bound' (Rev 20:1–3) meaning…",
    prompt: "Is this binding already true, or future?",
    choices: [
      { id: "a", title: "Already, in a specific sense", desc: "Restrained from deceiving nations to stop gospel advance.", weights: { amill: 3, postmill: 3, idealist: 2, preterist_partial: 1 } },
      { id: "b", title: "Not yet; future total restriction", desc: "Binding begins at Christ’s future return.", weights: { premill_historic: 2, premill_dispensational: 3, futurist_classic: 2 } },
      { id: "c", title: "Primarily first-century restriction/judgment", desc: "Connected to old covenant transition era.", weights: { preterist_partial: 2, preterist_full: 2 } }
    ]
  },
  {
    id: "q14",
    tag: "Release Satan",
    title: "Satan’s release (Rev 20:7–10) is…",
    prompt: "What best fits the text and NT parallels (2 Thess 2, etc.)?",
    choices: [
      { id: "a", title: "A brief final end-of-age rebellion", desc: "Short, intense ‘little season’ just before Christ returns.", weights: { amill: 3, postmill: 3, futurist_classic: 1, preterist_partial: 1 } },
      { id: "b", title: "A future post-return rebellion after a literal millennium", desc: "Rebellion after Christ’s millennial reign.", weights: { premill_historic: 3, premill_dispensational: 3 } },
      { id: "c", title: "Already fulfilled in early church history", desc: "Primarily first-century/early imperial context.", weights: { preterist_full: 3, preterist_partial: 1 } },
      { id: "d", title: "Symbolic of recurring outbreaks of evil", desc: "Not one event, but repeated patterns.", weights: { idealist: 3, amill: 1 } }
    ]
  },
  {
    id: "q15",
    tag: "Gog/Magog",
    title: "Gog and Magog (Rev 20:8) are…",
    prompt: "How do you connect Ezekiel 38–39 and Revelation 20?",
    choices: [
      { id: "a", title: "Symbolic labels for the final global enemies", desc: "Archetypal names for end-of-age rebellion.", weights: { amill: 3, postmill: 3, idealist: 3, preterist_partial: 2 } },
      { id: "b", title: "Literal nations in a future war", desc: "Identifiable geopolitical entities.", weights: { premill_dispensational: 3, futurist_classic: 2, premill_historic: 2 } },
      { id: "c", title: "Already fulfilled historically", desc: "Primarily past fulfillment (variously identified).", weights: { preterist_full: 2, preterist_partial: 1 } }
    ]
  },
  {
    id: "q16",
    tag: "Man of Lawlessness",
    title: "The 'man of lawlessness' (2 Thess 2) is…",
    prompt: "How do you best account for the pattern and finality in Paul’s description?",
    choices: [
      { id: "a", title: "A final individual Antichrist near the end", desc: "Culminating figure destroyed by Christ’s coming.", weights: { futurist_classic: 3, premill_historic: 2, premill_dispensational: 2, amill: 1, postmill: 1 } },
      { id: "b", title: "A first-century referent (Nero / Rome era)", desc: "Near-term identification dominates.", weights: { preterist_full: 3, preterist_partial: 1 } },
      { id: "c", title: "A principle with many types + final climax", desc: "Recurring antichrists culminating at the end.", weights: { amill: 3, postmill: 3, preterist_partial: 2, idealist: 2 } }
    ]
  },
  {
    id: "q17",
    tag: "Temple",
    title: "‘Temple of God’ in 2 Thess 2 most likely means…",
    prompt: "How do you read Paul’s temple language?",
    choices: [
      { id: "a", title: "A literal rebuilt temple in Jerusalem", desc: "End-times scenario with physical temple.", weights: { premill_dispensational: 3, futurist_classic: 2 } },
      { id: "b", title: "The church (God’s people as temple)", desc: "Infiltration/exaltation within visible church.", weights: { amill: 3, postmill: 3, idealist: 2 } },
      { id: "c", title: "The first-century Jerusalem temple", desc: "Near-term historical referent.", weights: { preterist_partial: 2, preterist_full: 3 } }
    ]
  },
  {
    id: "q18",
    tag: "Resurrection",
    title: "Revelation 20’s resurrection language implies…",
    prompt: "How do you connect Rev 20 and 1 Cor 15?",
    choices: [
      { id: "a", title: "One future bodily resurrection (general)", desc: "A single climactic resurrection event.", weights: { amill: 3, postmill: 3, idealist: 2, preterist_partial: 2 } },
      { id: "b", title: "Two-stage resurrection separated by millennium", desc: "Resurrection before and after a future 1000 years.", weights: { premill_historic: 3, premill_dispensational: 3 } },
      { id: "c", title: "Mostly spiritualized / realized", desc: "Resurrection primarily spiritual or already fulfilled.", weights: { preterist_full: 3 } }
    ]
  },
  {
    id: "q19",
    tag: "New Creation",
    title: "New heavens/new earth (Rev 21–22) are…",
    prompt: "How do you view the eternal state passages?",
    choices: [
      { id: "a", title: "Future, literal consummation", desc: "Death/cursing ended; final state still ahead.", weights: { amill: 2, postmill: 2, futurist_classic: 2, premill_historic: 2, premill_dispensational: 2, preterist_partial: 2, idealist: 1 } },
      { id: "b", title: "Already realized spiritually in the church", desc: "Primarily present reality.", weights: { preterist_full: 3 } },
      { id: "c", title: "Both inaugurated now, consummated later", desc: "Already/not-yet: real now, complete later.", weights: { amill: 2, postmill: 2, idealist: 2, preterist_partial: 1 } }
    ]
  },
  {
    id: "q20",
    tag: "Israel/Church",
    title: "How do you relate Israel and the Church in prophecy?",
    prompt: "Does prophecy maintain distinct end-times programs or emphasize one covenant people in Christ?",
    choices: [
      { id: "a", title: "Strong Israel/Church distinction", desc: "Distinct prophetic tracks; Israel central in end times.", weights: { premill_dispensational: 4, futurist_classic: 1 } },
      { id: "b", title: "One people of God in Christ", desc: "Church as grafted-in Israel; continuity in covenant.", weights: { amill: 3, postmill: 3, preterist_partial: 2, idealist: 2 } },
      { id: "c", title: "Partial continuity with special future for ethnic Israel", desc: "Continuity plus some distinct future role.", weights: { premill_historic: 2, futurist_classic: 2, postmill: 1, amill: 1 } }
    ]
  },
  {
    id: "q21",
    tag: "Rapture/Trib",
    title: "Do you affirm a distinct pre-trib rapture?",
    prompt: "Is there a separate coming for the church before tribulation?",
    choices: [
      { id: "a", title: "Yes, pre-trib rapture", desc: "Church removed before tribulation.", weights: { premill_dispensational: 4 } },
      { id: "b", title: "No; one public return of Christ", desc: "Church endures; Christ returns once.", weights: { amill: 3, postmill: 3, premill_historic: 2, preterist_partial: 2, idealist: 2 } },
      { id: "c", title: "Unsure / not a key emphasis", desc: "Not central to my reading.", weights: { futurist_classic: 1, premill_historic: 1, amill: 1, postmill: 1, idealist: 1, preterist_partial: 1 } }
    ]
  },
  {
    id: "q22",
    tag: "Kingdom",
    title: "How do you describe the kingdom’s trajectory in history?",
    prompt: "Will gospel victory grow broadly in history before the end?",
    choices: [
      { id: "a", title: "Yes, broad cultural discipling over time", desc: "Gospel leavens the nations; long-term victory.", weights: { postmill: 4 } },
      { id: "b", title: "Mixed: wheat/tares until the end", desc: "No guaranteed golden age; conflict continues.", weights: { amill: 3, idealist: 2 } },
      { id: "c", title: "Mostly deteriorates until end crisis", desc: "Increasing apostasy leading to tribulation.", weights: { futurist_classic: 2, premill_historic: 2, premill_dispensational: 2 } }
    ]
  },
  {
    id: "q23",
    tag: "Judgment Scope",
    title: "How global are Revelation’s judgments?",
    prompt: "Are they mostly local (Judea/Rome), broadly symbolic, or future global?",
    choices: [
