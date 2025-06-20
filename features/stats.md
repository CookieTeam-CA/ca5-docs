---
title: Spielerstatistiken
layout: doc
---

## 📊 Spielerstatistiken

Mit dem Befehl `/stats` kannst du dir **Statistiken von dir, anderen Spielern oder dem ganzen Server** anzeigen lassen.

---

### 💬 Befehl

```txt
/stats <statistic> <sub-statistic>
```

---

### 🔍 Parameter

| Parameter       | Beschreibung                                      | Optionen / Beispiel                                | Pflichtfeld |
|-----------------|---------------------------------------------------|----------------------------------------------------|-------------|
| `statistic`     | Die Hauptstatistik, z. B. Blöcke abgebaut         | Jede Minecraft-Statistik                           | ✅ Ja       |
| `sub-statistic` | Genaue Auswahl, z. B. welches Item oder Block     | z. B. `cookie`                                     | ❌ Nein     |
| `players`       | Auswahl, von wem du die Stats sehen willst        | `me`, `player`, `server`, `top`                    | ❌ Nein (Standard: `top`) |
| `player-name`   | Spielername – nur bei Auswahl von `player`        | z. B. `Mace1050HD`                                 | ❌ Nein     |


## 🧪 Beispiele

```txt
/stats use_item cookie player Mace1050HD
```

**Ergebnis:**
```
Mace1050HD: 51 Times Used (Cookie)
```

> Hier ist eine [Liste](https://minecraft.fandom.com/wiki/Statistics#List_of_custom_statistic_names) mit allen Statisiken die im Spiel exestieren.