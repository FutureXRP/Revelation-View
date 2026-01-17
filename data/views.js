// data/views.js
// Keys here are what the scoring engine ranks.

window.VIEWS = [
  {
    key: "preterist_full",
    title: "Full Preterism",
    family: "Timing: Preterist",
    note: "Many churches consider this outside historic orthodoxy because it typically redefines the future bodily return and resurrection.",
    summary: `
Full preterism reads most (or all) end-time prophecies as fulfilled in the first century, often centering 70 AD as the decisive climax.
Revelation’s “coming” language is usually read as covenantal judgment rather than a future visible advent. The resurrection and final
judgment are often spiritualized or reinterpreted. Because this can conflict with the historic creeds’ expectation of a future bodily return
and resurrection, many Christian traditions regard full preterism as theologically problematic.
    `.trim()
  },
  {
    key: "preterist_partial",
    title: "Partial Preterism",
    family: "Timing: Preterist-leaning",
    note: "Keeps the future bodily return, resurrection, and final judgment; places major judgment material (esp. Matt 24 / Rev 1–18) with strong first-century referents.",
    summary: `
Partial preterism argues that many “near/soon” prophecies (especially Jerusalem-judgment texts) were fulfilled in the first century,
often culminating in 70 AD as a covenantal-historical watershed. At the same time, it preserves a future, bodily return of Christ, a future
resurrection, and a final judgment. Revelation can be read as a layered apocalyptic book: first-century realities provide the immediate referent,
while the patterns can also typologically recur until the final consummation.
    `.trim()
  },
  {
    key: "futurist_classic",
    title: "Classic Futurism",
    family: "Timing: Futurist",
    note: "Reads most of Revelation 4–22 as still future; emphasizes a future climactic tribulation and the visible return of Christ.",
    summary: `
Classic futurism reads Revelation 4–22 primarily as describing end-of-age events still future to us: a climactic period of tribulation,
intensifying judgments, the emergence of a final Antichrist/Beast figure, and the visible return of Christ followed by final judgment and new creation.
“Soon/near” is commonly taken as certainty and rapidity of fulfillment once the end-sequence begins rather than immediate first-century timing.
    `.trim()
  },
  {
    key: "idealist",
    title: "Idealism (Symbolic / Theological)",
    family: "Timing: Trans-temporal",
    note: "Reads Revelation as a symbolic portrayal of recurring spiritual realities rather than a strict timeline.",
    summary: `
Idealism treats Revelation as a theologically rich symbolic drama of Christ’s victory over evil across the entire church age.
Its images (beast, Babylon, tribulation) represent recurring patterns of empire, idolatry, persecution, and endurance.
The “timing” is less about mapping events to a calendar and more about forming faithful disciples under pressure.
Idealists still typically affirm a future bodily return, resurrection, and final judgment, but do not see Revelation as a detailed end-times schedule.
    `.trim()
  },
  {
    key: "premill_dispensational",
    title: "Dispensational Premillennialism",
    family: "Millennium: Premill (Disp.)",
    note: "Future literal millennium; often sharp Israel/Church distinction; commonly a future rebuilt temple and a final 7-year tribulation framework.",
    summary: `
Dispensational premillennialism emphasizes distinct “dispensations” in God’s redemptive program and often draws a sharp Israel/Church distinction.
Revelation 4–22 is largely future, including a climactic tribulation, a personal Antichrist, and a future literal thousand-year reign of Christ on earth.
The temple language is frequently taken as a future rebuilt temple. Israel’s national restoration is often central to the end-times program.
    `.trim()
  },
  {
    key: "premill_historic",
    title: "Historic Premillennialism",
    family: "Millennium: Premill (Historic)",
    note: "Future millennium without the strong dispensational Israel/Church separation; often post-trib return.",
    summary: `
Historic premillennialism affirms a future, earthly reign of Christ (millennium) after Christ’s return, but typically avoids the sharp Israel/Church
separation of dispensationalism. Many historic premillennialists place the church within the tribulation and see Christ returning after it.
Interpretations vary on how literal temple imagery should be, but the millennium is commonly taken as future and more concrete than symbolic views.
    `.trim()
  },
  {
    key: "amill",
    title: "Amillennialism",
    family: "Millennium: Amill",
    note: "Millennium = the present reign of Christ (church age); final crisis, then one return and one general resurrection.",
    summary: `
Amillennialism teaches that Christ reigns now from heaven; the “thousand years” is symbolic of the present church age.
Satan is “bound” in a specific sense (often: restrained from preventing the gospel’s global advance), yet still active in other ways.
Near the end, there is a final intensification (Satan’s “little season”), followed by Christ’s single bodily return, one general resurrection,
final judgment, and the new heavens and new earth. Revelation is commonly read as layered/recapitulatory rather than a strict chronological chart.
    `.trim()
  },
  {
    key: "postmill",
    title: "Postmillennialism",
    family: "Millennium: Postmill",
    note: "Gospel victory grows through history; a long era of Christianization before a brief final rebellion and Christ’s return.",
    summary: `
Postmillennialism teaches that Christ reigns now and that the gospel will progressively transform the nations over history, producing a long era
of widespread righteousness and Christian influence (the “millennium,” often symbolic in length). Near the end, Satan is released briefly for a final,
doomed rebellion, after which Christ returns bodily, raises the dead, judges all, and inaugurates the eternal state.
Postmill shares much with amill but differs on the degree of historical gospel “success” before the end.
    `.trim()
  }
];
