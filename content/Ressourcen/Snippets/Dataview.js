let pg = dv.current()

let related = await dv.query(
  'list where contains(file.outlinks, this.file.link) and !contains(file.inlinks, this.file.link) and !contains(file.path, "Archiv") sort banner_icon asc'
)

let inlinks = await dv.query(
  "list where contains(file.outlinks, this.file.link)"
)

if (related.value.values.length > 0) {
  dv.list(related.value.values)
} else dv.paragraph("> [!notrelated] Nichts sonst verlinkt hierher!")

/////////////////////////
// Ewiges Housekeeping //
/////////////////////////
