---
title: Landverwaltung
layout: doc
---

# 🏞️ Landverwaltung & Claims

Hier erfährst du, wie du dein eigenes Land beanspruchst, verwaltest und mit anderen zusammenarbeitest.

> 🔒 Du kannst genau bestimmen, wer in deinem Land bauen, abbauen oder interagieren darf.


## 🧱 Land erstellen & claimen

### Schnellstart

```txt
/lands claim
```

Beansprucht das Chunk, in dem du stehst, und erstellt automatisch ein Land mit deinem Spielernamen als Name.

### Eigener Name

```txt
/lands create <name>
```

Erstelle ein neues Land mit deinem Wunschnamen.

### Große Bereiche claimen (Selection-Modus)

```txt
/lands selection
```

Wähle zwei Ecken aus (einfach anklicken) und claim dann alles dazwischen:

```txt
/lands claim
```


## ⚙️ Claim-Verwaltung

### Aktives Land setzen

```txt
/lands edit <land>
```

Alle folgenden Befehle gelten dann für dieses Land.

### Claim entfernen

```txt
/lands unclaim
```

Entfernt das Chunk, in dem du gerade stehst.

```txt
/lands unclaim all
```

Entfernt **alle Claims** deines aktuellen Landes.

### Claim-Liste anzeigen

```txt
/lands claimlist
```

Zeigt alle geclaimten Chunks deines Landes.


## 🧑‍🤝‍🧑 Spieler verwalten

### Spieler vertrauen

```txt
/lands trust <spieler>
```

Gibt einem Spieler Zugriff auf dein gesamtes Land.

### Vertrauen entfernen

```txt
/lands untrust <spieler>
```

Entfernt den Zugriff eines Spielers.

### Rollen & Rechte

* Öffne das Menü mit `/lands`
* Klicke auf **Rollen** (Symbol)
* Passe Rechte pro Rolle an (z. B. bauen, Türen öffnen usw.)

### Spieler befördern / degradieren

* Öffne `/lands`
* Klicke auf den Spieler
* **Shift + Linksklick:** Befördern
* **Shift + Rechtsklick:** Degradieren


## 📍 Weitere Befehle & Features

### Übersichtskarte

```txt
/lands map
```

Zeigt umliegende Claims in einem GUI.   
Wenn du alle Länder sehen willst dann öffne die [Online Map](http://map.cookieattack.de:5555/) mehr Infos [hier](/features/map.md).

### Infos anzeigen

```txt
/lands info
```

Zeigt Infos über das Land, in dem du gerade stehst.

### Land umbenennen

```txt
/lands rename <neuerName>
```

### Grenzen visualisieren

```txt
/lands view
```

Zeigt die Claim-Grenzen mit Partikeln an.

### Du steckst in einen Fremden Land fest? Kein Problem!

```txt
/lands unstuck
```

Teleportiert dich zum nächsten unclaimed Chunk.

### Zufälliger Teleport

```txt
/lands wild
```

Teleportiert dich zu einem zufälligen, unclaimed Ort.


## 💬 Land-Chat

Mitglieder deines Landes kannst du direkt anschreiben:

```txt
@land Hallo zusammen!
```

Oder an ein bestimmtes Land:

```txt
@land <landname> Nachricht
```


## 📘 Hilfe

```txt
/lands help
```

Zeigt alle Befehle und Unterbefehle.

> Du kannst fast alles auch im Menü steuern – gib einfach `/lands` ein!