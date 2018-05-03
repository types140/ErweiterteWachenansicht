// ==UserScript==
// @name         Erweiterte Wachenansicht
// @version      1.0.2
// @author       Allure149
// @include      *://www.leitstellenspiel.de/buildings/*
// @exclude      *://www.leitstellenspiel.de/buildings/*/personals
// @grant        none
// ==/UserScript==
/* global $ */

$(function() {
    const arrFahrzeugDaten = [{ id: 0, name: "LF 20", personal: 9 },
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
                              { id: 63, name: "GW-Taucher", personal: 6 },
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
                              { id: 82, name: "MEK - MTF", personal: 9 }];

    function getPersonalAnzahl(getCheckFMS) {
        let setEinfuegepunkt = "";
        let getFahrzeugTypId = -1;
        let getPersonalBenoetigt = 0;

        $("#vehicle_table > tbody > tr").each(function() {
            // wenn FMS geprueft werden soll ...
            if(getCheckFMS) {
                // ... und FMS Status 6 gesetzt ist ignoriere das Personal
                if($(this).find("span").hasClass("building_list_fms_6")){
                    getFahrzeugTypId = -1;
                // ... und FMS Status 6 NICHT gesetzt ist zaehle das Personal dazu
                } else {
                    getFahrzeugTypId = $(this).find("img").attr("vehicle_type_id");
                }
            // wenn FMS NICHT geprueft werden soll zaehle das Personal von allen
            // Fahrzeugen
            } else {
                getFahrzeugTypId = $(this).find("img").attr("vehicle_type_id");
            }

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
        if($("dl > dt:nth-child(3)").text() == "Personal:") setEinfuegepunkt = $("dl > dd:nth-child(4) > div");
        else if($("dl > dt:nth-child(5)").text() == "Personal:") setEinfuegepunkt = $("dl > dd:nth-child(6) > div");
        else setEinfuegepunkt = $("dl > dd:nth-child(8) > div");

        // orientiert sich am div innerhalb des dd-Tags, daher before
        setEinfuegepunkt.before("(" + getPersonalBenoetigt + " benötigt) ");
    }

    function getAusbauDaten() {
        let setTextKeinAusbau = "derzeit nicht"; // Text wenn kein Ausbau stattfindet
        let getAusbauzeit = "";
        let getAusbauname = "";

        // Gebaeude ohne Ausbaumoeglichkeit ausschliessen
        if($("#ausbauten").length == 0) return false;

        $("#ausbauten > table > tbody > tr").each(function(keyAusbau, valAusbau) {

            // getAusbauname wird mit jedem Durchgang neu gesetzt
            getAusbauname = $(this).find("b").text() + "<br/>";

            // Erst wenn der entsprechende <span>-Tag gefunden wurde ...
            getAusbauzeit = $(this).find("span[id^='extension_countdown_']").text();

            // ... wird die Schleife unterbrochen und der aktuell gefundene Name des Ausbaus genutzt
            if(getAusbauzeit) return false;
            else getAusbauname = "";
        });

        // Wurde kein Ausbau in Arbeit gefunden wird nur ein selbstdefinierter Text ausgegeben
        if(!getAusbauzeit) getAusbauzeit = setTextKeinAusbau;

        $("dl").first().append("<dt><strong>Ausbau:</strong></dt><dd>" + getAusbauname + getAusbauzeit + "</dd>");
    }

    function setFMS() {
        const setLink = "https://www.leitstellenspiel.de/vehicles/";
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

    const checkFMS = false; // auf true setzen um FMS 6 zu ignorieren

    // nur auf eigene Wachen anwenden
    if($("dl > dt:nth-child(1) > strong").text() !== "Besitzer:") {
        getPersonalAnzahl(checkFMS);
        getAusbauDaten();
        setFMS();
    }
});
