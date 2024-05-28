---
Typ: 📝️
banner: "![[banner_notiz.jpg]]"
banner_y: 0.432
banner_icon: 📝
Datum: <%tp.date.now("YYYY-MM-DD")%>
---

# <%tp.file.title%>

<%tp.file.title%>. #⚫<%tp.file.cursor(1)%>
<%-tp.file.move("/Notizen/" + tp.file.title)%>

---

> [!verwandt]
> ```dataviewjs
> dv.view("Ressourcen/Snippets/Dataview")
> ```