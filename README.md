# Shibboleth bejelentkezés frontend
Egyszerű bejelentkeztető oldal, ami a Next.js v14.2.4 verziója alatt készült (ez későbbiekben változhat).

## Felhasznált eszközök
A projekt létrehozásakor a következő programozási nyelvek és egyéb érdekességek (erre nincs jobb szó) kerültek felhasználásra: Next.js, lokális Apache szerver, Shibboleth Service és Identity Provider

## Telepítés és futtatás
1. Next.js [telepítése](https://nextjs.org/docs/getting-started/installation)
2. [Shibboleth Identity Provider](https://shibboleth.net/downloads/identity-provider/4.3.3/), illetve [Shibboleth Service Provider](https://shibboleth.net/downloads/service-provider/3.4.1/) telepítése
3. Apache szerver futtatása érdekében Xampp [telepítése](https://www.apachefriends.org/hu/download.html)

### Futtatás
Nincs más teendő, mint terminálba lefuttatni a `npm run dev` parancsot, amivel elindíthatjuk a lokális szerveren futó projektünket.

**Megjegyzés:** A szerver portja az applikáció megírása során a 8081-es portot használta, ez szabadon változtatható.