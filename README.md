## Naujas projektas

Pasitreniruokite sukurti nauja projekta nuo pradziu. Pasiziuekite kur stringate ir klauskite kur neaisku.

Sukurkite projekta patys nesistenkite perkopijuoti dideliu kodo gabalu is seno projekto.

Sukurtikte Darbo vietu CRUD

1. Naujas back end nuo boiler plate ar nulio
2. Naujas front end nuo boiler plate ar nulio
3. Sukurti darbo vietu CRUD

### back end

### mysql lenteles

1. Sukurti darbo vietu lentele su stulpeliais: id, title, town, description, pay, is_active, category_id, created_at
2. Pridekite 5 darbo vietos irasus
3. sukurti lentele categories su stulpeliais: id, title
4. pridekite 3-5 kategorijas

### routes

1. GET /jobs grazina visas darbo vietas
2. GET /jobs/archived grazina visas neaktyvias darbo vietas
3. GET /jobs/:id grazina viena darbo vieta
4. GET /jobs/:town grazina visas darbo vietas pagal miesta
5. POST /jobs sukurti nauja darbo vieta
6. PUT /jobs/:id atnaujinti darbo vieta
7. DELETE /jobs/:id istrinti darbo vieta
8. GET /categories grazina visas kategorijas su id ir title

### front end

1. Prisideti routeri.
2. Sukurti puslapius: Home, Jobs, SingleJob

### Home

1. Atvaizduoti trumpa aprasyma apie projekta
2. Atvaizduoti visas darbo vietas
3. Paspaudus ant darbo vietos pavadinimo nueiti i SingleJob puslapi

### Jobs

1. Atvaizduoti visas darbo vietas
2. Paspaudus ant darbo vietos pavadinimo nueiti i SingleJob puslapi
3. Mygtukas "Add Job" kuris veda i Add Job puslapi

### jobs filtai (galit fronte galit backe)

1. Filtruoti darbo vietas pagal miesta
2. Filtruoti darbo vietas pagal kategorija
3. Filtruoti darbo vietas pagal atlyginima
4. Rikiuoti darbo vietas pagal atlyginima
5. Rikiuoti darbo vietas pagal sukurimo data

### SingleJob

1. Atvaizduoti visa informacija apie darbo vieta
2. Atvaizduoti mygtuka "Back to jobs" kuris veda i Jobs puslapi
3. Mygtukas istrinti darbo vietai istrinti (keiciam is_active i 0)

### Add Job

1. Sukurti forma naujai darbo vietai sukurti.
2. Validuojam visus laukus, atvaizduojam atitinkamas klaidas.
3. Kategorijas pasirenkam is selecto.
