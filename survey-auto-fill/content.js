document.querySelectorAll('input[type="radio"], input[type="checkbox"], textarea, input[type="text"]').forEach(element => {
    if (element.type === 'radio' || element.type === 'checkbox') {
        // input elemanlarının etiketlerine bakıyoruz
        const label = document.querySelector(`label[for="${element.id}"]`);

        // Etiketlerde "Kazandırmadı", "Az" veya "Katılmıyorum" içeriyorsa, bu seçeneği işaretle
        if (label && (
            label.textContent.toLowerCase().includes('kazandırmadı') ||
            label.textContent.toLowerCase().includes('az') ||
            label.textContent.toLowerCase().includes('katılmıyorum'))) {
            element.checked = true; // Şıkları işaretle
            element.dispatchEvent(new Event('change', { bubbles: true })); // Değişiklik olayını tetikle
        }
    } else if (element.type === 'text' || element.tagName === 'TEXTAREA') {
        // Sayısal alanlara 3 yaz
        element.value = "3";
        element.dispatchEvent(new Event('input', { bubbles: true })); // Girdi olayını tetikle
    }
});

// Gönder butonunu otomatik bul ve tıkla
const submitButton = document.querySelector('button[type="submit"], input[type="submit"]');
if (submitButton) {
    submitButton.click();
}
