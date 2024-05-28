---
banner: "![[banner_calendar.jpg]]"
banner_y: 0.152
banner_icon: 🗓️
---

[[<% moment(tp.file.title,'YYYY-MM-DD').subtract(1, 'days').format("YYYY-MM-DD") %>|Vorheriger Tag]] | [[<% moment(tp.file.title,'YYYY-MM-DD').add(1, 'days').format("YYYY-MM-DD") %>|Nächster Tag]]

# <% moment(tp.file.title,'YYYY-MM-DD').format('YYYY-MM-DD') %>

#⚫<% tp.file.cursor(1) %>
<%-tp.file.move("/Daily Notes/" + tp.file.title)%>

---

> [!example]- Notizen des Tages
> ```dataview
> list
> where file.path != this.file.path
> and file.cday = this.file.day
> and file.cday.month = this.file.day.month
> and file.cday.year = this.file.day.year
> sort banner_icon, file.name
> ```

---

> [!verwandt]
> ```dataviewjs
> dv.view("Ressourcen/Snippets/Dataview")
> ```