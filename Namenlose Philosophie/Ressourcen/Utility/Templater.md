---
banner: "![[banner_utility.jpg]]"
banner_icon: ⚙️
---

# Templater

**Wochen-Verlinkung in Daily Notes:**
\[[<% moment(tp.file.title,'YYYY-MM-DD').format("gggg-[W]ww") %>|Woche (<% moment(tp.file.title,'YYYY-MM-DD').format("gggg-[W]ww") %>)]]

---

> [!verwandt]-
> ```dataviewjs
> dv.view("Ressourcen/Snippets/Dataview")
> ```