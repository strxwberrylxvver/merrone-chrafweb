const quotes = {
    faith: [
        "Faith does not make things easy, it makes them possible. - Luke 1:37",
        "Now faith is the assurance of things hoped for, the conviction of things not seen. - Hebrews 11:1",
        "Walk by faith, not by sight. - 2 Corinthians 5:7"
    ],
    hope: [
        "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11",
        "Let your hope make you glad. Be patient in time of trouble and never stop praying. - Romans 12:12",
        "But those who hope in the Lord will renew their strength. - Isaiah 40:31"
    ],
    love: [
        "Let all that you do be done in love. - 1 Corinthians 16:14",
        "Above all, love each other deeply, because love covers over a multitude of sins. - 1 Peter 4:8",
        "And now these three remain: faith, hope, and love. But the greatest of these is love. - 1 Corinthians 13:13"
    ]
};

function showQuote(topic) {
    const topicQuotes = quotes[topic];
    const randomIndex = Math.floor(Math.random() * topicQuotes.length);
    const randomQuote = topicQuotes[randomIndex];

    document.getElementById("quote-text").innerText = randomQuote;
}