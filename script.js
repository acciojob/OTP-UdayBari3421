function focusNext(currentInput) {
    const maxLength = parseInt(currentInput.getAttribute('maxlength'));
    const nextInputId = parseInt(currentInput.id.substring(5)) + 1;

    if (currentInput.value.length === maxLength && nextInputId <= 6) {
        document.getElementById('digit' + nextInputId).focus();
    }
}

function focusPrev(currentInput) {
    const prevInputId = parseInt(currentInput.id.substring(5)) - 1;

    if (event.key === 'Backspace' && prevInputId >= 1) {
        document.getElementById('digit' + prevInputId).focus();
    }
}