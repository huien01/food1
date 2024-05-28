document.getElementById('offerFoodButton').addEventListener('click', function() {
    document.getElementById('formContainer').innerHTML = '<iframe src="https://forms.gle/4Mav1cXWved77ANZ8" width="100%" height="600px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
    document.getElementById('thankYouMessage').classList.add('hidden');
});

document.getElementById('getFoodButton').addEventListener('click', function() {
    document.getElementById('formContainer').innerHTML = '<iframe src="https://forms.gle/CYJsGodHkLC93qTu6" width="100%" height="600px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
    document.getElementById('thankYouMessage').classList.add('hidden');
});

document.getElementById('formContainer').addEventListener('load', function() {
    document.getElementById('thankYouMessage').classList.remove('hidden');
});



const sheetId = '1FAIpQLScaHg_xa5F48jFshWkq4ahVPFjLQsVYMPnMPMMvAvA5FxpG7w'; // ID from the provided Google Sheets URL
const apiKey = 'AIzaSyDH965YdC94Ui-PfBKPrlUIG23DTPD2h0g'; // Provided API key
const range = 'Sheet1!E:G,I'; // Adjust the range to match your data

async function fetchResponses() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    displayResponses(data.values);
}

function displayResponses(data) {
    const responsesDiv = document.getElementById('responses');
    data.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.textContent = row.join(' | ');
        responsesDiv.appendChild(rowDiv);
    });
}

fetchResponses();
