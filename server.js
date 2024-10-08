/* Same styling as before, just added hiding and showing sections */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
}

.container {
    width: 100%;
    max-width: 1000px;
    margin: auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

header h1 {
    font-size: 36px;
    color: #4A90E2;
    margin-bottom: 10px;
}

header p {
    font-size: 18px;
    color: #555;
}

.add-video,
#auth {
    margin-bottom: 20px;
    text-align: center;
}

.add-video form,
#auth input,
#auth button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.add-video button,
#auth button {
    padding: 10px 20px;
    border: none;
    background-color: #4A90E2;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.add-video button:hover,
#auth button:hover {
    background-color: #357ABD;
}

.video-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.video-item {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

video {
    width: 100%;
    height: auto;
    border-bottom: 2px solid #4A90E2;
}

.video-info {
    padding: 15px;
    text-align: center;
}
