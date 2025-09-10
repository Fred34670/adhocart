import fs from "fs";
import path from "path";

// Fonction pour parcourir tous les fichiers du projet
function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      filelist = walk(filepath, filelist);
    } else if (/\.(js|jsx|ts|tsx|mjs|cjs)$/.test(file)) {
      filelist.push(filepath);
    }
  });
  return filelist;
}

// Parcourir tout le projet
const projectDir = process.cwd();
const files = walk(projectDir);

// Chercher toutes les variables process.env
const envVars = new Set();
files.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");
  const matches = content.match(/process\.env\.[A-Z0-9_]+/g);
  if (matches) {
    matches.forEach((match) => envVars.add(match.replace("process.env.", "")));
  }
});

console.log("✅ Variables d'environnement trouvées :");
console.log([...envVars]);
