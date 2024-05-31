---
banner: "![[banner_utility.jpg]]"
banner_icon: ⚙️
---

# Supercharged Links-Referenz

**Frühere Version:**
```css
/*------------
Typ oder Icon
------------*/

/* vvv Das kann NIGHT gleichzeitig eintreten vvv */
/*-----------------------------------------------*/

/* Wenn kein Icon: Zeige Typ an! */
a.internal-link[data-link-Icon="null"]:before {
  content: attr(data-link-Typ) " ";
}
  
/* Wenn Icon: Zeige stattdessen Icon an! */
a.internal-link:not([data-link-Icon="null"]):before {
  content: attr(data-link-Icon) " ";
}

/* Wenn Icon: Zeige stattdessen Icon an! */
a.internal-link:not([data-link-Icon="null"]):hover:before {
  content: attr(data-link-Typ) " ";
}

/* Wenn #🟥: Ändere schriftfarbe! */
a.internal-link[data-link-Tags~="#🟥"] {
  color: rgb(248, 117, 61);
}

/* Wenn #🟦: Ändere schriftfarbe! */
a.internal-link[data-link-Tags~="#🟦"] {
  color: rgb(84, 170, 240);
}
  
/* Wenn #🟩: Ändere schriftfarbe! */
a.internal-link[data-link-Tags~="#🟩"] {
  color: rgb(25, 186, 63);
}
  
/* Wenn #🟨: Ändere schriftfarbe! */
a.internal-link[data-link-Tags~="#🟨"] {
  color: rgb(255, 255, 255);
}
  
/*----------
    Tags  
----------*/
  
/* Exklusiv (after): */
/*-------------------*/
  
a.internal-link[data-link-Tags~="#⚫"]:after {
  content: " (∅)";
}
```

---

> [!verwandt]
> ```dataviewjs
> dv.view("Ressourcen/Snippets/Dataview")
> ```