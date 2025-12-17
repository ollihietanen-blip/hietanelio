# Julkaisutiedot

## Julkaisutapa

Projekti julkaistaan **GitHubin kautta Vercel-palvelussa**.

- Julkaisu tapahtuu automaattisesti GitHubin kautta
- Vercel buildaa projektin automaattisesti jokaisen pushin jälkeen
- **Ei käytetä FTP:tä** - kaikki julkaisut tapahtuvat Git-työnkautta

## Domainit

- **hietanelio.fi**
- **www.hietanelio.fi**

## Päivitysprosessi

1. **Commit** muutokset paikallisesti
2. **Push** muutokset GitHub-repositorioon
3. **Vercel deploy** käynnistyy automaattisesti
4. Sivusto päivittyy automaattisesti

## Paikallinen kehitys

```bash
npm run dev    # Käynnistää kehityspalvelimen
npm run build  # Buildaa tuotantoversio
npm run start  # Käynnistää tuotantoversio paikallisesti
```

## Huomioita

- Projektissa **ei ole** staattista exportia (`output: "export"`)
- Vercel hoitaa buildin ja julkaisun automaattisesti
- Kaikki muutokset tehdään Git-työnkautta

