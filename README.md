# Supermarket Offers App

Questo progetto full-stack permette di conoscere in tempo reale il costo di una ricetta e di creare la lista della spesa più economica possibile. 

## Cartelle
- `mobile-app` – applicazione Expo che mostra le offerte ai consumatori.
- `admin-web` – pannello amministratore per inserire e modificare i prezzi dei supermercati.
- `public-web` – sito di presentazione che espone gli ultimi prezzi pubblicati.
- `server` – API Node.js con un semplice database in memoria.

## Avvio rapido
1. Spostarsi nella cartella `server` ed eseguire `npm install`.
2. Avviare l'API con `npm start`; il server sarà disponibile sulla porta `3000`.
3. Aprire `admin-web/index.html` o `public-web/index.html` in un browser per vedere le interfacce (usano Tailwind CSS via CDN).

Il pannello amministratore consente di inserire, modificare e cancellare i prezzi. La pagina pubblica mostra le ultime offerte e descrive come l'app aiuta a risparmiare sulla spesa.
