---
banner: "![[banner_gedankensuche.jpg]]"
banner_y: 0.18
banner_icon: 💭
Datum: <%tp.date.now("YYYY-MM-DD")%>
---

# <%tp.file.title%>

<%tp.file.title%>. #⚫<%tp.file.cursor(1)%>
<%-tp.file.move("/Gedanken/" + tp.file.title)%>

---

> [!verwandt]
> ```dataviewjs
> dv.view("Ressourcen/Snippets/Dataview")
> ```