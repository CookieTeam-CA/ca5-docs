---
title: Bilder & Gifs
layout: doc
---

# 🖼️ Bilder & Gifs

Mit diesem Feature kannst du **Bilder und Gifs als Karten in Minecraft** einfügen.

## 📌 Hinweise

- 📷 **Maximale Bildgröße:** `100 × 100` Karten  
- 📁 **Maximale Dateigröße:** `15 MB`  
- 🧍‍♂️ **Limit pro Spieler:** `20` Bilder gleichzeitig  
- 🪪 **Voraussetzung:** Du brauchst leere Karten im Inventar, um Bilder zu importieren

## 💬 Befehle

### 🧱 Bild erstellen

```txt
/if create <name> <url> <width> <height>
```

| Parameter  | Beschreibung |
|------------|--------------|
| `name`     | Eindeutiger Name für dein Bild |
| `url`      | **Direkter Link** zum Bild oder Gif |
| `width`    | Breite in Karten |
| `height`   | Höhe in Karten |

::: warning Wichtig
Die Bildadresse bekommst du meistens mit Rechtsklick auf ein Bild → `Bildadresse kopieren`. Achte darauf, dass es ein direkter Link ist (endet auf `.png`, `.jpg`, `.gif` etc.).
:::

---

### 🔲 Auswahl per Itemframe

```txt
/if select
```

Wähle zwei Ecken einer Itemframe-Wand aus. Danach kannst du bei `/if create` statt `width` und `height` einfach `selection` angeben – der Rest wird automatisch berechnet.

---

### ❌ Bild löschen

```txt
/if delete <name>
```

Löscht das angegebene Bild aus deinem Profil (und von der Karte).

---

## 📦 Beispiel

```txt
/if create cookie https://example.com/cookie.gif 4 3
```

> Erstellt ein Bild namens `cookie` mit der Größe `4 × 3` Karten.