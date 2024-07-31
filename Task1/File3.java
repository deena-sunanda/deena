// Initialize vote counts
const votes = {
    "Option 1": 0,
    "Option 2": 0,
    "Option 3": 0
};

function submitVote() {
    const form = document.getElementById('votingForm');
    const selectedOption = form.querySelector('input[name="vote"]:checked');
    
    if (selectedOption) {
        const voteValue = selectedOption.value;
        votes[voteValue]++;
        updateResults();
    } else {
        alert('Please select an option before voting.');
    }
}

function updateResults() {
    document.getElementById('option1Count').textContent = votes["Option 1"];
    document.getElementById('option2Count').textContent = votes["Option 2"];
    document.getElementById('option3Count').textContent = votes["Option 3"];
}
