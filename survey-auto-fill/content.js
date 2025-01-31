document.querySelectorAll('input[type="radio"], input[type="checkbox"], textarea, input[type="text"]').forEach(element => {
    if (element.type === 'radio' || element.type === 'checkbox') {
       
        const label = document.querySelector(`label[for="${element.id}"]`);

       
        if (label && (
            label.textContent.toLowerCase().includes('kazandırmadı') ||
            label.textContent.toLowerCase().includes('az') ||
            label.textContent.toLowerCase().includes('katılmıyorum'))) {
            element.checked = true; 
            element.dispatchEvent(new Event('change', { bubbles: true }));
        }
    } else if (element.type === 'text' || element.tagName === 'TEXTAREA') {
        
        element.value = "3";
        element.dispatchEvent(new Event('input', { bubbles: true })); 
    }
});


const submitButton = document.querySelector('button[type="submit"], input[type="submit"]');
if (submitButton) {
    submitButton.click();
}
