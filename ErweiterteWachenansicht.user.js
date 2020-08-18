// ==UserScript==
// @name         Erweiterte Wachenansicht
// @version      1.6.7
// @author       Allure149/Sanni
// @include      *://www.leitstellenspiel.de/buildings/*
// @include      *://leitstellenspiel.de/buildings/*
// @include      *://www.missionchief.com/buildings/*
// @include      *://missionchief.com/buildings/*
// @include      *://www.meldkamerspel.com/buildings/*
// @include      *://meldkamerspel.com/buildings/*
// @updateURL    https://github.com/types140/ErweiterteWachenansicht/raw/master/ErweiterteWachenansicht.user.js
// @grant        none
// ==/UserScript==
/* global $ */

$(function() {
    const arrFahrzeugDatenDE = [{ id: 0, name: "LF 20", personal: 9 },
                                { id: 1, name: "LF 10", personal: 9 },
                                { id: 2, name: "DLK 23", personal: 3 },
                                { id: 3, name: "ELW 1", personal: 3 },
                                { id: 4, name: "RW", personal: 3 },
                                { id: 5, name: "GW-Atemschutz", personal: 3 },
                                { id: 6, name: "LF 8/6", personal: 9 },
                                { id: 7, name: "LF 20/16", personal: 9 },
                                { id: 8, name: "LF 10/6", personal: 9 },
                                { id: 9, name: "LF 16-TS", personal: 9 },
                                { id: 10, name: "GW-Öl", personal: 3 },
                                { id: 11, name: "GW-L2-Wasser", personal: 3 },
                                { id: 12, name: "GW-Messtechnik", personal: 3 },
                                { id: 13, name: "SW 1000", personal: 3 },
                                { id: 14, name: "SW 2000", personal: 6 },
                                { id: 15, name: "SW 2000-Tr", personal: 3 },
                                { id: 16, name: "SW KatS", personal: 3 },
                                { id: 17, name: "TLF 2000", personal: 3 },
                                { id: 18, name: "TLF 3000", personal: 3 },
                                { id: 19, name: "TLF 8/8", personal: 3 },
                                { id: 20, name: "TLF 8/18", personal: 3 },
                                { id: 21, name: "TLF 16/24-Tr", personal: 3 },
                                { id: 22, name: "TLF 16/25", personal: 6 },
                                { id: 23, name: "TLF 16/45", personal: 3 },
                                { id: 24, name: "TLF 20/40", personal: 3 },
                                { id: 25, name: "TLF 20/40-SL", personal: 3 },
                                { id: 26, name: "TLF 16", personal: 3 },
                                { id: 27, name: "GW-Gefahrgut", personal: 3 },
                                { id: 28, name: "RTW", personal: 2 },
                                { id: 29, name: "NEF", personal: 2 },
                                { id: 30, name: "HLF 20", personal: 9 },
                                { id: 31, name: "RTH", personal: 1 },
                                { id: 32, name: "FuStW", personal: 2 },
                                { id: 33, name: "GW-Höhenrettung", personal: 9 },
                                { id: 34, name: "ELW 2", personal: 6 },
                                { id: 35, name: "leBefKw", personal: 3 },
                                { id: 36, name: "MTW", personal: 9 },
                                { id: 37, name: "TSF-W", personal: 6 },
                                { id: 38, name: "KTW", personal: 2 },
                                { id: 39, name: "GKW", personal: 9 },
                                { id: 40, name: "MTW-TZ", personal: 4 },
                                { id: 41, name: "MzKW", personal: 9 },
                                { id: 42, name: "LKW K9", personal: 3 },
                                { id: 43, name: "BRmG R", personal: 0 },
                                { id: 44, name: "Anh. DLE", personal: 0 },
                                { id: 45, name: "MLW 5", personal: 6 },
                                { id: 46, name: "WLF", personal: 3 },
                                { id: 47, name: "AB-Rüst", personal: 0 },
                                { id: 48, name: "AB-Atemschutz", personal: 0 },
                                { id: 49, name: "AB-Öl", personal: 0 },
                                { id: 50, name: "GruKw", personal: 9 },
                                { id: 51, name: "FüKw", personal: 3 },
                                { id: 52, name: "GefKw", personal: 2 },
                                { id: 53, name: "GW Dekon-P", personal: 6 },
                                { id: 54, name: "AB-Dekon-P", personal: 0 },
                                { id: 55, name: "KdoW-LNA", personal: 1 },
                                { id: 56, name: "KdoW-OrgL", personal: 1 },
                                { id: 57, name: "FwK", personal: 2 },
                                { id: 58, name: "KTW Typ B", personal: 2 },
                                { id: 59, name: "ELW 1 (SEG)", personal: 2 },
                                { id: 60, name: "GW-SAN", personal: 6 },
                                { id: 61, name: "Polizeihubschrauber", personal: 3 },
                                { id: 62, name: "AB-Schlauch", personal: 0 },
                                { id: 63, name: "GW-Taucher", personal: 2 },
                                { id: 64, name: "GW-Wasserrettung", personal: 6 },
                                { id: 65, name: "LKW 7 Lkr 19 tm", personal: 2 },
                                { id: 66, name: "Anh MzB", personal: 0 },
                                { id: 67, name: "Anh SchlB", personal: 0 },
                                { id: 68, name: "Anh MzAB", personal: 0 },
                                { id: 69, name: "Tauchkraftwagen", personal: 2 },
                                { id: 70, name: "MZB", personal: 0 },
                                { id: 71, name: "AB-MZB", personal: 0 },
                                { id: 72, name: "WaWe 10", personal: 5 },
                                { id: 73, name: "GRTW", personal: 6 },
                                { id: 74, name: "NAW", personal: 3 },
                                { id: 75, name: "FLF", personal: 3 },
                                { id: 76, name: "Rettungstreppe", personal: 2 },
                                { id: 77, name: "AB-Gefahrgut", personal: 0 },
                                { id: 78, name: "AB-Einsatzleitung", personal: 0 },
                                { id: 79, name: "SEK - ZF", personal: 4 },
                                { id: 80, name: "SEK - MTF", personal: 9 },
                                { id: 81, name: "MEK - ZF", personal: 4 },
                                { id: 82, name: "MEK - MTF", personal: 9 },
                                { id: 83, name: "GW-Werkfeuerwehr", personal: 9 },
                                { id: 84, name: "ULF mit Löscharm", personal: 3 },
                                { id: 85, name: "TM 50", personal: 3 },
                                { id: 86, name: "Turbolöscher", personal: 3 },
                                { id: 87, name: "TLF 4000", personal: 3 },
                                { id: 88, name: "KLF", personal: 6 },
                                { id: 89, name: "MLF", personal: 6 },
                                { id: 90, name: "HLF 10", personal: 9 },
                                { id: 91, name: "Rettungshundefahrzeug", personal: 5 },
                                { id: 92, name: "Anh Hund", personal: 0 },
                                { id: 93, name: "MTW-OV", personal: 5 },
                                { id: 94, name: "DHuFüKw", personal: 2}];

    const arrFahrzeugDatenEN = [{ id: 0, name: "Type 1 fire engine", personal: 6},
                                { id: 1, name: "Type 2 fire engine", personal: 3},
                                { id: 2, name: "Platform truck", personal: 3},
                                { id: 3, name: "Battalion Chief Unit", personal: 3},
                                { id: 4, name: "Heavy Rescue Vehicle", personal: 4},
                                { id: 5, name: "ALS Ambulance", personal: 2},
                                { id: 6, name: "Mobile air", personal: 3},
                                { id: 7, name: "Water Tanker", personal: 3},
                                { id: 8, name: "Utility unit", personal: 4},
                                { id: 9, name: "HazMat", personal: 6},
                                { id: 10, name: "Patrol Car", personal: 2},
                                { id: 11, name: "HEMS", personal: 1},
                                { id: 12, name: "Mobile command vehicle", personal: 6},
                                { id: 13, name: "Quint", personal: 6},
                                { id: 14, name: "Police helicopter", personal: 2},
                                { id: 15, name: "Fly-Car", personal: 1},
                                { id: 16, name: "SWAT Armoured Vehicle", personal: 6},
                                { id: 17, name: "ARFF Crash Tender", personal: 3},
                                { id: 18, name: "Rescue Engine", personal: 6},
                                { id: 19, name: "K-9 Unit", personal: 2},
                                { id: 20, name: "Mass Casualty Unit", personal: 6},
                                { id: 21, name: "Heavy Rescue + Boat", personal: 4},
                                { id: 22, name: "Boat Trailer", personal: 0},
                                { id: 23, name: "Police Motorcycle", personal: 1},
                                { id: 24, name: "Large Fireboat", personal: 0},
                                { id: 25, name: "Large Rescue Boat", personal: 0},
                                { id: 26, name: "SWAT SUV", personal: 4},
                                { id: 27, name: "BLS Ambulance", personal: 2 },
                                { id: 28, name: "EMS Rescue", personal: 5 },
                                { id: 29, name: "EMS Chief", personal: 2 },
                                { id: 30, name: "Type 3 engine", personal: 5 },
                                { id: 31, name: "Type 5 engine", personal: 3 },
                                { id: 32, name: "Type 7 engine", personal: 2 },
                                { id: 33, name: "Pumper Tanker", personal: 6 },
                                { id: 34, name: "Crew Carrier", personal: 12 },
                                { id: 35, name: "Water drop helicopter", personal: 5 },
                                { id: 36, name: "Air tanker", personal: 5 },
                                { id: 37, name: "Heavy air tanker", personal: 5 },
                                { id: 38, name: "Type 4 engine", personal: 5 },
                                { id: 39, name: "Type 6 engine", personal: 2 }];

    const arrFahrzeugDatenNL = [{ id: 0, name: "SIV | Snel Interventie Voertuig", personal: 2},
                                { id: 1, name: "TS 8/9 | Tankautospuit (8/9 personen)", personal: 9},
                                { id: 2, name: "AL | Autoladder", personal: 3},
                                { id: 3, name: "DA-OvD-B | Officier van Dienst - Brandweer", personal: 1},
                                { id: 4, name: "HV-G | Hulpverleningsvoertuig Groot", personal: 3},
                                { id: 5, name: "AB | Adembeschermingsvoertuig", personal: 3},
                                { id: 6, name: "TST 8/9 | Tankautospuit Terreinvaardig (8/9 personen)", personal: 9},
                                { id: 7, name: "TST 6/7 | Tankautospuit Terreinvaardig (6/7 personen)", personal: 7},
                                { id: 8, name: "TST 4 | Tankautospuit Terreinvaardig (4 personen)", personal: 4},
                                { id: 9, name: "TS 4 | Tankautospuit (4 personen)", personal: 4},
                                { id: 10, name: "SL | Slangenwagen", personal: 3},
                                { id: 11, name: "WVD | Waarschuwings- en Verkenningsdienst", personal: 4},
                                { id: 12, name: "TST-NBB 8/9 | Tankautospuit Natuurbrandbestrijding (8/9 personen)", personal: 9},
                                { id: 13, name: "TS8 (4x4)", personal: 0},
                                { id: 14, name: "TST-NBB 6/7 | Tankautospuit Natuurbrandbestrijding (6/7 personen)", personal: 7},
                                { id: 15, name: "TST-NBB 4 | Tankautospuit Natuurbrandbestrijding (4 personen)", personal: 4},
                                { id: 16, name: "Ambulance", personal: 2},
                                { id: 17, name: "TS 6/7 | Tankautospuit (6/7 personen)", personal: 7},
                                { id: 18, name: "HW | Hoogwerker", personal: 3},
                                { id: 19, name: "DA-HOvD-B | Hoofd-Officier van Dienst - Brandweer", personal: 1},
                                { id: 20, name: "DA | Dienstauto (4 personen)", personal: 4},
                                { id: 21, name: "DB | Dienstbus (9 personen)", personal: 0},
                                { id: 22, name: "DA Noodhulp | Dienstauto Noodhulp", personal: 2},
                                { id: 23, name: "Lifeliner", personal: 4},
                                { id: 24, name: "AGS | Adviseur Gevaarlijke Stoffen", personal: 2},
                                { id: 25, name: "DB Noodhulp | Dienstbus Noodhulp", personal: 2},
                                { id: 26, name: "HA | Haakarmvoertuig", personal: 3},
                                { id: 27, name: "ABH | Adembeschermingshaakarmbak", personal: 0},
                                { id: 28, name: "Politiehelikopter", personal: 3},
                                { id: 29, name: "WTH | Watertransporthaakarmbak", personal: 0},
                                { id: 30, name: "Zorgambulance | B-ambulance", personal: 2},
                                { id: 31, name: "CO | Commandovoertuig", personal: 3},
                                { id: 32, name: "COH | Commandohaakarmbak", personal: 0},
                                { id: 33, name: "WO | Waterongevallenvoertuig", personal: 6},
                                { id: 34, name: "TW | Tankwagen", personal: 3},
                                { id: 35, name: "OvD-P | Officier van Dienst - Politie", personal: 1},
                                { id: 36, name: "WOA | Waterongevallenaanhanger", personal: 0},
                                { id: 37, name: "MMT-Auto", personal: 4},
                                { id: 38, name: "OvD-G | Officier van Dienst - Geneeskunde", personal: 1},
                                { id: 39, name: "ME Commandovoertuig | Mobiele Eenheid - Commandovoertuig", personal: 4},
                                { id: 40, name: "ME Flexbus | Mobiele Eenheid - Flexbus", personal: 2},
                                { id: 41, name: "CT (8x8) | Crashtender (8x8)", personal: 3},
                                { id: 42, name: "CT (6x6) | Crashtender (6x6)", personal: 3},
                                { id: 43, name: "CT (4x4) | Crashtender (4x4)", personal: 3},
                                { id: 44, name: "AFO/OSC | Airport Fire Officer / On Scene Commander", personal: 2},
                                { id: 45, name: "DBH | Dompelpomphaakarmbak", personal: 0},
                                { id: 46, name: "DM Noddhulp | Dienstmotorfiets Noodhulp", personal: 2},
                                { id: 47, name: "DA Hondengeleider | Dienstauto Hondengeleider", personal: 2},
                                { id: 48, name: "DB Hondengeleider | Dienstbus Hondengeleider", personal: 2},
                                { id: 49, name: "PM-OR | Materieelvoertuig - Oppervlakteredding", personal: 9},
                                { id: 50, name: "TS-OR | Tankautospuit - Oppervlakteredding", personal: 9},
                                { id: 51, name: "HVH | HulpverleningsHaakarmbak", personal: 0},
                                { id: 52, name: "RR | Rapid Responder", personal: 1},
                                { id: 53, name: "AT-C | AT-Commandant", personal: 2},
                                { id: 54, name: "AT-O | AT-Operator", personal: 4},
                                { id: 55, name: "AT-M | AT-Materiaalwagen", personal: 2},
                                { id: 56, name: "DA-VL | Dienstauto Voorlichter", personal: 1},
                                { id: 57, name: "DA OVDG-RR | Dienstvoertuig Officier van Dienst-Geneeskundig/Rapid Responder", personal: 1}];

    let arrFahrzeugDaten = [];
    let setPersonnel = "", setNeeded = "", setExpansion = "", setURL = "", setEdit = "", setAssignPersonnel = "", setCrewMax = "", setCrewActMax = "", setAvailable = "", setPresent = "";
    let setInClass = "", setCarWord = "", setAllAssigned = "", setWithoutSchool = "", setWithoutCar = "", setInSchool = "", setEducation = "", setHeading = "", setOwner = "", setAssemblyArea = "";

    if(I18n.locale == "de_DE"){
        arrFahrzeugDaten = arrFahrzeugDatenDE;
        setPersonnel = "Personal";
        setNeeded = "benötigt";
        setExpansion = "Ausbau";
        setURL = "leitstellenspiel.de";
        setEdit = "Bearbeiten";
        setAssignPersonnel = "Personalzuweisung";
        setCrewMax = "Besatzung (Maximal)";
        setCrewActMax = "Besatzung (Aktuell / Maximal)";
        setAvailable = "Verfügbar";
        setPresent = "vorhanden";
        setInClass = "Im Unterricht";
        setCarWord = "Fahrzeug";
        setAllAssigned = "alle zugewiesen";
        setWithoutSchool = "ohne Ausbildung";
        setWithoutCar = "ohne Fahrzeug";
        setInSchool = "in Ausbildung";
        setEducation = "Ausbildung";
        setHeading = "WacheAnzahl";
        setOwner = "Besitzer";
        setAssemblyArea = "Fahrzeuge am Bereitstellungsraum";
    } else if(I18n.locale == "en_US"){
        arrFahrzeugDaten = arrFahrzeugDatenEN;
        setPersonnel = "Personnel";
        setNeeded = "needed";
        setExpansion = "Expansion";
        setURL = "missionchief.com";
        setEdit = "Edit";
        setAssignPersonnel = "Assign personnel";
        setCrewMax = "Crew (Max)";
        setCrewActMax = "Crew (actual / max)";
        setAvailable = "Available";
        setPresent = "present";
        setInClass = "In a lesson";
        setCarWord = "Vehicle";
        setAllAssigned = "all assigned";
        setWithoutSchool = "without education";
        setWithoutCar = "without a car";
        setInSchool = "in training";
        setEducation = "Education";
        setHeading = "StationAmount";
        setOwner = "Owner";
        setAssemblyArea = "Vehicles at the staging area";
    } else if(I18n.locale == "nl_NL"){
        arrFahrzeugDaten = arrFahrzeugDatenNL;
        setPersonnel = "Personeel";
        setNeeded = "benodigd";
        setExpansion = "Verwijderen";
        setURL = "meldkamerspel.com";
        setEdit = "Bewerken";
        setAssignPersonnel = "Personeel toewijzen";
        setCrewMax = "Bezetting (Maximaal)";
        setCrewActMax = "Bezetting (Actueel / Maximaal)";
        setAvailable = "Beschikbaar";
        setPresent = "voorhanden";
        setInClass = "In de klas";
        setCarWord = "voertuig";
        setAllAssigned = "allemaal toegewezen";
        setWithoutSchool = "zonder opleiding";
        setWithoutCar = "zonder een voertuig";
        setInSchool = "In training";
        setEducation = "opleiding";
        setHeading = "PostAantal";
        setOwner = "Eigenaar";
        setAssemblyArea = "Voertuigen op de verzamelplaats";
    }

    function getSumBereitstellung(){
        let getVehicleId = "";
        let arrVehicles = [];
        let found = false;
        let output = "";

        $("#vehicle_table >> tr").each(function(key, val){
            found = false;
            // Fahrzeug-ID herausfiltern
            getVehicleId = $("td", this).find("img").attr("vehicle_type_id");

            // das erste Object innerhalb des Arrays
            if(arrVehicles.length == 0) arrVehicles.push({id: getVehicleId, count: 1});
            else {
                $.each(arrVehicles, function(key, val) {
                    if(val.id == getVehicleId) {
                        // Stimmt die ID im Array mit der ausgelesenen ID des aktuellen Fahrzeugs ueberein
                        // erhoehe die Anzahl
                        val.count++;

                        found = true;
                        return false;
                    }
                });

                if(found == false) arrVehicles.push({id: getVehicleId, count: 1});
            }
        });

        // durchlaufe das Array mit den gefundenen Fahrzeugen
        $.each(arrVehicles, function(key1, val1){
            if(val1.id == undefined) return true;

            output += val1.count + "x ";
            $.each(arrFahrzeugDaten, function(key2, val2){ if(val1.id == val2.id) output += val2.name; });
            output += "<br>";
        });

        $("h1[building_type='14']").next().after("<dl><dt>" + setAssemblyArea + ":</dt><dd>" + output + "</dd></dl>");
    }

    function getPersonalAnzahl(getIgnoriereCheckFMS) {
        let setEinfuegepunkt = "";
        let getFahrzeugTypId = -1;
        let getPersonalBenoetigt = 0;
        let getAktuellPersonal = 0;

        $("#vehicle_table > tbody > tr").each(function() {
            // wenn FMS NICHT geprueft werden soll zaehle das Personal von allen Fahrzeugen
            if(getIgnoriereCheckFMS) {
                getFahrzeugTypId = $(this).find("img").attr("vehicle_type_id");
                getAktuellPersonal += +($(this).find("td").last().text().trim());
            // wenn FMS geprueft werden soll ...
            } else {
                // ... und FMS Status 6 gesetzt ist ignoriere das Personal
                if($(this).find("span").hasClass("building_list_fms_6")){
                    getFahrzeugTypId = -1;
                // ... und FMS Status 6 NICHT gesetzt ist zaehle das Personal dazu
                } else {
                    getFahrzeugTypId = $(this).find("img").attr("vehicle_type_id");
                    getAktuellPersonal += +($(this).find("td").last().text().trim());
                }
            }

            // Quickfix bei Wachen ohne Fahrzeugen
            if($(this).find("img").attr("vehicle_type_id") == "undefined") getFahrzeugTypId = "";

            // pruefe ob aktuelle FahrzeugTypId mit einer ID aus der Fahrzeugliste
            // oben uebereinstimmt. Wenn ja: zaehle zum benoetigten Personal dazu
            // und verlasse sofort die each-Schleife
            $.each(arrFahrzeugDaten, function(keyFahrzeugdaten, valFahrzeugdaten) {
                if(getFahrzeugTypId == valFahrzeugdaten.id) {
                    getPersonalBenoetigt += valFahrzeugdaten.personal;
                    return false;
                }
            });
        });

        // nth-child = 4 => THW, SEG
        // nth-child = 6 => Feuerwache, Rettungswache, Bereitschaftspolizei, Polizeisondereinheiten
        // nth-child = 8 => Rettungshubschrauberstation, Polizeihubschrauberstation,
        //                  Wasserrettungswache, Feuerwache mit Abrollbehaeltern
        if($("dl > dt:nth-child(3)").text() == setPersonnel + ":") {
            setEinfuegepunkt = $("dl > dd:nth-child(4)");
            $("dl > dt:nth-child(3) > strong").text(setPersonnel + " " + setPresent + ":");
        } else if($("dl > dt:nth-child(5)").text() == setPersonnel + ":") {
            setEinfuegepunkt = $("dl > dd:nth-child(6)");
            $("dl > dt:nth-child(5) > strong").text(setPersonnel + " " + setPresent + ":");
        } else {
            setEinfuegepunkt = $("dl > dd:nth-child(8)");
            $("dl > dt:nth-child(7) > strong").text(setPersonnel + " " + setPresent + ":");
        }

        // orientiert sich am div innerhalb des dd-Tags, daher before
        if(getAktuellPersonal < getPersonalBenoetigt) setEinfuegepunkt.after("<dt>" + setPersonnel + " " + setNeeded + ":</dt><dd>" + getAktuellPersonal + " Angestellte aktuell, " + getPersonalBenoetigt + " Angestellte maximal</dd>");
        else setEinfuegepunkt.after("<dt>" + setPersonnel + " " + setNeeded + ":</dt><dd>" + getPersonalBenoetigt + " Angestellte</dd>");
    }

    function getAusbau(getBereitsGebaut) {
        let getAusbauzeit = "";
        let getAusbauname = "";
        let getAusbaudaten = "";
        let arrAusbauten = [];
        let getStatus = 0;
        let found = false;
        let getCountdown = "";
        let outputName = "";

        // Gebaeude ohne Ausbaumoeglichkeit ausschliessen
        if($("#ausbauten").length == 0) return false;

        $("#ausbauten > table > tbody > tr").each(function() {
            found = false;
            getAusbauname = $(this).find("b").text().replace("Zur Warteschlange hinzufügen:", "");
            getCountdown = $(this).find("span[id^='extension_countdown_']").text(); // absolut einmalig auf der aktuellen Seite

            // noch nicht ausgebaut - also existiert der Button
            if($(".btn-group", this).length) {
                getStatus = 0;
            // entweder bereits gebaut ...
            } else if($("span", this).length) {
                // existiert ein Element mit einer ID ist es die Uhrzeit
                if(typeof $(this).find("span").attr("id") !== typeof undefined && $(this).find("span").attr("id") !== false) {
                    getStatus = $(this).find("span").attr("id");
                // existiert ein Element mit einer Class ist der Ausbau fertig
                } else {
                    getStatus = 1;
                }
            // ... oder ein Ausbau ist in Arbeit, sodass das Feld leer ist
            } else {
                getStatus = 0;
            }

            // bei der ersten Ueberpruefung ist das Array noch leer - der erste Eintrag wird sofort eingefuegt
            if(arrAusbauten.length == 0) arrAusbauten.push({name:getAusbauname, status:getStatus, count:1});
            else {
                $.each(arrAusbauten, function(key, val){
                    // nur wenn der Ausbau und der Status (gebaut oder nicht gebaut) uebereinstimmen wird der Zaehler um 1 erhoeht
                    if(val.name == getAusbauname && val.status == getStatus){
                        val.count++;
                        found = true;
                        return false;
                    }
                });

                // sofern keine Uebereinstimmung gefunden wurde wird der neue Ausbau dem Array hinzugefuegt
                if(found == false){ arrAusbauten.push({ name:getAusbauname, status:getStatus, count:1 }); }
            }
        });

        $.each(arrAusbauten, function(key, val){
            // ist der Zaehler groesser 1 muss die Anzahl mit dem Name zusammengebaut werden
            if(val.count > 1) outputName = val.count + "x " + val.name;
            else outputName = val.name;

            // Abfragen welcher Ausbau welchen Status hat - entsprechende Ausgaben werden generiert
            if(val.status == 0) {
                if(getBereitsGebaut == false) getAusbaudaten += "<span class='label label-danger'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></span> " + outputName + "<br>";
            }
            else if(val.status == 1) getAusbaudaten += "<span class='label label-success'><span class='glyphicon glyphicon-ok' aria-hidden='true'></span></span> " + outputName + "<br>";
            else getAusbaudaten += "<span id='" + val.status + "' class='label label-success' style='background: orange;'>" + getCountdown + "</span> " + outputName + "<br>";
        });

        // finale Ausgabe
        $("dl").first().append("<dt><strong>Ausbauten:</strong></dt><dd>" + getAusbaudaten + "</dd>");
    }

    function setFMS() {
        const setLink = "https://www." + setURL + "/vehicles/";
        let getFahrzeugId = "";

        // Durchsuche Tabelle nach den Fahrzeug-IDs
        $("#vehicle_table > tbody > tr").each(function() {
            // Bei Hover ueber den Status wechselt der Cursor auf den Zeiger
            $(this).find("span").attr("style", "cursor: pointer");

            // Filtere die Fahrzeug-ID aus dem Link heraus
            getFahrzeugId = $(this).find("a").attr("href").replace("/vehicles/", "");

            // An den <span>-Tag wird ein neues Attribut names vehicle_id gesetzt und die ID des aktuellen
            // Fahrzeuges als value eingefuegt
            $(this).find("span").attr("vehicle_id", getFahrzeugId);
        });

        $("span").click(function(){
            // Wenn das Fahrzeug im Status 2 ist erhaelt es den Link fuer Status 6, und andersrum
            // Gleichzeitig wird die Fahrzeug-ID aus dem neu eingefuegten <span>-Tag ausgelesen
            // Am Ende wird die Seite neu geladen
            if($(this).hasClass("building_list_fms_2")) {
                $(this).attr("style", "cursor: pointer");
                $.get(setLink + $(this).attr("vehicle_id") + "/set_fms/6");
                warteAufReload();
            } else if($(this).hasClass("building_list_fms_6")) {
                $(this).attr("style", "cursor: pointer");
                $.get(setLink + $(this).attr("vehicle_id") + "/set_fms/2");
                warteAufReload();
            }
        });
    }

    function warteAufReload() {
        // 0,25 Sekunden wird auf den Reload gewartet, da die Seite den Statuswechsel sonst nicht mitbekommt
        setTimeout( function() { location.reload(); }, 250);
    }


    function setPersonalButton() {
        let getFahrzeugId = "";
        $("#vehicle_table > tbody > tr").each(function() {
            getFahrzeugId = $(this).find("a").attr("href").replace("/vehicles/", "");
            // Fuege den Button "Personalzuweisung" hinter die max. Personalzahl jedes Fahrzeugs hinzu
            if($(this).find("td").last().text().trim() !== "0") $(this).find("td").last().append("<a href='/vehicles/" + getFahrzeugId + "/zuweisung' class='btn btn-default btn-xs'>" + setAssignPersonnel + "</a>");
        });
    }

    function setEinsatzAusblenden() {
        $("#vehicle_table >> tr").each(function() {
            // Entferne vollstaendig die 4. Spalte der Tabelle = aktuelle Einsaetze
            $(":nth-child(5)", this).remove();
        });
    }

    function setAktuellMaxPersonal() {
        // Muss vor setPersonalButton() stehen da sonst der Inhalt des Buttons ebenfalls manipuliert wird
        let getAktuelleBesatzung = "";
        let getFahrzeugTypId = "";
        let getFahrzeugpersonal = "";

        // Bearbeite die Spaltenuebersicht zur besseren Orientierung/Erklaerung
        if($("th[data-column='4']").text() == setCrewMax) $("th[data-column='4']").text(setCrewActMax);

        $("#vehicle_table > tbody > tr").each(function() {
            // Finde FahrzeugId des aktuellen Fahrzeuges
            getFahrzeugTypId = $(this).find("img").attr("vehicle_type_id");

            // Durchlaufe das Fahrzeug-Array nach der FahrzeugId und finde die maximale Besatzungsstärke
            $.each(arrFahrzeugDaten, function(keyFahrzeugdaten, valFahrzeugdaten) {
                if(getFahrzeugTypId == valFahrzeugdaten.id) {
                    getFahrzeugpersonal = valFahrzeugdaten.personal;
                    return false;
                }
            });

            // Finde die aktuelle Besatzung ...
            getAktuelleBesatzung = $(this).find("td").last().text().trim();
            $(this).find("td").last().text(function() {
                // ... und ersetze den gesamten Text durch Aktuellebesatzung / MaximalBesatzung
                return $(this).text().replace(getAktuelleBesatzung, getAktuelleBesatzung + " / " + getFahrzeugpersonal);
            });
        });
}

    function getPersonalAusbildung(){
        let arrPersonalAusbildung = [];
        let getIstInArray = "";
        let getAusbildung = "";
        let getFahrzeug = "";
        let getVerfuegbarkeit = "";
        let found = false;
        let output = "";
        let getPersonalOhneFahrzeug = 0;
        let getPersonalInAusbildung = 0;

        $("#personal_table > tbody > tr").each(function() {
            // TODO: wenn im Unterricht dann auch val.count erhöhen sodass als ausgebildetes Personal gezählt wird
            found = false;
            getPersonalOhneFahrzeug = 0;
            getPersonalInAusbildung = 0;

            // filtert die Ausbildungen der aktuellen Person
            getAusbildung = $("td:nth-child(2)", this).text().trim(" ");

            // filtert die Zuweisung der aktuellen Person zu einem Fahrzeug
            getFahrzeug = $("td:nth-child(3)", this).text().trim(" ");

            // filtert die Verfuegbarkeit der aktuellen Person
            getVerfuegbarkeit = $("td:nth-child(4)", this).text().trim(" ").replace(setInClass + ": ", "").replace(" Lehrgang", "").replace("-Ausbildung", "");

            // wenn sich die Person auf einem Einsatz befindet muss sie den Status Verfügbar erhalten - anders kann es sonst nicht
            // ausgewertet werden
            if (getVerfuegbarkeit.indexOf(setCarWord) != -1) getVerfuegbarkeit = setAvailable;

            // Nur bei GW-Hoehenrettung: ist die Person ausgebildet ist es GW-Höhenrettung, im Lehrgang heißt es nur Höhenrettung
            if(getVerfuegbarkeit == "Höhenrettung") getVerfuegbarkeit = "GW-" + getVerfuegbarkeit;

            // ist die aktuelle Person keinem Fahrzeug zugewiesen ist es ohne Fahrzeug ...
            if(!getFahrzeug) getPersonalOhneFahrzeug = 1;

            // wenn die aktuelle Person bereits eine Ausbildung hat und sich in einem Lehrgang befindet muessen mehrere
            // Lehrgaenge aneinander gekettet werden
            if(getAusbildung && getVerfuegbarkeit != setAvailable) {
                getAusbildung += ", " + getVerfuegbarkeit;
                getPersonalInAusbildung++; // ... und die Zahl der Personen in Ausbildung wird um 1 erhoeht
            // besitzt die aktuelle Person keine Ausbildung, befindet sich aber im Lehrgang, wird dieser als erste Ausbildung gewertet
            } else if(!getAusbildung && getVerfuegbarkeit != setAvailable) {
                getAusbildung = getVerfuegbarkeit;
                getPersonalInAusbildung++;// ... und die Zahl der Personen in Ausbildung wird um 1 erhoeht
            // besitzt die aktuelle Person weder eine Ausbildung, noch ist sie in einem Lehrgang, wird der Status auf "ohne Ausbildung" gesetzt
            } else if(!getAusbildung && getVerfuegbarkeit == setAvailable) {
                getAusbildung = setWithoutSchool;
            }

            // das if wird nur bei der ersten auszuwertenden Person genutzt, andernfalls ...
            if(arrPersonalAusbildung.length == 0) arrPersonalAusbildung.push({name:getAusbildung, count:1, withoutcar:getPersonalOhneFahrzeug, inschool:getPersonalInAusbildung});

            // ... beginnt die Auswertung des Arrays
            else {
                $.each(arrPersonalAusbildung, function(key, val) {
                    // wenn sich die Ausbildung der aktuellen Person im Array befindet ...
                    if(val.name == getAusbildung) {
                        // ... und sich in keinem Fahrzeug befindet, erhoehe "ohne Fahrzeug" um eins
                        if(!getFahrzeug) val.withoutcar++;

                        // ... und sich in einem Lehrgang befindet, erhoehe "in Ausbildung" um eins
                        if(getVerfuegbarkeit != setAvailable) val.inschool++;

                        // ... erhoehe die insgesamt zu zaehlenden Personen um eins
                        val.count++;

                        // ... und markiere als gefunden
                        found = true;
                        return false;
                    }
                });

                // wurde die Ausbildung der aktuellen Person nicht im Array gefunden muss es hinzugefuegt werden
                if(found == false) arrPersonalAusbildung.push({name:getAusbildung, count:1, withoutcar:getPersonalOhneFahrzeug, inschool:getPersonalInAusbildung});
            }
        });

        // Ausgabe: durchlaufe das gesamte Array
        $.each(arrPersonalAusbildung, function(key, val){
            output += "<tr style='border-bottom: 1px solid #DCDCDC'>";
            output += "<td style='text-align:right'>" + val.count + "x&nbsp;</td>";
            output += "<td style='text-align:center'>" + val.name + " </td>";
            output += "<td style='text-align:right'>&nbsp;(";

            // Ist die aktuelle Person einem Fahrzeug zugewiesen oder befindet sich im Lehrgang?
            if(val.withoutcar > 0 || val.inschool > 0){
                // ... pruefe ob es einem Fahrzeug zugewiesen ist und sich in einer Ausbildung befindet
                if(val.withoutcar > 0 && val.inschool > 0) output += val.withoutcar + " " + setWithoutCar + ", " + val.inschool + " " + setInSchool;

                // ... pruefe ob es einem Fahrzeug zugewiesen ist (im Lehrgang ist sie nicht)
                else if(val.withoutcar > 0) output += val.withoutcar + " " + setWithoutCar;

                // ... ansonsten befinden sich alle Personen mit gleichem Lehrgang in Fahrzeugen, einige koennen aber auf Lehrgang sein
                else output += setAllAssigned + ", " + val.inschool + " " + setInSchool;

            // Alle auszuwertenden Personen mit gleichem Lehrgang und ohne Ausbildung wurden Fahrzeugen zugewiesen
            } else {
                output += setAllAssigned;
            }

            output += ")</td>";
            output += "</tr>";
        });

        // Fuege dem "Header" der Personenuebersichtsseite hinzu
        if($("dl > dt:nth-child(1)").text() == setHeading) $("dl").last().append("<dt><strong>" + setEducation + ":</strong></dt><dd><table>" + output + "</table></dd>");
    }

    async function getCars(){
        let geturl = "";
        let output = "";
        let arrCars = [];
        let found = false;
        let carname = "";

        geturl = $("dd:first > a").attr("href");

        var response = $.parseHTML(await getAllAssignedUnits(geturl));

        var vehicles = $(response).find("tbody > tr").find("td:nth-child(1)").find("img");

        vehicles.each((e, t) => {
            found = false;
            //get URL of vehicle (vehicle ID)
            var vehicleUrl = $(t).attr("vehicle_type_id");

            $.each(arrFahrzeugDaten, function(key, val){
                if(val.id == vehicleUrl){
                    carname = val.name;
                    return false;
                }
            });

            // das if wird nur bei der ersten auszuwertenden Person genutzt, andernfalls ...
            if(arrCars.length == 0) arrCars.push({name:carname, count:1});

            // ... beginnt die Auswertung des Arrays
            else {
                $.each(arrCars, function(key, val) {
                    // wenn sich die Ausbildung der aktuellen Person im Array befindet ...
                    if(val.name == carname) {
                        // ... erhoehe die insgesamt zu zaehlenden Personen um eins
                        val.count++;

                        // ... und markiere als gefunden
                        found = true;
                        return false;
                    }
                });

                // wurde die Ausbildung der aktuellen Person nicht im Array gefunden muss es hinzugefuegt werden
                if(found == false) arrCars.push({name:carname, count:1});
            }
        });

        arrCars.sort(function(a, b) {
            return a[1] - b[1];
        });

        $.each(arrCars, function(key, val){
            output += "<tr style='border-bottom: 1px solid #DCDCDC'>";
            output += "<td style='text-align:right'>" + val.count + "x&nbsp;</td>";
            output += "<td style='text-align:center'>" + val.name + " </td>";
            output += "</tr>";
        });

        if ($("dl > dt:nth-child(1)").text() == setHeading) $("dl").last().append("<dt><strong>"+ setCarWord +":</strong></dt><dd><table>" + output + "</table></dd>");

    }

    function getAllAssignedUnits(vehUrl)
    {
        //Make ASYNC Call to workers page
        return new Promise(resolve => {
            $.ajax({
                type: "GET",
                url: vehUrl,
                success: function(data)
                {
                    resolve(data);
                }
            });
        })
    }

    function newTabOverview(){
        $(".nav-tabs").append("<li role='presentation'><a href='#wa-overview' aria-controls='ausbauten' role='tab' data-toggle='tab'>Übersicht</a></li>");
        $(".tab-content").append("<div role='tabpanel' class='tab-pane' id='wa-overview'>Übersichtsinhalt</div>");
    }

    const ignoriereFMS = true; // auf true setzen um FMS 6 zu ignorieren
    const nurGebauteAusbauten = false; // auf true setzen um nur bereits gebaute oder in Bau befindliche Ausbauten darzustellen

    // nur auf eigene Wachen anwenden
    if($("dl > dt:nth-child(1) > strong").text() !== setOwner + ":") {
        getSumBereitstellung();
        getPersonalAnzahl(ignoriereFMS);
        getAusbau(nurGebauteAusbauten);
        setFMS();
        //setAktuellMaxPersonal();
        setPersonalButton();
        //setEinsatzAusblenden();
        getPersonalAusbildung();
        getCars();
        //newTabOverview();
        //settings();
    }
});
