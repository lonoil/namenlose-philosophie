---
banner: "![[banner_temp.jpg]]"
banner_icon: 🕸️
---

# RvS Blatt 9

## Aufgabe 1

### a)

$0011 0001$
\+ $1101 1010$

**Takt 1:**
Zahl 1 zu Beginn:   $0011 0001$
Zahl 2 zu Beginn: $1101 1010$
Zwischenergebnis: $1110 1011$
Übertrag: $[0]0010 0000$
Letzter Übertrag: $[0]$

**Takt 2:**
Zahl 1 zu Beginn:  $1110 1011$
Zahl 2 zu Beginn: $0010 0000$
Zwischenergebnis: $1100 1011$
Übertrag: $[0]0100 0000$
Letzter Übertrag: $[0]$

**Takt 3:**
Zahl 1 zu Beginn:  $1100 1011$
Zahl 2 zu Beginn: $0100 0000$
Zwischenergebnis: $1000 1011$
Übertrag: $[0]1000 0000$
Letzter Übertrag: $[0]$

**Takt 4:**
Zahl 1 zu Beginn: $1000 1011$
Zahl 2 zu Beginn: $1000 0000$
Zwischenergebnis: $0000 1011$
Übertrag: $[1]0000 0000$
Letzter Übertrag: $[1]$

Finales Ergebnis: $[1]0000 1011$.
Da eine 1 im finalen Übertrag steht, ist das Ergebnis ungültig.
Es waren 4 Takte nötig.

### b)

**Takt 1:**
Zahl 1 zu Beginn:   $0001 0100$
Zahl 2 zu Beginn: $1000 1100$
Zwischenergebnis: $1001 1000$
Übertrag: $[0]0000 1000$
Letzter Übertrag: $[0]$

**Takt 2:**
Zahl 1 zu Beginn:   $1001 1000$
Zahl 2 zu Beginn: $0000 1000$
Zwischenergebnis: $1001 0000$
Übertrag: $[0]0001 0000$
Letzter Übertrag: $[0]$

**Takt 3:**
Zahl 1 zu Beginn:   $1001 0000$
Zahl 2 zu Beginn: $0001 0000$
Zwischenergebnis: $1000 0000$
Übertrag: $[0]0010 0000$
Letzter Übertrag: $[0]$

**Takt 4:**
Zahl 1 zu Beginn:   $1000 0000$
Zahl 2 zu Beginn: $0010 0000$
Zwischenergebnis: $1010 0000$
Übertrag: $[0]0000 0000$
Letzter Übertrag: $[0]$

Finales Ergebnis: $[0]1010 0000$.
Da eine 0 im finalen Übertrag steht, ist das Ergebnis gültig.
Es waren 4 Takte nötig.

### c)

Wenn man die Initialisierung nicht als eigenen Takt mitzählt, sind im *best case* 0 Takte nötig und im *worst case* 8.

Anhand zweier Beispiele:
- $1111 1111 + 0000 0000$ → 0 Takte, da keine weitere Berechnung notwendig. *(best case)*
- $1111 1111 + 0000 0001$ → 8 Takte, da in jedem Schritt ein Übertrag entsteht. *(worst case)*

Zählt man die Initialisierung mit, sind es 1 *(best case)* bzw. 9 Takte *(worst case)*.

| Eingabe              | x10    | x11    | x12        | x13        |
| -------------------- | ------ | ------ | ---------- | ---------- |
| li x11, 0xDE         |        | 0XDE   |            |            |
| li x10, 0xAD         | 0XAD   |        |            |            |
| slli x13, x11, 8     |        |        |            | 0XDE00     |
| or x12, x13, x10     | 0XD000 |        | 0XDEAD     |            |
| li x10, 0xCFBC       | 0XCFBC |        |            |            |
| xor x10, x10, x12    | 0X1111 |        |            |            |
| slli x12, x12, 0x010 |        |        | 0XDEAD0000 |            |
| li x11, 0x0007       |        | 0X7    |            |            |
| mul x11, x10, x11    | 0X6000 | 0X7777 |            |            |
| li x10, 0x5FFF       | 0X5FFF |        |            |            |
| and x11, x11,x10     |        | 0X5777 |            |            |
| slli x10, x11, 1     | 0XAEEE | 0X9000 |            |            |
| li x11, 0x9001       |        | 0X9001 |            |            |
| or x13, x10, x11     |        |        |            | 0XBEEF     |
| add x13, x13, x12    |        | 0X9000 |            | 0XDEADBEEF | 
| li x11, 0x9342       |        | 0X9342 |            |            |
| sub x12, x13, x11    |        |        | 0XDEAD2BAD |            |
