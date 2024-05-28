let pg = dv.current()

// ⚠️ Ergänzen: Jede 💠 muss bei 💠 und 🌵 erklären, wie sie dazu stehen! //

let themen_ohne_erklärung = await dv.query(
  'list where contains(file.path, "Themen/") and contains(file.outlinks, this.file.link) and !contains(this.file.outlinks, file.link) sort banner_icon desc'
)
if (themen_ohne_erklärung.value.values.length > 0) {
  dv.header(3, "> [!warning] 🌵 Themen ohne Erklärung")
  dv.list(themen_ohne_erklärung.value.values)
  dv.paragraph("---")
}

//////////////////
// Definitionen //
//////////////////

// 📝️ Notizen
let eingehende_notizen = await dv.query(
  'list where contains(file.path, "Notizen/") and contains(file.outlinks, this.file.link) sort file.ctime desc'
)
if (eingehende_notizen.value.values.length > 0) {
  dv.header(5, "📝️ Notizen")
  dv.list(eingehende_notizen.value.values)
}

// ♨️ Zitate
let eingehende_zitate = await dv.query(
  'list where contains(file.path, "Zitate/") and contains(file.outlinks, this.file.link) sort file.ctime desc'
)
if (eingehende_zitate.value.values.length > 0) {
  dv.header(5, "♨️ Zitate")
  dv.list(eingehende_zitate.value.values)
}

// 💠 Begriffe
let eingehende_begriffe = await dv.query(
  'list where contains(file.path, "Perspektiven/") and contains(file.outlinks, this.file.link) sort file.ctime desc'
)
if (eingehende_begriffe.value.values.length > 0) {
  dv.header(5, "💠 Begriffe (von Perspektiven ändern)")
  dv.list(eingehende_begriffe.value.values)
}

// 🌵 Themen
let eingehende_themen = await dv.query(
  'list where contains(file.path, "Themen/") and contains(file.outlinks, this.file.link) sort file.ctime desc'
)
if (eingehende_themen.value.values.length > 0) {
  dv.header(5, "🌵 Themen")
  dv.list(eingehende_themen.value.values)
}

// 💭 Gedanken
let eingehende_gedanken = await dv.query(
  'list where contains(file.path, "Gedanken/") and contains(file.outlinks, this.file.link) sort file.ctime desc'
)
if (eingehende_gedanken.value.values.length > 0) {
  dv.header(5, "💭 Gedanken")
  dv.list(eingehende_gedanken.value.values)
}

// 📔 Tagebuch
let eingehende_tagebücher = await dv.query(
  'list where contains(file.path, "Tagebuch/") and contains(file.outlinks, this.file.link) sort file.ctime desc'
)
if (eingehende_tagebücher.value.values.length > 0) {
  dv.header(5, "📔 Tagebuch")
  dv.list(eingehende_tagebücher.value.values)
}

// ⛓️ Referenzen
let eingehende_referenzen = await dv.query(
  'list where contains(file.path, "Referenzen/") and !contains(file.path, "Referenzen/Zitate/") and contains(file.outlinks, this.file.link) sort file.ctime desc'
)
if (eingehende_referenzen.value.values.length > 0) {
  dv.header(5, "⛓️ Referenzen")
  dv.list(eingehende_referenzen.value.values)
}

// 🕸️ Sonstige
let eingehende_sonstieg = await dv.query(
  'list where !contains(Typ, "📝️") and !contains(Typ, "💠") and !contains(Typ, "🌵") and !contains(Typ, "💭") and !contains(Typ, "📝️") and 📔 !contains(Typ, "⛓️") and contains(file.outlinks, this.file.link) sort banner_icon desc'
)
