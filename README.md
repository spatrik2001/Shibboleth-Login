# Shibboleth bejelentkezés frontend
Egyszerű bejelentkeztető oldal, ami a Next.js v14.2.4 verziója alatt készült (ez későbbiekben változhat).

## Felhasznált eszközök
A projekt létrehozásakor a következő programozási nyelvek és egyéb érdekességek (erre nincs jobb szó) kerültek felhasználásra: Next.js, lokális Apache szerver, Shibboleth Service és Identity Provider

## Telepítés és futtatás
1. Next.js [telepítése](https://nextjs.org/docs/getting-started/installation)
2. [Shibboleth Identity Provider](https://shibboleth.net/downloads/identity-provider/4.3.3/), illetve [Shibboleth Service Provider](https://shibboleth.net/downloads/service-provider/3.4.1/) telepítése
3. Apache szerver futtatása érdekében Xampp [telepítése](https://www.apachefriends.org/hu/download.html)

### Shibboleth SP és IdP telepítés
Shibboleth IDP telepítés consoleból, mert a telepítő egy rakás szar:

1. Letöltjük az Identity Providert (a szakdolgozat során kompatibilitásra hivatkozva a 4.3.3-as verziót használtuk), abból is a zip fájlt
2. Kicsomagoljuk a zip fájlt
3. Elindítjuk a parancssort adminisztrátorként, majd hivatkozunk a kicsomagolt fájl mappájába a cd paranccsal. (Pl: cd C:\opt\shibboleth-identity-provider-4.3.3)
4. Ezután hivatkoznunk kell a bin mappára szintén cd paranccsal. (A 3. és 4. lépést egybe is meg lehet csinálni, ha kibővíted a \bin szóval)
5. Bin mappán belül le kell futtatni az install parancsot, ami lefuttatja az operációs rendszernek megfelelő scriptet (windowsnál bat, linuxnál sh, stb.)
6. A telepítő script meg fogja kérdezni, hogy honnan telepítse, ami a hivatkozott mappánk.
7. Ezután megkérdezi, hogy melyik mappába telepítse, ami alapból a C:\opt\shibboleth-idp mappa (az SP is az opt mappába települ, legalább egy helyen lesznek)
8. A host name beállítása, ami alapból a számítógép neve. (A projekt során én a 127.0.0.1 címmel dolgoztam)
9. Ezután kérni fog egy PKCS12 és egy Cookie Encryption Key jelszót, amit meg is kell erősíteni a jelszót újból beírásával
10. Végül a scope címet fogja kérni, ami jelenleg a projektnél a localhost
11. Tök faszán le is fogja buildelni a C:\opt\shibboleth-idp mappába a dolgokat

**Edit:** mókolással mégse annyira szar

12. Consolet elindítjuk adminisztrátorként és hivatkozunk a telepítőt tartalmazó mappába a cd paranccsal.
13. Elindítjuk a telepítőt az msiexec paranccsal. (log nem feltétlen kell, csak ellenőrzés szempontjából generáltam egyet, ALWAYS_START_SERVICE fontos elem, mert telepítés során el akar egyből indítani egy servicet, NO_FIREWALL_EXCEPTION pedig a tűzfal miatt kell, mert le fogja egyből tiltani és ez felülírja a letiltást) Pl. msiexec /i "d:\users\vilszerker\downloads\shibboleth-identity-provider-4.3.3-x64.msi" /l*v "d:\users\vilszerker\downloads\fasz.log" ALWAYS_START_SERVICE=NO NO_FIREWALL_EXCEPTION=true
14. Ha minden jól megy, akkor a telepítés sikeresen lezárul és a logban sem fog hibát írni rá. (Csak egy jó pár nap kellett, hogy rájöjjek :'))

### Mi történik, ha a szolgaltatás baszik elindulni?

15. Ha a 4-es hibakódot dobja vissza, akkor a logban valószínüleg a java indítási hibáját fogod látni. Szépen bemész az IDP mappájába (C:\Program Files (x86)\Shibboleth\Procrun) és elindítod a shipbd_idpw.exe fájlt.
16. Rámész a java fülre és miután beállítottad a JVM elérési útját (pl. D:\Program Files\Java\jdk-17\bin\server\jvm.dll), alatta a Java Classpathnél a start.jar előtt szedd ki a felesleges backslasht, ha kettő van és utána próbáld elindítani
17. Érdemes arra vigyázni, hogy a Jetty a 443-as portot használja és az Apache alapbeállításában is a 443-as port szerepel az ssl configon belül

### Futtatás
Nincs más teendő, mint terminálba lefuttatni a `npm run dev` parancsot, amivel elindíthatjuk a lokális szerveren futó projektünket.

**Megjegyzés:** A szerver portja az applikáció megírása során a 8081-es portot használta, ez szabadon változtatható.