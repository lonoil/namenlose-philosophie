---
banner_icon: 📔
banner: "![[banner_tagebuch.jpg]]"
Datum: <%tp.date.now("YYYY-MM-DD")%>
---

# <%tp.file.title%>

<%tp.file.title%>. #⚫ <%tp.file.move("/Tagebuch/" + tp.file.title + " (" + tp.date.now("YYYY-MM-DD") + ")")%><%tp.file.cursor(1)%>

---

> [!verwandt]
> ```dataviewjs
> dv.view("Ressourcen/Snippets/Dataview")
> ```