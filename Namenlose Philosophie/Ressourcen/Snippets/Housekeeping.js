let pg = dv.current()

/////////////////////////
// Ewiges Housekeeping //
/////////////////////////

// 📝️ Notizen ohne 💠 Begriffe oder 🌵 Themen - muss noch erweitert werden!

// 🌵 Themen ohne 💠 Begriffe

// 💭 Gedanken ohne 💠 Begriffe oder 🌵 Themen

// 🕋 Thematik ohne 💠 Begriff oder 🌵 Thema

// 🔨 Projektnotizen ohne 📕 Projekt

// Veraltete 🌀?

// Einzuordnen (Notizen im Einzuordnen-Ordner)

// 🧕 Waisen
// list from !"Ressourcen/Templates" and !"Ressourcen/Snippets" and !"Ressourcen/Utility" and !"Ressourcen/Temp" where length(file.inlinks) = 0 and length(file.outlinks) = 0 and file.name != "Workbench"

// Noch zu erstellende Notizen
// list FLATTEN file.outlinks as out WHERE !(out.file) AND !contains(meta(out).path, "/") AND !contains(meta(out).path, "%") AND !contains(meta(out).path, "3-") GROUP by out SORT out ASC

// 🕸️ Temporäre Notizen

// ⛲ Pools ...

// 📡 Gedankensuchen ...

// --- Sonstige (einzuordnen)

// Kein Banner

// Kein Icon

// Was nicht im Glossar verlinkt ist? (Nachrangig/im Glossar?)

// Dateien im Papierkorb, die noch verlinkt sind (file.inlinks != 0).

// 🟪 Zu ziehende Notizen (nachrangig?)

///////////////////////////////
// Nachrangiges Housekeeping //
///////////////////////////////

// Übersicht mit Tags, Typen, Icons, ... Je nach dem, was ich nutze
/* Tags:
table without ID (tag + "(" + length(rows.file.link) + ")") as Tags, (rows.file.link) as Notizen
from !"Ressourcen/Templates"
where file.tags and !contains(file.tags, "#⚫")
flatten file.tags AS tag
group by tag
sort length(rows.file.link) asc
*/
/* Banner-Icon:
table without ID (banner_icon + "(" + length(rows.file.link) + ")") as Icons, (rows.file.link) as Notizen
from !"Ressourcen/Templates"
where banner_icon
group by banner_icon
sort length(rows.file.link) asc
*/

// 👤 Personen ohne Geburtsdatum
