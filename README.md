# Solana Fitness App

A React Native alapú fitness alkalmazás Solana blockchain integrációval. Az alkalmazás lehetővé teszi a felhasználók számára, hogy edzésprogramokat kövessenek, táplálkozási tervet készítsenek, és Solana tokeneket, NFT-ket kapjanak a teljesítményükért.

## 🚀 Funkciók

- **Bejelentkezési rendszer**
  - Email és jelszó alapú bejelentkezés
  - Regisztrációs lehetőség (hamarosan)
  - Solana témájú UI

- **Fő képernyő**
  - Fitness kártyák különböző kategóriákban
  - Óra csatlakoztatás (hamarosan)
  - Solana pénztárca integráció (hamarosan)

- **Navigáció**
  - Alul elhelyezett tab navigáció
  - Home, Personal, Activity és Settings képernyők
  - Animált átmenetek

## 🛠 Telepített csomagok

```json
{
  "dependencies": {
    "@react-navigation/native": "^7.0.14",
    "@react-navigation/native-stack": "^7.0.14",
    "@react-navigation/bottom-tabs": "^7.0.14",
    "@expo/vector-icons": "^14.0.0",
    "expo": "~52.0.46",
    "expo-status-bar": "~2.0.1",
    "react": "18.3.1",
    "react-native": "0.76.9",
    "react-native-gesture-handler": "~2.20.2",
    "react-native-safe-area-context": "4.12.0",
    "react-native-screens": "~4.4.0"
  }
}
```

## 📱 Képernyők

### Bejelentkezési képernyő
- Modern, Solana témájú design
- Email és jelszó bevitel
- Bejelentkezés és regisztráció gombok

### Fő képernyő
- Fitness kártyák különböző kategóriákban:
  - Edzés Programok
  - Táplálkozás
  - Fogyás
  - Izomnövelés
  - Personal Edző
- Óra csatlakoztatás gomb (bal felső sarok)
- Pénztárca gomb (jobb felső sarok)

### Tab Navigáció
- Home
- Personal
- Activity
- Settings

## 🎨 Design

- **Színek**
  - Háttér: #000000 (fekete)
  - Fő szín: #14F195 (Solana zöld)
  - Másodlagos szín: #1A1A1A (sötétszürke)

- **Animációk**
  - Gomb nyomás animációk
  - Képernyőváltás animációk
  - Interaktív UI elemek

## 🔄 Fejlesztés

### Telepítés
```bash
# Függőségek telepítése
npm install

# Expo szerver indítása
npx expo start
```

### Fejlesztői környezet
- Expo Go alkalmazás használata teszteléshez
- React Native Debugger hibakereséshez
- Metro bundler fejlesztéshez

## 📦 Következő lépések

- [ ] Regisztrációs képernyő implementálása
- [ ] Óra csatlakoztatás implementálása
- [ ] Solana pénztárca integráció
- [ ] NFT és token rendszer implementálása
- [ ] Edzés programok részletes megjelenítése
- [ ] Táplálkozási terv készítő
- [ ] Progress követés

## 📝 Licenc

MIT

## 👥 Közreműködés

A projekt nyitott a közreműködésre. Kérlek, kövesd a következő lépéseket:

1. Fork-old a repository-t
2. Hozz létre egy új branch-et (`git checkout -b feature/új-funkció`)
3. Commit-old a változtatásaidat (`git commit -m 'Új funkció hozzáadása'`)
4. Push-old a branch-edet (`git push origin feature/új-funkció`)
5. Hozz létre egy Pull Request-et
