---
banner: "![[banner_utility.jpg]]"
banner_icon: ⚙️
---

# DataviewJS-Referenz

## Fremdwörter
- **Flatten:** Nimmt Hierarchien raus. Z.B. alle Icons aus allen Ordnern in einer Liste, egal, wie verschachtelt die Ordner waren.
- **Map:** Weist (u.a.?) in Tabellen den Namen Werte zu. Gar nicht kompliziert!
	- Z.B.: `dv.table(["Name", "Tags"], dv.pages().map(p => p.file.link, p.file.etags)]
		- Damit wird dann in der Spalte "Name" der Link und in der Spalte "Tags" die Tags angezeigt.

## Code

#### Immer
`let pg = dv.current(); // set pg to be the current page, for brevity`


#### Metadata
Z.B. `pg.Icon`

```dataviewjs
let pg = dv.current()
dv.header(6, 'Other ' + pg.Typ + ' Courses Taken:')
```

---

%%
```dataviewjs
let pg = dv.current()
let pages = dv.pages()
dv.table(["Name", "Tags", "Icon", "Typ"], pages.map(p => [p.file.link, p.file.etags, p.file.icon, p.file.typ]))
```
%%

```dataviewjs
for (let a of dv.pages('"Sammlung/Personen 👤"').groupBy(p => p.Typ)) {
    dv.header(5, a.key);
    dv.table(["Name", "Typ", "Icon"],
        a.rows	
          
            .map(k => [k.file.link, k.Typ, 
			k.Icon]
))
}
```

---

`file.outlinks.map(t=> dv.page(t.path))`

```dataviewjs
dv.list(dv.pages('"Sammlung/Personen 👤"').file.outlinks.map(t=> dv.page(t.path)).file.path)
```

```dataviewjs
let pg = dv.current()
let pages = dv.pages()
	.filter(
		b => b.Typ && b.Typ == "📝️"
		)
	.filter(
		b => b.Icon
		)

let pages2 = pages.file.outlinks

dv.list(pages.file.outlinks.map(t=> dv.page(t.path)).file.path)
```

---

## Icon mit Typ im Subscript
```dataviewjs
for (let type of dv.pages('"Sammlung/Themen 🧩"').filter(t => t.Icon)
			.groupBy(p => p.Typ)) {
	dv.table(["Name", "Typ"], 
		type.rows
			.map(k => [k.file.link, "$" + k.Icon + "_" + k.Typ + "$"]
))
}
```
Erklärung: durchs .map wird in der Typ-Spalte Latex-Code erzeugt, der quasi "Typ_Icon" schreibt.

---

### Basics
- Dataview arbeitet mit DataArrays. Das sind *Proxy-Versionen* **normaler** JavaScript-Arrays, sodass man damit alles machen kann, was man auch mit normalen Arrays machen kann - nur noch mehr!
	- Man kann die Inhalte eines DataArrays also mit array\[0], array\[1] etc. anwählen.
	- Man kann mit `for` und `for ... of` über DataArrays iterieren!
		- Das kann mir helfen, Notizen zu filtern und neue DataArrays anzulegen!
	- DataArrays sind das, was von DataView-Befehlen ausgegeben wird.
		- Das müssen *nicht nur* Pages sein, es können auch Seiten-Namen sein!
			- `dv.pages().file.name` gibt z.B. ein *DataArray* mit den *Namen* aller Files im Vault aus.
- DataView kann Metadata anwählen, sodass `dv.pages("#books").genres` das Element "genres" anwählen würde.
- 

### dv.view & dv.execute
`dv.view("Ressourcen/Snippets/Notizen")`
`dv.execute('list from "Sammlung"')`
Nachteil: Keine Reihenfolge, keine Scripts (so wie, dass Trennstriche nur angezeigt werden, wenn relevant ...)


### file.inlinks und file.outlinks
**Alle Notizen, zu denen diese Notiz verlinkt:**
```
dv.list(dv.pages('outgoing([[]]) or [[]]').file.link)
```

**Alle Notizen, die zu dieser Notiz verlinken:**
```
dv.list(dv.pages('([[]])').file.link)
```

**Alle Notizen, die zu einer Notiz verlinken:**
```
dv.list(dv.pages('([[Notiz]])').file.link)
```

**Alle Notizen, zu denen eine Notiz nicht verlinkt:**
```
dv.list(dv.pages('!outgoing([[Notiz]])').file.link)
```

**Alle Notizen, die zu dieser Notiz verlinken und zu denen diese Notiz nicht verlinkt**
```
dv.list(dv.pages('!outgoing([[]]) and [[]]').file.link)
```

Siehe: https://blacksmithgu.github.io/obsidian-dataview/reference/sources/

### dv.pages(source)
- Sources: path, tags

### dv.pagePaths(source)
```
dv.list(dv.pagePaths('([[]])'))
```
**Wie dv.pages(), gibt aber ein DataArray mit nur den entsprechenden Pfaden aus.**

### Rendering
```
dv.el("u", "This is some text");
```

```
dv.paragraph("This is some text");
```

### Indexing and Swizzling


### sort


### groupBy


### distinct


### where


### Fortgeschrittene Beispiele

**Wenn entsprechende Notizen vorhanden, dann füge Überschrift/Linie ein**
```
let pages = dv.pages("([[]])")

if( pages.length > 0 ) {
	dv.paragraph("---")
}

dv.list(pages.file.link)
```
*Erklärung: pages ist ein Data-**Array** und hat, wie ein normales Array, auch eine **Länge.**

#🟥

### dv.query
> [!warning] Die beste Art für mich, mit JavaScript zu arbeiten!
```dvjs
let test = await dv.query(
	`list from "Sammlung"`
)

if (test.successful)
{
	dv.paragraph("---")
	dv.header(2, "Verwandt")
	dv.list(test.value.values)
}
```

---

### Notiz-Archivieren aus AP1

```
if (pg.file.path.includes("Sammlung/Notizen")) {
  dv.paragraph(
    "> [!pgreen|center] Aktiviert | [Archivieren](obsidian://advanced-uri?vault=Refugium%20AP&commandid=cmdr%253Amacro-0)"
  )
}
  
if (pg.file.path.includes("Sammlung/Archiv/Archivierte Notizen 📝️")) {
  dv.paragraph(
    "> [!pred|center] Archiviert | [Aktivieren](obsidian://advanced-uri?vault=Refugium%20AP&commandid=cmdr%253Amacro-1)"
  )
}
```

---

```
let pg = dv.current()

  

/////////////////////

//   Notiztypen    //

// 📝️, 🎴, 🔨, 🕯️ //

/////////////////////

  

if (

  pg.Typ == "📝️" ||

  pg.Typ == "🎴" ||

  pg.Typ == "🔨" ||

  pg.Typ == "🕯️" ||

  pg.Typ == "🍂"

) {

  let artikelZuNotiz = await dv.query(

    'list where contains(file.outlinks, this.file.link) and (contains(Typ, "🍁") or (contains(Typ, "🍂") and contains(file.tags, "#🍁")))'

  )

  let notizTypen = await dv.query(

    'list from "Sammlung" and !"Sammlung/Referenzen" where contains(file.outlinks, this.file.link) and !contains(Typ, "🍁") and !(contains(Typ, "🍂") and contains(file.tags, "#🍁")) and file.name != this.file.name'

  )

  let zugehörigeReferenzen = await dv.query(

    'list where (Typ = "📋" or Typ = "📔" or Typ = "📎") and contains(file.outlinks, this.file.link) sort Typ, Icon, file.name'

  )

  let zugehörigeMOC = await dv.query(

    'list where Typ = "🗺️" and contains(file.outlinks, this.file.link) and !contains(this.file.outlinks, file.link)'

  )

  if (

    notizTypen.value.values.length > 0 ||

    artikelZuNotiz.value.values.length > 0 ||

    zugehörigeReferenzen.value.values.length > 0 ||

    zugehörigeMOC.value.values.length > 0

  ) {

    dv.paragraph("---")

  }

  if (artikelZuNotiz.value.values.length > 0) {

    dv.header(3, "Artikel")

    dv.list(artikelZuNotiz.value.values)

  }

  if (zugehörigeReferenzen.value.values.length > 0) {

    dv.header(3, "Referenzen")

    dv.list(zugehörigeReferenzen.value.values)

  }

  if (zugehörigeMOC.value.values.length > 0) {

    dv.header(3, "MOCs")

    dv.list(zugehörigeMOC.value.values)

  }

  if (notizTypen.value.values.length > 0) {

    dv.header(3, "Sonstige")

    dv.list(notizTypen.value.values)

  }

}

  

///////////////////////////////

// Begriffe 🎍 und Ideen 🧩 //

///////////////////////////////

  

if (pg.Typ == "🎍" || pg.Typ == "🧩") {

  let artikelZuNotiz = await dv.query(

    'list where contains(file.outlinks, this.file.link) and (contains(Typ, "🍁") or (contains(Typ, "🍂") and contains(file.tags, "#🍁")))'

  )

  let sonstige = await dv.query(

    'list from "Sammlung" and !"Sammlung/Referenzen" where contains(file.outlinks, this.file.link) and !contains(Typ, "🍁") and !(contains(Typ, "🍂") and contains(file.tags, "#🍁")) and file.name != this.file.name and Typ != "📝️"'

  )

  let zugehörigeReferenzen = await dv.query(

    'list where (Typ = "📋" or Typ = "📔" or Typ = "📎") and contains(file.outlinks, this.file.link) sort Typ, Icon, file.name'

  )

  let verwandteNotizen = await dv.query(

    'list from "Sammlung" where Typ = "📝️" and Typ != "◼️" and contains(file.outlinks, this.file.link)'

  )

  let verwandteListen = await dv.query(

    'list from "Sammlung" where Typ = "◼️" and contains(file.outlinks, this.file.link)'

  )

  if (

    sonstige.value.values.length > 0 ||

    artikelZuNotiz.value.values.length > 0 ||

    zugehörigeReferenzen.value.values.length > 0 ||

    verwandteNotizen.value.values.length > 0 ||

    verwandteListen.value.values.length > 0

  ) {

    dv.paragraph("---")

  }

  if (artikelZuNotiz.value.values.length > 0) {

    dv.header(3, "Artikel")

    dv.list(artikelZuNotiz.value.values)

  }

  if (verwandteNotizen.value.values.length > 0) {

    dv.header(3, "Einzelne Notizen")

    dv.list(verwandteNotizen.value.values)

  }

  if (verwandteListen.value.values.length > 0) {

    dv.header(3, "Listen")

    dv.list(verwandteListen.value.values)

  }

  if (zugehörigeReferenzen.value.values.length > 0) {

    dv.header(3, "Referenzen")

    dv.list(zugehörigeReferenzen.value.values)

  }

  if (sonstige.value.values.length > 0) {

    dv.header(3, "Sonstige")

    dv.list(sonstige.value.values)

  }

}

  

////////////////////

// Kategorien 💠 //

///////////////////

  

if (pg.Typ == "💠") {

  let zugehörigeArtikel = await dv.query(

    'list from "Sammlung" where (Typ = "🍁" or (Typ = "🍂" and contains(file.tags, "🍁"))) and contains(file.outlinks, this.file.link)'

  )

  let verwandteThemen = await dv.query(

    'list from "Sammlung" where Typ = "🎍" and contains(file.outlinks, this.file.link)'

  )

  let verwandteIdeen = await dv.query(

    'list file.inlinks from "Sammlung" where Typ = "🧩" and contains(file.outlinks, this.file.link)'

  )

  let kategorieUnterpunkte = await dv.query(

    'list file.inlinks from !"Ressourcen" where contains(Typ, "💠") and contains(this.file.inlinks, file.link) and !contains(file.inlinks, this.file.link) and file.name != this.file.name'

  )

  let einzelneGedanken = await dv.query(

    'list from "Sammlung" where Typ = "📝️" and contains(file.outlinks, this.file.link) and !contains(file.outlinks.file.folder, "Sammlung/Philosophie/Begriffe 🎍") and !contains(file.outlinks.file.folder, "Sammlung/Philosophie/Ideen 🧩")'

  )

  let verwandteListen = await dv.query(

    'list from "Sammlung" where Typ = "◼️" and contains(file.outlinks, this.file.link) and !contains(file.outlinks.file.folder, "Sammlung/Philosophie/Begriffe 🎍") and !contains(file.outlinks.file.folder, "Sammlung/Philosophie/Ideen 🧩")'

  )

  if (zugehörigeArtikel.value.values.length > 0) {

    dv.header(3, "Artikel")

    dv.list(zugehörigeArtikel.value.values)

  }

  if (verwandteThemen.value.values.length > 0) {

    dv.header(3, "Themen")

    dv.list(verwandteThemen.value.values)

  }

  if (verwandteIdeen.value.values.length > 0) {

    dv.header(3, "Ideen")

    dv.list(verwandteIdeen.value.values)

  }

  if (verwandteListen.value.values.length > 0) {

    dv.header(3, "Listen")

    dv.list(verwandteListen.value.values)

  }

  if (einzelneGedanken.value.values.length > 0) {

    dv.header(3, "Einzelne Gedanken")

    dv.list(einzelneGedanken.value.values)

  }

  if (kategorieUnterpunkte.value.values.length > 0) {

    dv.header(3, "Unterpunkte")

    dv.list(kategorieUnterpunkte.value.values)

  }

}

  

////////////////////////////

// Schreib-Kategorien 📖 //

///////////////////////////

  

if (pg.Typ == "📖") {

  let verwandteThemen = await dv.query(

    'list from "Sammlung" where Typ = "🧵" and contains(file.outlinks, this.file.link)'

  )

  let verwandteIdeen = await dv.query(

    'list file.inlinks from "Sammlung" where Typ = "📓" and contains(file.outlinks, this.file.link)'

  )

  let kategorieUnterpunkte = await dv.query(

    'list file.inlinks from !"Ressourcen" where contains(Typ, "📖") and contains(this.file.inlinks, file.link) and !contains(file.inlinks, this.file.link) and file.name != this.file.name'

  )

  let einzelneGedanken = await dv.query(

    'list from "Sammlung" where Typ = "🕯️" and contains(file.outlinks, this.file.link) and !contains(file.outlinks.file.folder, "Sammlung/Schreibtipps/Schreibbegriffe 🧵") and !contains(file.outlinks.file.folder, "Sammlung/Schreibtipps/Schreibideen 📓")'

  )

  let verwandteListen = await dv.query(

    'list from "Sammlung" where Typ = "◼️" and contains(file.outlinks, this.file.link)'

  )

  if (verwandteThemen.value.values.length > 0) {

    dv.header(3, "Themen")

    dv.list(verwandteThemen.value.values)

  }

  if (verwandteIdeen.value.values.length > 0) {

    dv.header(3, "Ideen")

    dv.list(verwandteIdeen.value.values)

  }

  if (verwandteListen.value.values.length > 0) {

    dv.header(3, "Listen")

    dv.list(verwandteListen.value.values)

  }

  if (einzelneGedanken.value.values.length > 0) {

    dv.header(3, "Einzelne Gedanken")

    dv.list(einzelneGedanken.value.values)

  }

  if (kategorieUnterpunkte.value.values.length > 0) {

    dv.header(3, "Unterpunkte")

    dv.list(kategorieUnterpunkte.value.values)

  }

}

  

//////////////

// MOCs 🗺️ //

/////////////

  

if (pg.Typ == "🗺️") {

  let ohneMOC = await dv.query(

    'list from !"Sammlung/Philosophie/Notizen 📝️" and !"Sammlung/Referenzen" and !"Ressourcen/Sonstiges/MOCs 🗺️" and !"Ressourcen/Templates" and !"Ressourcen/Snippets" where !contains(file.inlinks.file.folder, "Ressourcen/Sonstiges/MOCs 🗺️") and file.name != "Home" and file.name != this.file.name'

  )

  let verlinktHierher = await dv.query(

    "list where contains(file.outlinks, this.file.link) and !contains(this.file.outlinks, file.link)"

  )

  if (

    ohneMOC.value.values.length > 0 ||

    verlinktHierher.value.values.length > 0

  ) {

    dv.paragraph("---")

  }

  if (verlinktHierher.value.values.length > 0) {

    dv.header(3, "Verlinkt hierher")

    dv.list(verlinktHierher.value.values)

  }

  if (ohneMOC.value.values.length > 0) {

    dv.header(3, "Zu verlinken")

    dv.list(ohneMOC.value.values)

  }

}

  

/////////////////////

// Daily Notes 📆 //

////////////////////

  

if (pg.Typ == "📆") {

  let notizenDesTages = await dv.query(

    "list where (file.ctime.day = this.file.day.day and file.ctime.month = this.file.day.month and file.ctime.year = this.file.day.year) sort Typ, Icon, file.name"

  )

  if (notizenDesTages.value.values.length > 0) {

    dv.paragraph("---")

    dv.header(3, "Notizen des Tages")

    dv.list(notizenDesTages.value.values)

  }

}

  

//////////////////

// Personen 👤 //

////////////////

  

if (pg.Typ == "👤") {

  let verwandteThemen = await dv.query(

    'list where contains(file.outlinks, this.file.link) and (Typ = "💠" or Typ = "🎍" or Typ = "🧩") sort Typ'

  )

  let verwandteNotizen = await dv.query(

    'list where Typ = "📝️" and contains(file.outlinks, this.file.link)'

  )

  let sonstigesVerwandtes = await dv.query(

    'list where contains(file.outlinks, this.file.link) and Typ != "💠" and Typ != "🎍" and Typ != "🧩" and Typ != "📝️"'

  )

  if (

    verwandteThemen.value.values.length > 0 ||

    verwandteNotizen.value.values.length > 0 ||

    sonstigesVerwandtes.value.values.length > 0

  ) {

    dv.paragraph("---")

  }

  if (verwandteThemen.value.values.length > 0) {

    dv.header(3, "Themen")

    dv.list(verwandteThemen.value.values)

  }

  if (verwandteNotizen.value.values.length > 0) {

    dv.header(3, "Einzelne Notizen")

    dv.list(verwandteNotizen.value.values)

  }

  if (sonstigesVerwandtes.value.values.length > 0) {

    dv.header(3, "Sonstiges")

    dv.list(sonstigesVerwandtes.value.values)

  }

}
```

---

> [!verwandt]
> ```dataviewjs
> dv.view("Ressourcen/Snippets/Dataview")
> ```