---
layout: post
title: "Yearn Finance Newsletter #55"
categories: [Newsletters]
image: ./Yearn-Finance-Newsletter-55/image1.png
author: Yearn
translator: Flavio Restelli
publish: true
---

# Yearn Finance Newsletter #55

### Settimana del 24-28 febbraio 2022

![](image1.png)

Benvenuti alla 55esima edizione della Newsletter di Yearn Finance. L’obbiettivo della newsletter è mantenere informata non solo la comunità Yearn, ma in generale tutti coloro che fanno parte dell’ecosistema crypto. Le notizie spaziano dai lanci di nuovi prodotti ai cambiamenti di governance, passando dagli aggiornamenti più recenti riscontrati nell'ecosistema. Se sei interessato a saperne di più su Yearn Finance, segui i nostri account ufficiali [Twitter] (https://twitter.com/iearnfinance) e [Medium] (https://medium.com/iearn)  .


## Sommario

- La TVL di Yearn su Fantom raggiunge il miliardo di dollari.
- Aggiornamento riguardo i Vaults su Fantom
- Yearn e Fantom : sotto i riflettori
- Aggiornamenti Yearn Web 
- Introduzione a Yearn Finance per aspiranti strateghi
- I Vault di Yearn
- Notizie dall’ecosistema


# La TVL di Yearn su Fantom raggiunge il miliardo di dollari. 
[](image2.png)
Siamo entusiasti di annunciare che il valore totale bloccato (TVL) in tutti i prodotti Yearn su Fantom ha superato il miliardo di dollari. La TVL nei prodotti Yearn più recenti ha visto una crescita esplosiva negli ultimi tempi e non mostra segni di rallentamento!

# Aggiornamento riguardo i Vaults su Fantom.
Con l'ascesa del nuovo progetto Solidly ve(3,3) di Andre Cronje & Daniele Sestagalli, gli attacchi “vampireschi” (vampire attacks) sono arrivati anche su Fantom : gli utenti tentano in ogni modo di diventare eligibili all’airdrop di Solidly, utilizzando i Top 20 progetti per TVL su Fantom.

Yearn ha “approfittato” di questi attacchi e ha permesso agli investitori di guadagnare i più ali tassi annuali (risk-adjusted) sui loro token. Abbiamo ottenuto il miglior rendimento su 0xDAO, veDAO, Scream, Curve, Beets, Tarot ecc. I nostri Fantom Vault hanno strategie per tutti questi token, variano automaticamente in funzione del più redditizio e realizzano profitti ogni 30 minuti in modo da non lasciarti mai a secco. Nonostante la campagna di attacco dei vampiri sia terminata da poco, saremo su Fantom al tuo fianco per molto tempo quando che i vampiri saranno diventati un'altra pagina di un manga di storia.

Qual è la tua prossima mossa? Inizia a depositare capitale oggi stesso su [yearn.finance/vaults](https://yearn.finance/vaults).

# Yearn e Fantom : sotto i riflettori

![](image3.png)

Il collaboratore Tracheopteryx ci regala una breve panoramica di Yearn e della nostra missione, la nostra attenzione sugli utenti assidui, i partner e i builders. 

I prodotti principali di Yearn sono i Vault, l'Iron Bank, i Labs e i token YFI/WOOFY. Le origini di YFI sono ulteriormente esplorate, e Tracheopteryx spiega perché Fantom è la prima sidechain su cui Yearn ha scelto di lanciarsi.

L'intervista termina menzionando i prossimi aggiornamenti sul token YFI : i buyback che spetteranno ai possessori di tokens, xYFI, veYFI, e i vault gauges.

Leggi il nuovo articolo completo  [qui](https://fantom.foundation/blog/fantom-ecosystem-spotlight-yearn/?__cf_chl_rt_tk=rdrT2KHoFbjTe1yyUOmIDA92AeTmrMPKtQW5yT18mwk-1643234302-0-gaNycGzNCH0).

# Aggiornamenti Yearn Web 

![](image4.png)

Gli aggiornamenti web di Yearn di questa settimana includono un APY hover tooltips aggiunto all'UI e una correzione della Dust per i prelievi dai vaults.

Prossimamente ci saranno miglioramenti alla sicurezza, con un write-up dettagliato, una UI/UX multi-chain di livello superiore e un progetto su una nuova L1.

Leggi i dettagli riguardo gli aggiornamenti [qui](https://yearnweb.substack.com/p/yearn-web-engineering-update-7d7?r=2y79e&utm_campaign=post&utm_medium=web).

# Introduzione a Yearn Finance per aspiranti strateghi

![](image5.png)

I vaults di Yearn sono gettoni IOU creati da strateghi che intraprendono un difficile processo di controllo per assicurare che gli utenti di Yearn ricevano il miglior rendimento (risk-adjusted) nell'ecosistema delle criptovalute.

Una strategia precedentemente utilizzata da Yearn può essere vista nel v1 Ethereum yVault: Quando un utente deposita ETH, l'ETH viene poi prestato a MakerDAO come garanzia, che viene utilizzata per prendere in prestito DAI che viene poi depositato nel DAI yVault.

Alcune domande comuni che gli utenti ci fanno sono "Come e quando Yearn sposta i fondi all'interno del vault e fa pagare le commissioni?" e "Come fa Yearn a garantire una strategia per generare sempre nuovi token invece di perderli?". Una delle funzioni chiave di una strategia si chiama "harvest". Quando viene attivata, essa innesca un processo di riequilibrio in cui il profitto viene “realizzato” e reinvestito nuovamente nella strategia. Gli strateghi usano anche una serie di strumenti per monitorare i dati della catena per assicurare la salute della strategia. Uno di questi strumenti è Yearn Watch, che presenta una raffinata interfaccia utente con molte delle metriche chiave estratte live dalla blockchain.

Yearn e Keep3r inoltre, fortemente sinergici, assicurano che i vaults mantengano sempre le loro prestazioni. Per costruire strategie, avrete bisogno di una buona comprensione di Vyper (per yVaults) e Solidity (per le strategie). I requisiti di base per diventare uno stratega sono: conoscenza dell'ecosistema blockchain in cui verrà offerta la strategia, che può essere acquisita facendo una ricerca approfondita di tokenomics e della documentazione per tutti i token utilizzati nella strategia stessa ; conoscenza del linguaggio di programmazione Solidity simile al completamento del livello 4 su CryptoZombies ; sapere come muoversi su git, eth-brownie, e ganache.

Dopo aver compreso le basi degli strumenti di cui sopra, siete pronti a copiare il nostro modello di strategia! Le funzioni che dovreste iniziare a cambiare in questo template per costruire la vostra prima strategia sono prepareReturn, adjustPosition, e liquidatePositon. Potete trovare un modello di strategia [qui](https://github.com/yearn/brownie-strategy-mix).

Un sentito grazie a MarcoWorms per questo articolo da ritrovare in versione estesa [qui](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432).

# I Vaults di Yearn

Per una descrizione dettagliata delle strategie su tutti i nostri yVaults attivi, leggi [qui](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Notizie dall'ecosistema

[Deposita capitale direttament nei vaults di Yearn grazie alla nuova integrazione dell’Ambire Wallet.](https://twitter.com/AmbireWallet/status/1483087593285820416)

[Usa i Vaults di Yearn sulla DAO Shapeshift.](https://twitter.com/ShapeShift_io/status/1484599573289086984)

[Aggiornamenti sulla collaborazione fra Tesseract Finance e VESQ.](https://twitter.com/tesseract_fi/status/1483484524143128578)

[Yearn è diventato il primo aggregatore su Fantom per TVL.](https://twitter.com/vannny365/status/1484385291947368448)

[ApeFramework realizzato con l’aiuto dei contributori Yearn.](https://twitter.com/ApeFramework)

[Uno sguardo su Yearn e le principali statistiche.](https://twitter.com/fuuurma/status/1484503576076599298)
