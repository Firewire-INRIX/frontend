const allMessages = new Map();

const allLocations = new Map();

async function checkForNewPosts() {
    try {
        // Replace this URL with your actual API endpoint
        const response = await fetch('http://ec2-44-236-44-204.us-west-2.compute.amazonaws.com:5000/api/v1/transcript');
        const alldata = await response.json();
        const data = alldata[0];
        console.log(data.date, data.author, data.message);
        const post = ": "+data.date +": "+ data.message + "\n";
        allMessages.set(data.author, post+allMessages[data.author]);
        const latestPost = data[0]; // Adjust according to your data structure

        document.getElementById('infobox').innerText = allMessages;
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Poll the API every 5 seconds (adjust interval as needed)
setInterval(checkForNewPosts, 5000);

// Initial call to populate the infobox
checkForNewPosts();