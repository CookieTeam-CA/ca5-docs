---
title: Landverwaltung
layout: doc
---

# 🏞️ Landverwaltung & Claims

Hier erfährst du, wie du dein eigenes Land beanspruchst und verwaltest.


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

## ⏱️ Zeitbasierte Belohnungen

Je länger du auf dem Server spielst, desto mehr kannst du Claimen.

| Belohnung                  | Wartezeit     |
|---------------------------|---------------|
| +1 Chunk claimbar         | alle **45 min** |
| +1 Land als Mitglied      | alle **6 h**     |
| +1 eigenes Land           | alle **12 h**    |
| +1 zusätzlicher Member    | alle **2 h**     |
| +1 Support-Chunk (für fremde Länder) | alle **4 h**     |

> ℹ️ Es kann bis zu 1 Minute dauern, bis du die Belohnung bekommst.


## 💸 Kosten & Limits

Du brauchst Gold Ingots um die folgenden Sachen zu kaufen.

### Land erstellen

* Kosten: **256 Gold Ingots**
* Beim Erstellen bekommst du automatisch den Chunk, in dem du stehst.

### Chunk claimen

* Basispreis: **5 Coins pro Chunk**
* Jeder weitere Claim erhöht den Preis um **+1 Coin**
* Maximalpreis: **32 Coins**
* Wenn du einen Chunk unclaimst, bekommst du **25 % des Preises zurück**.

### Besitzerwechsel

* Einen neuen Besitzer für dein Land festlegen kostet **256 Coins**


## 🧱 Maximalwerte

| Limitart                        | Maximalwert |
|--------------------------------|-------------|
| Eigene Länder                  | 5           |
| Mitglied in anderen Ländern   | 15          |
| Vertrauenspersonen im eigenen Land | 15      |
| Chunks insgesamt               | 200         |
| Support-Chunks für andere Länder | 16        |

> Solltest du ein großes Projekt haben für das du mehr brauchst kannst du gerne den Discord Support anschreiben ;)


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