function calculateOhm() {
    const voltage = parseFloat(document.getElementById('voltage1').value);
    const current = parseFloat(document.getElementById('current1').value);
    const resistance = parseFloat(document.getElementById('resistance1').value);
    let result = '';

    if (!isNaN(voltage) && !isNaN(current)) {
        result = `Resistenza: ${(voltage / current).toFixed(2)} Ω`;
    } else if (!isNaN(voltage) && !isNaN(resistance)) {
        result = `Corrente: ${(voltage / resistance).toFixed(2)} A`;
    } else if (!isNaN(current) && !isNaN(resistance)) {
        result = `Voltaggio: ${(current * resistance).toFixed(2)} V`;
    } else {
        result = 'Inserisci almeno due valori validi';
    }
    document.getElementById('resultOhm').innerHTML = result;
}

function calculateKirchhoff() {
    const currentIn = parseFloat(document.getElementById('currentIn').value);
    const currentOut = parseFloat(document.getElementById('currentOut').value);
    let result = '';

    if (!isNaN(currentIn) && !isNaN(currentOut)) {
        result = (currentIn === currentOut) 
            ? "✅ Kirchhoff è verificata: le correnti sono bilanciate." 
            : "❌ Errore: le correnti non sono bilanciate!";
    } else {
        result = 'Inserisci valori validi';
    }
    document.getElementById('resultKirchhoff').innerHTML = result;
}

function calculateSuperpositionThree() {
    const voltage1 = parseFloat(document.getElementById('voltage1').value);
    const voltage2 = parseFloat(document.getElementById('voltage2').value);
    const voltage3 = parseFloat(document.getElementById('voltage3').value);
    let result = '';

    if (!isNaN(voltage1) && !isNaN(voltage2) && !isNaN(voltage3)) {
        result = `Tensione risultante: ${(voltage1 + voltage2 + voltage3).toFixed(2)} V`;
    } else {
        result = 'Inserisci tutte le tensioni';
    }
    document.getElementById('resultSuperpositionThree').innerHTML = result;
}

function generateKarnaugh() {
    const input = document.getElementById('truthTable').value;
    const values = input.split(',').map(v => v.trim());
    if (values.length !== 8 && values.length !== 16) {
        document.getElementById('karnaughResult').innerHTML = '<div class="alert alert-danger">Errore: Inserire 8 o 16 valori.</div>';
        return;
    }
    
    let size = values.length === 8 ? 2 : 4;
    let table = '<table class="table table-bordered text-center">';
    let count = 0;
    for (let i = 0; i < size; i++) {
        table += '<tr>';
        for (let j = 0; j < size; j++) {
            table += `<td class="p-3 bg-light">${values[count++]}</td>`;
        }
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('karnaughResult').innerHTML = table;
}