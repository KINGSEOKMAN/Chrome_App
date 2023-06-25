const quotes = [
    {
        quote: "Nothing weakens me like positive thinking.",
        quote2: "긍정적 사고만큼 나를 우울하게 만드는 일은 없다.",
        author: "Paul Persel",
    },
    {   
        quote: "Misfortune shows those who are not really friends.",
        quote2: "불행은 진정한 친구가 아닌 사람들을 보여줍니다.",
        author: "Aristotle",
    },
    {
        quote: "At the end of a long day, just the thought of a good book waiting for me makes the day happier.",
        quote2: "긴 하루 끝에 좋은 책이 기다리고 있다는 생각만으로 그날은 더 행복해진다",
        author: "Kathleen Norris",
    },
    {
        quote: "Discovery is an accident encountered by a prepared mind.",
        quote2: "발견은 준비된 사람이 맞딱뜨린 우연이다.",
        author: "Albert Szent-Györgyi",
    },
    {
        quote: "Time is the most valuable thing a man can spend.",
        quote2: "시간은 인간이 쓸 수 있는 가장 값진 것이다.",
        author: "Theophrastus",
    },
    {
        quote: "I am not necessarily smart, I just stay with problems longer.",
        quote2: "나는 똑똑한 것이 아니라 단지 문제를 더 오래 연구할 뿐이다.",
        author: "Albert Einstein",
    },
    {
        quote: "Do not fear that your life will end, fear that it may never begin.",
        quote2: "인생이 끝날까 두려워하지마라. 당신의 인생이 시작조차 하지 않을 수 있음을 두려워하라.",
        author: "Grace Hansen"
    },
    {
        quote: "Satisfaction comes not from the result but from the process.",
        quote2: "만족은 결과가 아니라 과정에서 온다.",
        author: "James Dean"
    },
    {
        quote: "Travel is only charming in retrospect.",
        quote2: "여행은 되돌아 보았을 때에만 매력적이다.",
        author: "Paul Theroux"
    },
    {
        quote: "True with an exclamation mark becomes False.",
        quote2: "True 에 느낌표 하나 찍으면 False",
        author: "King Seokman"
    }
    ];
    

    const quote = document.querySelector("#quote span:first-child");
    const quote2 = document.querySelector("#quote span:nth-child(2)");
    const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=`${todaysQuote.quote}`
quote2.innerText=`${todaysQuote.quote2}`
author.innerText=todaysQuote.author;