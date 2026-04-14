function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
    if (event) event.currentTarget.classList.add('active');
}

function downloadCleanupBat() {
    const code = `@echo off\ntitle CoreAI - Cleanup\ncolor 0a\necho Borrando temporales...\ndel /s /f /q %temp%\\*.*\ndel /s /f /q C:\\Windows\\Temp\\*.*\ndel /s /f /q C:\\Windows\\Prefetch\\*.*\nipconfig /flushdns\necho Proceso finalizado.\npause`;
    forcedownload('Limpieza_CoreAI.bat', code);
}

function downloadHardwareBat() {
    const code = `@echo off\ntitle CoreAI - Hardware Check\ncolor 0b\necho [PROCESADOR]\nwmic cpu get name\necho [GRAFICA]\nwmic path win32_VideoController get name\necho [MEMORIA RAM]\nwmic memorychip get capacity\npause`;
    forcedownload('Check_Hardware.bat', code);
}

function askIA() {
    const q = document.getElementById('ia-query').value.toLowerCase();
    const log = document.getElementById('ia-log');
    let cmd = "@echo off\n";
    if(q.includes("limpiar")) {
        cmd += "del /s /f /q %temp%\\*.*\npause";
    } else {
        cmd += "echo Comando no identificado.";
    }
    log.innerHTML = `Script generado:<br><pre style="color:#0071e3;">${cmd}</pre>`;
    forcedownload('IA_Generated.bat', cmd);
}

function forcedownload(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
}

function sys(cmd) { 
    alert("Copia y pega esto en Ejecutar (Win+R):\n\n" + cmd); 
}

console.log("CoreAI v2.6.5 Final Setup Ready.");