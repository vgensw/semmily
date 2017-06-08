import {Pin} from "../models/pin.model";
import {EventEmitter} from "@angular/core";
export class PinService {

    public pinSelected = new EventEmitter<Pin>();
    pinChanged = new EventEmitter<Pin[]>();
    pins: Pin[] = [
        new Pin(
            'Familie fragen',
            'Ein gesunder Vorschlag für dein Abendessen',
            'Dieses Rezept kannst du schnell mit deiner Familie nachkochen! Lass es dir schmecken und lass mich wissen, ob es auch deiner Tochter geschmeckt hat!',
            '',
            'https://barilla.azureedge.net/~/media/images/en_us/hero-images/spaghetti_v2.png',
            'Mission Nutrition',
            ''
        ),
        new Pin(
            '',
            '5 Übungen bis zur nächsten Behandlung für Zuhause',
            'Hallo Valentin! Ich habe dir einen Plan für Zuhause erstellt. Füge ihn dir zu deinem Kalender hinzu und führe die Übungen aus, die du beim jeweiligen Eintrag siehst. Im Idealfall, in einem Abstand von 2 Tagen durchführen. LG Vicky!',
            '',
            '',
            'Physiotherapie Wildhaber',
            ''
        ),
        new Pin(
            '',
            'Yogaübungen für unsere nächste gemeinsame Klasse',
            'Diese 5 Übungen kannst du gerne zuhause machen, um dich zu entspannen. (Dauer ca. 25 Minuten)',
            'https://player.vimeo.com/video/206214045?color=ffc80a&title=0&byline=0&portrait=0',
            '',
            'Freiraum Yoga',
            ''
        ),
        new Pin(
            'Läuft ab in 13 Stunden',
            'Vorbereitung für die morgige Koloskopie',
            'Morgen findet Ihre erste Koloskopie statt. Bitte schauen Sie, dass Sie rechtzeitig bei mir im Spital sein werden, danke!',
            '',
            'https://www.ionlinedoctor.com/wp-content/themes/doctor/images/doctor_video.jpg',
            'Dr. Maier',
            ''
        )
    ];

    pregnantPins: Pin[] = [
        new Pin(
            'Infopin',
            'Richtige Ernährung in der Schwangerschaft',
            'Kennen Sie sich mit der Ernährung in der Schwangerschaft schon aus? Abonieren Sie diese Pins, um täglich einen hilfreichen Tipp und passende Videos und Beiträge zu erhalten!',
            '',
            '',
            'Birthbond',
            ''
        )
    ]

    constructor() {

    }

    getPins() {
        return this.pins.slice();
    }

    addPin(pin: Pin) {
        this.pins.push(pin);
        this.pinChanged.emit(this.pins.slice());
    }

    getPregnantPins() {
        return this.pregnantPins.slice();
    }

    addPregnantPin(pin: Pin) {
        this.pregnantPins.push(pin);
        this.pinChanged.emit(this.pregnantPins.slice());
    }

    addPregnancyPins() {
        const pregnancyPin = new Pin('Infopin', 'Kennst du schon Birthbond?', 'Liebe Maria! Kennst du schon Birthbond? Birthbond ist eine Plattform, die sich rund um deine Schwangerschaft dreht! Du kannst dir viele tolle Videos zur Schwangerschaft und allem Weiteren ansehen!', '', 'https://mission-nutrition.at/wp-content/uploads/2014/11/IMG_3426.jpg', 'Birthbond', '' );
        this.addPregnantPin(pregnancyPin);
    }

    addBirthbondPins() {
        const birthbondPin = new Pin('Infopin', 'Kennst du schon Birthbond?', 'Liebe Maria! Kennst du schon Birthbond? Birthbond ist eine Plattform, die sich rund um deine Schwangerschaft dreht! Du kannst dir viele tolle Videos zur Schwangerschaft und allem Weiteren ansehen!', '', 'https://mission-nutrition.at/wp-content/uploads/2014/11/IMG_3426.jpg', 'Birthbond', '' );
        this.addPregnantPin(birthbondPin);
    }

    onDelete(index: number) {
        this.pins.splice(index, 1);
    }
}