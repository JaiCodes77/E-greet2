document.addEventListener('DOMContentLoaded', () => {
    const sendOTP = document.getElementById('sendOTP');

    if (sendOTP) {
        sendOTP.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = sendOTP.elements.email.value;
            const response = await fetch(`/api/sendOTP?email=${email}`);
            const result = await response.json();
            // console.log(result);
            alert(result.message);
            if (result.success) {
                window.location.href = 'verifyOTP.html';
            }
        });
    }
});