// Pseudocode - für Minecraft Modding oder als Grundlage für dein System
// Du kannst es für Forge/Fabric (Java), KubeJS (JS) oder andere APIs anpassen!

// Annahmen:
// - getPlayerOrigin(player): gibt die aktuelle Origin (Rasse) des Spielers zurück, z.B. "wood_elf"
// - getPlayerClass(player): gibt die aktuelle Klasse des Spielers zurück, z.B. "warrior"
// - unlockSkilltree(player, skilltree_id): schaltet einen Skilltree für den Spieler frei
// - lockSkilltree(player, skilltree_id): sperrt einen Skilltree für den Spieler
// - skilltrees: Objekt/Liste aller verfügbaren Skilltree-IDs nach Typ (origin/class)

const skilltrees = {
  origins: [
    "wood_elf", "alfiq", "goblin", "pixie", "high_elf", "arachnae", "siren",
    "valkyrie", "fae", "yeti", "incubus", "dwarf", "revenant", "moon_elf",
    "ogre", "plague_victim", "gorgon", "banshee"
  ],
  classes: [
    "warrior", "rogue", "archer", "cleric", "paladin", "wizard", "bard",
    "blacksmith", "miner", "chef", "farmer", "merchant", "beastmaster",
    "fisher", "healer", "alchemist", "hunter", "tank", "scout"
  ]
};

// Hauptfunktion: Skilltrees passend freischalten
function updateUnlockedSkilltrees(player) {
  let origin = getPlayerOrigin(player); // z.B. "wood_elf"
  let clazz = getPlayerClass(player);   // z.B. "warrior"

  // Origins: Nur die eigene freischalten
  for (let o of skilltrees.origins) {
    if (o === origin) {
      unlockSkilltree(player, `origin:${o}`);
    } else {
      lockSkilltree(player, `origin:${o}`);
    }
  }

  // Klassen: Nur die eigene freischalten
  for (let c of skilltrees.classes) {
    if (c === clazz) {
      unlockSkilltree(player, `class:${c}`);
    } else {
      lockSkilltree(player, `class:${c}`);
    }
  }
}

// Beispiel: Diese Funktion aufrufen, nachdem ein Spieler seine Origin/Klasse wählt
// oder beim Login/Respawn/etc.
onPlayerJoin((player) => {
  updateUnlockedSkilltrees(player);
});

// Bei Klassen- oder Origin-Wechsel erneut aufrufen!
onPlayerChangeOrigin((player) => {
  updateUnlockedSkilltrees(player);
});
onPlayerChangeClass((player) => {
  updateUnlockedSkilltrees(player);
});

// Hilfsfunktionen (Platzhalter - du musst sie auf dein API-System anpassen)
function getPlayerOrigin(player) {
  // Hole die Origin vom Spieler, z.B. player.originId
}
function getPlayerClass(player) {
  // Hole die Klasse vom Spieler, z.B. player.classId
}
function unlockSkilltree(player, id) {
  // Schalte den Skilltree mit der ID für den Spieler frei (API-spezifisch)
}
function lockSkilltree(player, id) {
  // Sperre den Skilltree mit der ID für den Spieler (API-spezifisch)
}