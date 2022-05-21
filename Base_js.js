function init() {
    // Calcular o pH de uma solução de ácido benzoico (HBz) 0,2 M em uma solução de benzoato de sódio(NaBz) 0,1 M
    let pKa = 4.2;
    let Ka = 10 ** -pKa;

    let C_acido = 0.2; // mol/L
    let C_sal = 0.1; // mol/L

    //Ka = (alfa(C_sal + alfa)) / (C_acido - alfa) | alfa é a constante de dissociação

    // Assumindo que C_acido e C_sal >>>>> que o alfa
    let alfa = (C_acido * Ka) / C_sal;

    let pH = -Math.log10(alfa);

    // Assumindo que C_acido e C_sal >>>>> que o alfa NAO E VDD
    // alfa**2 + (C_sal + ka)*alfa - C_acido*ka = 0
    // Só devemos resolver essa eq de segundo grau
    let a = 1;
    let b = C_sal + Ka;
    let c = -C_acido * Ka;

    let delta = b ** 2 - 4 * a * c;

    let alfa_1 = (-b + Math.sqrt(delta)) / (2 * a);
    let alfa_2 = (-b - Math.sqrt(delta)) / (2 * a);

    if (alfa_1 > 0) {
        var pH_ = -Math.log10(alfa_1);
    } else if (alfa_2 > 0) {
        var pH_ = -Math.log10(alfa_2);
    } else {
        var pH_ = -1;
    }
    console.log(alfa_1);
}

init();
