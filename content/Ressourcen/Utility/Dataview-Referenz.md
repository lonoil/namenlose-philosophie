---
banner: "![[banner_utility.jpg]]"
banner_icon: ⚙️
---

# Dataview-Referenz

#### Relikte

**Tabelle aller Typen**
```dataview
table without ID banner_icon as Typen, length(rows.file.link) as Anzahl
from !"Ressourcen/Templates"
where banner_icon
group by banner_icon
sort length(rows.file.link) desc
```

**Beispiel für genaueres Anzeigen bei Listen:**
```dataview
list "**Kinder:** " + verwandt + ", **Name:** \"" + file.name + "\"" where file.name = this.file.name
```

---

> [!verwandt]
> ```dataviewjs
> dv.view("Ressourcen/Snippets/Dataview")
> ```