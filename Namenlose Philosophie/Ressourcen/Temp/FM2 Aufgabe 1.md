---
banner: "![[banner_temp.jpg]]"
banner_icon: 🕸️
---

# FM2 Aufgabe 1

``` 
Eingabe = {s_1, ..., s_n} // Eingabe für Partition, ohne Nullen

// 1.
Für jedes Element in Eingabe:
	Füge 0 zum Ende von Eingabe hinzu
	Gib Eingabe zurück

// Eingabe hat jetzt so viele Nullen wie ganzzahlige Elemente

// 2. & 3.
if FairPartitionWithZeros(Eingabe) == true
	print: "Für die Eingabemenge funktioniert der Partition-Algorithmus, da die hinzugefügten Nullen die Summe der Zahlen nicht verändern und die Anzahl der zu verarbeitenden Elemente durch eine Verdopplung (also das Hinzufügen der Nullen) keine höhere Komplexitätsklasse erreicht."
	else print: "Die Eingabe ist für den Partition-Algorithmus nicht gültig."

// Schritt 1 passt die Eingabe an den FairPartitionWithZeros-Algorithmus in O(n) an, Schritt 2 führt ihn über die Eingabe aus. Wenn Schritt 2 ein Ergebnis liefert, das in Schritt 3 interpretiert werden kann, ist davon auszugehen, dass der Algorithmus korrekt arbeitet. Die Überprüfung in Schritt 3 ist ebenfalls in polynomieller Zeit ausführbar.
```

---

**Verwandt:** [[Uni-Krams]]

---

> [!verwandt]-
> ```dataviewjs
> dv.view("Ressourcen/Snippets/Dataview")
> ```